import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import FrontContent from "./Components/FrontContent";
import Chatbot from "./Components/Chatbot";
import Smain from "./Components/Smain";
import "./App.css";

const App = () => {
  const OPENAI_API_KEY = "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";
  return (
    <>
      <BrowserRouter>
        {" "}
        {/* Added BrowserRouter for routing context */}
        <div className="overflow-hidden">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Main />} /> {/* Root path */}
            <Route path="/frontContent" element={<FrontContent />} />{" "}
            {/* Add this line */}
            <Route
              path="/chatbot"
              element={<Chatbot openaiApiKey={OPENAI_API_KEY} />}
            />
            <Route path="/smain" element={<Smain />} />{" "}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
