import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const AccountInformation = ({ account, initialBalance }) => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [platform, setPlatform] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/profile');
    };

    useEffect(() => {
        setStartDate(account.createdAt || "None");
        setEndDate(account.updatedAt || "None");
        setPlatform(account.tradeSystem || "None");
    }, [account]);

    const handleTogglePassword = () => {
        setShowPassword(prev => !prev);
    };

    return (
        <div>
            <div className={'2xl:mb-6 flex justify-between items-center'}>
                <p className={'cardTitle md:text-md text-[11px]'}>Account information</p>
            </div>
            <button className={'w-full md:text-md text-[11px] py-2 mt-2 rounded-xl border-solid border-2 dark:border-white'} onClick={handleClick}>
                VIEW CREDENTIALS
            </button>
            <div className={'h-full overflow-y-auto mt-1'}>
                <table className={'w-full table-auto'}>
                    <tbody>
                        <tr className={'tableRow w-full'}>
                            <td className={'tableData w-1/2 font-semibold text-white'}>
                                Start date
                            </td>
                            <td className={'tableData w-1/2 text-white font-semibold'}>
                                {(String(account.createdAt).slice(0, 10))}
                            </td>
                        </tr>
                        <tr className={'tableRow'}>
                            <td className={'tableData w-1/2 text-white font-semibold'}>
                                UserName 
                            </td>
                            <td className={'tableData w-1/2 text-white font-semibold'}>
                                {account.accountUser}
                            </td>
                        </tr>
                        <tr className={'tableRow'}>
                            <td className={'tableData w-1/2 text-white font-semibold'}>
                                Password 
                            </td>
                            <td className={'tableData w-1/2 text-white font-semibold'}>
                                <span className="flex gap-1 items-center">
                                    {account.accountPassword ? 
                                    (showPassword ? account.accountPassword : '••••••••••••'): ""}
                                    <button onClick={handleTogglePassword} className="ml-2 text-white" hidden={!account.accountPassword}>
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr className={'tableRow'}>
                            <td className={'tableData w-1/2 text-white font-semibold'}>
                                Initial Balance
                            </td>
                            <td className={'tableData w-1/2 text-white font-semibold'}>
                                ${account.phaseInitialBalance}
                            </td>
                        </tr>
                        <tr className={'tableRow'}>
                            <td className={'tableData w-1/2 text-white font-semibold'}>
                                Platform
                            </td>
                            <td className={'tableData w-1/2 text-white font-semibold'}>
                                <span className="flex gap-1">
                                    {platform}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AccountInformation;
