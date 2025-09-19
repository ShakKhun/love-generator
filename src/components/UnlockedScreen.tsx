import React, { useState, useEffect } from "react";
import { getRandomMessage } from "../utils/messages";
import { translateText } from "../utils/translate";

const UnlockedScreen: React.FC = () => {

    const [message, setMessage] = useState("");
    const [translated, setTranslated] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleNewMessage = async () => {
        const msg = getRandomMessage();
        setMessage(msg);

        try {
        const t = await translateText(msg, "ru");
        setTranslated(t);
        } catch (err) {
        console.error("Translation error:", err);
        setTranslated("Translation failed");
        }

    };

    // show one on first render
    useEffect(() => {
        handleNewMessage();
    }, []);

  return (
    <div className="p-[20px] min-h-screen min-w-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-pink-400 to-pink-600">
        <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">{message}</h1>
        <p className="text-xl text-white drop-shadow">{translated}</p>

        {/* Main button */}
        <button
            className="
            rounded-[18px] 
            h-20 w-72 
            text-lg font-semibold 
            text-pink-700 
            transition-all duration-300 ease-out 
            cursor-pointer 
            relative
            select-none
            "
            style={{
            backgroundColor: "#f7e6ef",
            textShadow: `
                -2px -2px 3px rgba(0,0,0,.2), 
                2px 2px 3px rgba(255,255,255,1)
            `,
            boxShadow: `
                inset 2px 2px 16px rgba(255,255,255,.9),
                inset 8px 8px 9px rgba(0,0,0,.2),
                5px 10px 5px rgba(0,0,0,.03),
                -5px -5px 25px rgba(255,255,255,.1),
                -2px -2px 9px rgba(100,100,100,.1),
                inset -2px -2px 9px rgba(255,255,255,1)
            `,
            }}
            onMouseDown={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow = `
                inset 2px 2px 16px rgba(255,255,255,.9),
                inset 8px 8px 9px rgba(0,0,0,.2),
                5px 10px 5px rgba(0,0,0,.03),
                -5px -5px 25px rgba(255,255,255,.1),
                -2px -2px 9px rgba(100,100,100,.1),
                inset -2px -2px 9px rgba(255,255,255,1)
            `;
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#f3d9ea";
            (e.currentTarget as HTMLButtonElement).style.textShadow = `
                -2px -2px 3px rgba(0,0,0,.2), 
                2px 2px 3px rgba(255,255,255,1)
            `;
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(3px)";
            }}
            onMouseUp={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#f7e6ef";
            (e.currentTarget as HTMLButtonElement).style.textShadow =
                "2px 2px 3px rgba(0,0,0,.2)";
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            }}
            onClick={handleNewMessage}  
        >
            💖 Нажми на меня 💖
        </button>
        </div>

        {/* Floating info button */}
        <button
        className="select-none fixed bottom-4 right-4 flex items-center justify-center w-12 h-12 rounded-full !bg-white text-pink-600 font-bold text-xl border border-transparent transition-colors"
        style={{
            backgroundColor: "#f7e6ef",
            textShadow: `
            -2px -2px 3px rgba(0,0,0,.2), 
            2px 2px 3px rgba(255,255,255,1)
            `,
            boxShadow: `
            inset 2px 2px 16px rgba(255,255,255,.9),
            inset 8px 8px 9px rgba(0,0,0,.2),
            5px 10px 5px rgba(0,0,0,.03),
            -5px -5px 25px rgba(255,255,255,.1),
            -2px -2px 9px rgba(100,100,100,.1),
            inset -2px -2px 9px rgba(255,255,255,1)
            `,
        }}
        onMouseDown={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow = `
                inset 2px 2px 16px rgba(255,255,255,.9),
                inset 8px 8px 9px rgba(0,0,0,.2),
                5px 10px 5px rgba(0,0,0,.03),
                -5px -5px 25px rgba(255,255,255,.1),
                -2px -2px 9px rgba(100,100,100,.1),
                inset -2px -2px 9px rgba(255,255,255,1)
            `;
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#f3d9ea";
            (e.currentTarget as HTMLButtonElement).style.textShadow = `
                -2px -2px 3px rgba(0,0,0,.2), 
                2px 2px 3px rgba(255,255,255,1)
            `;
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(3px)";
            }}
        onMouseUp={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#f7e6ef";
            (e.currentTarget as HTMLButtonElement).style.textShadow =
            "2px 2px 3px rgba(0,0,0,.2)";
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
        }}
        onClick={() => setShowModal(true)}
        >
        i
        </button>
        {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-[10px] ">
          <div className="flex flex-col justify-center bg-white rounded-2xl shadow-lg p-6 w-96 relative py-4">
            {/* Close button */}
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">
              Интересный факт!
            </h2>
            <p className="text-gray-700">
              Здесь 721 440 уникальных сообщений. <br/>
              Если каждое сообщение выбирается случайно из этого множества, то вероятность, что два подряд будут одинаковыми: <br/> <br/>
              1/7214401 ​≈ 0.000001386 (1.39 на миллион)
              <br />
              <br />
              Шанс того что выпадут два одинаковых предложения примерно один на миллион. <br />
              <br />
              Точно так же как и ты, Асема, одна на миллион.😉
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UnlockedScreen;
