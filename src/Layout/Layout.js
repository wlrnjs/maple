import React from 'react';
import "./Layout.css"
import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom";

const Layout = () => {
	return (
		<div className="layout">
			<div className="content">
				<Link to="/"><img src="https://www.ilovepcbang.com/news/photo/201701/53381_76422_5544.jpg" alt=""/></Link>
				<ul>
					<li><Link to="/charactor">내 캐릭터 검색</Link></li>
					<li><Link to="/charactor">내 캐릭터 목록 조회</Link></li>
					<li><Link to="/charactor">기본 정보 조회</Link></li>
					<li><Link to="/charactor">인기도 정보 조회</Link></li>
					<li><Link to="/charactor">종합 능력치 정보 조회</Link></li>
					<li><Link to="/charactor">하이퍼스탯 정보 조회</Link></li>
					<li><Link to="/charactor">성향 정보 조회</Link></li>
					<li><Link to="/charactor">어빌리티 정보 조회</Link></li>
					<li><Link to="/charactor">장착 장비 정보 조회</Link></li>
					<li><Link to="/charactor">장착 캐시 장비 정보 조회</Link></li>
					<li><Link to="/charactor">장착 심볼 정보 조회</Link></li>
					<li><Link to="/charactor">장착 헤어, 성형, 피부 정보 조회</Link></li>
					<li><Link to="/charactor">스킬 정보 조회</Link></li>
					<li><Link to="/charactor">장착 링크 스킬 정보 조회</Link></li>
					<li><Link to="/charactor">V매트릭스 정보 조회</Link></li>
					<li><Link to="/charactor">HEXA 코어 정보 조회</Link></li>
				</ul>
			</div>
			<div>
				<Outlet/>
			</div>
		</div>
	);
};

export default Layout;