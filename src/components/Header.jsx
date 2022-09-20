import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    
    const profile = "https://avatars.dicebear.com/api/adventurer-neutral/:seed.svg"


    return (
        <HdContainer>
            <Logo onClick={()=>navigate('/')}>3355</Logo>
            <BtnWrapper>            
                    <Btn onClick={()=>navigate('/form')}>모임등록</Btn>
                    <BtnProfile>
                      <img src={ profile } alt="profile"/>
                    </BtnProfile>
                    <Btn onClick={()=>navigate('/login')}>로그인</Btn>
                {
                // accesstoken || kakaoAccesstoken ? 
                // (
                //   <>
                //     <Btn>모임등록</Btn>
                //     <Btn>MYPAGE</Btn>
                //   </>
                // )
                // :
                // (
                //   <>
                //   <Btn>로그인</Btn>
                // </>
                // )
              }
            </BtnWrapper>
        </HdContainer>
    );
};

export default Header;

const HdContainer = styled.div`
    background-color: #ECE8E5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    width: 100%;
    margin: 0 auto;
    height: 56px;
    z-index: 100;
`

const Logo = styled.span`
  padding: 0 0 0 30px;
  text-align: center;
  font-size: 20px;
  letter-spacing: 3.5px;
  font-weight: 800;
  color: #102442;
  cursor: pointer;
`
const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Btn = styled.div`
  margin: 0 30px 0 0;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`
const BtnProfile = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  margin: 0 30px 0 0;
  text-align: center;
  font-size: 14px;
  border: 0.3px solid #B3A394;
  cursor: pointer;

      img {
          width: 100%;
          height: 100%;
          border-radius: 100%;          
      }
`