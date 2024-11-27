import api from "../API/API";
import {useQuery} from "react-query";

const fetchCharacter = () => {
	return api.get(`/maplestory/v1/id?character_name=ljillij`)
}

export const useCharacters = () => {
	return useQuery({
		queryKey: ['maple-ch'],
		queryFn: fetchCharacter,
		select: (response) => response.data.ocid,
	})
}