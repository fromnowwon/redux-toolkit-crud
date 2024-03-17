import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./features/Users";
import { useState } from "react";

function App() {
	const dispatch = useDispatch();
	const userList = useSelector((state) => state.users.value);

	const [name, setName] = useState("");
	const [userName, setUserName] = useState("");

	return (
		<div className="App">
			<div className="addUser">
				<input
					type="text"
					placeholder="Name..."
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Username..."
					onChange={(e) => setUserName(e.target.value)}
				/>
				<button
					onClick={() => {
						dispatch(
							addUser({
								id: userList[userList.length - 1].id + 1,
								name,
								userName,
							})
						);
					}}
				>
					Add User
				</button>
			</div>
			<div className="displayUsers">
				{userList.map((user) => {
					return (
						<div key={user.id}>
							<h2>{user.name}</h2>
							<h2>{user.username}</h2>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
