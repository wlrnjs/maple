import api from "../../API/API";
import {useQuery} from "react-query";

const fetchBasicInformation = (string) => {
	return api.get(`/maplestory/v1/character/basic`, {
		params: { ocid: string },
	})
}

export const useBasicInformation = (string) => {
	return useQuery({
		queryKey: ['maple-basic-information', string],
		queryFn: () => fetchBasicInformation(string),
		enabled: !!string,
		select: (response) => response.data,
	})
}