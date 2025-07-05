import InputComponent from "../InputComponent/InputComponent";
import OutputComponent from "../OutputComponent/OutputComponent";
import { useState } from "react";
import {translate} from '../../../Services/Action'

//QUEDE EN 1 HORA 12 MIN


const TranslateComponent: React.FC = () => {

  const [textToTranslate, setTextToTranslate] = useState("");
  const [translateText, setTranslateText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
    const [langActive, setLangActive] = useState('en');
     const [targetLang, setTargetLang] = useState('fr');

const onTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  const newText = e.target.value;
  console.log(newText);
  
  if (newText.length > 500) {
    setTextToTranslate(newText.slice(0, 500));
  } else {
    setTextToTranslate(newText);
  }
};


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

const data = await translate(
  textToTranslate,
  `${langActive}|${targetLang}`
);

setTranslateText(data.responseData.translatedText);


 
    
       setIsLoading(false)
    
  };

  return (
    <main className="min-h-screen pt-6 w-full h-screen bg-cover  bg-[rgb(11,3,17)] lg:p-6 md:p-6">
      <h2 className="text-[25px] md:text-[35px] font-bold text-center lg:text-start md:text-start ">
        <span className=" bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent">
          Translate
        </span>
        <span className=" bg-gradient-to-r from-yellow-600 to-yellow-200 bg-clip-text text-transparent">
          App.
        </span>
      </h2>

      <section
        className="flex flex-col lg:flex-row items-center lg:gap-x-6 mt-[55px] gap-y-4 justify-center"
      >
             <div className=" max-w-[650px]">
        <InputComponent
          textToTranslate={textToTranslate}
          onChange={onTextareaChange}
          onSubmit={onSubmit}
          langActive ={langActive}
          setLangActive={setLangActive}
          isLoading={isLoading}
          
        />
        </div>
        <div className=" max-w-[650px]">
          <OutputComponent
           translateText={translateText}
           targetLang={targetLang}
           setTargetLang ={setTargetLang}
                  textToTranslate={textToTranslate} />
        </div>
        
      </section>
    </main>
  );
};

export default TranslateComponent;
