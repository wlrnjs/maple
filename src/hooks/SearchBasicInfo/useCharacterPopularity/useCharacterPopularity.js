import api from "../../../API/API";
import {useQuery} from "react-query";

const fetchCharacterPopularity = (string) => {
	return api.get(`/maplestory/v1/character/popularity`, {
		params: { ocid: string }
	})
}

export const useCharacterPopularity = (string) => {
	return useQuery({
		queryKey: ["maple-character-popularity", string],
		queryFn: () => fetchCharacterPopularity(string),
		enabled: !!string,
		select: (response) => response.data.popularity,
	})
}