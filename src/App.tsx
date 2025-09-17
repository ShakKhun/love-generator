// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-pink-400 to-pink-600">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Text
        </h1>
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
      >
        i
      </button>

    </div>
  )
}

export default App
