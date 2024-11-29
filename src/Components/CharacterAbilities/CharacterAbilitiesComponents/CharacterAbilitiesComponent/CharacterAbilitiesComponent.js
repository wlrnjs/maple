import React, {useState} from 'react';
import "./CharacterAbilitiesComponent.css"
import {useSearchCharacterAbilities} from "../../../../hooks/SearchCharacterAbilities/AllAbilities/AllAbilities";
import {Alert} from "react-bootstrap";

const CharacterAbilitiesComponent = () => {
	const { data: AllAbilities, isLoading, isError, error } = useSearchCharacterAbilities();
	console.log(AllAbilities);
	if (isLoading) return <h1>Loading...</h1>
	if (isError) return <Alert variant="outline-danger">{error.message}</Alert>
	
	return (
		<>
			<div className="character-abilities-box">
				<div className="character-info">
					<p>캐릭터 정보</p>
					<div className="character-info-box">
						<p>전투력</p>
						<p>123123</p>
					</div>
					<div className="character-info-box">
						<p>스탯 공격력</p>
						<p>123123</p>
					</div>
				</div>
				<div className="character-fight">
					<p>전투</p>
					<div className="character-fight-box">
						<p>데미지</p>
						<p>123123</p>
					</div>
					<div className="character-fight-box">
						<p>최종 데미지</p>
						<p>123123</p>
					</div>
					<div className="character-fight-box">
						<p>방어율 무시</p>
						<p>123123</p>
					</div>
					<div className="character-fight-box">
						<p>보스 몬스터 데미지</p>
						<p>123123</p>
					</div>
					<div className="character-fight-box">
						<p>일반 몬스터 데미지</p>
						<p>123123</p>
					</div>
				</div>
			</div>
		</>
	)
		;
};

export default CharacterAbilitiesComponent;