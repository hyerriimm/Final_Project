import React, { useState,  } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DatePicker from "react-datepicker";

const Form = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [content, setContent] = useState("");
  const [maxNum, setMaxNum] = useState(""); 
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dDay, setDday] = useState("");
  const [imgFile, setImgFile] = useState(null);

  const resetAllStates = () => {
    setTitle('');
    setAddress('');
    setContent('');
    setMaxNum('');
    setStartDate('');
    setEndDate('');
    setDday('');
    setImgFile(null);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === '' ||
        address.trim() === '' ||
        content.trim() === '' ||
        maxNum.trim() === '' ||
        startDate.trim() === '' ||
        endDate.trim() === '' ||
        dDay.trim() === '' ||
        imgFile === null
    ) {
      return alert('모든항목을 입력해야 등록 가능합니다.')
    }
    const formData = new FormData();
    formData.append('title', title);
    formData.append('address', address);
    formData.append('content', content);
    formData.append('maxNum', maxNum);
    formData.append('startDate', startDate);
    formData.append('endDate', endDate);
    formData.append('dDay', dDay);
    formData.append('imgFile', imgFile);

    // dispatch(__createPosts(formData));

    navigate('/');
    resetAllStates();
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
