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

const ChatRoom = ({ selectedChat }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null); // 스크롤 이동을 위한 ref
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/chat/message", {
        params: {
          ichat: selectedChat.ichat,
        },
      });
      setMessages(res.data.data);
    };
    fetchData();

    const protocol = window.location.protocol === "https:" ? "wss" : "ws";
    const host = window.location.host; // 자동으로 현재 호스트 가져오기
    const wsUrl = `${protocol}://${host}/ws/chat?chatRoomId=${selectedChat.ichat}`;
    // const wsUrl = `${protocol}://localhost:8080/ws/chat?chatRoomId=${selectedChat.ichat}`; //local 테스트용

    // WebSocket 연결 설정
    socketRef.current = new WebSocket(wsUrl);

    socketRef.current.onopen = () => {
      // console.log("WebSocket 연결됨");
    };

    socketRef.current.onmessage = (event) => {
      const receivedMessage = JSON.parse(event.data);
      setMessages((prev) => [...prev, receivedMessage]);
    };

    socketRef.current.onclose = () => {
      // console.log("WebSocket 연결 종료됨");
      
    };

    return () => {
      socketRef.current.close();
    };
  }, [selectedChat.ichat]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: isFirstLoad.current ? "auto" : "smooth",
    });
    isFirstLoad.current = false; // 첫 로딩 후에는 부드럽게 스크롤
  }, [messages]);

  const handleSendMessage = async () => {
    if (message.trim() && socketRef.current) {
      const chatMessage = {
        ichat: selectedChat.ichat,
        message: message,
        sender: selectedChat.sender,
      };

      // 🔹 1. WebSocket을 통해 메시지 실시간 전송
      socketRef.current.send(JSON.stringify(chatMessage));
      try {
        const res = await axios.post("/chat/message", {
          ichat: selectedChat.ichat,
          message: message,
        });
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
      <ChatHeader>{selectedChat.receiver} 님과의 채팅</ChatHeader>
      <ChatMessages>
        {(messages || []).map((msg, index) => (
          <Message
            key={index}
            $isReceiver={selectedChat.receiver === msg.sender}
          >
            {msg.message}
          </Message>
        ))}
        <div ref={messagesEndRef} />
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
