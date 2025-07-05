import { LuCopy } from "react-icons/lu";
import { MdTranslate } from "react-icons/md";
import { languages, type Language } from "../../../Data/Data";
import { useState } from "react";

interface InputComponentProps {
  textToTranslate: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  langActive: string;
  setLangActive: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

const InputComponent: React.FC<InputComponentProps> = ({
  onChange,
  onSubmit,
  textToTranslate,
  langActive,
  setLangActive,
  isLoading,
}) => {

  	const [showCopyAlert, setShowCopyAlert] = useState(false);

	// Function to copy the text to the clipboard
	const handleCopyClipboard = async () => {
		if (textToTranslate.length < 1) return;

		await navigator.clipboard.writeText(textToTranslate);
		setShowCopyAlert(true);
		setTimeout(() => {
			setShowCopyAlert(false);
		}, 2000);
	};

  // const handleLanguage = ()=> {};

  return (
    <div
      className="bg-gray-900 w-[350px] h-[350px] md:w-[650px] md:h-[400px] rounded-[23px]
     border-gray-500 border-[2px] shadow-md p-8"
    >
      <div className="flex text-gray-300 gap-3 lg:gap-12 md:gap-x-9 items-center">
        <p className="text-[17px] md:text-[20px] font-semibold">Language</p>
        {languages.slice(0, 3).map((lang: Language) => {
          return (
            <button
              onClick={() => {
                setLangActive(lang.code);
              }}
              className={`mr-4 lg:text-[18px] w-[100px] h-[33px] cursor-pointer flex items-center justify-center ${
                lang.code === langActive
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

      <form onSubmit={onSubmit}>
        <div className="h-full relative">
          <textarea
            value={textToTranslate}
            onChange={onChange}
            placeholder="Translate here..."
            className="text-white text-[14px] font-medium md:text-[16px] w-full h-[192px] lg:h-[240px] md:h-[235px]
outline-none resize-none pb-6 "
          ></textarea>
          <span className=" bg-transparent absolute bottom-2 right-3 text-sm md:text-base text-gray-400 font-mono z-10  px-1 rounded">
            {textToTranslate.length}/500
          </span>
        </div>
        <div className="text-gray-500 flex items-end justify-between gap-x-[74px] md:gap-x-[350px]">
   
            <div
              className="w-9 h-9 rounded-xl border-gray-500 border-[2px] flex items-center justify-center
          cursor-pointer hover:bg-gray-300 hover:border-gray-900 transition-all duration-300 "
            >
              <button
                type="button"
                onClick={handleCopyClipboard}
                className="cursor-pointer"
              >
                <LuCopy className="hover:bg-gray-300 hover:text-gray-900 transition-all duration-300 " />
              </button>
            {/* Alerta Copy Clipboard */}
			{showCopyAlert && (
				<div className='absolute left-1/2 -translate-x-[60%] lg:left-1/4 text-white px-10 md:px-0 lg:px-0'>
					Copied to clipboard!
				</div>
			)}
          </div>
          <div className="flex flex-col gap-y-1">
            <button
              title={textToTranslate}
              type="submit"
              className={`${
                isLoading ? "bg-blue-500 " : "bg-blue-700"
              }  transition-all duration-300  w-[140px] h-[40px] text-[18px] rounded-[12px]
                 text-white font-thin border-white border-[1px] flex justify-center items-center md:w-[165px] md:h-[45px]
                 gap-x-2 md:text-[20px] cursor-pointer hover:border-gray-400  
     shadow-[0_6px_20px_rgba(0,0,0,0.35)] `}
            >
              <MdTranslate className="text-[20px] md:text-[24px]" />
              <p>{isLoading ? "Translating..." : "Translate"}</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputComponent;
