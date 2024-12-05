import React, { useState } from 'react';
import "./MainPage.css"
import InputBox from "../../Components/InputBox/InputBox";
import { useSearchCharacter } from "../../hooks/SearchBasicInfo/useSearchCharacter/useSearchCharacter";
import { Alert } from "react-bootstrap";

const MainPage = () => {
	const [inputValue, setInputValue] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	
	const { data, isLoading, isError, error } = useSearchCharacter(searchTerm);
	console.log(data);
	
	const handleButtonClick = () => {
		setSearchTerm(inputValue);
	};
	
	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <Alert variant="danger">{error.message}</Alert>;
	
	return (
		<div className="main-page">
			{!data ? (
				<InputBox
				title="캐릭터 OCID 조회"
				sub_title="닉네임"
				onButtonClick={handleButtonClick}
				inputValue={inputValue}
				setInputValue={setInputValue}
			/>) : null}
			{data?.data && (
				<div className="ocid-box">
					<h2>OCID :</h2>
					<h4>{data?.data.ocid}</h4>
				</div>
			)};
		</div>
	);
};

export default MainPage;