import { useEffect, useState } from "react";

const Trading = ({ account, initialBalance }) => {
    const [dailyDrawdown, setDailyDrawdown] = useState(0);
    const [totolDrawdown, setTotolDrawdown] = useState(0);
    const [currentDrawdown, setCurrentDrawdown] = useState(0);
    const [currentTotalDrawdown, setCurrentTotalDrawdown] = useState(0);

    useEffect(() => {
        setDailyDrawdown(account.dailyDrawdown || 0);
        setTotolDrawdown(account.totalDrawdown || 0);
        setCurrentDrawdown(account.currentDrawdown || 0);
        setCurrentTotalDrawdown((account.phaseInitialBalance - account.balance) ? (account.phaseInitialBalance - account.balance) : 0)
    }, [account])

    return (
        <div>
            <div className={'2xl:mb-6 md:flex block justify-between items-center'}>
                <h2 className={'cardTitle'}>Trading objectives</h2>
                <button className={'filterBtn md:w-auto mt-2 md:m-0 w-full'}>In Progress</button>
            </div>


            <div className={'h-full overflow-y-auto'}>
                <table className={'w-full table-auto'}>
                    <tbody>
                        <tr className={'tableRow w-full'}>
                            <td className={'tableData w-1/3 text-ashColor2'}>
                                Maxim daily drawdown
                            </td>
                            <td className={'tableData w-2/3 dark:text-white'}>
                                <p className="dark:text-white font-bold text-[13px]">
                                    ${String(currentDrawdown) * account.phaseInitialBalance / 100} / ${String(dailyDrawdown) * account.phaseInitialBalance / 100}(12 hours, 1 minute before reset)
                                </p>
                                {/* <div className="w-full mt-1 bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                                <div className="bg-blue-600 h-2 rounded-full font-bold text-[13px] dark:bg-blue-500 w-1/3" />
                            </div> */}
                            </td>
                        </tr>
                        <tr className={'tableRow'}>
                            <td className={'tableData w-1/3 text-ashColor2'}>
                                Maxim lifetime drawdown
                            </td>
                            <td className={'tableData w-2/3 dark:text-white'}>
                                <p className="dark:text-white font-bold text-[13px]">
                                    ${String(currentTotalDrawdown.toFixed(2))} / ${String(totolDrawdown) * account.phaseInitialBalance / 100}
                                </p>
                                {/* <div className="w-full mt-1 bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                                <div className="bg-blue-600 h-2 rounded-full dark:bg-blue-500 w-1/3" />
                            </div> */}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Trading;
