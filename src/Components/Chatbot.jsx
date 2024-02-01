import React, { useState } from "react";
import axios from "axios";
import Side from "./Side";
import ChatGPTUI from "./ChatGPTUI";
import { IoMdSend } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
const OPENAI_API_KEY = "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";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [showChatGPTUI, setShowChatGPTUI] = useState(false); // New state variable
  const [showConfirmation, setShowConfirmation] = useState(false);

  const showConfirmationDialog = () => {
    setShowConfirmation(true);
  };

  const hideConfirmationDialog = () => {
    setShowConfirmation(false);
  };

  const clearInput = () => {
    showConfirmationDialog();
  };
  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message to state
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputMessage, sender: "user" },
    ]);

    // Add typing indicator to state
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: "", sender: "bot", isTyping: true },
    ]);

    setInputMessage("");

    try {
      if (!showChatGPTUI) {
        setShowChatGPTUI(true);
      }
      // Send user message to OpenAI
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: inputMessage }],
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            "Content-type": "application/json",
          },
        }
      );

      // Get bot's reply and remove typing indicator
      const botReply = response.data.choices[0].message.content;
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        { text: botReply, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      console.error("Error sending message:", error);
      // Handle error, e.g., display an error message to the user
    }
  };

  const copyResponse = () => {
    const lastBotMessage = messages[messages.length - 1];
    if (lastBotMessage && !lastBotMessage.isTyping) {
      navigator.clipboard.writeText(lastBotMessage.text);
    }
  };
  const handleConfirmYes = () => {
    setMessages([]);

    // Optionally, reset any other relevant state variables
    setInputMessage("");

    hideConfirmationDialog();
  };

  const handleConfirmNo = () => {
    hideConfirmationDialog();
  };

  return (
    <>
      <Side />
      <div className="flex flex-col h-screen md:float-right px-5 md:w-[1000px] text-justify">
        <div className=" md:border md:pb-5  solid p-4 border-gray-200  md:mt-5 mt-10 ">
          <p className="font-bold">Ask Chatbot</p>
          <p>
            Explore the Chatbot ecosystem and ﬁnd the resources that you need.
          </p>
        </div>
        {!showChatGPTUI && <ChatGPTUI />}
        <div className="float-right flex-grow overflow-auto p-4 md:p-8 lg:p-12  ">
          {messages.map((msg, index) => (
            <div key={index} className={` message ${msg.sender}`}>
              {msg.sender === "user" && (
                <div className="user-info py-5 ">
                  <h1 className="flex flex-row">
                    {" "}
                    <FaUserCircle className="text-2xl md:text-4xl" />
                    <span className="ml-3 mt-1 md:text-xl">You</span>
                  </h1>
                </div>
              )}
              {msg.sender === "bot" && msg.isTyping && (
                <div className=" md:text-xl typing-indicator ">
                  Bot is typing...
                </div>
              )}
              {msg.sender === "bot" && !msg.isTyping && (
                <div className="bot-info w-10 py-5 md:text-xl flex flex-row ">
                  <img src="L1.png" alt="Bot Icon" />
                  <span className="ml-2 md:text-xl mt-1">SynthAI</span>
                </div>
              )}
              <div className="bg-[#90acac17] rounded-xl message-text pt-5 pb-5 px-10">
                {msg.text}
              </div>
              {msg.sender === "bot" && !msg.isTyping && (
                <div className="copy-button">
                  <button
                    className="px-4 py-2 float-right text-black text-xl md:text-2xl "
                    onClick={() => copyResponse(index)}
                  >
                    <MdContentCopy />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="input-container   float-right md:p-8 lg:p-12">
          <div className="md:float-right flex">
            <input
              type="text"
              placeholder="Type your message..."
              className="mr-2 w-80 md:w-[750px] p-2 border drop-shadow-xl border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-5"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />
            <button
              className="px-4  bg-blue-500 text-white rounded-xl mb-5 drop-shadow-xl"
              onClick={sendMessage}
            >
              <IoMdSend />
            </button>
            <div>
              <div className="clear-chat">
                <button
                  className="drop-shadow-xl border solid border-gray-400 rounded-xl text-2xl bg-[#f12525] text-white md:text-4xl px-2 py-3 md:py-1 ml-3 mb-5"
                  id="delete-btn "
                  onClick={clearInput}
                >
                  <MdDeleteOutline className="" />
                </button>
              </div>

              {/* Confirmation Dialog */}
              {showConfirmation && (
                <div
                  className="confirmation-dialog bg-[#eaecec] rounded-xl py-2 px-3 md:w-[300px] w-[200px]"
                  id="confirmationDialog"
                  style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    // backgroundColor: "var(--bg-color)",
                    border: "1px solid var(--bg-second-color)",
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                    color: "var(--text-color)",
                    zIndex: 1000,
                    display: "block", // or use 'flex', 'inline', etc. based on your layout
                  }}
                >
                  <div className="dialog-content ">
                    <p>Are you sure you want to clear the chat?</p>
                    <button
                      id="confirmYes"
                      onClick={handleConfirmYes}
                      style={{
                        background: "#ff4f4f",
                        color: "#fff",
                        margin: "20px 10px",
                        padding: "5px 10px",
                        cursor: "pointer",
                        border: "none",
                        borderRadius: "5px",
                      }}
                    >
                      Yes
                    </button>
                    <button
                      className="text-white bg-sky-300 py-3 px-2 ml-5"
                      id="confirmNo"
                      onClick={handleConfirmNo}
                      style={{
                        padding: "5px 10px",
                        cursor: "pointer",
                        border: "none",
                        borderRadius: "5px",
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
