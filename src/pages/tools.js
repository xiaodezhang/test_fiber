import { Button, Tooltip, ButtonToolbar
  , OverlayTrigger
} from 'react-bootstrap'

import { BsCameraVideo, BsCameraVideoOff } from 'react-icons/bs'
import { VscNewFolder, VscFolderOpened
  , VscSaveAll, VscDeviceMobile
  , VscPlayCircle, VscStopCircle, VscDebugPause
  , VscDebugRestart
} from 'react-icons/vsc'
import { TbReportAnalytics, TbHeartRateMonitor } from 'react-icons/tb'
import { MdOutlineCompassCalibration } from 'react-icons/md'
import { FaHeadSideVirus } from 'react-icons/fa'

import { useState} from 'react'

export default function Tools() {

  const [play, setPlay] = useState(false)
  const [record, setRecord] = useState(false)

  const new_folder = (
    <Tooltip>
      新建项目
    </Tooltip>
  )

  const open_folder = (
    <Tooltip>
      打开项目
    </Tooltip>
  )

  const video_record = (
    <Tooltip>
      视频记录
    </Tooltip>
  )

  const stop_record= (
    <Tooltip>
      停止视频记录
    </Tooltip>
  )

  const save_folder = (
    <Tooltip>
      保存
    </Tooltip>
  )

  const open_device = (
    <Tooltip>
      设备 
    </Tooltip>
  )

  const open_analytics = (
    <Tooltip>
      统计
    </Tooltip>
  )

  const open_monitor = (
    <Tooltip>
      监控
    </Tooltip>
  )

  const open_calibration = (
    <Tooltip>
      标定
    </Tooltip>
  )

  const start_play = (
    <Tooltip>
      播放
    </Tooltip>
  )

  const stop_play = (
    <Tooltip>
      停止播放
    </Tooltip>
  )

  const pause = (
    <Tooltip>
      暂停
    </Tooltip>
  )

  const restart = (
    <Tooltip>
      重新播放
    </Tooltip>
  )

  const head_show = (
    <Tooltip>
      头部显示
    </Tooltip>
  )

  const open_calibrate_widget = () => {
    window.electron.ipcRenderer.sendMessage('open_calibrate')
  }

  return (
    <div className='position-fixed bg-light'>
      <ButtonToolbar >
        {record? 
          <OverlayTrigger placement="bottom" overlay={stop_record}>
            <div onClick={() => setRecord(false)}>
              <Button variant="light" className='bg-white'>
                <BsCameraVideoOff/>
              </Button>
            </div>
          </OverlayTrigger>
          :
          <OverlayTrigger placement="bottom" overlay={video_record}>
            <div onClick={() => setRecord(true)}>
              <Button variant="light" className='bg-white'>
                <BsCameraVideo/>
              </Button>
            </div>
          </OverlayTrigger>
        }

        <OverlayTrigger placement="bottom" overlay={new_folder}>
          <div>
            <Button variant="light" className='bg-white'>
              <VscNewFolder/>
            </Button>
          </div>
        </OverlayTrigger>

        <OverlayTrigger placement="bottom" overlay={open_folder}>
          <div>
            <Button variant="light" className='bg-white'>
              <VscFolderOpened/>
            </Button>
          </div>
        </OverlayTrigger>

        <OverlayTrigger placement="bottom" overlay={save_folder}>
          <div>
            <Button variant="light" className='bg-white'>
              <VscSaveAll/>
            </Button>
          </div>
        </OverlayTrigger>

        <OverlayTrigger placement="bottom" overlay={open_device}>
          <div>
            <Button variant="light" className='bg-white'>
              <VscDeviceMobile/>
            </Button>
          </div>
        </OverlayTrigger>

        <OverlayTrigger placement="bottom" overlay={open_analytics}>
          <div>
            <Button variant="light" className='bg-white'>
              <TbReportAnalytics/>
            </Button>
          </div>
        </OverlayTrigger>

        <OverlayTrigger placement="bottom" overlay={open_monitor}>
          <div>
            <Button variant="light" className='bg-white'>
              <TbHeartRateMonitor />
            </Button>
          </div>
        </OverlayTrigger>

        <OverlayTrigger placement="bottom" overlay={open_calibration}>
          <div onClick={() => open_calibrate_widget()}>
            <Button variant="light" className='bg-white'>
              <MdOutlineCompassCalibration/>
            </Button>
          </div>
        </OverlayTrigger>

        {play?
          <OverlayTrigger placement="bottom" overlay={pause}>
            <div onClick={() => setPlay(false)}>
              <Button variant="light" className='bg-white'>
                <VscDebugPause/>
              </Button>
            </div>
          </OverlayTrigger>
          :
          <OverlayTrigger placement="bottom" overlay={start_play}>
            <div onClick={() => setPlay(true)}>
              <Button variant="light" className='bg-white'>
                <VscPlayCircle/>
              </Button>
            </div>
          </OverlayTrigger>
        }

        <OverlayTrigger placement="bottom" overlay={stop_play}>
          <div>
            <Button variant="light" className='bg-white'>
              <VscStopCircle/>
            </Button>
          </div>
        </OverlayTrigger>

        <OverlayTrigger placement="bottom" overlay={restart}>
          <div>
            <Button variant="light" className='bg-white'>
              <VscDebugRestart/>
            </Button>
          </div>
        </OverlayTrigger>

        <OverlayTrigger placement="bottom" overlay={head_show}>
          <div>
            <Button variant="light" className='bg-white'>
              <FaHeadSideVirus/>
            </Button>
          </div>
        </OverlayTrigger>

      </ButtonToolbar>
    </div>
  )
}

