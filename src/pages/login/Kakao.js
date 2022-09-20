import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Kakao = () => {
  const navigate = useNavigate();
  let code = new URL(window.location.href).searchParams.get('code');
  console.log(code);
  React.useEffect(() => {
    kakaologin(code);
  }, []);

  const kakaologin = async (_code) => {
    try {
      const response = await axios.get(`api/member/kakao?code=${_code}`); //백엔드로 인가코드 보내기

      localStorage.setItem('ACCESS_TOKEN', response.headers.authorization);
      localStorage.setItem('REFRESHTOKEN', response.headers.refreshtoken);
      console.log(response);

      if(response.data.success === true) {
        alert('로그인 되었습니다.');
        navigate('/');
      }
    } catch (error) {
      console.lof(error);  
      console.log('카카오 로그인 실패');
    }
  };

  return null;
};

export default Kakao;
