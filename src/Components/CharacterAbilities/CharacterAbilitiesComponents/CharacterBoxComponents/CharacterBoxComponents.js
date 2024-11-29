import React, {useState} from 'react';
import "./CharacterBoxComponents.css"
import {useSearchCharacter} from "../../../../hooks/SearchBasicInfo/useSearchCharacter/useSearchCharacter";
import {Alert} from "react-bootstrap";

const CharacterBoxComponents = ({searchOCID}) => {
	const {data: characterInfo, isLoading, isError, error} = useSearchCharacter(searchOCID);
	if (isLoading) return <h1>Loading...</h1>
	if (isError) return <Alert variant="outline-danger">{error.message}</Alert>
	console.log(characterInfo);
	
	return (
		<div>
			<div className="character-info-container">
				<img src="https://avatar.maplestory.nexon.com/Character/NOGCOKMMMPFDGINPAIEHKICNHECHAAKKDPKAHLMGNKMIIIICOANPNONNFNNFGEPNFGIKEIKDNPBAKCBIPBGPDIOHEJKLODCGGEKHOFGLADGEGOIKAGPDKIIGOLFFNENJPOKJPMFEAHACBEIBHHHCHLHDFBBCOACIOJELOGILMDACDPOIKEDNADPMGCPDLOKEIPJDLIOPIAOEFJPACJLBMCBKKOPKCJFMLGALGBEFLJEENJJJJJMCBOLNJFPIGHAK.png" alt=""/>
				<p>nickname</p>
				<div className="level-box">
					<p>level</p>
					<p>exp</p>
				</div>
				<p>since</p>
				<div className="ranking-box">
					<p>Union</p>
					<p>All</p>
					<p>무릉</p>
				</div>
			</div>
		</div>
	);
};

export default CharacterBoxComponents;