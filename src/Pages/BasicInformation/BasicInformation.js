import React, { useState } from "react";
import "./BasicInformation.css";
import InputBox from "../../Components/InputBox/InputBox";
import { Alert } from "react-bootstrap";
import { useBasicInformation } from "../../hooks/SearchBasicInfo/useBasicInformation/useBasicInformation";
import CharacterDetails from "../../Components/CharacterDetails/CharacterDetails";
import { useCharacterPopularity } from "../../hooks/SearchBasicInfo/useCharacterPopularity/useCharacterPopularity";
import { useSearchCharacter } from "../../hooks/SearchBasicInfo/useSearchCharacter/useSearchCharacter";

const BasicInformation = () => {
	const [inputValue, setInputValue] = useState("");
	const [searchOCID, setSearchOCID] = useState("");
	
	const { data: basicInfoData, isLoading, isError, error } = useBasicInformation(searchOCID);
	const { data: popularityData } = useCharacterPopularity(searchOCID);
	const { data: ocidData } = useSearchCharacter(inputValue);
	
	console.log(basicInfoData)
	
	const handleButtonClick = () => {
		if (ocidData?.data.ocid) {
			setSearchOCID(ocidData?.data.ocid);
		} else {
			alert("해당 닉네임에 대한 정보를 찾을 수 없습니다.");
		}
	};
	
	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <Alert variant="danger">{error.message}</Alert>;
	
	return (
		<div className="basic-information-page">
			{!basicInfoData ? (
				<InputBox
					title="기본 정보 조회"
					sub_title="Enter Nickname"
					onButtonClick={handleButtonClick}
					inputValue={inputValue}
					setInputValue={setInputValue}
				/>
			) : null}
			{basicInfoData && (
				<CharacterDetails
					character_img={basicInfoData?.character_image}
					character_name={basicInfoData?.character_name}
					character_level={basicInfoData?.character_level}
					character_class={basicInfoData?.character_class}
					character_class_level={basicInfoData?.character_class_level}
					character_date_create={basicInfoData?.character_date_create}
					character_gild_name={basicInfoData?.character_guild_name}
					character_world_name={basicInfoData?.world_name}
					character_popularity={popularityData}
				/>
			)}
		</div>
	);
};

export default BasicInformation;