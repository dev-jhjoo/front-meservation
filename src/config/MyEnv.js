
// react의 경우 env에 REACT_APP을 붙혀야 환경변수를 인식한다.
const MyEnv = {
    ENV: process.env.REACT_APP_ENV || '',
    MESERVATION_URL: process.env.REACT_APP_MESERVATION_URL || '',
};

export default MyEnv;