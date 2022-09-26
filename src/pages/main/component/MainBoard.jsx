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
      <Container>
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
      </Container>
    </>
  )
}

export default MainBoard;


const Container = styled.div`
    display: flex;
    justify-content: center;
    /* background-color: antiquewhite; */
    /* border: 1px solid black; */
    
`

const ListContainer = styled.div`
    /* display: flex; */
    /* margin: 10px 15px 20px 15px; */
    /* border: 1px solid black; */

  @media only screen and (max-width: 854px) {
    flex-direction: column;
    align-items: center;    
  }

  @media only screen and (min-width: 854px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 824px;
    /* max-width: 1000px; */
    /* justify-content: center; */
  }

  @media only screen and (min-width: 1240px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1240px;
    /* max-width: 1000px; */
    /* justify-content: center; */
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