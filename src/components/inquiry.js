import {
  Container,
  UserList2,
  UserItem,
  ChatWindow,
  ChatHeader,
} from "../style/inquiryStyle";
import { useState, useEffect } from "react";
import axios from "../axios";
import ChatRoom from "./chatRoom";

const ChatApp = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/chat/chatList");
        setChatList(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const [chatList, setChatList] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <Container>
      {/* 유저 목록 */}
      <UserList2>
        {chatList.map((chat) => (
          <UserItem
            key={chat.ichat + chat.receiver}
            selected={selectedChat?.receiver === chat.receiver}
            onClick={() => setSelectedChat(chat)}
          >
            {chat.receiver}
          </UserItem>
        ))}
      </UserList2>

      {/* 채팅 화면 */}
      <ChatWindow>
        {selectedChat ? (
          <ChatRoom selectedChat={selectedChat}></ChatRoom>
        ) : (
          <ChatHeader>유저를 선택하세요</ChatHeader>
        )}
      </ChatWindow>
    </Container>
  );
};

export default ChatApp;
