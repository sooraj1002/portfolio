"use client";

import { useState } from "react";
import axios from "axios";
import { FaArrowUp } from "react-icons/fa"; // Import the arrow icon

const Cinnamon = () => {
  const [userInput, setUserInput] = useState<string>("");
  //const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  ); // To store chat messages

  // Handle input change, updates state as you type
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  // Handle form submission, makes API request
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!userInput.trim()) return; // Do nothing if input is empty

    // Add user message to chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: userInput },
    ]);

    setLoading(true);
    try {
      const res = await axios.post(
        "https://cinnamon-api.onrender.com/ask-pet",
        {
          text: userInput,
        }
      );

      // Add Cinnamon's response to chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "cinnamon", text: res.data.response },
      ]);
    } catch (error) {
      console.error("Error communicating with backend:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "cinnamon", text: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
    setUserInput(""); // Clear the input after submission
  };

  return (
    <div className="flex flex-col w-full items-center justify-center text-white py-10 px-4 mt-10">
      <h2 className="text-xl font-bold mb-10 ">
        Get to know my latest creation below, Cinnamon.
      </h2>
      {/* Chat messages container */}
      <div className="w-full p-4 h-96 bg-[#212121] rounded-t-lg overflow-y-auto space-y-4 ">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg ${
                message.sender === "user"
                  ? "bg-[#ED9FBE] text-white"
                  : "bg-[#ED9FBE] text-white"
              }`}
            >
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input form container */}
      <form
        onSubmit={handleSubmit}
        className="w-full p-4 bg-[#212121] shadow-lg rounded-b-lg space-y-4"
      >
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Type a command like 'feed' or 'play'"
            className="w-full p-1 border border-gray-300 rounded-lg text-white bg-[#2F2F2F] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Button with FaArrowUp icon */}
          <button
            type="submit"
            className="py-2 px-4 bg-[#ED9FBE] text-white font-semibold rounded-full shadow-md hover:bg-[#ED9FBE] focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {/* Use FaArrowUp as the button content */}
            <FaArrowUp className="text-2xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Cinnamon;
