import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setError("");
		if (!email || !password) {
			setError("이메일과 비밀번호를 모두 입력해주세요.");
			setIsLoading(false);
			return;
		}
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			if (email === "user@example.com" && password === "password123") {
				alert("로그인 성공!");
			} else {
				throw new Error("이메일 또는 비밀번호가 잘못되었습니다.");
			}
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="login-container">
			<form className="login-form" onSubmit={handleSubmit}>
				<h2>로그인</h2>
				{error && <p className="error-message">{error}</p>}
				<div className="input-group">
					<label htmlFor="email">이메일</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="user@example.com"
						disabled={isLoading}
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
						disabled={isLoading}
					/>
				</div>
				<button type="submit" disabled={isLoading}>
					{isLoading ? "로그인 중..." : "로그인"}
				</button>
				<div className="extra-links">
					<Link to="/signup">계정 가입</Link>
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