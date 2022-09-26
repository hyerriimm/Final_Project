import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FiTrash2 } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";

import { __detail, __delete, __addWish, __removeWish } from '../../../redux/modules/detail';

const Detail = () => {
  const navigate = useNavigate();
  const params_id = useParams().id;
  const dispatch = useDispatch();

  const { detail, isLoading, error, wishData } = useSelector((state)=> state.detail);
// console.log(detail);
//   address 주소
//   authorNickname 게시글 작성자 닉네임
//   authorId 게시글 작성자 아이디
//   commentList: [] 게시글 댓글 리스트
//   content 게시글 내용
//   dday 모임 일자
//   endDate 마감 일자
//   id 게시글 id
//   maxNum 모집인원
//   memberImgUrl 작성자 프사
//   postImgUrl 게시글 썸네일
//   restDay 남은 모집 기간
//   startDate 공고일
//   title 게시글 제목
//   currentNum 현재 모집된 인원
//   wishPeople: [] 게시물 찜한 사람들 아이디

  const logIn = localStorage.getItem("ACCESSTOKEN");
  const Id = localStorage.getItem("Id");
  // console.log(Id);

  // 찜명단에서 내 아이디과 일치하는 게 있으면 true, 아니면 false
  let wishBoolean = detail.wishPeople?.includes(Id);
  console.log('wishBoolean는',wishBoolean);
  const [isWish, setIsWish] = useState((wishBoolean === true ) ? (true) : (false)); //이거 잘못됨 삼항연산자 수정 필요
  console.log('isWish는', isWish);

  // 찜 기능
  const onClickWishBtn = () => {
    // setIsWish(!isWish);
    if (!isWish) {
      dispatch(__addWish(params_id));
      setIsWish(!isWish);
    } else {
      dispatch(__removeWish(params_id));
      setIsWish(!isWish);
    }
  };

  // 게시글 삭제 기능
  const onDeleteBtn = () => {
    if (window.confirm('게시글을 삭제하시겠습니까?')) {
      dispatch(__delete(params_id));
      navigate('/');
    }
  };
  
  useEffect(()=>{
      dispatch(__detail(params_id))
    },[wishBoolean])

// 로딩 화면
  // if (isLoading) {
  //   return <Loading>
  //     <img alt='로딩중'
  //   src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921'
  //   />
  //     </Loading>
  // }

// 에러 화면
  // if (error) {
  //   return <div>{error.message}</div>;
  // }
    
  return (
    <div>
      <EditnDeleteDiv>
        { logIn == null ? false : 
        (Id === detail.authorId ? (
          <>
            <StEditnDeleteBtn
            onClick={()=>navigate(`/detail/${detail.id}/edit`)}
            >
              <FiEdit size='20' color='#fff' />
            </StEditnDeleteBtn>
            <StEditnDeleteBtn
            onClick={onDeleteBtn}
            >
              <FiTrash2 size='20' color='#fff' />
            </StEditnDeleteBtn>
          </>
        ) : false )}
        </EditnDeleteDiv>
      <Container>
        컨테이너
        <Item1>
          <Img
          src={detail.postImgUrl}
          alt=''
          />
          <ContentAndBtns>
            <div>
              <TitleDiv>
                <h3>{detail.title}</h3>
              </TitleDiv>
              <div style={{display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
                <div style={{display:'flex', alignItems: 'center'}}>
                  <ProfileImg src={ detail.memberImgUrl } alt="profile"/>
                  <h4 style={{width:'150px'}}>{detail.author}</h4>
                </div>
                <StDiv>
                  {detail.restDay?.split("일")[0] <= 0 ? ( 
                    <h4 style={{color:'#1E88E5'}}>마감 완료</h4>
                  ):(
                    <RestDayBtn disable>마감 {detail.restDay}</RestDayBtn> 
                  )}
                  {logIn == null ? false : (!isWish ? (
                    <WishBtn onClick={onClickWishBtn}>🤍</WishBtn>
                  ):(
                    <WishBtn onClick={onClickWishBtn}>💗</WishBtn>
                  ))}
                </StDiv>
              </div>
              <br/>
              <strong>모임 설명</strong>
              <div>{detail.content}</div>
              <br/>
              <div><strong>모집 기간: </strong> {detail.startDate} ~ {detail.endDate} </div>
              <br/>
              <div><strong>모집 인원: </strong> {detail.currentNum}/{detail.maxNum}</div>
              <br/>
              <div><strong>주소: </strong> {detail.address}</div>
              <br/>
              <div><strong>모임 일자: </strong> {detail.dday}</div>
            </div>
            <BtnsDiv>
              { logIn == null ? false : 
              (Id === detail.authorId ? 
                (
                  <StBtn
                  onClick={()=>navigate(`/detail/${detail.id}/check`)}
                  >
                  지원확인
                  </StBtn>
                ):(
                  <StBtn
                  onClick={()=>navigate(`/detail/${detail.id}/apply`)}
                  >
                  신청하기
                  </StBtn>
                )
              )}
            </BtnsDiv>
          </ContentAndBtns>
        </Item1>
        <Item2Map>지도</Item2Map>
      </Container>
    </div>
  );
};

export default Detail;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
`;

const EditnDeleteDiv = styled.div`
display: flex;
justify-content: flex-end;
max-width: 1240px;
margin: 0 auto 15px auto;
  @media only screen and (max-width: 720px) {
  width: 95%;
  }
`;

const Container = styled.div`
  /* background-color: yellow; */
  /* height: 100vh; */
  height: max-content;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(300px,auto);
  grid-template-areas:
    'a'
    'b';
`;

const Item1 = styled.div`
/* 720보다 클 때 나오는 화면 */
  grid-area: a;
  /* background-color: aliceblue; */
  display: flex;
  height: fit-content;
  /* max-height: 60vh; */
  @media only screen and (max-width: 720px) {
    // 720보다 작을 때 나오는 화면
    flex-direction: column;
    max-height: fit-content;
  }
`;

const Img = styled.img`
  /* background-color: orange; */
  object-fit: contain;
  width: 50%;
  max-height: 70%;    
  @media only screen and (max-width: 720px) {
    width: 100%;
    max-height: 500px;
  }
`;

const ContentAndBtns = styled.div`
/* background-color: aqua; */
box-sizing: border-box;
  padding-inline: 20px 10px;
  width: 50%;
  max-height: 70%;    
  @media only screen and (max-width: 720px) {
    width: 100%;
    height: 80%;
  }
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
  }
`;

const StDiv = styled.div`
display: flex;
justify-content: flex-end;
/* width: fit-content; */
width: 100%;
/* min-width: 148px; */
  @media only screen and (max-width: 720px) {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    /* min-width: 148px; */
  }
`;

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-right: 20px;
  border: 2px solid #bcd7ff;
`;

const WishBtn = styled.button`
border: transparent;
background: transparent;
font-size: 25px;
cursor: pointer;  
`;

const RestDayBtn = styled.button`
border: transparent;
border-radius: 6px;
background-color: #eee;
padding: 0 10px;
margin: 0 10px;
/* margin-right: 10px; */
font-size: 12px;
`;

const BtnsDiv = styled.div`
object-fit: contain;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
margin: 10px 0;
`;

const StBtn = styled.button`
object-fit: contain;
  min-width: 30%;
  min-height: 45px;
  color: white;
  background-color: #18A0FB;
  border: transparent;
  border-radius: 6px;
  margin-top: 10px;
  font-size: 15px;
  cursor: pointer;
  :hover {
            filter: brightness(90%);
            box-shadow: 1px 1px 3px 0 #bcd7ff;
  }
`;

const StEditnDeleteBtn = styled.button`
object-fit: contain;
  min-width: 35px;
  min-height: 35px;
  color: white;
  background-color: #ff8a1d;
  border: transparent;
  border-radius: 6px;
  margin-top: 10px;
  margin-right: 10px;
  /* font-size: 15px; */
  cursor: pointer;
  :hover {
            filter: brightness(90%);
            box-shadow: 1px 1px 3px 0 #bcd7ff;
  }
`; 

const Item2Map = styled.div`
  grid-area: b;
  margin-top: 20px;
  background-color: green;
  background-image: url(https://www.website.co.kr/images/sub/tech_map_kakao.jpg);
  background-size: cover;
`;