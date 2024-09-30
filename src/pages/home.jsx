import Layout from "../components/dashboard/Layout.jsx";
import CandleStickChart from "../components/dashboard/charts/CandleStickChart.jsx";
import DashboardHeader from "../components/dashboard/DashHeader.jsx";
import Profit from "../components/dashboard/Profit.jsx";
import Trading from "../components/dashboard/Trading.jsx";
import AccountInformation from "../components/dashboard/AccountInformation.jsx";
import HistoryTable from "../components/dashboard/HistoryTable.jsx";
import { useState, useEffect } from "react";

const Home = ({ account, setAccount }) => {
    const [leftdays, setLeftDays] = useState(30);
    const [initialBalance, setInitialBalance] = useState(0);

    useEffect(() => {
        console.log(account);
        calcLeftdays()
        const interval = setInterval(() => {
            calcLeftdays();
        }, 1000 * 3600); // Update every hour

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [account]);

    const calcLeftdays = () => {
        if (account.createdAt && account.updatedAt) {
            const createdDate = new Date(account.createdAt);
            const updatedDate = new Date(account.updatedAt);
            const timeDiff = updatedDate - createdDate;
            const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            setLeftDays(30 - daysLeft);
        }
    }
    return (
        <Layout setAccount={setAccount} account={account}>
            <div className={'w-full md:px-[30px] md:py-[20px] overflow-hidden'}>
                <div className="block justify-between md:flex">
                    <DashboardHeader />
                </div>
                <div className="w-full border dark:border-yellow-100 dark:text-white p-4 mt-5 md:text-[18px] text-[13px] rounded-lg">
                    {leftdays} days until next available withdrawal
                </div>
                <div className="mt-[30px] xl:flex w-full block gap-3">
                    <div className={'dashboardCard xl:w-2/3 w-full h-[322px] 2xl:h-[358px] px-8 2xl:px-[43px] py-[26px] 2xl:py-[35px]'}>
                        <CandleStickChart account={account} />
                    </div>
                    <div className={'dashboardCard xl:w-1/3 w-full sm:h-[322px] 2xl:h-[358px] px-7 2xl:px-[38px] pt-7 2xl:pt-[38px] pb-2.5 2xl:pb-[14px] xl:mt-0 mt-5'}>
                        <Profit account={account} setInitialBalance={setInitialBalance} />
                    </div>
                </div>
                <div className="mt-[30px] lg:flex block w-full gap-4">
                    <div className={'dashboardCard lg:w-2/3 max-h-[250px] px-8 2xl:px-[43px] py-[26px] 2xl:py-[35px]'}>
                        <Trading account={account} initialBalance={initialBalance} />
                    </div>
                    <div className={'bg-blue-500 rounded-xl text-white lg:w-1/3 px-7 2xl:px-[38px] pt-7 2xl:pt-[38px] pb-2.5 2xl:pb-[14px] grow-1 lg:mt-0 mt-5'}>
                        <AccountInformation account={account} initialBalance={initialBalance} />
                    </div>
                </div>
                {/* <div className={'dashboardCard w-full 2xl:min-w-[622px] h-[226px] 2xl:h-[301px] px-6 2xl:px-8 py-[15px] 2xl:py-5 mt-[30px]'}>
                    <HistoryTable/>
                </div> */}
            </div>
        </Layout>
    );
};

export default Home;
