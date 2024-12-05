import React from 'react';
import "./CharacterDetails.css";

const CharacterDetails = ({ character_img, character_name, character_popularity, character_level, character_class, character_class_level, character_date_create, character_world_name, character_gild_name }) => {
	return (
		<div className="parent-container">
			<div className="character-details">
				<img src={character_img} alt="character-detail" className="character-detail-img"/>
				<h3>{character_name}</h3>
				<div className="level-popularity-box">
					<p>{character_level}</p>
					<p>인기도: {character_popularity}</p>
				</div>
				<div className="class-box">
					<p>{character_class}</p>
					<p>{character_class_level}차</p>
				</div>
				<p>{character_world_name}</p>
				<p>{character_gild_name}</p>
				<p>생성일: {character_date_create}</p>
			</div>
		</div>
	);
};

export default CharacterDetails;