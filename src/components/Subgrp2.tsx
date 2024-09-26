
import "../css/Subgrp2.css"
interface Props {
    heading: string;
    number: number | string;
    men: string | number;
    women: string | number;
    image ?:string
};

export default function Subgrp2(props: Props) {
    return (
        <>
            <div className="sbgp2-external">
                <div className="internal">
                    <div className="sub-heading">
                        <h3>{props.heading}</h3>
                    </div>
                    <div className="num1">
                        <h3>{props.number}</h3>
                    </div>
                    <div className="text1"><h4>{props.men} Men</h4></div>
                    <div className="text2"><h4>{props.women} Women</h4></div>

                </div>
                <div className="sub-img">
                    <img src={props.image} alt="" />
                </div>
            </div>
        </>
    );
}