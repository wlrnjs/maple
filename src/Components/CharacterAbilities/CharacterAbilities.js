import React from 'react';
import "./CharacterAbilities.css"
import CharacterBoxComponents from "./CharacterAbilitiesComponents/CharacterBoxComponents/CharacterBoxComponents";
import CharacterAbilitiesComponent
	from "./CharacterAbilitiesComponents/CharacterAbilitiesComponent/CharacterAbilitiesComponent";
import CharacterEquippedComponents
	from "./CharacterAbilitiesComponents/CharacterEquippedComponents/CharacterEquippedComponents";

const CharacterAbilities = ({searchOCID}) => {
	return (
		<div className="character-details-box">
		<div className="character-abilities-container">
			<CharacterBoxComponents  searchOCID={searchOCID}/>
			<CharacterAbilitiesComponent/>
		</div>
			<CharacterEquippedComponents/>
		</div>
	);
};

export default CharacterAbilities;