import * as React from 'react'
import { useEffect, MouseEvent, ChangeEvent } from 'react'
import * as echarts from 'echarts'

import { Table as BTable
  , Container, Row, Col, Button 
  , Form
} from 'react-bootstrap'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

const columns = [
  {
    header: '原始值',
    accessorKey: 'origin',
    cell: info => info.getValue(),
  },
  {
    header: '负荷值',
    accessorKey: 'pressure',
    cell: info => info.getValue(),
  },
]

let lineChart = null
let gauge = null
let origin = 0

function Gauge() {

  const construct_gauge = (name) => {

    if (gauge)
      return

    var chartDom = document.getElementById(name)
    gauge = echarts.init(chartDom, null, {
      width: 300,
      height: 300,
    })

    let option

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

    option && gauge.setOption(option)
    window.addEventListener('resize', function() {
      gauge?.resize();
    });

  }


  useEffect(() => {
    construct_gauge('gauge')
  })

  return (
    <div id="gauge"/>
  )
}

function LineChart() {

  function construct_chart(name) {

    if (lineChart)
      return

    var chartDom = document.getElementById(name)
    lineChart = echarts.init(chartDom, null, {
      height: 600,
    })

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
          type: 'value',
          scale: true,
          boundaryGap: [0.2, 0.2]
        }
      ],
      yAxis: [
        {
          type: 'value',
          scale: true,
          boundaryGap: [0.2, 0.2]
        }
      ],
    };

    option && lineChart.setOption(option)
    // window.electron.ipcRenderer.on('unmax', () => {
    //
    //   lineChart?.resize();
    // })

    window.addEventListener('resize', function() {
      lineChart?.resize();
    });
  }

  useEffect(() => {
    construct_chart('lineChart')
  })

  return (
    <div id="lineChart" />
  )
}

function IO() {

  return (
    <Row id="io" className="justify-content-end">
      <Col>
        <p>导入</p>
      </Col>
      <Col>
        <p>导出</p>
      </Col>
    </Row>
  )
}

let data_cache

function Charts() {

  const [data, setData] = React.useState([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const [pressure, setPressure] = React.useState(0)
  const onChange = (e) => {
    e.preventDefault()
    setPressure(e.target.value)
  }

  const addPressure = (e) => {
    e.preventDefault()
    data_cache = Object.assign([], data)
    data_cache.push({
      origin: +origin,
      pressure: +pressure
    })
    setData(data_cache)

    lineChart?.setOption({
      series: [
        {
          type: 'scatter',
          data: data_cache.map(item => [item.origin, item.pressure])
        }
      ]
    })
  }

  return (
    <>
    <Row>
      <LineChart />
    </Row>
      <Row id="tableShow">
      <Col id="table">
          <div className="p-2">
            <BTable striped bordered hover responsive size="sm">
              <thead>
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <th key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map(row => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </BTable>
          </div>
      </Col>
      <Col id="valueSet">
        <Row>
          <Gauge />
        </Row>
        <Row id="input">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>负荷值(N)</Form.Label>
              <Form.Control placeholder="输入负荷值" value={pressure} onChange={onChange} type='number' />
            </Form.Group>
            <Button variant="primary" onClick={addPressure}>
              添加 
            </Button>
          </Form>
        </Row>
      </Col>
    </Row>
    </>
  )
}

function Setting() {

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>设备</Form.Label>
        <Form.Control as="select">
          <option>前面</option>
          <option>后面</option>
          <option>左侧</option>
          <option>右侧</option>
          <option>鼻子</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>通道</Form.Label>
        <Form.Control as="select">
          <option>通道1</option>
          <option>通道2</option>
          <option>通道3</option>
          <option>通道4</option>
          <option>通道5</option>
          <option>通道6</option>
          <option>通道7</option>
          <option>通道8</option>
        </Form.Control>
      </Form.Group>
      <Form.Group  controlId="exampleForm.ControlSelect2">
        <Form.Label>标定方式</Form.Label>
        <Form.Control as="select">
          <option>直线</option>
          <option>曲线</option>
        </Form.Control>
      </Form.Group>

      <Form.Group  controlId="formBasicRange">
        <Form.Label>灵敏度</Form.Label>
        <Form.Range />
      </Form.Group>

      <Form.Group  controlId="formBasicRange">
        <Form.Label>延时</Form.Label>
        <Form.Range />
      </Form.Group>
      <Form.Group  controlId="formBasicRange">
        <Form.Label>排序</Form.Label>
        <Form.Range />
      </Form.Group>
    </Form>
  )
}

export default function Calibrate() {

  return (
    <Container fluid>
      <Row>
        <Col style={{maxWidth:200}} className="bg-white">
          <Setting />
        </Col>
        <Col>
          <IO />
          <Charts />
        </Col>
      </Row>
    </Container>
  )
}

