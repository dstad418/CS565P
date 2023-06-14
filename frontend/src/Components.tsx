import { useEffect, useState } from "react";
import axios from "axios";

/**
 * Renders a list of users fetched from the backend.
 * Makes a GET request to retrieve the list of users and displays them in a formatted manner.
 */
export const UsersList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		/**
		 * Fetches the list of users from the backend.
		 * @returns {Promise} A promise that resolves to the list of users.
		 */
		const getUsers = async () => {
			const usersRes = await axios.get("http://localhost:8080/users");
			return usersRes.data;
		};

		getUsers().then(setUsers);
	}, []);

	return (
		<div>
			<h2>Users:</h2>
			{users ? (
				<ul>
					{users.map((user: { email: string; name: string }) => (
						<li key={user.email}>
							{" "}
							{user.name} - {user.email}{" "}
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
};
