import React, { useRef, useState, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { DatePicker, RangeDatePicker } from '@y0c/react-datepicker';
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import 'moment/locale/ko';

const Form = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("아직 구현 못함");
  const [content, setContent] = useState("");
  const [maxNum, setMaxNum] = useState(""); 
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dDay, setDday] = useState('');
  const [imgFile, setImgFile] = useState(null);
  const [previewImg, setPreviewImg] = useState('');
  const imgFileInputRef = useRef();
  const imgFileUploadBtnRef = useRef();

  const resetAllStates = () => {
    setTitle('');
    setAddress('');
    setContent('');
    setMaxNum('');
    setStartDate('');
    setEndDate('');
    setDday('');
    setPreviewImg('');
    setImgFile(null);
  };

  const onChangeImgFileInput = (e) => {
    setImgFile(e.target.files[0]);
    setPreviewImg(URL.createObjectURL(e.target.files[0]));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (title.trim() === '' ||
        address.trim() === '' ||
        content.trim() === '' ||
        maxNum.trim() === '' ||
        startDate === null||
        endDate === null ||
        dDay === null ||
        imgFile === null
    ) {
      return alert('모든항목을 입력해야 등록 가능합니다.')
    }
    const formData = new FormData();
    formData.append('title', title);
    formData.append('address', address);
    formData.append('content', content);
    formData.append('maxNum', Number(maxNum));
    formData.append('startDate', new Date(+startDate + 3240 * 10000).toISOString().split("T")[0]);
    formData.append('endDate', new Date(+endDate + 3240 * 10000).toISOString().split("T")[0]);
    formData.append('dDay', new Date(+dDay + 3240 * 10000).toISOString().split("T")[0]);
    formData.append('imgFile', imgFile);

    try {
      const ACCESSTOKEN = localStorage.getItem('ACCESSTOKEN');
      const REFRESHTOKEN = localStorage.getItem('REFRESHTOKEN');
      const response = await axios.post('http://13.125.229.126:8080/post', formData, {
        headers: {
          "Content-Type":"multipart/form-data",
          "Authorization":ACCESSTOKEN,
          "RefreshToken":REFRESHTOKEN,
        }
      });
          
      if (response.data.success === true) {
          alert(response.data.data);
          return navigate('/');
      };
      if (response.data.success === false) {
          alert(response.data.error.message);
          return
      };
  } catch (error) {
      console.log(error);
  }
    navigate('/');
    resetAllStates();
  };


  return (
    <StContainer>
    <Item2Form onSubmit={onSubmitHandler}>
      <StDiv>
        <BackSpaceImg
          alt='뒤로가기'
          src='img/backspace.png'
          onClick={() => navigate('/')}
        />
        <h3>모임 등록</h3>
      </StDiv>
      <StDiv style={{ flexDirection: 'column', alignItems:'normal' }}>
        <StImg
          src={previewImg? previewImg : 'img/addimage.png'}
          alt='썸네일 사진을 등록해주세요.'
          onClick={() => {
            imgFileUploadBtnRef.current.click();
          }}
        />
        <StInput
          type='file'
          style={{ display: 'none' }}
          accept='image/*'
          name='imgFile'
          onChange={onChangeImgFileInput}
          ref={imgFileInputRef}
        />
        <StButton
          style={{ backgroundColor: '#1E88E5' }}
          type='button'
          ref={imgFileUploadBtnRef}
          onClick={() => {
            imgFileInputRef.current.click();
          }}
        >
          썸네일 사진 등록
        </StButton>
      </StDiv>
      <StDiv>
        <StInput
          required
          name='title'
          maxLength={50}
          placeholder='제목 (50자 이내)'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </StDiv>
      <StDiv>
        <StTextarea
        cols='27'
        rows='10'
          required
          name='content'
          placeholder='내용 (250자 이내)'
          maxLength={250}
          onChange={(e) => setContent(e.target.value)}
        />
      </StDiv>
      <MaxNumDiv>
      <div style={{fontWeight:'bold'}}>모집 인원 (3~5명) </div>
        <MaxNumInput
          required
          name='maxNum'
          type='text'
          placeholder='3~5명'
          value={maxNum}
          maxLength={1}
          onChange={(e) =>
            setMaxNum(
              e.target.value.replace(/[^3-5.]/g, '').replace(/(\.*)\./g, '$1')
            )
          }
        />
        <span style={{marginLeft:'10px'}}>명</span>
      </MaxNumDiv>
      <DatePickerDiv>
        <div style={{fontWeight:'bold'}}>모집 기간</div>
        <div style={{marginTop:'10px'}}>
        <RangeDatePicker
            startText='Start'
            endText='End'
            startPlaceholder=" 모집 시작일 "
            endPlaceholder=" 모집 종료일 "
            // locale='ko'
            clear
            // portal
            onChange={(start, end)=>{
              setStartDate(start);
              setEndDate(end);
            }}
          />
        </div>
      </DatePickerDiv>
      <DatePickerDiv>
        <div style={{fontWeight:'bold'}}>모임 날짜</div>
        <div style={{marginTop:'10px'}}>
          <DatePicker
            onChange={(date) => setDday(date.$d)}
            locale='ko'
            showDefaultIcon
            clear
          />
        </div>
      </DatePickerDiv>
      <hr style={{width:'100%', marginTop:'15px'}}/>
      <StButton type='button' style={{ backgroundColor: '#1E88E5' }}>
        모임 장소 입력(address, 카카오맵)
      </StButton>
      <div 
      style={{width:'100%', height:'200px', marginTop:'10px',
      display:'flex', justifyContent:'center', alignItems:'center',
      border:'1px solid grey'}}> 
      지도가 나올 공간 
      </div>
      <StButton type='submit' style={{ backgroundColor: '#038E00' }}>
        모임 등록하기
      </StButton>
    </Item2Form>
    </StContainer>
  );
};

