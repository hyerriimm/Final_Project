import React from 'react';
import styled from 'styled-components';


const MypageProfile = () => {
    return (
        <>
            <Container>
                <ProfileWrapper>
                    <Profile />
                    <DescWrapper>
                        <StNickName>닉네임</StNickName>
                        <StId>아이디</StId>
                    </DescWrapper>
                </ProfileWrapper>
                <EditBtn>계정수정</EditBtn>
            </Container>
            <BtnSet>
                <Wish>찜 목록</Wish>
                <Activity>내 활동</Activity>
            </BtnSet>
        </>
    );
}

export default MypageProfile;

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    margin: auto;
    margin-top: 20px;
    /* border: 1px solid black */
`

const ProfileWrapper = styled.div`
    display: flex;
    width: 50vw;
    /* border: 1px solid black */
`

const Profile = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 100%;
  border: 1px solid #d7d7d7;
      img {
          width: 100%;
          height: 100%;
          border-radius: 100%;
      }
`

const DescWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin-left: 20px;
    /* border: 1px solid black */

`

const StNickName = styled.div`
    font-size: 16px;
    font-weight: 600;
    font-family: 'NotoSansKR';
    /* border: 1px solid black */

`

const StId = styled.div`
    font-size: 13px;
    font-family: 'NotoSansKR';
    /* border: 1px solid black */

`

const EditBtn = styled.button`
    border-radius: 4px;
    height: 26px;
    width: 70px;
    font-size: 12px;
    border: 0px;
    margin: 10px 0 0 0
`

const BtnSet = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 38px;
    width: 300px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 20px;
    /* border: 0.5px solid lightgray; */
    border-radius: 4px;

`

const Wish = styled.button`
    height: 36px;
    width: 140px;
    margin: auto;
    text-align: center;
    border: 0.5px solid #2196F3;
    background-color: white;
    border-radius: 4px;
    font-size: 12px;
    text-decoration: none; 
    color: #1565C0 !important;
`

const Activity = styled.button`
    height: 36px;
    width: 140px;
    margin: auto;
    text-align: center;
    border: 0.5px solid #2196F3;
    background-color: white;
    border-radius: 4px;
    font-size: 12px;
    text-decoration: none; 
    color: #1565C0 !important;
`