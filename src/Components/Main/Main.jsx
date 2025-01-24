import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import run from "../../config/gemini";

const Main = () => {
  const {
    input,
    setInput,
    loading,
    onSent,
    resultData,
    recentPrompt,
    showResult,
  } = useContext(Context);
  // console.log(input);
  // console.log(resultData);

  return (
    <div className="w-full font-outfit min-h-screen flex-1 relative ">
      <div className="flex p-6  text-[#585858] justify-between items-center">
        <p className="text-xl font-normal">Gemini</p>

        <img className="h-10 rounded-full" src={assets.user_icon} alt="" />
      </div>

      <div className="main-container max-w-[900px] m-auto">
        {!showResult ? (
          <>
            {" "}
            <div className="greetings p-5 mt-12 font-medium text-[#c4c7c5] text-6xl">
              <p>
                <span className="name">Hello, Mehtaab</span>
              </p>
              <p>How can I help You today?</p>
            </div>
            <div className="cards card-container">
              <div className="card">
                <p>Suggest some places to visit in next trip</p>
                <img className="card-img" src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarise this concept: Urban development</p>
                <img className="card-img" src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our team retreat</p>
                <img className="card-img" src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readablity of the following code </p>
                <img className="card-img" src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result py-4">
            {" "}
            <div className="flex items-center gap-4">
              <img className="h-8 rounded-full" src={assets.user_icon} alt="" />{" "}
              <p className="text-[#585858]">{recentPrompt}</p>
            </div>
            <div className="result-data mt-5 overflow-y-hidden flex items-start gap-3">
              <img className="h-10" src={assets.gemini_icon} alt="" />

              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  className="text-[] font-light text-[17px] leading-[1.8]"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom w-full max-w-[900px]">
          <div className="input-field text-[#585858] mt-2 text-lg bg-[#f0f4f9] p-4 rounded-full flex items-center justify-between">
            <input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              className="bg-transparent outline-none border-none font-normal flex-1"
              type="text"
              name=""
              placeholder="Enter a prompt here"
              id=""
            />
            <div className="flex items-center gap-3">
              <img className="input-img" src={assets.gallery_icon} alt="" />
              <img className="input-img" src={assets.mic_icon} alt="" />
              {input ? (
                <img
                  onClick={() => onSent()}
                  className="input-img"
                  src={assets.send_icon}
                  alt=""
                />
              ) : null}
            </div>
          </div>

          <p className="m-auto mt-2 text-[12px] font-normal text-[#585858] text-center">
            Gemini may display inaccurate info, including people, So double
            check its responses, Your privacy and Gemini Apps{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
