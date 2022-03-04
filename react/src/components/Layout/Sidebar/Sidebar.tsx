import { useState } from "react";
import 'material-icons/iconfont/material-icons.css';

const Sidebar:React.FC<any> = (props) => {
    const {children} = props;
    const [togglesb, setTogglesb] = useState(true);
    const handleToggle = () => {
        setTogglesb(!togglesb);
    }
    return (
        <aside className={`${props.className} sidebar-${togglesb ? 'open' : 'close'}`} role="sidebar">
            <h3 className="sidebar-title">{props.title}
            <button className="sidebar-toggle" onClick={handleToggle}>
                <span className="material-icons">menu</span>
            </button>
            </h3>
            { children }
            </aside>
    )
}
export default Sidebar;
