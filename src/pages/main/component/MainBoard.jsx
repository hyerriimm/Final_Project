import { React, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __cardlist } from '../../../redux/modules/cardlist';

const MainBoard = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const list = useSelector((state) => state.cardlist.cardlist)
    console.log(list)

    useEffect(()=> {
      dispatch(__cardlist());
    }, []);


  return (
    <>
      <ListContainer>
        {list.map((list) => {
          return ( 
            <CardWrapper key={list.id} onClick={() => { navigate(`/detail/${list.id}`) }}>
              <ImageContainer>
                <img src={list.imgUrl} alt=""/>
              </ImageContainer>
              <DescContainer>
                <TitleWrapper>
                <Title>{list.title}</Title>
                <RestDay><p>마감 {list.restDay}</p></RestDay>
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


const ListContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 10px;
    

`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.5px solid #E3F2FD;
  width: 70vw;
  min-width: 300px;
  max-width: 380px;
  border-radius: 6px;
  padding: 5px;
  box-shadow: 0.5px 0.5px 1px 0 #cce0ff;
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