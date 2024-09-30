import { Link, useLocation } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../slices/usersApiSlice';

import { logout } from '../../slices/authSlice';
import { handleMobileMenu, setOpenMenu } from "../../slices/menuSlice.js";

import * as route from "../../routes/Slugs.jsx";
import DashboardIcon from "../svg/DashboardIcon.jsx";
import MarketsIcon from "../svg/MarketsIcon.jsx";
import TransactionIcon from "../svg/TransactionIcon.jsx";
import ProfileIcon from "../svg/ProfileIcon.jsx";
import SettingsIcon from "../svg/SettingsIcon.jsx";
import LogoutIcon from "../svg/LogoutIcon.jsx";

const MobileMenubar = () => {
    let location = useLocation();
    const { isMenuOpen, isMobileMenu } = useSelector((state) => state.menu);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
      try {
        await logoutApiCall().unwrap();
        dispatch(logout());
        navigate('/login');
      } catch (err) {
        console.error(err);
      }
    };

    const expandMenubar = () => {
        dispatch(handleMobileMenu(!isMobileMenu));
        dispatch(setOpenMenu(true));
    }

    return isMobileMenu ?
        <>
            <div className="fixed h-full bg-transparent right-0 w-[calc(100%-224px)] block sm:hidden" onClick={expandMenubar}>
            </div>
            <div className={'sm:hidden flex'}>
                <div className={"px-[5px]"}>
                    <ul className={"mt-[22px] 2xl:mt-[30px]"}>

                        <li className={"mt-[10px] 2xl:mb-3 mb-3"}>
                            <Link to={route.ROOT_PATH} onClick={expandMenubar} className={"group sideBarNavItem " + (location.pathname === route.ROOT_PATH ? 'bg-lightBlue1 dark:bg-darkBlue1' : 'hover:bg-lightBlue1 dark:hover:bg-darkBlue1')}>
                                <DashboardIcon fill={"fill-black dark:fill-white " + (location.pathname === route.ROOT_PATH ? 'fill-lightBlue2 dark:fill-darkBlue2' : 'group-hover:fill-lightBlue2 dark:group-hover:fill-darkBlue2')}/>
                                {isMenuOpen ? <span className={"dark:text-white pl-[30px] pr-[50px] sm:flex hidden" + (location.pathname === route.ROOT_PATH ? 'text-lightBlue2 dark:text-darkBlue2' : 'group-hover:text-lightBlue2 dark:group-hover:text-darkBlue2')}>Dashboard</span> : null}
                            </Link>
                        </li>
                        <li className={"mb-[10px] 2xl:mb-3"}>
                            <Link to={route.CHALLENGE_PATH} onClick={expandMenubar} className={"group sideBarNavItem " + (location.pathname === route.CHALLENGE_PATH ? 'bg-lightBlue1 dark:bg-darkBlue1' : 'hover:bg-lightBlue1 dark:hover:bg-darkBlue1')}>
                                <MarketsIcon fill={"fill-black dark:fill-white " + (location.pathname === route.CHALLENGE_PATH ? 'fill-lightBlue2 dark:fill-darkBlue2' : 'group-hover:fill-lightBlue2 dark:group-hover:fill-darkBlue2')}/>
                                {isMenuOpen ? <span className={"dark:text-white pl-[30px] pr-[50px] sm:flex hidden" + (location.pathname === route.CHALLENGE_PATH ? 'text-lightBlue2 dark:text-darkBlue2' : 'group-hover:text-lightBlue2 dark:group-hover:text-darkBlue2')}>Challenges</span> : null}
                            </Link>
                        </li>
                        <li className={"mb-[10px] 2xl:mb-3"}>
                            <Link to={route.PLATFORM_PATH} onClick={expandMenubar} className={"group sideBarNavItem " + (location.pathname === route.PLATFORM_PATH ? 'bg-lightBlue1 dark:bg-darkBlue1' : 'hover:bg-lightBlue1 dark:hover:bg-darkBlue1')}>
                                <TransactionIcon fill={"fill-black dark:fill-white " + (location.pathname === route.PLATFORM_PATH ? 'fill-lightBlue2 dark:fill-darkBlue2' : 'group-hover:fill-lightBlue2 dark:group-hover:fill-darkBlue2')}/>
                                {isMenuOpen ? <span className={"dark:text-white pl-[30px] pr-[50px] sm:flex hidden" + (location.pathname === route.PLATFORM_PATH ? 'text-lightBlue2 dark:text-darkBlue2' : 'group-hover:text-lightBlue2 dark:group-hover:text-darkBlue2')}>Platforms</span> : null}
                            </Link>
                        </li>
                        <li className={"mb-[10px] 2xl:mb-3"}>
                            <Link to={route.PROFILE_PATH} onClick={expandMenubar} className={"group sideBarNavItem " + (location.pathname === route.PROFILE_PATH ? 'bg-lightBlue1 dark:bg-darkBlue1' : 'hover:bg-lightBlue1 dark:hover:bg-darkBlue1')}>
                                <ProfileIcon fill={"fill-black dark:fill-white " + (location.pathname === route.PROFILE_PATH ? 'fill-lightBlue2 dark:fill-darkBlue2' : 'group-hover:fill-lightBlue2 dark:group-hover:fill-darkBlue2')}/>
                                {isMenuOpen ? <span className={"dark:text-white pl-[30px] pr-[20px] sm:flex hidden" + (location.pathname === route.PROFILE_PATH ? 'text-lightBlue2 dark:text-darkBlue2' : 'group-hover:text-lightBlue2 dark:group-hover:text-darkBlue2')}>Profile & KYC</span> : null}
                            </Link>
                        </li>
                        <li className={"mb-[10px] 2xl:mb-3"}>
                            <Link to={route.HELP_PATH} onClick={expandMenubar} className={"group sideBarNavItem " + (location.pathname === route.HELP_PATH ? 'bg-lightBlue1 dark:bg-darkBlue1' : 'hover:bg-lightBlue1 dark:hover:bg-darkBlue1')}>
                                <SettingsIcon fill={"fill-black dark:fill-white " + (location.pathname === route.HELP_PATH ? 'fill-lightBlue2 dark:fill-darkBlue2' : 'group-hover:fill-lightBlue2 dark:group-hover:fill-darkBlue2')}/>
                                {isMenuOpen ? <span className={"dark:text-white pl-[30px] pr-[50px] sm:flex hidden" + (location.pathname === route.HELP_PATH ? 'text-lightBlue2 dark:text-darkBlue2' : 'group-hover:text-lightBlue2 dark:group-hover:text-darkBlue2')}>Helps</span> : null}
                            </Link>
                        </li>
                        <li className={"mb-[10px] 2xl:mb-3"}>
                            <Link onClick={logoutHandler} className={"group sideBarNavItem " + (location.pathname === route.LOGOUT_PATH ? 'bg-lightBlue1 dark:bg-darkBlue1' : 'hover:bg-lightBlue1 dark:hover:bg-darkBlue1')}>
                                <LogoutIcon fill={"fill-black dark:fill-white " + (location.pathname === route.LOGOUT_PATH ? 'fill-lightBlue2 dark:fill-darkBlue2' : 'group-hover:fill-lightBlue2 dark:group-hover:fill-darkBlue2')}/>
                                {isMenuOpen ? <span className={"dark:text-white pl-[30px] pr-[50px] sm:flex hidden" + (location.pathname === route.LOGOUT_PATH ? 'text-lightBlue2 dark:text-darkBlue2' : 'group-hover:text-lightBlue2 dark:group-hover:text-darkBlue2')}>Logout</span> : null}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    : null
};

export default MobileMenubar;
