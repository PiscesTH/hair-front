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
import { useState } from "react";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
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
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState({
    1: [
        { text: "안녕! 잘 지내?", sender: false },
        { text: "응! 너는?", sender: true },
        { text: "나도 좋아!", sender: false },
        { text: "오늘 뭐 했어?", sender: false },
        { text: "운동하고 쉬었어!", sender: true }
      ],
      2: [
        { text: "Hey! What's up?", sender: false },
        { text: "Not much, just chilling.", sender: true },
        { text: "Want to grab a coffee?", sender: false },
        { text: "Sounds good! When?", sender: true },
        { text: "How about 3 PM?", sender: false }
      ]
  });

  const handleSendMessage = (e) => {
    if (e.key === "Enter" && selectedUser) {
      const text = e.target.value.trim();
      if (!text) return;
      
      setMessages((prev) => ({
        ...prev,
        [selectedUser.id]: [
          ...(prev[selectedUser.id] || []),
          { text, sender: true } // 현재 사용자가 보낸 메시지
        ]
      }));

      e.target.value = "";
    }
  };

  return (
    <Container>
      {/* 유저 목록 */}
      <UserList2>
        {users.map((user) => (
          <UserItem
            key={user.id}
            selected={selectedUser?.id === user.id}
            onClick={() => setSelectedUser(user)}
          >
            {user.name}
          </UserItem>
        ))}
      </UserList2>

      {/* 채팅 화면 */}
      <ChatWindow>
        {selectedUser ? (
          <>
            <ChatHeader>{selectedUser.name}와의 채팅</ChatHeader>
            <ChatMessages>
              {(messages[selectedUser.id] || []).map((msg, index) => (
                <Message key={index} isMe={msg.sender}>
                  {msg.text}
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
