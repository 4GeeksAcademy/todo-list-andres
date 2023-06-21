import React, { useState }  from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const[inputValue, setInputValue] = useState('');
	const[todoList, setTodoList] = useState([]);
	const[showIcon, setShowIcon] = useState(-1);
	
	return (		
		//<div className="text-center bg-info w-50">
		<div className="d-flex flex-column align-items-center justify-content-center mt-5">
			<h1 className="text-center">todos</h1>

			<ul className="list-group " style={{width: 500}}>
				<li className="list-group-item">
					<div className="col-xs-6">
					<input type="text" className="form-control input-lg" placeholder="What needs to be done?" 
						onChange={(e) => setInputValue(e.target.value)} value={inputValue}
						style={{border: 0, boxShadow: 'none'}}
						onKeyPress={(e) => {
							if(e.key === "Enter") {
								console.log("enter pressed");
								setTodoList(todoList.concat(inputValue))
								setInputValue('');
							}
						}}
						/>
					</div>
				</li>

			{todoList.map((item, index) => (
				<li className="list-group-item" key={index} onMouseLeave={() => setShowIcon(-1)} onMouseEnter={() => setShowIcon(index)}>
					<div className="row">
						<div className="col-10 m-2">
							{item}
						</div>
						{showIcon === index ? (
						<div className="col m-2" onClick={() => setTodoList(todoList.filter((i, currentIndex) => index != currentIndex ))}>
							<i className="fa-solid fa-x">
							</i>
						</div>) : ""}
					</div>
				</li>
			))}
			</ul>

			<div className="justify-content-right w-80 mt-3" style={{width: 500}}>
				{todoList.length == 0 ? 'No tasks, add a task' : todoList.length + ' tasks'}
				</div>
			
		</div>
	);
};

export default Home;