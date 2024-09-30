
import MobileMenubar from './MobileMenubar';
import TableMenubar from './TableMenubar';

const Sidebar = () => {
    return (
        <div className={'w-full h-[calc(100vh-80px)] bg-lightPrimaryColor dark:bg-darkPrimaryColor border-r border-lightGrayColor dark:darkGrayColor'}>
            <MobileMenubar />
            <TableMenubar/>
        </div>
    )
};

export default Sidebar;
