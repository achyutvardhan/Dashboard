import { useEffect, useState } from "react";
import pin from "../assets/bi_pin-angle-fill.png";
import dots from "../assets/carbon_overflow-menu-horizontal.png"
import "../css/List.css"
interface Props {
    title: string;
    time: string;
    shows : boolean;
}

export default function List(props: Props) {
  const[show ,setshow] = useState(true)
  useEffect(()=>{
    setshow(props.shows);
  },[])
    return (<>
       <div className="list-external">
          <div className="title-time">
            <div className="title">
                <h4>{props.title}</h4>
            </div>
            <div className="time">
              <h2>{props.time}</h2>
            </div>
          </div>
          <div className="pin-dot">
           {show&& <div className="pin">
               <img src={pin} alt="" />
            </div>}
            <div className="dot">
                <img src={dots} alt="" />
            </div>
          </div>
       </div>
    </>);
}