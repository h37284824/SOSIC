import React, { useState } from "react";
import "./Profile.css";

function Profile() {
	const [nickname, setNickname] = useState("");
	const [image, setImage] = useState(null);
	const [preview, setPreview] = useState(null);
	const fileInputRef = React.useRef();

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setImage(file);
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result);
			};
			reader.readAsDataURL(file);
		} else {
			setPreview(null);
		}
	};

	const handleImageClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("프로필 설정이 완료되었습니다!");
	};

	return (
		<div className="profile-container">
			<h2 className="profile-title">프로필 설정</h2>
			<form onSubmit={handleSubmit}>
				<div className="profile-image-box">
					<div onClick={handleImageClick} style={{ cursor: "pointer", display: "inline-block" }}>
						{preview ? (
							<img src={preview} alt="프로필 미리보기" style={{ width: 100, height: 100, borderRadius: "50%", objectFit: "cover", border: "2px solid #3897f0" }} />
						) : (
							<div style={{ width: 100, height: 100, borderRadius: "50%", background: "#eee", display: "inline-block", lineHeight: "100px", color: "#aaa", fontSize: "2rem" }}>+</div>
						)}
					</div>
					<input
						type="file"
						accept="image/*"
						onChange={handleImageChange}
						ref={fileInputRef}
						style={{ display: "none" }}
					/>
				</div>
				   <input
					   type="text"
					   className="profile-nickname-input"
					   placeholder="사용자 명을 입력하세요"
					   value={nickname}
					   onChange={(e) => setNickname(e.target.value)}
				   />
				   <button type="submit">다음</button>
			</form>
		</div>
	);
}

export default Profile;