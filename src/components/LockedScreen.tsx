import React from "react";

type LockedScreenProps = {
  input: string;
  setInput: (val: string) => void;
  error: string;
  handleUnlock: () => void;
};

const LockedScreen: React.FC<LockedScreenProps> = ({ input, setInput, error, handleUnlock }) => {
  return (
    <div className="flex flex-col items-center gap-4 p-[20px]">
      <h1 className="text-2xl font-bold text-white drop-shadow">
        Имя девушки, которой будут посвящены следующие слова?
      </h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
        className="px-4 py-2 rounded-lg border border-white bg-transparent text-white placeholder-pink-100 focus:outline-none focus:ring-2 focus:ring-white text-center"
        placeholder="Напиши её имя..."
      />
      <button
        onClick={handleUnlock}
        className="rounded-lg px-6 py-2 bg-white text-pink-600 font-semibold shadow hover:scale-105 transition"
      >
        Продолжить
      </button>
      {error && <p className="text-white font-medium">{error}</p>}
    </div>
  );
};

export default LockedScreen;
