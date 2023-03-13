import './topbar.css'
import {NotificationsNone, Language, Settings} from '@mui/icons-material'
function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <div className="logo">Admin</div>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src="images/8.jpeg" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar