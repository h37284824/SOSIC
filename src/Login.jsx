// src/components/Login.js

import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  // useState를 사용하여 이메일, 비밀번호, 에러, 로딩 상태를 관리합니다.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 폼 제출 이벤트 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼의 기본 제출 동작(페이지 새로고침)을 막습니다.
    setIsLoading(true); // 로딩 상태 시작
    setError(""); // 이전 에러 메시지 초기화

    // 간단한 유효성 검사
    if (!email || !password) {
      setError("이메일과 비밀번호를 모두 입력해주세요.");
      setIsLoading(false);
      return;
    }

    // --- 비동기 로그인 로직 시뮬레이션 ---
    try {
      // 실제 애플리케이션에서는 이 부분에 API 호출 코드가 들어갑니다.
      // 예: await axios.post('/api/login', { email, password });

      // 1초간의 딜레이를 주어 네트워크 요청을 시뮬레이션합니다.
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 로그인 성공/실패 시나리오를 시뮬레이션합니다.
      if (email === "user@example.com" && password === "password123") {
        alert("로그인 성공!");
        // 로그인 성공 후 페이지 이동 등의 로직을 추가할 수 있습니다.
        // 예: history.push('/dashboard');
      } else {
        throw new Error("이메일 또는 비밀번호가 잘못되었습니다.");
      }
    } catch (err) {
      // 에러가 발생하면 에러 메시지를 상태에 저장합니다.
      setError(err.message);
    } finally {
      // 성공하든 실패하든 로딩 상태를 해제합니다.
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>로그인</h2>

        {/* 에러 메시지가 있을 경우 표시합니다. */}
        {error && <p className="error-message">{error}</p>}

        <div className="input-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@example.com"
            disabled={isLoading} // 로딩 중일 때 입력 비활성화
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password123"
            disabled={isLoading} // 로딩 중일 때 입력 비활성화
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "로그인 중..." : "로그인"}
        </button>
        <div className="extra-links">
          {/* 
            실제 프로젝트에서는 a 태그 대신 react-router-dom의 Link 컴포넌트를 사용합니다.
            예: <Link to="/signup">계정 가입</Link>
          */}
          <Link to="/signup">
            계정 가입
          </Link>
          <span className="separator">|</span>
          <a href="#" onClick={(e) => e.preventDefault()}>
            계정 찾기
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
