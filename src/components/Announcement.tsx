import frame10 from "../assets/Frame10.png"
import "../css/Announcement.css"
import List from "./List";
export default function Announcement(){
    return(<>
    <div className="ann-external">
        <div className="ann-head">
            <div className="ann-heading">
                 <h3>Announcement</h3>
            </div>
            <div className="ann-heading-2">
                <div className="date">
                   <h3>Today,13 Sep 2021</h3>
                </div>
                <div className="dropdown">
                    <img src={frame10} alt="" />
                </div>
            </div>
        </div>
        <div className="Latest-schd">
            <List title="Outing schedule for every department" time="5 Minutes ago" shows={true}/>
            <List title="Meeting HR Department" time="Yesterday, 12:30 PM" shows={true}/>
            <List title="IT Department need two more talents for UX/UI Designer position" time="Yesterday, 09:15 AM"shows={true}/>
        </div>
        <div className="button">
            <button type="button">See All Announcement</button>
        </div>
    </div>
    </>);
}