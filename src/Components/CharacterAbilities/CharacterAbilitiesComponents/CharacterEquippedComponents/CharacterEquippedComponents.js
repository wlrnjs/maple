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
	
	return (
		<div className="character-equipped-box">
			<div className="character-equipped-item-container">
				{equipItemsData?.data.item_equipment.map((item_icon, index) => (
					<ItemBoxComponents
						item_img={equipItemsData?.data.item_equipment[index].item_icon}
						item_name={equipItemsData?.data.item_equipment[index].item_name}
						item_rare={equipItemsData?.data.item_equipment[index].additional_potential_option_grade}
						item_option={equipItemsData?.data.item_equipment[index].potential_option_grade}
						key={index} />
				))}
			</div>

		</div>
	);
};

export default CharacterEquippedComponents;