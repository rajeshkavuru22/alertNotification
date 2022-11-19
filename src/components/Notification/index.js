import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {Icon, Heading, Description, Color} = props
  return (
    <li className="notification">
      {Icon}
      <div className="content">
        <h1 className={Color}>{Heading}</h1>
        <p className="description">{Description}</p>
      </div>
      <GrFormClose />
    </li>
  )
}

export default Notification
