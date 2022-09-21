import { React, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import Dropdown from '../components/Dropdown'
// import useDetectClose from "../hooks/useDetectClose";

const Header = () => {
    const navigate = useNavigate();
    const [accesstoken,setAccesstoken] = useState(undefined);
    const [profileImg,setProfileImg] = useState(undefined);
    // const [isOpen, setIsOpen, ref, removeHandler] = useDetectClose(false);

    const profile = `${profileImg}` // "https://avatars.dicebear.com/api/adventurer-neutral/:seed.svg"

    useEffect(()=>{
      const timeout = setTimeout(()=>{
        setAccesstoken(localStorage.getItem("ACCESSTOKEN"));
    },1000);
      return ()=>{clearTimeout(timeout);}
    },[window.location.href, accesstoken, navigate]);

    useEffect(()=>{
      setAccesstoken(localStorage.getItem("ACCESSTOKEN"));
      setProfileImg(localStorage.getItem("ImgURL"));
    });

    
    
    return (
        <>
        <HdContainer>
            <Logo onClick={()=>navigate('/')}>3355</Logo>
            <BtnWrapper>            
                    {/* <Btn onClick={()=>navigate('/form')}>모임등록</Btn>
                    <BtnProfile>
                      <img src={ profile } alt="profile"/>
                    </BtnProfile>
                    <Btn onClick={()=>navigate('/login')}>로그인</Btn> */}
                { accesstoken ? 
                ( <>
                  <Btn onClick={()=>navigate('/form')}>모임등록</Btn>
                  <BtnProfile>
                      <img src={ profile } alt="profile"/>
                  </BtnProfile>
                  </>
                )
                :
                ( <><Btn onClick={()=>navigate('/login')}>로그인</Btn></>
                )}
            </BtnWrapper>
        </HdContainer>
        <Menu>
          <div onClick={()=>navigate('/mypage')}>마이페이지</div>
          <div>로그아웃</div>
        </Menu>
        </>
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
  width: 30px;
  height: 30px;
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
const Menu = styled.div`
    background: #fff;
    border-radius: 8px;
    position: absolute;
    top: 50px;
    right: 25px;
    width: 150px;
    padding: 10px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    z-index: 1000;
`