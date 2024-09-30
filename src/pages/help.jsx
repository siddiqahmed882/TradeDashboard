import Layout from "../components/dashboard/Layout.jsx";
import HelpHeader from "../components/help_page/HelpHeader.jsx";

const Help = ({account, setAccount}) => {
    return (
        <Layout setAccount={setAccount} account={account}>
            <div className={'w-full md:px-[30px] md:py-[20px] overflow-hidden'}>
                <div className="block justify-between md:flex">
                    <HelpHeader/>
                </div>
                <div className="w-full dashboardCard p-7 mt-6">
                    <p className="sm:text-md text-sm font-bold text-black dark:text-white">
                        Frequently Asked Questions (FAQs)
                    </p>
                    <button
                        type="button"
                        className="inlineBlock border-2 border-gray md:w-auto w-full px-6 pb-[6px] pt-2 sm:text-xs text-[11px] font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out motion-reduce:transition-none dark:text-white rounded-xl mt-4"
                        data-twe-ripple-init>
                        FAQS
                    </button>
                </div>
                <div className="w-full dashboardCard p-7 mt-6">
                    <p className="sm:text-md text-sm font-bold text-black dark:text-white">
                        How to contact us
                    </p>
                    <p className="sm:text-sm text-[11px] font-bold text-black mt-4 dark:text-white">
                        If your require further assistance or have any questions, please contact our support team.
                    </p>
                    <button
                        type="button"
                        className="inlineBlock border-2 border-gray px-6 pb-[6px] pt-2 sm:text-xs text-[11px] font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out motion-reduce:transition-none dark:text-white rounded-xl mt-4 w-full sm:w-auto"
                        data-twe-ripple-init>
                        CONTACT SUPPORT
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default Help;
