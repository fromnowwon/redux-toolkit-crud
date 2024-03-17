import "./App.css";
import { useSelector } from "react-redux";

function App() {
	const userList = useSelector((state) => state.users.value);

	return (
		<div className="App">
			<div className="addUser">
				<input type="text" placeholder="Name..." />
				<input type="text" placeholder="Username..." />
				<button>Add User</button>
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
