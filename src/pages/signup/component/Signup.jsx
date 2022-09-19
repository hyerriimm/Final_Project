import React from 'react'
import styled from "styled-components"
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <LoginLayout>
        <StTitle>회원가입</StTitle>

        <>
            <Input 
            placeholder='아이디를 입력하세요'></Input>
            <Input  
            placeholder='비밀번호를 입력하세요'
            type='password'></Input>
            <Input  
            placeholder='비밀번호를 다시 한번 입력하세요'
            type='password'></Input>
            <Input  
            placeholder='닉네임을 입력하세요'></Input>
            <Button style={{backgroundColor:'#DC781B'}}
                    onClick={() => {navigate();}}n>사진등록</Button>
        </>

        <>
         <StTitle>이용약관</StTitle>
         <AgreeBox>
            <input type="checkbox"/> 모두 동의합니다
                <br/>
            <input type="checkbox"/> 서비스 약관 동의(필수)
                <br/>
            <input type="checkbox"/> 개인정보 수집 및 이용 동의(필수)
                <br/>
            <input type="checkbox"/> 마케팅 정보 수신 동의(선택)
         </AgreeBox>
        </>
        
            <Button style={{backgroundColor:'#038E00'}}
                    onClick={() => {navigate();}}>회원가입</Button>
    </LoginLayout> 
  )
}

export default Signup

const LoginLayout = styled.div`
    background-color: white;
    width:500px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`

const StTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
    color: black;
`

const Input = styled.input`
  height: 40px;
  width: 237px;
  padding: 0 10px;
  margin: 10px 0 10px 0;
  border: 1px solid #a1a1a1;
  outline: none;
  :hover {
    filter: brightness(95%);}
`

const Button = styled.button`
  height: 40px;
  width: 237px;
  padding: 0 10px;
  margin: 10px 0 10px 0;
  border: transparent;
  border-radius: 5px;
  outline: none;
  color:white;
  cursor: pointer;
  :hover {
    filter: brightness(95%);}
`  

const AgreeBox = styled.div`
    flex-direction: row;
`
