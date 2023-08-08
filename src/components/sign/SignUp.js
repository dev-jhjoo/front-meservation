import axios from 'axios';
import { useState } from 'react';
import style from './Sign.module.css';
import myEnv from '../../config/MyEnv';


function SignUp() {
    const [formData, setFormData] = useState({
        email: '',
        nickname: '',
        password: '',
        first_name: '',
        last_name: '',
        description: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const url = `${myEnv.MESERVATION_URL}/v1/api/users/signup/`;
        const data = formData;

        console.log(`url=${url}`);
        console.log(`data=${data}`);

        await axios.post(url, data)
            .then((response) => {
                console.log('회원가입 성공:', response.data);
                // 회원가입 성공 후 처리하는 로직을 추가해주세요.
            })
            .catch((error) => {
                console.error('회원가입 오류:', error);
                // 회원가입 오류 처리하는 로직을 추가해주세요.
            });
    };

    return (
        <div className={style.container}>
            <h1>Meservation</h1>
            <div className={style.itemOne}>
                <form onSubmit={handleSubmit}>
                    <div>
                    <input
                        className={style.input}
                        placeholder="이메일"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div>
                    <input
                        className={style.input}
                        placeholder="닉네임"
                        type="text"
                        name="nickname"
                        value={formData.nickname}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div>
                    <input
                        className={style.input}
                        placeholder="비밀번호"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div>
                    <div>
                    <input
                        className={style.input}
                        placeholder="성"
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                    />
                    </div>
                    <input
                        className={style.input}
                        placeholder="이름"
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                    />
                    </div>
                    <button 
                        className={style.button}
                        type="submit">가입하기
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;