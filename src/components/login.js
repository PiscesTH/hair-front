import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import axios from "../axios";
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
  margin-bottom: 10px;
  width: 100%;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 15px;
  font-size: 16px;
`;



const Login = () => {
    const [uid, setUid] = useState("xodus12");
    const [password, setPassword] = useState("xptmxm12!@");
    const [error, setError] = useState("");
    const { login } = useAuth();
  
    let navigate = useNavigate();
  
    // 로그인 버튼 클릭 시 호출되는 함수입니다.
    const handleLogin = async (e) => {
      e.preventDefault(); // 페이지 새로고침 방지

  
      // 예제: 이메일과 비밀번호가 비어 있는지 확인
      if (uid === "" || password === "") {
        setError("아이디 비밀번호를 입력해주세요.");
        return;
      }
      try {
        const res = await axios.post("/user/sign-in", {
          uid: uid,
          upw: password,
        });
        const accessToken = res.data.data.accessToken;
  /*       Cookies.set("accessToken", accessToken, {
          expires: 1, // 쿠키 유효 기간
          secure: true, // HTTPS에서만 사용 가능
          sameSite: "Strict", // 같은 사이트에서만 요청
        }); */
        login(accessToken);
        if (window.history.length > 1) {
          navigate(-1);
        } else {
          navigate("/"); // 기본 이동할 페이지
        }
      } catch (error) {
        setError(error.response.data.message);
        alert("로그인 실패");
      }
    };
  
    // 회원가입 버튼 클릭 시 호출되는 함수입니다.
    const handleRegister = () => {
      navigate("/register");
    };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <InputContainer>
          <label htmlFor="uid">아이디</label>
          <Input
            type="text"
            id="uid"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
            placeholder="아이디를 입력하세요"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">비밀번호</label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
            autoComplete="off"
          />
        </InputContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">로그인</Button>
      </Form>
      <Button onClick={handleRegister}>회원가입</Button>
    </Container>
  );
};

export default Login;
