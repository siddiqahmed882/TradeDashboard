
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { handleMobileMenu, setOpenMenu } from "../../slices/menuSlice.js";

import * as route from "../../routes/Slugs.jsx";
import ThemeSwitcher from "../ThemeSwitcher.jsx";
import NotificationIcon from "../svg/NotificationIcon.jsx";
import DropDown from "./NavbarMenu.jsx";
import Avatar from "./Avartar.jsx";
import { Bars3Icon } from "@heroicons/react/24/solid";
import DarkLogo from "../../assets/images/logo-dark.png";
import LightLogo from "../../assets/images/logo-light.png";

const Navbar = ({ setAccount, account }) => {

    const dispatch = useDispatch();
    const { isMenuOpen, isMobileMenu } = useSelector((state) => state.menu);

    const expandMenubar = () => {
        dispatch(handleMobileMenu(!isMobileMenu));
        dispatch(setOpenMenu(true));
    }

    return (
        <div className={"w-full h-[80px] px-[30px] py-[10px] flex items-center justify-between bg-lightPrimaryColor dark:bg-darkPrimaryColor sm:justify-between"}>
            <div className="hidden gap-7 sm:flex">
                <div className={'flex justify-between items-center'}>
                    <Link to={route.ROOT_PATH} className="max-w-[200px]">
                        <img src={DarkLogo} alt="" className={'block dark:hidden w-[185px]'} />
                        <img src={LightLogo} alt="" className={'hidden dark:block w-[175px]'} />
                    </Link>
                </div>
                <DropDown
                    title={"dfdf"}
                    childrens={[1, 2]}
                    setAccount={setAccount}
                />
                <button type="button"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-2xl text-sm px-5 m-auto dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 h-[50px] -ml-5"
                    hidden={account?.tradeSystem != "LaserTrade" && account?.tradeSystem != "MT4"}
                >
                    {`${account.plan} - ${account.type}`}
                </button>
            </div>

            <Bars3Icon className="w-[25px] dark:text-white text-black font-bold block sm:hidden" onClick={expandMenubar} />

            <div className={'flex justify-center items-center gap-x-[28px]'}>
                <ThemeSwitcher />
                <NotificationIcon fill={"fill-lightBlue2 dark:fill-white"} />
                <Avatar />
            </div>
        </div>
    )
};

export default Navbar;
