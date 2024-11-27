import api from "../../API/API";
import {useQuery} from "react-query";

const fetchCharacterList = () => {
	return api.get(`/maplestory/v1/character/list`)
}

export const useCharacterList = () => {
	return useQuery({
		queryKey: ['maple-character-list'],
		queryFn: fetchCharacterList,
		select: (response) => response.data.account_list[0].character_list
	})
}