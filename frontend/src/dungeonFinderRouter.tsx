import { CreateProfile } from "@/Components/CreateProfile.tsx";
import { Home } from "@/Components/HomePage.tsx";
import { Login } from "@/Components/Login.tsx";
import { Logout } from "@/Components/Logout.tsx";
import { MessageHistory } from "@/Components/MessageHistory.tsx";
import { UpdateProfile } from "@/Components/UpdateProfile.tsx";
import { Campaign } from "@/Components/Campaigns.tsx";
import { ProtectedRoute } from "@/Components/ProtectedRoute.tsx";
import { useAuth } from "@/Services/Auth.tsx";
import { Link, Route, Routes, useParams } from "react-router-dom";

/**
 * Initially takes in the URL message as a string.
 */
interface CampaignParams {
	number: string;
	//	dataToPass: string;
	[key: string]: string; // Index signature for remaining parameters
}

/**
 * Takes the parameter of dataToPass, converts it to a string, and then calls the Campaigbn webpage WITH that num value in the URL
 * AND it does it all while sending to the address wrapped in a ProtectedRoute!!!
 */
const CampaignWrapper: React.FC = () => {
	const { number } = useParams<CampaignParams>();
	//	const {number, title} = useParams<CampaignParams>();
	//	const { dataToPass } = useParams<CampaignParams>();
	//	const number = parseInt(dataToPass);

	return (
		<ProtectedRoute>
			<Campaign number={parseInt(number)} />
		</ProtectedRoute>
	);
};

/**
 * DungeonFinderRouter
 * Acts largely the same as DoggrRouter, but will some added webpages/interfaces.
 * Will initially show Home, Login and Create Account on the webpage.
 * But, once logged in, Will show: Home, Logout, Messages and Update Profile instead.
 * @constructor
 */
export function DungeonFinderRouter() {
	const auth = useAuth();

	return (
		<div className="dungeonFinderfancy">
			<nav className="navbar fixed top-0 w-full">
				<div className="navbar justify-center">
					<div className="navbar-center lg:flex">
						<p>
							<strong>
								Welcome to the Dungeon Finder! Please login to search for local games in your area!
								<br />
								Good luck, and may all your rolls be 20's!
							</strong>
						</p>
						<ul className="ul-list-parent">
							<li className="nav-list">
								<button className="navbar-button">
									<Link to="/">Home</Link>
								</button>
							</li>
							{auth?.token != null ? (
								<>
									<li className="nav-list">
										<button className="navbar-button">
											<Link to="/logout">Logout</Link>
										</button>
									</li>
									<li className="nav-list">
										<button className="navbar-button">
											<Link to="/messages">Messages</Link>
										</button>
									</li>
									<li className="nav-list">
										<button className="navbar-button">
											<Link to="/updateProfile">Update Profile</Link>
										</button>
									</li>
								</>
							) : (
								<>
									<li className="nav-list">
										<button className="navbar-button">
											<Link to="/login">Login</Link>
										</button>
									</li>
									<li className="nav-list">
										<button className="navbar-button">
											<Link to="/create">Create Account</Link>
										</button>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/messages"
					element={
						<ProtectedRoute>
							<MessageHistory />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/updateProfile"
					element={
						<ProtectedRoute>
							<UpdateProfile />
						</ProtectedRoute>
					}
				/>
				<Route path="/campaign/:number/*" element={<CampaignWrapper />} />
				<Route path="/campaign" element={<Home />} />
				<Route path="/create" element={<CreateProfile />} />
				<Route path="/login" element={<Login />} />
				<Route path="/logout" element={<Logout />} />
			</Routes>
		</div>
	);
}
