import { useState, useEffect, useRef } from "react";
import { BsArrowLeftShort, BsPerson, BsSearch, BsChevronDown, BsFillImageFill, BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { AiFillEnvironment, AiOutlineFileText, AiOutlineBarChart, AiOutlineMail, AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {

    const [isOpen, setIsOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const Menus = [
        { title: "Dashboard", path: "/" },
        { title: "Users", icon: <FaUser />, path: "/users" },
        { title: "Messages", icon: <MdMessage />, path: "/messages" },
        { title: "Media", spacing: true, icon: <BsFillImageFill />, path: "/media" },
        {
            title: "Projects",
            icon: <BsReverseLayoutTextSidebarReverse />,
            submenu: true,
            submenuItems: [
                { title: "Submenu 1", path: "/projects/submenu1" },
                { title: "Submenu 2", path: "/projects/submenu2" },
                { title: "Submenu 3", path: "/projects/submenu3" }
            ]
        },
        { title: "Analytics", icon: <AiOutlineBarChart />, path: "/analytics" },
        { title: "Inbox", icon: <AiOutlineMail />, path: "/inbox" },
        { title: "Profile", spacing: true, icon: <BsPerson />, path: "/profile" },
        { title: "Settings", icon: <AiOutlineSetting />, path: "/settings" },
        { title: "Logout", icon: <AiOutlineLogout />, path: "/logout" }
    ]

    return (
        <div className="flex">
            <div className={`bg-dark-purple h-screen p-5 pt-8 ${isOpen ? "w-72" : "w-20"} duration-300 relative`}>

                <BsArrowLeftShort
                    className={`bg-white text-dark-purple text-3xl 
            rounded-full absolute -right-3 top-9 border 
            border-dark-purple cursor-pointer ${!isOpen && "rotate-180"}`} onClick={() => setIsOpen(!isOpen)} />

                <div className="inline-flex">
                    <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${isOpen && "rotate-[360deg]"}`} />
                    <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!isOpen && "scale-0"}`}>Tailwind</h1>
                </div>

                <div className={`flex items-center rounded-md bg-light-white mt-6 ${!isOpen ? "px-2.5" : "px-4"} py-2`}>
                    <BsSearch className={`text-white text-lg block float-left cursor-pointer ${isOpen && "mr-2"}`} />
                    <input type={"search"} placeholder="Search" ref={inputRef}
                        className={`text-base bg-transparent w-full text-white focus:outline-none ${!isOpen && "hidden"}`} />
                </div>

                <ul className="pt-2">
                    {
                        Menus.map((menu, index) => {
                            return (
                                <>
                                    <NavLink key={menu.title} to={menu.path} className={`text-gray-300 text-sm 
                                    flex items-center gap-x-4 cursor-pointer p-2 
                                  hover:bg-light-white hover:border-r-solid hover:border-r-4 hover:border-r-[#fff] hover:ease-in-expo duration-200 ${menu.spacing ? "mt-9" : "mt-2"}`}>
                                        <span className="text-2xl block float-left">
                                            {
                                                menu.icon ? menu.icon : <RiDashboardFill />
                                            }
                                        </span>
                                        <span className={`text-base font-medium flex-1 duration-200 ${!isOpen && "hidden"}`}>{menu.title}</span>
                                        {
                                            menu.submenu && isOpen && (
                                                <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() => setSubmenuOpen(!submenuOpen)} />
                                            )
                                        }
                                    </NavLink>
                                    {
                                        menu.submenu && submenuOpen && isOpen && (
                                            <ul>
                                                {menu.submenuItems.map((submenuItem, index) => {
                                                    return (
                                                        <NavLink key={submenuItem.title} to={submenuItem.path} className="text-gray-300 text-sm 
                                                        flex items-center gap-x-4 cursor-pointer p-2 px-5
                                                      hover:bg-light-white rounded-md">
                                                            {submenuItem.title}
                                                        </NavLink>
                                                    )
                                                })}
                                            </ul>
                                        )
                                    }
                                </>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="p-7">
                {/* <h1 className="text-2xl font-semibold">Home Page</h1> */}
                <main>{children}</main>
            </div>
        </div>
    );
}

export default Sidebar;