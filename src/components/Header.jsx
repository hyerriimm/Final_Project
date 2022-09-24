import { React, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    const [accesstoken,setAccesstoken] = useState(undefined);
    const [profileImg,setProfileImg] = useState(undefined);
    const profile = `${profileImg}` // "https://avatars.dicebear.com/api/adventurer-neutral/:seed.svg"

    // const modalRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const handleModal = () => {
      setIsOpen(!isOpen)
    };


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


    // useEffect(() => {
    //   const onClickOutside = (e) => {
    //       if (elem.current !== null && !elem.current.contains(e.target)) {
    //           setIsOpen(!isOpen);
    //       }
    //   };
    //   if (isOpen) {
    //       window.addEventListener("click", onClickOutside);
    //   }
    //   return () => {
    //       window.removeEventListener("click", onClickOutside);
    //   };
    // });

    const siteLogout = () => {
      if (window.confirm("로그아웃 하시겠습니까?")) {
        setAccesstoken(localStorage.removeItem("ACCESSTOKEN"));
        setAccesstoken(localStorage.removeItem("REFRESHTOKEN"));
        setProfileImg(localStorage.removeItem("ImgURL"));
        alert('로그아웃 되었습니다.')
        navigate("/");
      } else {
          console.log("로그인 유지");
      }
  };
    
    return (
        <>
        <HdContainer>
            <Logo onClick={()=>navigate('/')}>3355</Logo>
            <BtnWrapper>            
                { accesstoken ? 
                ( <>
                  <Btn onClick={()=>navigate('/form')}>모임등록</Btn>
                  <BtnProfile onClick={handleModal}>
                      <img src={ profile } alt="profile"/>
                  </BtnProfile>
                  </>
                )
                :
                ( <><Btn onClick={()=>navigate('/login')}>로그인</Btn></>
                )}
            </BtnWrapper>
        </HdContainer>
        {isOpen === false ? null 
        : <ModalBackdrop onClick={handleModal}>
        <Menu>
          <MenuText onClick={()=>navigate('/mypage')}>마이페이지</MenuText>
          <MenuText onClick={siteLogout}>로그아웃</MenuText>
        </Menu>
        </ModalBackdrop>
        }
        </>
    );
};

export default Header;

const HdContainer = styled.div`
    background-color: #ffffff;
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
  font-family: 'NotoSansKR';
  font-weight: 600;
  cursor: pointer;
`
const BtnProfile = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin: 0 30px 0 0;
  text-align: center;
  font-size: 14px;
  border: 2.5px solid #42A5F5;
  cursor: pointer;
  :hover {
            filter: brightness(110%);
         }          

      img {
          width: 100%;
          height: 100%;
          border-radius: 100%;
      }
`

const ModalBackdrop = styled.div`
    
`

const Menu = styled.div`
    background: #fff;
    border-radius: 8px;
    position: absolute;
    top: 50px;
    right: 25px;
    width: 150px;
    padding: 20px 0 10px 0;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    z-index: 1000;
`

const MenuText = styled.div`
    margin: 0 0 10px 0;
    font-size: 14px;
    cursor: pointer;
`