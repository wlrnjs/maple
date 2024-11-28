import api from "../../API/API";
import {useQuery} from "react-query";

const fetchSearchCharacter = (characterName) => {
	return api.get(`/maplestory/v1/id`, {
		params: { character_name: characterName },
	});
};

export const useSearchCharacter = (characterName) => {
	return useQuery({
		queryKey: ['maple-character', characterName],
		queryFn: () => fetchSearchCharacter(characterName),
		enabled: !!characterName,
	})
}