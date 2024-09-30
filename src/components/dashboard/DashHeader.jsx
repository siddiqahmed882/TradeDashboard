const DashboardHeader = () => {
    return (
       <>
            <p className="text-3xl font-bold text-black dark:text-white">Dashbord</p>
            <div className="mt-3 flex md:mt-0 gap-3">
                <button
                    type="button"
                    className="inlineBlock rounded border-2 w-full md:w-auto border-gray-500 md:px-6 md:pb-[6px] pt-2 md:text-xs text-[10px] font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out motion-reduce:transition-none dark:text-gray-200 px-2 pb-2 mb-2 md:mb-0" data-twe-ripple-init>
                    REQUEST PAYOUT
                </button>
                <button
                    type="button"
                    className="inlineBlock rounded border-2 w-full md:w-auto border-yellow-800 px-2 pb-2 md:px-6 md:pb-[6px] pt-2 md:text-xs text-[10px] font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out motion-reduce:transition-none dark:text-yellow-400 mb-2 md:mb-0"
                    data-twe-ripple-init>
                    REVIEW PAYOUT CONDITIONS
                </button>
            </div>
       </>
    );
};

export default DashboardHeader;
