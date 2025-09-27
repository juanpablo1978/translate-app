import { LuCopy } from "react-icons/lu";
import { languages, type Language } from "../../../Data/Data";
import { useState } from "react";

interface OutputComponentProps {
  translateText: string;
  targetLang: string;
  setTargetLang: React.Dispatch<React.SetStateAction<string>>;
  textToTranslate: string;
}

const OutputComponent: React.FC<OutputComponentProps> = ({
  translateText,
  targetLang,
  setTargetLang,
  
}) => {

    	const [showCopyAlert, setShowCopyAlert] = useState(false);

	// Function to copy the text to the clipboard
	const handleCopyClipboard = async () => {
		if (translateText.length < 1) return;

		await navigator.clipboard.writeText(translateText);
		setShowCopyAlert(true);
		setTimeout(() => {
			setShowCopyAlert(false);
		}, 2000);
	};



  // const handleLanguage = ()=> {};

  return (
    <section
      className="bg-gray-950 w-[350px] h-[350px] md:w-[650px] md:h-[400px] rounded-[23px]
     border-gray-500 border-[2px] shadow-md p-8"
    >
      <div className="flex text-gray-300 gap-3 lg:gap-12 md:gap-x-9 items-center">
        <p className="text-[17px] md:text-[20px] font-semibold">Language</p>
        {languages.slice(0, 3).map((lang: Language) => {
          return (
            <button
              onClick={() => {
                setTargetLang(lang.code);
              }}
              className={`mr-4 lg:text-[18px] w-[100px] h-[33px] cursor-pointer ${
                lang.code === targetLang
                  ? "bg-white/15 background-blur-sm  rounded-2xl text-white"
                  : ""
              }`}
              key={lang.code}
            >
              {lang.name}
            </button>
          );
        })}
      </div>

      <div className="w-[290px] md:w-[600px] h-px bg-gray-300 my-4"></div>

      <form action="">
        <div className="h-full">
          <textarea
            disabled
            value={translateText}
            className="text-white text-[14px] font-medium md:text-[16px] w-full h-[192px] lg:h-[240px] md:h-[235px]
       outline-none resize-none "
          ></textarea>
        </div>
      </form>

      <div className="text-gray-500 flex items-end justify-between gap-x-[74px] md:gap-x-[350px]">
        <div
          className="w-9 h-9 rounded-xl border-gray-500 border-[2px] flex items-center justify-center
                 cursor-pointer hover:bg-gray-300 hover:border-gray-900 transition-all duration-300 "
        >
          <button type="button" onClick={handleCopyClipboard} className="cursor-pointer">
            <LuCopy className="hover:bg-gray-300 hover:text-gray-900 transition-all duration-300 " />
          </button>
                  {/* Alerta Copy Clipboard */}
			{showCopyAlert && (
				<div className='absolute left-1/2 transform -translate-x-1/2 lg:left-[60%] text-white'>
					Copied to clipboard!
				</div>
			)}
        </div>
        <div className="flex flex-col gap-y-1"></div>
      </div>
    </section>
  );
};

export default OutputComponent;
