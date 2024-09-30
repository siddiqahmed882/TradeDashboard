import Layout from "../components/dashboard/Layout.jsx";

import ProfileSettingHeader from "../components/profile/ProfileSettingHeader.jsx";
import TraderAgreement from "../components/profile/TraderAgreements.jsx";
import PaymentMethod from "../components/profile/PaymentMethod.jsx";
import Detail from "../components/profile/Detail.jsx";
import ChangePassword from "../components/profile/Changepassword.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config/main.js";

const Profile = ({ account, setAccount }) => {
	const [userInfo, setUserInfo] = useState({});
	const token = JSON.parse(localStorage.getItem("userInfo"))?.token;
	useEffect(() => {
		const fetchUserInfo = async () => {
			try {
				const response = await axios.post(
					`${config.BackendEndpoint}/getUserInfo`,
					{ displayName: account?.displayName || "" }, // Use optional chaining and provide a fallback
					{
						headers: {
							Authorization: token || "" // Use fallback for token
						}
					}
				);

				// Check if the account is blocked.
				if (response.data.message === "Blocked Account") {
					localStorage.removeItem("userInfo");
					window.location.reload();
					return; // Early exit to prevent further processing.
				}

				setUserInfo(response.data.user);
			} catch (error) {
				if (error.response && error.response.status === 401) {
					localStorage.removeItem("userInfo");
					window.location.reload();
				} else {
					console.error("An unexpected error occurred:", error.message);
				}
				// Handle the error according to your application's needs
			}
		};

		fetchUserInfo();
	}, []);

	return (
		<Layout setAccount={setAccount} account={account}>
			<div className={'w-full md:px-[30px] md:py-[20px] overflow-hidden'}>

				<ProfileSettingHeader />

				<div className="w-full border-solid flex gap-2 border-2 dark:border-green-200 dark:text-white p-4 mt-5 text-[18px] rounded-lg">
					<TraderAgreement userInfo={userInfo}/>
				</div>

				<div className={'dashboardCard w-full flex justify-between p-6 mt-5 items-center'}>
					<PaymentMethod />
				</div>

				<div className={'dashboardCard w-full p-6 mt-5'}>
					<Detail userInfo={userInfo}/>
				</div>

				<div className={'dashboardCard w-full p-6 mt-5 items-center'}>
					<ChangePassword userInfo={userInfo} />
				</div>
			</div>
		</Layout>
	);
};

export default Profile;