import {useEffect, useState} from "react";
import historyTableData from "../../jsonData/history-table-data.js";

const HistoryTable = () => {
    const [tableData, setTableData] = useState(historyTableData);

    useEffect(()=>{
        setTableData(historyTableData);
    },[]);

    return (
        <div className={'flex flex-col h-full'}>
            <div className={'mb-[18px] sm:flex block justify-between items-center'}>
                <h2 className={'cardTitle sm:text-md text-[11px]'}>Recent trade history</h2>
                <div className="flex sm:justify-between gap-2 sm:mt-0 mt-2">
                    <button className={'viewAllBtn w-full sm:w-auto px-[10px] py-[2px]'}>Open</button>
                    <button className={'viewAllBtn w-full sm:w-auto px-[10px] py-[2px]'}>Closed</button>
                </div>
            </div>
            <div className={'h-full overflow-y-auto'}>
                <table className={'w-full'}>
                    <thead className={'tableRow text-left'}>
                        <tr>
                            <th className={'tableData dark:text-white'}>Open Time</th>
                            <th className={'tableData dark:text-white'}>Side</th>
                            <th className={'tableData dark:text-white'}>Symbol</th>
                            <th className={'tableData dark:text-white'}>Close Time</th>
                            <th className={'tableData dark:text-white'}>Volume</th>
                            <th className={'tableData dark:text-white'}>Open Price</th>
                            <th className={'tableData dark:text-white'}>Close Price</th>
                            <th className={'tableData dark:text-white'}>Commission</th>
                            <th className={'tableData dark:text-white'}>Swap</th>
                            <th className={'tableData dark:text-white'}>Profit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data, index) => (
                            <tr key={index} className={'tableRow text-left'}>
                                <><td className={'tableData dark:text-white'}>{data.openTime}</td></>
                                <><td className={'tableData dark:text-white'}>{data.side}</td></>
                                <><td className={'tableData dark:text-white'}>{data.symbol}</td></>
                                <><td className={'tableData dark:text-white'}>{data.closeTime}</td></>
                                <><td className={'tableData dark:text-white'}>{data.volume}</td></>
                                <><td className={'tableData dark:text-white'}>{data.openPrice}</td></>
                                <><td className={'tableData dark:text-white'}>{data.closePrice}</td></>
                                <><td className={'tableData dark:text-white'}>{data.commission}</td></>
                                <><td className={'tableData dark:text-white'}>{data.swap}</td></>
                                <><td className={'tableData dark:text-white'}>{data.profit}</td></>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default HistoryTable;
