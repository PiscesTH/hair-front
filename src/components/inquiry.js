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
} from "../style/inquiryStyle";
import { useState, useEffect } from "react";
import axios from "../axios";

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
     const fetchData = async() => {
      try {
        const res = await axios.get("/chat/chatList");
        setUserList(res.data.data);
      } catch (err) {
        console.log(err);
      }
     }
    fetchData();
  }, [])

  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    if (e.key === "Enter" && selectedUser) {
      const text = e.target.value.trim();
      if (!text) return;

      setMessages((prev) => ({
        ...prev,
        [selectedUser.id]: [
          ...(prev[selectedUser.id] || []),
          { text, sender: true }, // 현재 사용자가 보낸 메시지
        ],
      }));

      e.target.value = "";
    }
  };

  const selectUser = async (user) => {
    setSelectedUser(user);
    const res = await axios.get("/chat/message", {
      params: {
        ichat: user.ichat
      }
    });
    console.log(res.data.data);
    console.log(user);
    setMessages(res.data.data);
  }

  return (
    <Container>
      {/* 유저 목록 */}
      <UserList2>
        {userList.map((user) => (
          <UserItem
            key={user.ichat + user.receiverName}
            selected={selectedUser?.id === user.id}
            onClick={() => selectUser(user)}
          >
            {user.receiverName}
          </UserItem>
        ))}
      </UserList2>

      {/* 채팅 화면 */}
      <ChatWindow>
        {selectedUser ? (
          <>
            <ChatHeader>{selectedUser.receiverName} 님과의 채팅</ChatHeader>
            <ChatMessages>
              {(messages || []).map((msg, index) => (
                <Message key={index} isMe={selectedUser.receiverPk === msg.senderPk}>
                  {msg.message}
                </Message>
              ))}
            </ChatMessages>
            <ChatInput
              type="text"
              placeholder="메시지를 입력하세요..."
              onKeyDown={handleSendMessage}
            />
          </>
        ) : (
          <ChatHeader>유저를 선택하세요</ChatHeader>
        )}
      </ChatWindow>
    </Container>
  );
};

export default ChatApp;
