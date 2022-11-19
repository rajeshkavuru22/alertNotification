import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="container">
    <h1 className="main-heading">Alert Notifications</h1>
    <ul className="notifications-list">
      <Notification
        Icon={<AiFillCheckCircle className="success icon" />}
        Heading="Success"
        Description="You can access all the files in the folder"
        Color="success"
      />
      <Notification
        Icon={<RiErrorWarningFill className="error icon" />}
        Heading="Error"
        Description="Sorry, you are not authorized to have access to delete the file"
        Color="error"
      />
      <Notification
        Icon={<MdWarning className="warning icon" />}
        Heading="Warning"
        Description="Viewers of this file can see comments and suggestions"
        Color="warning"
      />
      <Notification
        Icon={<MdInfo className="info icon" />}
        Heading="Info"
        Description="Anyone on the internet can view these files"
        Color="info"
      />
    </ul>
  </div>
)

export default AlertNotifications
