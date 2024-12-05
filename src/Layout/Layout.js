import React from 'react';
import "./Layout.css"
import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom";

const Layout = () => {
	return (
		<div className="layout">
			<div className="content">
				<Link to="/"><img src="https://www.ilovepcbang.com/news/photo/201701/53381_76422_5544.jpg" alt=""/></Link>
				<div className="hamburger-button-icon">
					<button>
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOMirBIIRVNgzfoCEYN-9-KgeiuDu_x69ww&s" alt=""/>
					</button>
				</div>
				<ul>
					<li><Link to="/basic-info">기본 정보 조회</Link></li>
					<li><Link to="/abilities">능력치 정보 조회</Link></li>
					<li><Link to="/">내 캐릭터 OCID 검색</Link></li>
				</ul>
			</div>
			<div>
				<Outlet/>
			</div>
		</div>
	);
};

export default Layout;