import api from "../../../API/API";
import {useQuery} from "react-query";

const fetchSearchItems = (id) => {
	return api.get(`/maplestory/v1/character/item-equipment`, {
		params: {ocid: id}
	})
}

export const useSearchItems = (id) => {
	return useQuery({
		queryKey: ["maple-items", id],
		queryFn: ()=>fetchSearchItems(id),
		enabled: !!id,
	})
}