import { CreateProfile } from "@/Components/CreateProfile.tsx";
import { Home } from "@/Components/HomePage.tsx";
import { Login } from "@/Components/Login.tsx";
import { Logout } from "@/Components/Logout.tsx";
import { Match } from "@/Components/Match.tsx";
import { ProtectedRoute } from "@/Components/ProtectedRoute.tsx";
import { useAuth } from "@/Services/Auth.tsx";
import { Link, Route, Routes } from "react-router-dom";

export function DungeonFinderRouter() {
	const auth = useAuth();

	return (
		<div className={"dungeonFinderfancy"}>
			<nav className="navbar fixed top-0 w-full">
				<div className="navbar justify-center">
					<div className={"navbar-center lg:flex"}>
						<p><strong>Welcome to the Dungeon Finder! Please login to search for local games in your area!
							<br />Good luck, and may all  your rolls be 20's!</strong></p>
						<ul className={"menu menu-horizontal"}>
							<li><Link to="/">Home</Link></li>
							{auth?.token != null ? (
								<li><Link to="/logout">Logout</Link></li>
							) : (
								<>
									<li><Link to="/login"> Login</Link></li>
									<li><Link to="/create"> Create Account</Link> </li>
								</>
							)}</ul>

					</div>
				</div>
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/match" element={<ProtectedRoute><Match /></ProtectedRoute>} />
				<Route path="/create" element={<CreateProfile/>}/>
				<Route path="/login" element={<Login />} />
				<Route path="/logout" element={<Logout />} />
			</Routes>
		</div>
	);
}

