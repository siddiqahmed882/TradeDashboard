import { CheckIcon } from '@heroicons/react/24/solid';

const TraderAgreement = ({userInfo}) => {
    return (
        <>
            <span className="flex">
                <CheckIcon className="w-[18px] h-[18px] mt-1 border rounded-full dark:border-white border-black"/>
            </span>
            <div className="flex flex-col">
                <p className="sm:text-[18px] text-[15px] font-bold text-black dark:text-white">
                    Traders Agreement
                </p>
                <p className="sm:text-[16px] text-[12px] mt-1 text-black dark:text-white">
                    Agreement signed on {(String(userInfo.createdAt).slice(0, 10))} and can be viewd here.
                </p>
            </div>
        </>
    );
};

export default TraderAgreement;