const REST_API_KEY =  "0d474123830f16d480e5e8350bfa92cf";
const REDIRECT_URI =  "http://localhost:3000/oauth/kakao";
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

// const LOGOUT_REDIRECT_URI = "http://localhost:3000"
// export const KAKAO_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`

