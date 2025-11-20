import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import Profile from "../Profile/Profile.jsx";

function SignUp() {
	const [showProfile, setShowProfile] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setShowProfile(true);
	};

	return (
		<div className="slide-wrapper">
			<div className={`slide-signup${showProfile ? " slide-left" : ""}`}>
				<div className="signup-container">
					<div className="signup-logo">SOMUZE</div>
					<form onSubmit={handleSubmit}>
						<input type="text" placeholder="사용자 이름" />
						<input type="email" placeholder="이메일 주소" />
						<input type="password" placeholder="비밀번호" />
						<button type="submit">회원가입</button>
					</form>
					<div className="signup-bottom">
						이미 계정이 있으신가요? <Link to="/user/login">로그인</Link>
					</div>
				</div>
			</div>
			<div className={`slide-profile${showProfile ? " slide-in" : ""}`}>
				{showProfile && <Profile />}
			</div>
		</div>
	);
}

export default SignUp;