import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import MainPage from "./Pages/MainPage/MainPage";
import BasicInformation from "./Pages/BasicInformation/BasicInformation";
import OverallStats from "./Pages/OverallStats/OverallStats";
import HyperStat from "./Pages/HyperStat/HyperStat";
import Personality from "./Pages/Personality/Personality";
import Ability from "./Pages/Ability/Ability";
import EquippedItems from "./Pages/EquippedItems/EquippedItems";
import EquippedCashItems from "./Pages/EquippedCashItems/EquippedCashItems";
import EquippedSymbols from "./Pages/EquippedSymbols/EquippedSymbols";
import EquippedAppearance from "./Pages/EquippedAppearance/EquippedAppearance";
import Skills from "./Pages/Skills/Skills";
import EquippedLinkSkills from "./Pages/EquippedLinkSkills/EquippedLinkSkills";
import VMartix from "./Pages/VMartix/VMartix";
import HexaCore from "./Pages/HexaCore/HexaCore";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<MainPage />} />
				<Route path="basic-info" element={<BasicInformation />} />
				<Route path="overall-stats" element={<OverallStats />} />
				<Route path="hyper-stat" element={<HyperStat />} />
				<Route path="personality" element={<Personality />} />
				<Route path="ability" element={<Ability />} />
				<Route path="equipped-items" element={<EquippedItems />} />
				<Route path="equipped-cash-items" element={<EquippedCashItems />} />
				<Route path="equipped-symbols" element={<EquippedSymbols />} />
				<Route path="equipped-appearance" element={<EquippedAppearance />} />
				<Route path="skills" element={<Skills />} />
				<Route path="equipped-link-skills" element={<EquippedLinkSkills />} />
				<Route path="v-matrix" element={<VMartix />} />
				<Route path="hexa-core" element={<HexaCore />} />
			</Route>
		</Routes>
	);
}

export default App;