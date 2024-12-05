import React, {useState} from 'react';
import "./Abilities.css";
import {MyContext} from "../../hooks/MyContext";
import InputBox from "../../Components/InputBox/InputBox";
import {useBasicInformation} from "../../hooks/SearchBasicInfo/useBasicInformation/useBasicInformation";
import {useSearchCharacter} from "../../hooks/SearchBasicInfo/useSearchCharacter/useSearchCharacter";
import {Alert} from "react-bootstrap";
import CharacterAbilities from "../../Components/CharacterAbilities/CharacterAbilities";

const Abilities = () => {
	const [inputValue, setInputValue] = useState("");
	const [searchOCID, setSearchOCID] = useState("");
	
	const { data: ocidData } = useSearchCharacter(inputValue);
	const { data: basicInfoData, isLoading, isError, error } = useBasicInformation(searchOCID);
	
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
		<MyContext.Provider value={inputValue}>
			<div className="abilities-container">
				{!basicInfoData ? (
					<InputBox
						title="능력치 정보 조회"
						sub_title="Enter Nickname"
						onButtonClick={handleButtonClick}
						inputValue={inputValue}
						setInputValue={setInputValue}
						className="input-box"
					/>
				) : null}
				{basicInfoData && (
					<CharacterAbilities/>
				)}
			</div>
		</MyContext.Provider>

);
};

export default Abilities;