import { React, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __cardlist } from '../../../redux/modules/cardlist';

const MainBoard = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLoading, error } = useSelector((state) => state.cardlist);
    const list = useSelector((state) => state.cardlist.cardlist);
    // console.log(list);

    useEffect(()=> {
      dispatch(__cardlist());
    }, [list.length]);

if (isLoading) {
  return <Loading>
    <img alt='로딩중'
  src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921'
  />
    </Loading>
}

  if (error) {
    return <div>{error.message}</div>;
  }

  if (list.length === 0) {
    return (
      <Stack>
        <Empty>•••🤔</Empty>
        <div>게시물 없습니다.</div>
        <div>모임을 만들어 주세요.</div>
      </Stack>
    );
  }

  return (
    <>
      <ListContainer>
        {list.slice().reverse().map((list) => {
          return ( 
            <CardWrapper 
            key={list.id} 
            onClick={() => {
              if (list.restDay.split("일")[0] <= 0) {
                alert('이미 마감된 모임입니다.')
              } else {
                navigate(`/detail/${list.id}`) 
              }
              }}>
              <ImageContainer>
                <img src={list.imgUrl} alt=""/>
              </ImageContainer>
              <DescContainer>
                <TitleWrapper>
                <Title>{list.title}</Title>
                <RestDay>
                {list.restDay.split("일")[0] <= 0 ? (
                <p style={{ color: '#e51e1e'}}>마감 완료</p>
                ):(
                  <p>마감 {list.restDay}</p>
                )}
                </RestDay>
                </TitleWrapper>
                <Address>{list.address}</Address>
                <Dday>{list.dday}</Dday>
              </DescContainer>
            </CardWrapper>
          );
          })}
      </ListContainer>
    </>
  )
}

export default MainBoard;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
  /* display: flex;
  justify-content: center;
  height: 400px;
  font-size: 30px;
  font-weight: bold;
  color: #bdbdbd; */
`;

const Stack = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div{
  font-size: 18px;
  font-weight: bold;
  color: #555555;
  }
`;

const Empty = styled.h1`
  font-size: 100px;
`;

const ListContainer = styled.div`
    display: flex;
    margin: 10px 15px 20px 15px;

  @media only screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    
  }

  @media only screen and (min-width: 720px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    /* max-width: 1000px; */
    justify-content: center;
  }


`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.5px solid #E3F2FD;
  width: 100%;
  min-width: 300px;
  max-width: 380px;
  border-radius: 6px;
  padding: 5px;
  box-shadow: 0.5px 0.5px 1px 0 #cce0ff;
  margin: 10px;
  cursor: pointer;
  :hover {
            filter: brightness(90%);
            box-shadow: 1px 1px 3px 0 #bcd7ff;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  
    img {
        display: flex;
        width: 100%;
        height: 243px ;
        object-fit: cover;
        border-radius: 6px;
    }
`;

const DescContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  /* background-color: antiquewhite; */
  
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 13px 0 0 0;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 0 10px;
  font-family: 'NotoSansKR';
  width: 72%;
`;

const RestDay = styled.div`
  font-size: 11px;
  /* background-color: #f0f0f0; */
  /* border-radius: 1px; */
  color: #1E88E5;
  margin: 0 15px 0 0
`;

const Address = styled.div`
  font-size: 13px;
  font-weight: 400;
  margin: 0 0 2px 10px;
`;

const Dday = styled.div`
  font-size: 13px;
  font-weight: 400;
  margin: 0 0 10px 10px;
`;