import React, { useState, useEffect } from 'react';

const API_KEY = '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';


function ChatGPT(props) {

  const {result} = props
  console.log(result)

  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am chatGPT!", //GPT 시작 멘트
      sender: "ChatGPT"
    }
  ])

  useEffect(() => {
    // Update the document title using the browser API
    if (result) {
      send(result);
    }
  },[result]);

  const [userMessage, setUserMessage] = useState("");

  const handleChange = (e) => {
    setUserMessage(e.target.value); // 입력 필드의 값이 변경될 때 userMessage 상태를 업데이트합니다.
  };


  const handleSend = async (message) => {
    
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    }
    
    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    

    setTyping(true);


    console.log(newMessages)
    await MessageChatGPT(newMessages);

  }

  const send = () => {
    handleSend(result)
  }

  async function MessageChatGPT(charMessages){
    //charMessages{ sender: "user" or "chatGPT", message: "The message content here"}
    // apiMessages { role: "user" or "assistant", content: "the message content here""} api가 알아들을 수 있도록 이런 형태로 바꿔줘야함

    let apiMessage = charMessages.map((messageObject) =>{
      let role = "";
      if(messageObject.sender === "ChatGPT"){
        role="assistant"
      }else{
        role = "user"
      }
      return {
        role: role, content: messageObject.message
      }
    });

    const systemMessage = {
      role: "system",
      content: "Speak like a kind korean woman" //GPT 컨셉 설정
    }

    const apiRequestBody = {
      "model" : "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessage // [message1, message2 ...]
      ]
    }
   
    await fetch("https://api.openai.com/v1/chat/completions",{
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      console.log(data.choices[0].message.content);
      setMessages( 
        [...charMessages, {
          message: data.choices[0].message.content,
          sender: "ChatGPT"
        }]
      );
      setTyping(false);
    });
  }
  
  return (
    <div>
 

     
    </div>

  )
}

export default ChatGPT
