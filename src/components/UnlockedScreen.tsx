import React, { useState, useEffect } from "react";
import { getRandomMessage } from "../utils/messages";
import { translateText } from "../utils/translate";
import Button from "./Button"; 

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

    useEffect(() => {
        handleNewMessage();
    }, []);

  return (
    <div className="p-[20px] min-h-screen min-w-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-pink-400 to-pink-600">
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg">{message}</h1>
            <p className="text-xl text-white drop-shadow">{translated}</p>

            <Button variant="rect" onClick={handleNewMessage}>
            💖 Нажми на меня 💖
            </Button>
            
        </div>

        <Button variant="circle" onClick={() => setShowModal(true)} className="fixed bottom-4 right-4">i</Button>
        {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50 p-[10px] ">
                <div className="flex flex-col justify-center bg-white rounded-2xl shadow-lg p-6 w-96 relative py-4">
                    <button
                    className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
                    onClick={() => setShowModal(false)}
                    >
                    ×
                    </button>
                    
                    <h2 id="modal-title" className="text-2xl font-bold mb-4 text-pink-600 pr-8">
                    Интересный факт!
                    </h2>
                    
                    <div className="text-gray-700 space-y-3">
                        <p>
                            Здесь 721 440 уникальных сообщений. <br/>
                            Если каждое сообщение выбирается случайно из этого множества, 
                            то вероятность того, что два подряд будут одинаковыми:
                        </p>
                        
                        <div className="bg-gray-50 p-3 rounded-lg font-mono text-sm">
                            1/7214401 ​≈ 0.000001386
                        </div>
                        
                        <p>
                            Шанс того, что выпадут два одинаковых предложения, 
                            приблизительно один на миллион.
                        </p>
                        
                        <p className="font-medium text-pink-600">
                            Точно так же как и ты, Асема, одна на миллион. 😉
                        </p>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default UnlockedScreen;
