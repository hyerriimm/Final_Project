import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userId: "",
    password: "",
    passwordCheck: "",
    nickname: "",
  });


  //const regexId = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
  //const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{3,20}$/


  const onChangeUserId = (e) => {
    setUser({ ...user, userId: e.target.value });
  };


  const onChangePassWord = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  const onChangePassWordCheck = (e) => {
    setUser({ ...user, passwordCheck: e.target.value });
  };

  const onChangeNickName = (e) => {
    setUser({ ...user, nickname: e.target.value });
  };



  return (
    <LoginLayout>
        <Stcontainer>
        <StTitle>회원가입</StTitle>

        <>
            <Input 
                placeholder='이메일을 입력하세요'
                type="email"
                name="userId"
                onChange={onChangeUserId}/>


            <Input  
                placeholder='비밀번호를 입력하세요'
                type="password"
                name="password"
                onChange={onChangePassWord}/>

            <Input  
                placeholder='비밀번호를 다시 한번 입력하세요'
                type="password"
                name="passwordCheck"
                onChange={onChangePassWordCheck}/>
                {
                   user.passwordCheck && (user.password !== user.passwordCheck
                   ? <div style={{color:"red", fontSize:"8px"}}>비밀번호가 일치하지 않습니다</div>
                   : <div style={{color:"green", fontSize:"8px"}}>비밀번호가 일치합니다</div>)
                }

            <Input  
                placeholder='닉네임을 입력하세요'
                type="text"
                name="nickname"
                onChange={onChangeNickName}/>


            <Button 
                  style={{backgroundColor:'#DC781B'}}
                  onClick={() => {navigate()}}n>사진등록</Button>
        </>

        <>
         <StTitle>이용약관</StTitle>
         <AgreeBox>
            <input type="checkbox" name="select-all"/> 모두 동의합니다
                <br/>
            <input type="checkbox"/> 서비스 약관 동의(필수)
                <br/>
            <input type="checkbox"/> 개인정보 수집 및 이용 동의(필수)
                <br/>
            <input type="checkbox"/> 마케팅 정보 수신 동의(선택)
         </AgreeBox>
        </>

            <Button 
                  style={{backgroundColor:'#038E00'}}>회원가입</Button>

        </Stcontainer>
    </LoginLayout> 
    )
  }


export default Signup


const LoginLayout = styled.div`
    background-color: white;
    min-width:375px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`

const Stcontainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    margin-top: 7px;
    margin-bottom: 7px;
    margin-left: 0px;
    margin-right: 0px;
    border: 1px solid #a1a1a1;
    outline: none;
    :hover {
        filter: brightness(95%);}
`

const Button = styled.button`
    height: 40px;
    width: 237px;
    padding: 0 10px;
    margin-top: 20px;
    margin-bottom: 30px;
    margin-left: 0px;
    margin-right: 0px;
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
