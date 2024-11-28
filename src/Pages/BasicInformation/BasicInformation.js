import React, { useState } from 'react';
import "./BasicInformation.css"
import InputBox from "../../Components/InputBox/InputBox";
import { Alert } from "react-bootstrap";
import {useBasicInformation} from "../../hooks/useBasicInformation/useBasicInformation";
import CharacterDetails from "../../Components/CharacterDetails/CharacterDetails";
import {useCharacterPopularity} from "../../hooks/useCharacterPopularity/useCharacterPopularity";

const BasicInformation = () => {
	const [inputValue, setInputValue] = useState("");
	const [searchOCID, setSearchOCID] = useState("");
	
	const { data, isLoading, isError, error } = useBasicInformation(searchOCID);
	const { data: popularityData} = useCharacterPopularity(searchOCID);
	console.log(popularityData);
	
	const handleButtonClick = () => {
		setSearchOCID(inputValue);
	};
	
	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <Alert variant="danger">{error.message}</Alert>;
	
	return (
		<div>
			{!data ? (
				<InputBox
					title="기본 정보 조회"
					sub_title="ENTER OCID"
					onButtonClick={handleButtonClick}
					inputValue={inputValue}
					setInputValue={setInputValue}
				/>
			) : null}
			{data && (
				<CharacterDetails
					character_img={data?.character_image}
					character_name={data?.character_name}
					character_level={data?.character_level}
					character_class={data?.character_class}
					character_class_level={data?.character_class_level}
					character_date_create={data?.character_date_create}
					character_gild_name={data?.character_guild_name}
					character_world_name={data?.world_name}
					character_popularity={popularityData}
				/>
			)}
		</div>
	);
};

export default BasicInformation;