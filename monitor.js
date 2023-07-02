import { Row, Col, Form, Container } from 'react-bootstrap'
import Tools from './tools'

import * as echarts from 'echarts'
import { useEffect, useState } from 'react'

const channel_size = 8
const cacheSize = 30

function Switch(label: any) {

  return (
    <Form>
      <Form.Check
        type="switch"
        label={label.label}
      />
    </Form>
  )
}

function Switchs() {

  return (
    <>
      {
        Array.from({length: channel_size}).map((_, i) =>
          <Row key={i}>
            <Col>
              <Switch label={'C-'+(i+1)}/>
            </Col>
          </Row>
        )
      }
    </>
  )
}

function LineChart(id: any) {

  return (
    <Row>
      <Col id={id.id}></Col>
      <Col className='my-auto' style={{maxWidth: 100}}>
        <Switchs />
      </Col>
    </Row>
  )
}

function ChartGroup(id: any) {

  return (
    <>
      <h5 className='pt-3 pl-3'>鼻子</h5>
      <Row className='p-3' style={{minWidth: 768}}>
        <Col id={'gauge'+id.id} style={{maxWidth:300}}></Col>
        <Col>
          <LineChart id={'lineChart'+id.id}/>
        </Col>
      </Row>
    </>
  )
}

type Cache = Array<number>
type ChannelCache = Map<number, Cache>

const deviceCache = new Map<string, ChannelCache>
const gauges = new Map<string, ReturnType<typeof echarts.init>>
const lineCharts = new Map<string, ReturnType<typeof echarts.init>>

export default function Monitor() {

  // console.log('Monitor')
  const [deviceNames, setDeviceNames] = useState(new Array<string>)

  const categories = (function () {
    let now = new Date();
    let res = [];
    let len = 10;
    while (len--) {
      res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
      now = new Date(+now - 200);
    }
    return res;
  })();

  function construct_chart(name: string) {

    if (lineCharts.has(name))
      return

    var chartDom = document.getElementById('lineChart'+name) as HTMLElement
    var myChart = echarts.init(chartDom, undefined, {
      height: 300,
    })
    lineCharts.set(name, myChart)
    // console.log("set chart")

    var option


    option = {
      // title: {
      //   text: '前'
      // },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#283b56'
          }
        }
      },
      legend: {},
      dataZoom: {
        show: false,
        start: 0,
        end: 100
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: true,
          data: categories
        }
      ],
      yAxis: [
        {
          type: 'value',
          scale: true,
          // name: 'Order',
          // max: 255,
          min: 0,
          boundaryGap: [0.2, 0.2]
        }
      ],
      series: (() => {
        let s = []
        for (let index = 0; index < channel_size; index++) {
          s.push({
            name: 'C-'+(index+1),
            type: 'line'
          })
        }
        return s
      })(),
    };

    option && myChart.setOption(option)
  }

  const construct_gauge = (name: string) => {

    if (gauges.has(name))
      return

    type EChartsOption = echarts.EChartsOption

    var chartDom = document.getElementById('gauge'+name) as HTMLElement
    var myChart = echarts.init(chartDom, undefined, {
      width: 300,
      height: 300,
    })

    gauges.set(name, myChart)

    let option: EChartsOption

    option = {
      series: [
        {
          type: 'gauge',
          max: '4080',
          progress: {
            show: true,
            width: 10
          },
          axisLine: {
            lineStyle: {
              width: 10
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            length: 5,
            lineStyle: {
              width: 2,
              color: '#999'
            }
          },
          axisLabel: {
            distance: 15,
            color: '#999',
            fontSize: 10
          },
          anchor: {
            show: true,
            showAbove: true,
            size: 15,
            itemStyle: {
              borderWidth: 5
            }
          },
          title: {
            show: false
          },
          detail: {
            valueAnimation: true,
            fontSize: 20,
            offsetCenter: [0, '80%']
          },
          data: [
            {
              value: 70
            }
          ]
        }
      ]
    };

    option && myChart.setOption(option)
  }

  function onResize() {

    for (const [_, chart] of lineCharts) {
      chart.resize();
    }

    for (const [_, chart] of gauges) {
      chart.resize();
    }
  }

  useEffect(() => {
    for (const name of deviceNames) {
      construct_chart(name)
      construct_gauge(name)
    }

    window.electron.ipcRenderer.on('unmax', () => {
      // console.log("on unmax")
      onResize()
    })

    const resizeListen = () => onResize()
    window.addEventListener('resize', resizeListen)
    window.electron.ipcRenderer.on('data', (arg: any) => {

      const device = arg as {
        name: string 
        data: Map<number, number>
      }
      // console.log('data:', device.data.size)

      let channelCache = deviceCache.get(device.name)
      if (!channelCache) {
        channelCache = new Map<number, Cache>
      }

      for (const [id, data] of device.data) {
        let cache = channelCache.get(id)
        if (!cache) {
          cache = new Array<number>
        }
        if (cache.length > cacheSize) {
          cache.shift()
        }
        cache.push(data)
        channelCache.set(id, cache)
      }

      const size = deviceCache.size
      deviceCache.set(device.name, channelCache)
      if (size !== deviceCache.size) {
        // console.log("size:", size, ", cache size:", deviceCache.size)
        setDeviceNames([...deviceCache.keys()])
      }

      categories.shift();
      categories.push(new Date().toLocaleTimeString().replace(/^\D*/, ''))

      for (const [name, gauge] of gauges) {

        const ex = deviceCache.get(name)
        if (ex) {
          let sum = 0
          for (const [_, cache] of ex) {
            sum += cache[cache.length-1]
          }
          gauge.setOption({
            series: [
              {
                data: [
                  {
                    value: Math.round(sum/ex.size)
                  }
                ]
              }
            ]
          })
        }
      }

      for (const [name, chart] of lineCharts) {

        chart.setOption({
          xAxis: [
            {
              data: categories
            }
          ],
          series: (() => {
            let s = []
            const ex = deviceCache.get(name)
            if (ex) {
              for (const [_, data] of ex) {
                s.push({
                  data: data
                })
              }
            }
            return s
          })()
        })
      }
    })

    return () => {
      window.electron.ipcRenderer.removeAllListeners('unmax')
      window.electron.ipcRenderer.removeAllListeners('data')
      window.removeEventListener('resize', resizeListen)
    }
  }, [deviceNames, lineCharts, gauges])

  return (
    <>
      <Row className='bg-light'>
        <Tools />
      </Row>
      <Container fluid className='bg-light'>
        <Row className='mt-5'>
          {
            deviceNames.map((deviceName, i) => 
              <Row key={i}>
              <Col style={{backgroundColor: '#ffffff'}} className='m-3 mb-0'>
                <ChartGroup id={deviceName}/>
              </Col >
              </Row>
            )
          }
        </Row>
      </Container>
    </>
  )
}
