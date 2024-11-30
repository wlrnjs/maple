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
	console.log(characterAbilities);
	
	return (
		<>
			<div className="character-abilities-box">
				<div className="character-info">
					<p>캐릭터 정보</p>
					<div className="character-info-box">
						<p>전투력</p>
						<p>{characterAbilities?.final_stat[0].stat_value}</p>
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