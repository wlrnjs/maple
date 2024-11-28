import React from 'react';
import "./InputBox.css";

const InputBox = ({ title, sub_title, onButtonClick, inputValue, setInputValue }) => {
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};
	
	return (
		<div className="search-box">
			<h1>{title}</h1>
			<div className="input-btn-box">
				<input
					type="text"
					placeholder={sub_title}
					value={inputValue}
					onChange={handleInputChange}
				/>
				<button onClick={onButtonClick}>검색</button>
			</div>
		</div>
	);
};

export default InputBox;