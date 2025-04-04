// import axios from "./axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "../axios";

function Signup() {
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const [passwordForConfirm, setPasswordForConfirm] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!uid || !password || !passwordForConfirm || !name || !email) {
      setError("모든 필드를 입력해주세요.");
      return;
    }

    if (uid.length < 6 || uid.length > 12) {
      setError("아이디는 6자 ~ 12자이어야 합니다.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("올바른 이메일 주소를 입력해주세요.");
      return;
    }

    if (password.length < 8 || password.length > 20) {
      setError("비밀번호는 8자 ~ 20자이어야 합니다.");
      return;
    }

    if (password !== passwordForConfirm) {
      setError("비밀번호가 다릅니다.");
      return;
    }

    const formData = { uid: uid, upw: password, nm: name, email: email };
    setError("");

    try {
      const res = await axios.post("/user/sign-up", formData);
      alert("회원가입 완료 !");
      navigate("/login");
    } catch (error) {
      setError(error.response.data.validErrorList[0].message);
      alert("회원가입 실패...");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSignup}>
        <InputContainer>
          <label htmlFor="uid">아이디</label>
          <Input
            type="text"
            id="uid"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
            placeholder="아이디 입력(6~12자)"
            autoComplete="off"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">비밀번호</label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~20자)"
            autoComplete="off"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="passwordForConfirm">비밀번호 확인</label>
          <Input
            type="password"
            id="passwordForConfirm"
            value={passwordForConfirm}
            onChange={(e) => setPasswordForConfirm(e.target.value)}
            placeholder="비밀번호를 다시 입력하세요"
            autoComplete="off"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="name">이름</label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력하세요"
            autoComplete="off"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">이메일</label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
            autoComplete="off"
          />
        </InputContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">회원가입</Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  margin-bottom: 15px;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 0;
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 15px;
  font-size: 16px;
`;

export default Signup;
