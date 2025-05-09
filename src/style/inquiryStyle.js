import styled from "styled-components";

export const InquiryConainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const UserListContainer = styled.div`
  width: 300px;
  height: 500px;
  background-color: #ccc;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const UserList = styled.div`
  width: 90%;
  height: auto;
  padding: 5px 0;
  background-color: beige;
`;

export const ChatContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: #ccc;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 10px 5px;
`;

export const Chat = styled.div`
  width: 80%;
  height: auto;
  padding: 5px 0;
  background-color: beige;
`;

export const Container = styled.div`
  display: flex;
  width: 700px;
  height: 500px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

export const UserList2 = styled.div`
  width: 20%;
  background: #f4f4f4;
  padding: 10px;
  border-right: 1px solid #ddd;
`;

export const UserItem = styled.div`
  padding: 10px;
  margin-bottom: 5px;
  background: ${(props) => (props.selected ? "#ddd" : "#fff")};
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
  &:hover {
    background: #ddd;
  }
`;

export const ChatWindow = styled.div`
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ChatHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ChatMessages = styled.div`
  flex: 1;
  background: #fafafa;
  padding: 10px;
  border-radius: 5px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* 간격 조정 */
  margin-top: 10px;
`;

export const ChatInput = styled.input`
  flex-grow: 1; /* 입력창이 자동으로 확장되도록 설정 */
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const SendButton = styled.button`
  padding: 10px 15px;
  border: none;
  background-color: black;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color:#6b6b6b;
  }
`;

export const Message = styled.div`
  align-self: ${(props) => (props.$isReceiver ? "flex-start" : "flex-end")};
  background: ${(props) => (props.$isReceiver ? "#ddd" : "#4CAF50")};
  color: ${(props) => (props.$isReceiver ? "black" : "white")};
  padding: 5px;
  border-radius: 7px;
`;
