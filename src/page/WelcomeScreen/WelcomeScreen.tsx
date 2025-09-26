import { useNavigate } from "react-router-dom";


const WelcomeScreen = () => {
const navigate = useNavigate();

const navigateTranslate = ()=> {
  navigate("/translate")
}

  return (
    <main
      className="min-h-screen bg-gradient-to-r from-orange-300 to-orange-200 
    flex justify-center items-center"
    >
   <button className="w-[183px] h-[85px] rounded-md border-gray-300 border-[3px] text-[36px] font-bold 
    bg-gradient-to-r from-gray-600 to-gray-200 bg-clip-text text-transparent cursor-pointer
    hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-300 transition-all duration-300 
     hover:border-gray-400 hover:scale-105 active:scale-95 hover:border-dotted
     shadow-[0_6px_20px_rgba(0,0,0,0.35)]"
     onClick={navigateTranslate} >
        Welcome
        </button>


    </main>
  );
};

export default WelcomeScreen;
