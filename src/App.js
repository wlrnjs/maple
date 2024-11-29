import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import MainPage from "./Pages/MainPage/MainPage";
import BasicInformation from "./Pages/BasicInformation/BasicInformation";
import Abilities from "./Pages/Abilities/Abilities";
import Equipment from "./Pages/Equipment/Equipment";
import Skills from "./Pages/Skills/Skills";
import Advanced from "./Pages/Advanced/Advanced";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<MainPage />} />
				<Route path="basic-info" element={<BasicInformation />} />
				<Route path="abilities" element={<Abilities />} />
				<Route path="equipment" element={<Equipment />} />
				<Route path="skills" element={<Skills />} />
				<Route path="advanced-skills" element={<Advanced />} />
			</Route>
		</Routes>
	);
}

export default App;