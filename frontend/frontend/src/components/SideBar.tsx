import { SideCard } from "./SideCard";
import { SideCardSelected } from "./SideCardSelected";


export function SideBar() {

    return (
        <div className="sidebar">
            <SideCardSelected name="Users" />
            <SideCard name="Settings" />
        </div>
    )
}