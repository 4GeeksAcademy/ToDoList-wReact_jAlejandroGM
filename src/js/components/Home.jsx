import { tasks } from "fontawesome";
import React, { useState } from "react";

const Home = () => {

	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])

	return (
		<div className="container">
			<h1>todos</h1>
			<ul>
				<input
					type="text"
					placeholder={todos.length === 0 ? "Add something to the list" : "What else do you need to do?"}
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter" && inputValue.trim() !== "") {
							setTodos(todos.concat(inputValue));
							setInputValue("")
						}
					}}
				/>
				{todos.map((task, index) => (
					<li key={index}>
						{task}
						<i
							className="fa-solid fa-xmark"
							onClick={() => setTodos(todos.filter((_, currentIndex) => index !== currentIndex))}
						/>
					</li>
				))}
			</ul>
			<div className="task-count">{todos.length} {todos.length !== 1 ? "items left" : "item left"}</div>
		</div>
	);
};

export default Home;