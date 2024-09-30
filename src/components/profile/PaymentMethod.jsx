
const PaymentMethod = () => {
    return (
        <>
            <p className="sm:text-[20px] font-bold text-black dark:text-white">
                Payment methods
            </p>
            <svg className="w-2.5 h-2.5 ms-3 dark:text-white text-black rounded-full cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
        </>
    );
};

export default PaymentMethod;