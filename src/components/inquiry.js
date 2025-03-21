import {
  Chat,
  ChatContainer,
  InquiryConainer,
  UserListContainer,
  Container,
  UserList2,
  UserItem,
  ChatWindow,
  ChatHeader,
  ChatInput,
  ChatMessages,
  Message,
  ChatInputContainer,
  SendButton,
  SendMessageButton,
} from "../style/inquiryStyle";
import { useState, useEffect } from "react";
import axios from "../axios";
import ChatRoom from "./chatRoom";

const users = [
  { id: 1, name: "윤하" },
  { id: 2, name: "태연" },
  { id: 3, name: "태하" },
];

const Inquiry = () => {
  return (
    <InquiryConainer>
      <UserListContainer></UserListContainer>
      <ChatContainer>
        <Chat>111</Chat>
        <Chat>222</Chat>
        <Chat>333</Chat>
        <Chat>444</Chat>
        <Chat>555</Chat>
      </ChatContainer>
    </InquiryConainer>
  );
};

const ChatApp = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/chat/chatList");
        setUserList(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState();

  const handleSendMessage = async () => {
    if (!message) return;
    try {
      const res = await axios.post("/chat/message", {
        ichat: selectedUser.ichat,
        message: message,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const sendMessageByEnter = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const selectUser = async (user) => {
    setSelectedUser(user);
    const res = await axios.get("/chat/message", {
      params: {
        ichat: user.ichat,
      },
    });
    console.log(res.data.data);
    console.log(user);
    setMessages(res.data.data);
  };

  return (
    <Container>
      {/* 유저 목록 */}
      <UserList2>
        {userList.map((user) => (
          <UserItem
            key={user.ichat + user.receiverName}
            selected={selectedUser?.receiverPk === user.receiverPk}
            onClick={() => selectUser(user)}
          >
            {user.receiverName}
          </UserItem>
        ))}
      </UserList2>

      {/* 채팅 화면 */}
      <ChatWindow>
        {selectedUser ? (
          <ChatRoom selectedUser={selectedUser}></ChatRoom>
        ) : (
          <ChatHeader>유저를 선택하세요</ChatHeader>
        )}
      </ChatWindow>
    </Container>
  );
};

export default ChatApp;
