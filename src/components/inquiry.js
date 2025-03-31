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
        setUserList(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const selectUser = async (user) => {
    setSelectedUser(user);
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