export default Form;

const StContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 0 auto;
  grid-template-areas:
    'a b b b c';
`;

const Item2Form = styled.form`
  /* background-color: yellow; */
  grid-area: b;
  min-width: 375px;
  display: flex;
  flex-direction: column;
  margin: 0 auto; 
`;

const BackSpaceImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  border: transparent;
  cursor: pointer;
  :hover {
            filter: brightness(90%);
            box-shadow: 2px 2px 10px 0 #bcd7ff;
  }
`;

const StInput = styled.input`
    box-sizing: border-box;
    min-width: 100%;
    min-height: 40px;
    border: transparent;
    border-bottom: 1px solid grey;
    margin-top: 10px;
    padding-left: 10px;
    :focus {
      outline: none;
      border-color: #18a0fb;
      box-shadow: 0 0 5px #18a0fb;
    }
`

const MaxNumInput = styled.input`
    box-sizing: border-box;
    width: 80px;
    min-height: 40px;
    border: transparent;
    border: 1px solid #ddd;
    font-size: 15px;
    margin-top: 10px;
    padding-left: 10px;
    :focus {
      outline: none;
      border-color: #18a0fb;
      box-shadow: 0 0 5px #18a0fb;
    }
`

const StTextarea = styled.textarea` 
font-family:'Noto Sans KR', sans-serif;
   width: 100%; 
   height: 200px;
   margin-top: 10px;
   padding-left: 10px;
   border: transparent;
   border-bottom: 1px solid grey;
   :focus {
      outline: none;
      border-color: #18a0fb;
      box-shadow: 0 0 5px #18a0fb;
    }
`;

const StImg = styled.img`
min-width: 300px;
max-width: 375px;
/* min-height: 200px; */
`;

const StDiv = styled.div`
  min-width: 100%;
  max-width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const MaxNumDiv = styled.div`
display: inline-block;
flex-direction: column;
padding-left: 10px;
margin-top: 10px;
`;

const DatePickerDiv = styled.div`
display: flex;
flex-direction: column;
padding-left: 10px;
margin-top: 10px;
`;

const StButton = styled.button`
  min-width: 300px;
  min-height: 45px;
  color: white;
  border: transparent;
  border-radius: 6px;
  margin-top: 20px;
  font-size: 15px;
  cursor: pointer;
  :hover {
            filter: brightness(90%);
            box-shadow: 1px 1px 3px 0 #bcd7ff;
  }
`;
