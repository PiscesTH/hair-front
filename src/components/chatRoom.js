import {
  ChatWindow,
  ChatHeader,
  ChatInput,
  ChatMessages,
  Message,
  ChatInputContainer,
  SendButton,
} from "../style/inquiryStyle";
import { useState, useEffect, useRef } from "react";
import axios from "../axios";

const ChatRoom = ({ selectedUser }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const socketRef = useRef(null);
  const chatRoomId = selectedUser.ichat;

  useEffect(() => {
    const fetchData = async() => {
      const res = await axios.get("/chat/message", {
        params: {
          ichat: selectedUser.ichat,
        },
      });
      setMessages(res.data.data);
      }
      fetchData();
    // WebSocket 연결 설정
    socketRef.current = new WebSocket(`ws://localhost:8080/ws/chat?chatRoomId=${chatRoomId}`);

    socketRef.current.onopen = () => {
        console.log("WebSocket 연결됨");
    };

    socketRef.current.onmessage = (event) => {
        const receivedMessage = JSON.parse(event.data);
        console.log(receivedMessage);
        setMessages((prev) => [...prev, receivedMessage]);
    };

    socketRef.current.onclose = () => {
        console.log("WebSocket 연결 종료됨");
    };

    return () => {
        socketRef.current.close();
    };

}, [chatRoomId]);

  const handleSendMessage = async () => {
    if (message.trim() && socketRef.current) {
      const chatMessage = {
        ichat: selectedUser.ichat,
        message: message,
        receiverPk: selectedUser.receiverPk
      };

      // 🔹 1. WebSocket을 통해 메시지 실시간 전송
      socketRef.current.send(JSON.stringify(chatMessage));
    try {
      const res = await axios.post("/chat/message", {
        ichat: selectedUser.ichat,
        message: message,
        recieverPk: selectedUser.receiverPk
      });
      console.log(res);
      console.log(selectedUser.receiverPk);
    } catch (err) {
      console.log(err);
    }
    setMessage("");
  }
};

  const sendMessageByEnter = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <ChatHeader>{selectedUser.receiverName} 님과의 채팅</ChatHeader>
      <ChatMessages>
        {(messages || []).map((msg, index) => (
          <Message key={index} receiver={selectedUser.receiverPk !== msg.senderPk}>
            {msg.message}
          </Message>
        ))}
      </ChatMessages>
      <ChatInputContainer>
        <ChatInput
          type="text"
          placeholder="메시지를 입력하세요..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={sendMessageByEnter}
        />
        <SendButton onClick={handleSendMessage}>보내기</SendButton>
      </ChatInputContainer>
    </>
  );
};

export default ChatRoom;
