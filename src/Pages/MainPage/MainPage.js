import React from 'react';
import "./MainPage.css"
import InputBox from "../../Components/InputBox/InputBox";

const MainPage = () => {
	
	return (
		<>
			<div className="main-page">
				<InputBox title="내 캐릭터 검색" sub_title="캐릭터 이름"/>
			</div>
		</>
	);
};

export default MainPage;