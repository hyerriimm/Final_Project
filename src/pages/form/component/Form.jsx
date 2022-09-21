import React, { useState,  } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DatePicker from "react-datepicker";

const Form = () => {
  const navigate = useNavigate();

  const [user_name, setUser_Name] = useState(localStorage.getItem('name'));
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null); 
  const [preview, setPreview] = useState("");
  const [sayMe, setSayMe] = useState("");
  const [content, setContent] = useState("");

  const resetStates = () => {
    setUser_Name("");
    setDate("");
    setTitle("");
    setImage(null);
    setPreview("");
    setSayMe("");
    setContent("");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (date.trim() === '' ||
        image === null ||
        sayMe.trim() === '' ||
        content.trim() === ''
    ) {
      return alert('모든항목을 입력하고 일기를 추가해주세요!')
    }
    const formData = new FormData();
    formData.append('user_name', user_name);
    formData.append('date', date);
    formData.append('title', title);
    formData.append('image', image);
    formData.append('sayMe', sayMe);
    formData.append('content', content);

    // dispatch(__createPosts(formData));

    navigate('/');
    resetStates();
  };

  return (
    <ContainerForm onSubmit={onSubmitHandler}>
      <StDiv style={{justifyContent:'flex-start'}}>
        <img
          alt='뒤로가기'
          src='img/backspace.png'
          style={{ width: '25px', height: '25px', marginRight:'10px' }}
          onClick={() => navigate('/')}
        />
        <h3>모임 등록</h3>
      </StDiv>
      <StDiv>
        <span>제목</span>
        <input 
        required
        name='title'
        />
      </StDiv>
      <StDiv>
        <span>모집인원</span>
        <input 
        required
        name='maxNum'
        />
      </StDiv>
      <StDiv>
        <span>내용</span>
        <textarea
        required
        name='content' 
        style={{width:'250px', height:'200px'}}
        />
      </StDiv>
      <StDiv>
        <span>모집기간</span>
        <div>
          <input 
          required
          type='date' 
          name='startDate'
          />
          <input 
          required
          type='date' 
          name='endDate'
          />
        </div>
      </StDiv>
      <StDiv>
        <span>모임일</span>
        <input 
        required
        type='date' 
        name='dDay'
        />
      </StDiv>
      <StButton style={{ backgroundColor: '#DC781B' }}>
        모임 장소 입력(address, 카카오맵)
      </StButton>
      <input 
      required
      type='file'
      name='image'
      />
      <StButton style={{ backgroundColor: '#DC781B' }}>
        썸네일 사진 등록
      </StButton>
      <StButton style={{ backgroundColor: '#038E00' }}>모임 등록하기</StButton>
    </ContainerForm>
  );
};

export default Form;

const ContainerForm = styled.form`
  /* background-color: yellow; */
  min-width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 70px;
  input {
    min-width: 237px;
    min-height: 40px;
    border: 1px solid grey;
    border-radius: 6px;
    margin-top: 10px;
    padding-left: 10px;
    :focus {
      outline: none;
      border-color: #18a0fb;
      box-shadow: 0 0 5px #18a0fb;
    }
  }
`;

const StDiv = styled.div`
  width: 335px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
  }
`;

const StButton = styled.button`
  min-width: 300px;
  min-height: 45px;
  color: white;
  border: transparent;
  border-radius: 6px;
  margin-top: 10px;
  font-size: 15px;
`;
