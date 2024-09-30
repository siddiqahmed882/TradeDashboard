
import { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import config from "../../config/main";

const ChangePasswordInput = ({ userInfo }) => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const getToken = () => JSON.parse(localStorage.getItem("userInfo"))?.token;

    const handleSubmit = async () => {
        if (loading) return; // Prevent multiple submissions
        setLoading(true);
        setError("");

        if (newPassword !== confirmPassword) {
            setError("New password and confirm password do not match.");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(
                `${config.BackendEndpoint}/updatePassword`,
                {
                    oldPassword: currentPassword,
                    newPassword: newPassword,
                },
                {
                    headers: {
                        Authorization: getToken() || "",
                    },
                }
            );

            if (response.data.message === "Blocked Account") {
                localStorage.removeItem("userInfo");
                window.location.reload();
                return;
            }

            alert("Password updated successfully!");
        } catch (error) {
            if (error.response && error.response.status === 401) {
                localStorage.removeItem("userInfo");
                window.location.reload();
            } else {
                console.error("An unexpected error occurred:", error.message);
            }
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="md:flex block gap-4">
                <div className="relative md:w-1/3 w-full mb-4">
                    <input
                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                        placeholder="Current Password"
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                    />
                    <div className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">
                        <LockClosedIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                </div>

                <div className="relative md:w-1/3 w-full mb-4">
                    <input
                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                        placeholder="New Password"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    <div className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">
                        <LockClosedIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                </div>

                <div className="relative md:w-1/3 w-full mb-4">
                    <input
                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                        placeholder="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <div className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">
                        <LockClosedIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                </div>
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="inline-block rounded border-2 w-full md:w-auto border-yellow-800 px-2 pb-2 md:px-6 md:pb-[6px] pt-2 md:text-xs text-[10px] font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out motion-reduce:transition-none dark:text-yellow-400 mb-2 md:mb-0"
            >
                {loading ? "Saving..." : "Save"}
            </button>
        </>
    );
};

export default ChangePasswordInput;
