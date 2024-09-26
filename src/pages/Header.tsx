
import chat from "../assets/bi_chat-left-dots-fill.png"
import notification from "../assets/ic_round-notifications.png"
import profile from "../assets/Mask Group.png"
import drpdwn from "../assets/Frame10.png"
import "../css/Header.css"
export default function Header() {
    return (<>
        <div className="header-external">
            <div className="search">
                <input type="search" placeholder="Search" />
            </div>
            <div className="section2">
                <div className="notify">
                    <img src={notification} alt="notification" />
                </div>
                <div className="message">
                    <img src={chat} alt="chat" />
                </div>
                <div className="profile">
                    <div className="pr-pic">
                        <img src={profile} alt="profile" />
                    </div>
                    <div className="pr-name">
                        <h4>Admirra John</h4>
                    </div>
                    <div className="drop-down">
                        <img src={drpdwn} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>);
} 