const REST_API_KEY =  "아직 없음";  //"d808b4d11eaadb71d6b83d935725e200";
const REDIRECT_URI =  "http://localhost:3000/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=profile_nickname,profile_image,account_email`;

const LOGOUT_REDIRECT_URI = "http://localhost:3000"

export const KAKAO_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`

