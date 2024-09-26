import logo from "../assets/Frame88.png"
import MenuOption from "../components/MenuOption"
import dasboard from "../assets/ic_dashboard.png"
import recruitment from "../assets/ic_recruitment.png"
import schedule from "../assets/ic_calendar.png"
import employee from "../assets/Group.png"
import department from "../assets/ic_department.png"
import support from "../assets/ic_support.png"
import setting from "../assets/Setting.png"
import smlogo  from "../assets/Frame92.png"
import "../css/SideBar.css"
export default function SideBar() {
    return <>
        <div className="side-external">
            <div className="side-internal">
                <div className="logo">
                    <img src={logo} alt="logo" id="big"/>
                    <img src={smlogo} alt="" id="sm"/>
                </div>
                <div className="main-menu">
                    <h2>MAIN MENU</h2>
                    <MenuOption image={dasboard} name="Dasboard" />
                    <MenuOption image={recruitment} name="Recruitment" />
                    <MenuOption image={schedule} name="Schedule" />
                    <MenuOption image={employee} name="Employee" />
                    <MenuOption image={department} name="Department" />
                </div>
                <div className="other">
                    <h2>OTHER</h2>
                    <MenuOption image={support} name="Support" />
                    <MenuOption image={setting} name="Setting" />
                </div>
            </div>
        </div>
    </>
}