import "../css/Subgrp1.css"

interface Props{
    heading : string;
    number : number;
    text : string;
    bgpcl : string;
    txtcl : string;
}

export default function Subgrp1(props :Props){
    return (
        <>
        <div className="sbgp-external" style={{backgroundColor :`${props.bgpcl}`}}>
            <div className="sub-heading">
                <h3>{props.heading}</h3>
            </div>
            <div className="num">
                <h3>{props.number}</h3>
            </div>
            <div className="text"><h4 style={{color: `${props.txtcl}`}}>{props.text}</h4></div>
        </div>
        </>
    );
}