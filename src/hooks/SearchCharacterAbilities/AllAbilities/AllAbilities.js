import api from "../../../API/API";
import {useQuery} from "react-query";

const fetchSearchAllAbilities = (id) => {
	return api.get(`/maplestory/v1/character/stat`, {
		params: {ocid : id}
	})
}

export const useSearchCharacterAbilities = (id) => {
	return useQuery({
		queryKey: ["maple-all-abilities", id],
		queryFn: () => fetchSearchAllAbilities(id),
		enabled: !!id,
		select: (response) => response.data,
	})
}