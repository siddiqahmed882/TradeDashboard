import MT4 from "../../assets/images/mt4.jpg";
import WINDOWS from "../../assets/images/windows.png";
import MACOS from "../../assets/images/macos.png";
import IOS from "../../assets/images/ios.png";
import ANDROID from "../../assets/images/android.png";


const PlatformI = (prop) => {
  return (
    <>
        <div className="flex flex-col border-r-2 pr-6 border-gray-200">
            <img src={MT4} alt="" className={'block rounded-full border border-gray-200 w-[60px]'} />
            <p className="text-sm mt-3 font-bold  text-center text-black dark:text-white">Platforms</p>
        </div>

        <div className="flex flex-col">
            <img src={WINDOWS} alt="" className={'block border border-gray-200 rounded-full w-[60px]'} />
            <p className="text-sm mt-3 font-bold text-center text-black dark:text-white">Windows</p>
        </div>

        <div className="flex flex-col">
            <img src={MACOS} alt="" className={'block rounded-full border border-gray-200 max-w-[60px]'} />
            <p className="text-sm mt-2 text-center font-bold text-black dark:text-white">Mac OS</p>
        </div>

        <div className="flex flex-col">
            <img src={IOS} alt="" className={'block rounded-full border border-gray-200 max-w-[60px]'} />
            <p className="text-sm mt-3 font-bold text-center text-black dark:text-white">iOS</p>
        </div>

        <div className="flex flex-col">
            <img src={ANDROID} alt="" className={'block rounded-full border border-gray-200 w-[60px]'} />
            <p className="text-sm mt-3 font-bold text-black text-center dark:text-white">Andorid</p>
        </div>
    </>
  );
};

export default PlatformI;
