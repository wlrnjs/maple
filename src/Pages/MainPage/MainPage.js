import React, { useState } from 'react';
import "./MainPage.css"
import InputBox from "../../Components/InputBox/InputBox";
import { useSearchCharacter } from "../../hooks/useSearchCharacter/useSearchCharacter";
import { Alert } from "react-bootstrap";

const MainPage = () => {
	const [inputValue, setInputValue] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	
	const { data, isLoading, isError, error } = useSearchCharacter(searchTerm);
	
	const handleButtonClick = () => {
		setSearchTerm(inputValue); // 검색어를 업데이트
	};
	
	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <Alert variant="danger">{error.message}</Alert>;
	
	return (
		<div className="main-page">
			<InputBox
				title="내 캐릭터 OCID 조회"
				sub_title="캐릭터 명"
				onButtonClick={handleButtonClick}
				inputValue={inputValue}
				setInputValue={setInputValue}
			/>
			{isLoading && <h1>Loading...</h1>}
			{isError && <Alert variant="outline-danger">{error.message}</Alert>}
			{data && (
				<div>
					<h2>OCID :</h2>
					<h4>{data?.data.ocid}</h4>
				</div>
			)}
		</div>
	);
};

export default MainPage;