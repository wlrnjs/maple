import React, {useContext} from 'react';
import "./CharacterEquippedComponents.css"
import ItemBoxComponents from "./ItemBoxComponents/ItemBoxComponents";
import {useSearchItems} from "../../../../hooks/SearchBasicInfo/useSearchEquipItems/useSearchEquipitems";
import {MyContext} from "../../../../hooks/MyContext";
import {useSearchCharacter} from "../../../../hooks/SearchBasicInfo/useSearchCharacter/useSearchCharacter";
import {Alert} from "react-bootstrap";

const CharacterEquippedComponents = () => {
	const inputValue = useContext(MyContext);
	const {data: characterInfo} = useSearchCharacter(inputValue);
	const ocidData = characterInfo?.data.ocid;

	const {data: equipItemsData, isError, error, isLoading} = useSearchItems(ocidData);
	if (isLoading) return <h1>Loading...</h1>
	if (isError) return <Alert variant="outline-danger">{error.message}</Alert>
	console.log(equipItemsData);
	
	return (
		<div className="character-equipped-box">
			<div className="button-box">
				<button>장비</button>
				<button>캐시</button>
			</div>
			<ItemBoxComponents
				item_img={equipItemsData?.data.item_equipment[0].item_icon}
				item_name={equipItemsData?.data.item_equipment[0].item_name}
				item_rare={equipItemsData?.data.item_equipment[0].additional_potential_option_grade}
				item_option={equipItemsData?.data.item_equipment[0].potential_option_grade}
			/>
		</div>
	);
};

export default CharacterEquippedComponents;