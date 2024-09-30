
const ProfileSettingHeader = () => {
    return (
        <div className="lg:flex block justify-between">
            <p className="text-3xl font-bold text-black dark:text-white">Profile Settings</p>
            <div className="gap-2 lg:mt-0 mt-3">
                <button
                    type="button"
                    className="w-full lg:w-auto inline-block rounded border-2 border-gray-500 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out motion-reduce:transition-none dark:text-gray-200 mr-3" data-twe-ripple-init>
                    REQUEST PAYOUT
                </button>
                <button
                type="button"
                className="inline-block w-full lg:mt-0 mt-3 lg:w-auto rounded border-2 border-yellow-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out motion-reduce:transition-none dark:text-yellow-400"
                data-twe-ripple-init>
                    REVIEW PAYOUT CONDITIONS
                </button>
            </div>
        </div>
    );
};

export default ProfileSettingHeader;