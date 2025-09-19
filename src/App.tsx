import { useState } from "react";
import "./App.css";
import LockedScreen from "./components/LockedScreen";
import UnlockedScreen from "./components/UnlockedScreen";

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const passwords = ["Асемa", "асема", "Asema", "asema", "Сасема", "сасема", "Срасема", "срасема"];

  const handleUnlock = () => {
    if (passwords.some(word => word.toLowerCase() === input.trim().toLowerCase())) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Нет, не тебе.");
    }
  };

  return (
    <div className=" min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-pink-400">
      {!unlocked ? (
        <LockedScreen 
          input={input} 
          setInput={setInput} 
          error={error} 
          handleUnlock={handleUnlock} 
        />
      ) : (
        <UnlockedScreen />
      )}
    </div>
  );
}

export default App;
