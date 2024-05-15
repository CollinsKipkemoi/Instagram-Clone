import { GoHomeFill } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMdVideocam } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { LuPlusSquare } from "react-icons/lu";
import "../styles/sidebar.css";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";

function Sidebar() {
    type SidebarItem = {
        title: string;
        icon: JSX.Element;
    }

    const sidebarItems: SidebarItem[] = [
        {
            title: "Home",
            icon: <GoHomeFill />,
        },
        {
            title: "Search",
            icon: <CiSearch />,
        },
        {
            title: "Explore",
            icon: <MdOutlineExplore />,
        },
        {
            title: "Reels",
            icon: <IoMdVideocam />,
        },
        {
            title: "Messages",
            icon: <AiOutlineMessage />,
        },
        {
            title: "Notifications",
            icon: <CiHeart />,
        }, {
            title: "Create",
            icon: <LuPlusSquare />,
        },
        {
            title: "Profile",
            icon: <FaRegUser />,
        },
        {
            title: "Options",
            icon: <HiOutlineBars3 />,
        }
    ]


    return (
        <div className="sideBar">
            <h2>Instagram</h2>
            <div className="sidebarItems">
                {sidebarItems.map((item, index) => (
                    <div key={index} className="sidebar-item">
                        {item.icon}
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
