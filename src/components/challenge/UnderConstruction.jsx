import ComingSoonImg from "../../assets/images/under-construction.svg"

const UnderConstruction = (prop) => {
    let { pageName } = prop;

    return (
        <div className={'bg-white dark:bg-darkPrimaryColor rounded-xl p-6 h-full flex flex-col gap-y-5 justify-center items-center'}>
            <img src={ComingSoonImg} alt="" className={'w-1/2'}/>
        </div>
    );
};

export default UnderConstruction;
