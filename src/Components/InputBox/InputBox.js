import React, {useState} from 'react';
import "./InputBox.css"
import {useSearchCharacter} from "../../hooks/useSearchCharacter/SearchCharacter";
import {Alert} from "react-bootstrap";
import {useCharacters} from "../../hooks/CharacterHook";
import {useCharacterList} from "../../hooks/useCharacterList/useCharacterList";

const InputBox = ({title, sub_title}) => {
	const [inputValue, setInputValue] = useState("");
	const {data:ocid} = useCharacters();
	const {data:characterList} = useCharacterList();
	const {data, isLoading, isError, error} = useSearchCharacter(inputValue);
	console.log('SearchCharacter', data);
	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <Alert variant="outline-danger">{error.message}</Alert>;
	
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	}
	console.log("Character OCID:", ocid);
	console.log("Character List:", characterList);
	
	const handleButtonClick = (characterName) => {
		setInputValue(characterName);
		console.log('입력 값', inputValue);
		setInputValue("");
	}
	
	return (
		<div className="search-box">
			<h1>{title}</h1>
			<div className="input-btn-box">
				<input
					type="text"
					placeholder={sub_title}
					value={inputValue}
					onChange={handleInputChange}
				/>
				<button onClick={()=>handleButtonClick()}>검색</button>
			</div>
		</div>
	);
};

export default InputBox;