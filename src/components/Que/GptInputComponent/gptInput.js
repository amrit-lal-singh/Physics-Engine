import React, { useState, useEffect } from 'react';
import './gptInput.css'
import { SendOutlined } from '@ant-design/icons';
import { Row } from 'antd';
import CharacterDisplay from './displayChar';

const ChatGptInput = (props) => {
  const [inputText, setInputText] = useState('');



  
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };


  useEffect(() => {
console.log(props)
  }, []);
  
  const postData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/predict_step', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  "text":inputText,"questionNumber" : props.questionDetails.questionNumber.toString()}), // Replace with your data
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      changeStep(responseData)
      console.log(responseData);
    } catch (error) {
      console.log(error.message);
    }
  }

  const changeStep = (res) => {
  props.handleChange(res["predicted_step"], res["predicted_substep"],"This text is similar to the output of chatpgt")
  // props.handleChange(1,6, "this text is similar to the output of chatpgt")

  }

  const handleSendMessage = () => {
    setInputText("")
    postData()

  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  }


  return (
    <Row className="chat-container">
      <div>
      {/* <CharacterDisplay text="Hello, world!" /> */}
    </div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your question..."
          onKeyDown={handleKeyDown}
        />
        <button  onClick={handleSendMessage}><SendOutlined /></button>
      </div>
      {/* <div className="current-question">
        <strong>Current Question:</strong> {inputText}
      </div> */}
    </Row>
  );
};

export default ChatGptInput;
