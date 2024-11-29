import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import MainPage from "./Pages/MainPage/MainPage";
import BasicInformation from "./Pages/BasicInformation/BasicInformation";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<MainPage />} />
				<Route path="basic-info" element={<BasicInformation />} />
				<Route path="abilities" element={<BasicInformation />} />
				<Route path="equipment" element={<BasicInformation />} />
				<Route path="skills" element={<BasicInformation />} />
				<Route path="advanced-skills" element={<BasicInformation />} />
			</Route>
		</Routes>
	);
}

export default App;