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
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState({
    1: [
      { text: "안녕하세요. 오늘 7시에 커트 예약 가능한가요?", sender: false },
      { text: "네 가능합니다", sender: true },
      { text: "그럼 7시에 갈게요", sender: false },
      { text: "감사합니다.", sender: true },
    ],
    2: [
      { text: "내일 11시에 염색 예약을 하고싶은데요", sender: false },
      { text: "12시에는 가능한데 괜찮으신가요?", sender: true },
      { text: "네 그럼 12시로 해주세요.", sender: false },
      { text: "감사합니다. 12시에 방문해주세요.", sender: true },
      { text: "알겠습니다.", sender: false },
    ],
    3: [
      { text: "화요일 3시에 예약가능한가요 ?", sender: false },
      { text: "죄송합니다. 화요일은 휴뮤입니다.", sender: true },
      { text: "알겠습니다.", sender: false },
    ],
  });

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
            <ChatHeader>{selectedUser.name} 님과의 채팅</ChatHeader>
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
