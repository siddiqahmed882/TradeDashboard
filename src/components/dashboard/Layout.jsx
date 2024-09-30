import Navbar from "../common/Navbar.jsx";
import Sidebar from "../common/Sidebar.jsx";

const Layout = ({ children, setAccount,account }) => {
    return (
       <>
            <Navbar setAccount={setAccount} account={account}/>
            <div className={'flex justify-start font-inter'}>
                <div className={'fixed sm:relative z-40 sm:max-w-[231px] 2xl:max-w-[308px]'}>
                    <Sidebar/>
                </div>
                <div className={'w-full overflow-hidden'}>
                    <div className={'h-[calc(100vh-80px)] px-[33px] py-[28px] bg-lightSecondaryColor dark:bg-darkSecondaryColor overflow-y-auto'}>
                        { children }
                    </div>
                </div>
            </div>
       </>
    );
};

export default Layout;
