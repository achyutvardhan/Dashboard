import "../css/RecentActivity.css"
export default function RecentActivity() {
    return (<>
        <div className="actvity-external">
            <div className="act-heading">
                <h3>Recently Activity</h3>
            </div>
            <div className="act-body">
                <div className="act-time">
                    <h4>
                        10.40 AM, Fri 10 Sept 2021
                    </h4>
                </div>
                <div className="act-title">
                    <h3>You Posted a New Job</h3>
                </div>
                <div className="act-dis">
                    <h4>
                        Kindly check the requirements and terms of work and make sure everything is right.
                    </h4>
                </div>
                <div className="suggest">
                    <div className="sugg-dis">
                        <h3>Today you makes 12 Activity</h3>
                    </div>
                    <div className="act-but">
                        <button type="button">See All Activity</button>
                    </div>
                </div>
            </div>
        </div>
    </>);
}