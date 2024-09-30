import Layout from "../components/dashboard/Layout.jsx";
import PlatformHeader from "../components/platform/PlatformHeader.jsx";
import PlatformI from "../components/platform/Platform_1.jsx";
import PlatformII from "../components/platform/Platform_2.jsx";

const Platform = ({account, setAccount}) => {
    return (
        <Layout setAccount={setAccount} account={account}>
            <div className={'w-full md:px-[30px] md:py-[20px] overflow-hidden'}>

                <PlatformHeader />

                <div className={'dashboardCard w-full px-8 2xl:px-[43px] py-[26px] 2xl:py-[35px] mt-6 flex gap-9 min-w-[400px] overflow-x-auto'}>
                    <PlatformI/>
                </div>

                <div className={'dashboardCard w-full px-8 2xl:px-[43px] py-[26px] 2xl:py-[35px] mt-6 flex gap-9 min-w-[400px] overflow-x-auto'}>
                    <PlatformII/>
                </div>
            </div>
        </Layout>
    );
};

export default Platform;
