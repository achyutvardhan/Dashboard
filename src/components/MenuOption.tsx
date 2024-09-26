import "../css/MenuOption.css"

interface Props {
    image?: string;
    name: string;
};
export default function MenuOption(props: Props) {
    return (
        <>
            <div className="menu-opt">
                <div className="image">
                    <img src={props.image} alt="menu-option" />
                </div>
                <div className="menu-name">
                    <h3>{props.name}</h3>
                </div>
            </div>
        </>
    )
}