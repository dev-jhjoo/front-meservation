import { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import style from './Sign.module.css';

import myEnv from '../../config/MyEnv';


function SignIn() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
      const handleLogin = async (e) => {
        // 폼의 기본 동작인 페이지 리로드를 막음
        e.preventDefault(); 

        // 로그인 처리를 수행하는 함수 (예: API 요청 등)
        const url = `${myEnv.MESERVATION_URL}/v1/api/users/login/`;
        const data = {'email':username, password};

        const res = await axios.post(url, data)
            .then((response) => {
                // 로그인 성공 후 처리하는 로직을 추가해주세요.
                alert('로그인 성공:', response.data);
                console.log('로그인 성공:', response.data);
                return response;
            })
            .catch((error) => {
                // 로그인 오류 처리하는 로직을 추가해주세요.
                alert('로그인 오류:', error);
                console.log('로그인 오류:', error);
            });

        console.log(res);
      };

    return (
        <div className={style.container}>
            <h1>Meservation</h1>
            <div className={style.itemOne}>
                <form >
                <div>
                    <input 
                        className={style.input} 
                        type="text" 
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="이메일" />
                </div>
                <div>
                    <input 
                        className={style.input} 
                        type="password" 
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="비밀번호" 
                        autoComplete="off" />
                </div>
                <div>
                    <button className={style.button} onClick={handleLogin} >로그인</button>
                    <button className={style.button}>
                        <Link style={{textDecoration: 'none'}} to="/signup">회원가입</Link>
                    </button>
                </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;