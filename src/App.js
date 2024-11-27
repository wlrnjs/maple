import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import MainPage from "./Pages/MainPage/MainPage";
import SearchPage from "./Pages/SearchPage/SearchPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<MainPage />} />
				<Route path="search" element={<SearchPage />} />
			</Route>
		</Routes>
	);
}

export default App;