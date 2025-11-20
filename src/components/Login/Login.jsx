import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // ★ CSS 파일 import 필수

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // 에러 초기화

    const formData = new URLSearchParams();
    formData.append('username', credentials.username);
    formData.append('password', credentials.password);

    try {
      const response = await axios.post('http://localhost:8080/user/login', formData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true
      });

      if (response.status === 200) {
        const targetUrl = response.data.redirectUrl || '/home';
        navigate(targetUrl);
      }
    } catch (err) {
      setError('아이디 또는 비밀번호가 일치하지 않습니다.' + err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>로그인</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">아이디</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="아이디를 입력하세요"
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-button">로그인</button>
        </form>

        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default Login;