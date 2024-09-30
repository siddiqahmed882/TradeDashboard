
import { ExclamationCircleIcon, LockClosedIcon } from "@heroicons/react/24/solid";

import DetailInput from "./DetailInput";
import AdressInput from "./AdressInput";
const Detail = ({userInfo}) => {
    return (
        <>
            <p className="sm:text-[20px] font-bold text-black dark:text-white">
                Details
            </p>
            <span className="flex gap-2 items-center">
                <ExclamationCircleIcon className="w-[18px] hidden sm:block text-darkBlue1 dark:text-white h-[18px] mt-1 border rounded-full  border-blue-400"/>
                <p className="mt-2 sm:text-[18px] text-[14px] font-bold text-black dark:text-white">
                    For your security, profile updates can only be made by contacting our support team
                </p>
            </span>
            <DetailInput userInfo={userInfo}/>
            <p className="sm:text-[20px] font-bold text-black dark:text-white mt-5">
                Adress
            </p>
            <AdressInput userInfo={userInfo}/>
        </>
    );
};

export default Detail;