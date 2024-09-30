import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../slices/usersApiSlice';

import { logout } from '../../slices/authSlice';

import * as route from "../../routes/Slugs.jsx";
import avatar from "../../assets/images/avatar.png";
import { Link } from "react-router-dom";

const Avatar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
      try {
        // await logoutApiCall().unwrap();
        dispatch(logout());
        navigate('/login');
      } catch (err) {
        console.error(err);
      }
    };
    return (
        <Menu as="div" className="ml-4 relative flex-shrink-0">
            <div>
                <Menu.Button className="bg-lightBlue3 dark:bg-darkBlue3 rounded-xl px-4 py-[6px] flex justify-between items-center gap-x-[9px] cursor-pointer">
                    <img src={avatar} alt="" />
                 </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-1 w-[225px] rounded-md shadow-lg py-1 bg-lightPrimaryColor dark:bg-slate-700 ring-1 ring-black ring-opacity-5 focus:outline-none z-40 divide-y divide-gray-500">
                    <Menu.Item>
                        {({ active }) => (
                            <Link to={route.PROFILE_PATH}>
                                <div className="px-4 py-3 text-sm dark:text-white">
                                        Profile Setting
                                </div>
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <Link onClick={logoutHandler}>
                                <div className="px-4 py-3 text-sm dark:text-white ">
                                        Sign Out
                                </div>
                            </Link>
                        )}
                    </Menu.Item>
                </Menu.Items>
          </Transition>
        </Menu>
    );
};

export default Avatar;
