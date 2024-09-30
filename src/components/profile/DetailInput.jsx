
import { LockClosedIcon } from "@heroicons/react/24/solid";

const DetailInput = ({userInfo}) => {
    return (
        <>
            <div className="md:flex block mt-5 gap-3">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">First Name</label>
                <div className="relative w-full md:mb-0 mb-2">
                    <input className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" placeholder="First Name"  defaultValue={userInfo.firstName} required disabled/>
                    <div className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">
                        <LockClosedIcon className="w-4 h-4 text-gray-500 dark:text-gray-400">
                        </LockClosedIcon>
                    </div>
                </div>

                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Middle Name</label>
                <div className="relative w-full md:mb-0 mb-2">
                    <input className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" placeholder="Middle Name"  defaultValue={userInfo.middleName} required disabled />
                    <div className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">
                        <LockClosedIcon className="w-4 h-4 text-gray-500 dark:text-gray-400">
                        </LockClosedIcon>
                    </div>
                </div>

                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Last Name</label>
                <div className="relative w-full md:mb-0 mb-2">
                    <input className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" placeholder="Last Name"  defaultValue={userInfo.lastName} required disabled />
                    <div className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">
                        <LockClosedIcon className="w-4 h-4 text-gray-500 dark:text-gray-400">
                        </LockClosedIcon>
                    </div>
                </div>
            </div>

            <div className="md:flex block md:mt-5 gap-3">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email</label>
                <div className="relative w-full md:mb-0 mb-2">
                    <input className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" placeholder="Email"  defaultValue={userInfo.email} required disabled />
                    <div className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">
                        <LockClosedIcon className="w-4 h-4 text-gray-500 dark:text-gray-400">
                        </LockClosedIcon>
                    </div>
                </div>
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Nick Name</label>
                <div className="relative w-full">
                    <input className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" placeholder="Nick Name"  defaultValue={userInfo.nickName} required disabled />
                    <div className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">
                        <LockClosedIcon className="w-4 h-4 text-gray-500 dark:text-gray-400">
                        </LockClosedIcon>
                    </div>
                </div>
            </div>

        </>
    );
};

export default DetailInput;