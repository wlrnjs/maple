import React, {useState} from 'react';
import InputBox from "../../Components/InputBox/InputBox";
import {useBasicInformation} from "../../hooks/SearchBasicInfo/useBasicInformation/useBasicInformation";
import {useCharacterPopularity} from "../../hooks/SearchBasicInfo/useCharacterPopularity/useCharacterPopularity";
import {useSearchCharacter} from "../../hooks/SearchBasicInfo/useSearchCharacter/useSearchCharacter";
import {Alert} from "react-bootstrap";
import CharacterAbilities from "../../Components/CharacterAbilities/CharacterAbilities";

const Abilities = () => {
	const [inputValue, setInputValue] = useState("");
	const [searchOCID, setSearchOCID] = useState("");
	
	const { data: basicInfoData, isLoading, isError, error } = useBasicInformation(searchOCID);
	const { data: popularityData } = useCharacterPopularity(searchOCID);
	const { data: ocidData } = useSearchCharacter(inputValue);
	
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
				<CharacterAbilities searchOCID={searchOCID}/>
			)}
		</div>
	
	);
};

export default Abilities;