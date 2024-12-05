import React, {useContext} from 'react';
import "./CharacterAbilitiesComponent.css"
import {Alert} from "react-bootstrap";
import {MyContext} from "../../../../hooks/MyContext";
import {useSearchCharacter} from "../../../../hooks/SearchBasicInfo/useSearchCharacter/useSearchCharacter";
import {useSearchCharacterAbilities} from "../../../../hooks/SearchCharacterAbilities/AllAbilities/AllAbilities";

const CharacterAbilitiesComponent = () => {
	const inputValue = useContext(MyContext);
	const {data: characterInfo, isLoading, isError, error} = useSearchCharacter(inputValue);
	const ocidData = characterInfo?.data.ocid
	const { data: characterAbilities} = useSearchCharacterAbilities(ocidData);
	if (isLoading) return <h1>Loading...</h1>
	if (isError) return <Alert variant="outline-danger">{error.message}</Alert>
	
	return (
			<div className="character-abilities-box">
					{characterAbilities?.final_stat?.slice(0,11).map((stat, index) => (
						<div className="character-fight-box" key={index}>
							<p className="character-state-name">{stat.stat_name}</p>
							<p className="character-state-value">{stat.stat_value}</p>
						</div>
					))}
			</div>
	)
		;
};

export default CharacterAbilitiesComponent;