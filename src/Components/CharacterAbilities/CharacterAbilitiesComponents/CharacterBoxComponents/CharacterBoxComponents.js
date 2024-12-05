import React, {useContext} from 'react';
import "./CharacterBoxComponents.css"
import {MyContext} from "../../../../hooks/MyContext";
import {useSearchCharacter} from "../../../../hooks/SearchBasicInfo/useSearchCharacter/useSearchCharacter";
import {Alert} from "react-bootstrap";
import {useBasicInformation} from "../../../../hooks/SearchBasicInfo/useBasicInformation/useBasicInformation";

const CharacterBoxComponents = () => {
	const inputValue = useContext(MyContext);
	const {data: characterInfo, isLoading, isError, error} = useSearchCharacter(inputValue);
	const ocidData = characterInfo?.data.ocid
	const { data: basicInfoData} = useBasicInformation(ocidData);
	
	if (isLoading) return <h1>Loading...</h1>
	if (isError) return <Alert variant="outline-danger">{error.message}</Alert>

	return (
		<div>
			<div className="character-info-container">
				<div className="character-info-name">
					<img
						src="https://avatar.maplestory.nexon.com/Character/NOGCOKMMMPFDGINPAIEHKICNHECHAAKKDPKAHLMGNKMIIIICOANPNONNFNNFGEPNFGIKEIKDNPBAKCBIPBGPDIOHEJKLODCGGEKHOFGLADGEGOIKAGPDKIIGOLFFNENJPOKJPMFEAHACBEIBHHHCHLHDFBBCOACIOJELOGILMDACDPOIKEDNADPMGCPDLOKEIPJDLIOPIAOEFJPACJLBMCBKKOPKCJFMLGALGBEFLJEENJJJJJMCBOLNJFPIGHAK.png"
						alt=""/>
					<p>{basicInfoData?.character_name}</p>
				</div>
				<hr/>
				<div className="level-box">
					<p>레벨: {basicInfoData.character_level}</p>
					<p>경험치: {basicInfoData.character_exp_rate}</p>
				</div>
				<hr/>
				<div className="ranking-box">
					<p>{basicInfoData.world_name}</p>
				</div>
				<hr/>
				<div className="date-box">
					<p>{basicInfoData.character_date_create}</p>
				</div>
			</div>
		</div>
	);
};

export default CharacterBoxComponents;