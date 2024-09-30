import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
const CandleStickChart = ({account}) => {
    const [balance, setBalance] = useState(0);
    const [equity, setEquity] = useState(0);
    const [plan, setPlan] = useState("");
    const [tradeSystem, setTradeSystem] = useState("");
    const [accountType, setAccountType] = useState("");
    const [currentDrawdown, setCurrentDrawdown] = useState("");

    useEffect(() => {
        setBalance(account.balance);
        setEquity(account.currentEquity);
        setPlan(account.plan);
        setTradeSystem(account.tradeSystem);
        setAccountType(account.type);
        setCurrentDrawdown(account.currentDrawdown);
    }, [account])

    return (
        <div className={'h-full w-full'}>
            <div className={'2xl:mb-6 block sm:flex justify-between items-center'}>
                <h2 className={'cardTitle'}>Balance: </h2> ${balance}
            </div>
            <div className={'2xl:mb-6 block sm:flex justify-between items-center'}>
                <h2 className={'cardTitle'}>Equity: </h2> ${equity}
            </div>
            <div className={'2xl:mb-6 block sm:flex justify-between items-center'}>
                <h2 className={'cardTitle'}>Plan: </h2> {plan}
            </div>
            <div className={'2xl:mb-6 block sm:flex justify-between items-center'}>
                <h2 className={'cardTitle'}>TradeSystem: </h2> {tradeSystem}
            </div>
            <div className={'2xl:mb-6 block sm:flex justify-between items-center'}>
                <h2 className={'cardTitle'}>AccountType: </h2> {accountType}
            </div>
            <div className={'2xl:mb-6 block sm:flex justify-between items-center'}>
                <h2 className={'cardTitle'}>CurrentDrawdown: </h2> {currentDrawdown} %
            </div>
        </div>
    )
};

export default CandleStickChart;
