import DXTRADE from "../../assets/images/dxtrade.png";
import VISITRADE from "../../assets/images/visittrade.png";


const PlatformII = (prop) => {
  return (
    <>
        <div className="flex flex-col border-r-2 pr-6 border-gray-200">
            <img src={DXTRADE} alt="" className={'block rounded-full border border-gray-200 w-[60px]'} />
            <p className="text-sm mt-3 font-bold  text-center text-black dark:text-white">Platforms</p>
        </div>

        <div className="flex flex-col">
            <img src={VISITRADE} alt="" className={'block border border-gray-200 rounded-full w-[60px]'} />
            <p className="text-sm mt-3 font-bold text-center text-black dark:text-white">Windows</p>
        </div>

    </>
  );
};

export default PlatformII;
