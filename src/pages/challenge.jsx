import Layout from "../components/dashboard/Layout.jsx";
import ChallengeHeader from "../components/challenge/ChallengeHeader.jsx";

const Challenge = ({account, setAccount}) => {
    return (
        <Layout setAccount={setAccount} account={account}>
            <div className={'w-full md:px-[30px] md:py-[20px] overflow-hidden'}>
                <ChallengeHeader />
                <div className="w-full dashboardCard p-7 mt-6">
                    <p className="text-[12px] sm:text-md font-bold text-black dark:text-white">
                        For further information about chaalenges, please visit the Now Trade Portal Plan page
                    </p>
                    <button
                        type="button"
                        className="inlineBlock border-2 border-gray sm:px-6 px-3 pb-[5px] sm:pb-[6px] pt-2 sm:text-xs sm:font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out motion-reduce:transition-none dark:text-white rounded-xl mt-4 text-[10px] sm:w-auto w-full"
                        onClick={() => window.open('https://nowtradefunded.com/', '_blank')}
                        data-twe-ripple-init>
                        EXPLORE CHALLENGES
                    </button>

                </div>
            </div>
        </Layout>
    );
};

export default Challenge;
