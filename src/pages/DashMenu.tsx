import Subgrp1 from "../components/Subgr1";
import Subgrp2 from "../components/Subgrp2";
import frame52 from "../assets/Frame52.png"
import frame53 from "../assets/Frame53.png"
import "../css/DashMenu.css"
import Announcement from "../components/Announcement";
import RecentActivity from "../components/RecentActivity";
import UpcomingSch from "../components/UpcomingSch";

export default function DashMenu() {
    return (
        <>
            <div className="dash-external">
                <div className="dash-name">
                    <h4>Dashboard</h4>
                </div>
                <div className="groups">

                    <div className="grp1">

                        <div className="analysis-grp">
                            <div className="subgrp-1">
                                <Subgrp1 heading="Available Position" number={24} text="4 Urgently needed" bgpcl="#ffefe7" txtcl="#FF5151" />
                                <Subgrp1 heading="Job Open" number={10} text="4 Active hiring" bgpcl="#E8F0FB" txtcl="#3786F1" />
                                <Subgrp1 heading="New Employee" number={24} text="4 Department" bgpcl="#FDEBF9" txtcl="#EE61CF" />
                            </div>
                            <div className="subgrp2">
                                <Subgrp2 heading="Total Employee" number={216} men={120} women={96} image={frame52} />
                                <Subgrp2 heading="Talent Request" number={16} men={6} women={10} image={frame53} />
                            </div>
                        </div>
                        <div className="announcement">
                            <Announcement />
                        </div>
                    </div>
                    <div className="grp-2">
                        <div className="recentActivity">
                            <RecentActivity />
                        </div>
                        <div className="upcoming">
                             <UpcomingSch/>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
} 