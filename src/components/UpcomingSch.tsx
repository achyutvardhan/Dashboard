import frame10 from "../assets/Frame10.png"
import "../css/Upsch.css"
import List from "./List";
export default function UpcomingSch() {
    return (<>
        <div className="ups-external">
            <div className="ups-head">
                <div className="ann-heading">
                    <h3>Upcoming Schedule</h3>
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
            <div className="priority">
                <div className="p-head">
                    <h4>Priority</h4>
                </div>
                <List title="Review candidate applications" time="Today - 11.30 AM" shows={false}/>

            </div>
            <div className="other">
                <div className="ot-head">
                    <h4>Other</h4>
                </div>
                    <List title="Interview with candidates" time="Today - 10.30 AM" shows={false}/>
                    <List title="Short meeting with product designer from IT Departement" time="Today - 09.15 AM" shows={false}/>

            </div>
            <div className="show-more">
                <button type="button">Creat a New Schedule</button>
            </div>
        </div>
    </>);
}