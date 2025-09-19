'use client'
import {Slider} from "@heroui/react";
// import { createContext } from 'react'
 
// const Context = createContext()

import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8080; // default port to listen

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, () => {
   console.log(`server started at http://localhost:${port}`);
});

/* 
//firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj8aMyz7av2m_1Lk2QJmejC5EjnrzUT2Y",
  authDomain: "screenbreak-7baa8.firebaseapp.com",
  projectId: "screenbreak-7baa8",
  storageBucket: "screenbreak-7baa8.firebasestorage.app",
  messagingSenderId: "901032047458",
  appId: "1:901032047458:web:a0c5490e0ad45d4ee4f23b",
  measurementId: "G-0VBQ029SMC"
};

*/


// Initialize Firebase


export default function Home() {
  function handleStartClick() {

  }

  function handleCancelClick() {

  }
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center 
      justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="justify-items-center space-y-1">
        <h1 className="text-center text-8xl">ScreenBreak</h1>
        <p className="text-center">To take care of your eyes, optometrists 
          recommend taking a 20 second break looking at something 20 ft. <br />
          from your screen every 20 minutes. ScreenBreak takes care of the 
          reminders for you. 
        </p>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="space-y-15">
          <div className="bg-[#3C3D37] rounded-lg">
            <h1 className="text-center text-8xl p-6">
              20:00
            </h1>
          </div>
          <div className="flex justify-between">
            <button className = "w-36 p-4 bg-[#697565] rounded">Start</button>
            <button className = "p-4 w-36 bg-[#697565] rounded">Cancel</button>
          </div>
        </div>
      </main>
    </div>
  );
}
