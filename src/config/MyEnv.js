
// react의 경우 env에 REACT_APP을 붙혀야 환경변수를 인식한다.
const MyEnv = {
    REACT_APP_ENV: process.env.REACT_APP_ENV || '',
    REACT_APP_MESERVATION_URL: process.env.REACT_APP_MESERVATION_URL || '',
};

export default MyEnv;