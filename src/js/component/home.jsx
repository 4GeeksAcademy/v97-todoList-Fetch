import React from "react";
import TodoContainer from "./TodoContainer.jsx";

//create your first component
const Home = (props) => {
	const{index} = props;
	return (

		<>
		<h1 className="text-center mt-3 mb-3">todos</h1>
		<div className="paper ">
			
			<TodoContainer/>
			
			
		</div>
		
		</>
	);
};

export default Home;