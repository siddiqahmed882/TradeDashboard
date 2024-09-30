
import { LockClosedIcon } from "@heroicons/react/24/solid";

const AdressInput = ({userInfo}) => {
    return (
        <div className="mt-2">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Country</label>
            <div className="relative w-full mb-4">
                <input className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" placeholder="Country"  defaultValue={userInfo.country} required disabled />
                <div className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">
                    <LockClosedIcon className="w-4 h-4 text-gray-500 dark:text-gray-400">
                    </LockClosedIcon>
                </div>
            </div>

            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Adress line 1
            </label>
            <div className="relative w-full mb-4">
                <input className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" placeholder="Adress line 1"  defaultValue={userInfo.addressLine1} required disabled />
                <div className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">
                    <LockClosedIcon className="w-4 h-4 text-gray-500 dark:text-gray-400">
                    </LockClosedIcon>
                </div>
            </div>

            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Adress line 2
            </label>
            <div className="relative w-full mb-4">
                <input className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" placeholder="Adress line 2" defaultValue={userInfo.addressLine2} required disabled />
                <div className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">
                    <LockClosedIcon className="w-4 h-4 text-gray-500 dark:text-gray-400">
                    </LockClosedIcon>
                </div>
            </div>

            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Adress line 3
            </label>
            <div className="relative w-full mb-4">
                <input className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" placeholder="Adress line 3" defaultValue={userInfo.addressLine3} required disabled />
                <div className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">
                    <LockClosedIcon className="w-4 h-4 text-gray-500 dark:text-gray-400">
                    </LockClosedIcon>
                </div>
            </div>

            <div className="md:flex block gap-4">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    City
                </label>
                <div className="relative md:w-1/3 w-full mb-4">
                    <input className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" placeholder="City" defaultValue={userInfo.city} required disabled />
                    <div className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">
                        <LockClosedIcon className="w-4 h-4 text-gray-500 dark:text-gray-400">
                        </LockClosedIcon>
                    </div>
                </div>

                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    State
                </label>
                <div className="relative md:w-1/3 w-full mb-4">
                    <input className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" placeholder="State" defaultValue={userInfo.state} required disabled />
                    <div className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">
                        <LockClosedIcon className="w-4 h-4 text-gray-500 dark:text-gray-400">
                        </LockClosedIcon>
                    </div>
                </div>

                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Postcode
                </label>
                <div className="relative md:w-1/3 w-full mb-4">
                    <input className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" placeholder="Postcode"  defaultValue={userInfo.zip} required disabled />
                    <div className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">
                        <LockClosedIcon className="w-4 h-4 text-gray-500 dark:text-gray-400">
                        </LockClosedIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdressInput;