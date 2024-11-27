import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
	baseURL: "https://open.api.nexon.com",
	headers: {
		"x-nxopen-api-key": `${API_KEY}`,
		"Accept": "application/json",
	}
});

export default api;