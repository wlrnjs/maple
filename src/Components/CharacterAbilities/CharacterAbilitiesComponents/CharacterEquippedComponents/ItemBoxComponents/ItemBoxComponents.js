import React from 'react';
import "./ItemBoxComponents.css"

const ItemBoxComponents = ({item_img, item_option, item_name, item_rare}) => {
	const rareClass = item_rare === "레어"
		? "rare"
		: item_rare === "에픽"
			? "epic"
			: "";
	
	return (
		<div className="item-box-components">
			<img src={item_img} alt="item_icon"/>
			<div className="item-box-details">
				<p>{item_option}</p>
				<p>{item_name}</p>
				<p className={rareClass}>{item_rare}</p>
			</div>
		</div>
	);
};

export default ItemBoxComponents;