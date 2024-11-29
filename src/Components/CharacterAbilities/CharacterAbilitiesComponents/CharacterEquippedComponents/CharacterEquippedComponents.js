import React from 'react';
import "./CharacterEquippedComponents.css"
import ItemBoxComponents from "./ItemBoxComponents/ItemBoxComponents";

const CharacterEquippedComponents = () => {
	return (
		<div className="character-equipped-box">
			<div className="button-box">
				<button>장비</button>
				<button>캐시</button>
			</div>
			<ItemBoxComponents/>
		</div>
	);
};

export default CharacterEquippedComponents;