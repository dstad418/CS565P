import { httpClient } from "@/Services/HttpClient.tsx";
import React, { useState } from "react";
import { ProfileType } from "../dungeonFinderTypes.ts";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export enum SubmissionStatus {
	NotSubmitted,
	SubmitFailed,
	SubmitSucceeded,
}

export type State = {
	currentProfile: ProfileType;
	likeHistory: Array<ProfileType>;
	passHistory: Array<ProfileType>;
};

/**
 * Profile creation webpage. Takes in several pieces of information, and will push them to the DB assuming all fields are completed.
 * Some fields have default values for the purposed of displaying information.
 */
export const CreateProfile = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [password, setPassword] = useState("");
	const [roleInGame, setRoleInGame] = useState("");
	const [campaign, setCampaign] = useState("");
	const [seatsOpen, setSeatsOpen] = useState("");
	const [submitted, setSubmitted] = useState(SubmissionStatus.NotSubmitted);
	const auth = getAuth();

	const onSubmit = (ev) => {
		const formData = new FormData();
		const auth = getAuth();

		formData.append("username", username);
		formData.append("email", email);
		formData.append("city", city);
		formData.append("state", state);
		formData.append("password", password);
		formData.append("roleInGame", roleInGame);
		formData.append("campaign", campaign);
		formData.append("seatsOpen", seatsOpen);

		const config = {
			headers: {
				"content-type": "multipart/form-data",
			},
		};

		httpClient
			.post("/users", formData, config)
			.then((response) => {
				createUserWithEmailAndPassword(auth, email, password)
					.then((userCredential) => {
						// User account creation successful
						const user = userCredential.user;
					})
					.catch((error) => {
						// If failed
						const errorCode = error.code;
						const errorMessage = error.message;
					});

				// If succeeded!
				console.log("Submit success!", response.status);
				if (response.status === 200) {
					setSubmitted(SubmissionStatus.SubmitSucceeded);
				} else {
					setSubmitted(SubmissionStatus.SubmitFailed);
				}
			})
			.catch((error) => {
				// Otherwise, catch and handle the error!
				console.error("Failed to submit profile: ", error);
				setSubmitted(SubmissionStatus.SubmitFailed);
			});
	};

	return (
		<div className={"create-account-box"}>
			<div className={"create-account-inner-box"}>
				<div>
					<h2 className="text-4xl text-blue-600 mb-5">Create Account:</h2>
					{submitted === SubmissionStatus.SubmitFailed && (
						<h3 className="text-red-500">CREATING PROFILE FAILED!</h3>
					)}

					<div className="flex flex-col w-full mb-5">
						<div>
							<label htmlFor="username" className="text-blue-300 mb-2">
								Username:
							</label>
						</div>
						<input
							placeholder="Enter your username..."
							type="text"
							id="name"
							required
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							name="name"
							className="input input-bordered"
						/>
					</div>

					<div className="flex flex-col w-full mb-5">
						<div>
							<label htmlFor="email" className="text-blue-300 mb-2">
								Email:
							</label>
						</div>
						<input
							placeholder="email@email.com"
							type="text"
							id="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							name="email"
							className="input input-bordered"
						/>
					</div>

					<div className="flex flex-col w-full mb-5">
						<div>
							<label htmlFor="password" className="text-blue-300 mb-2">
								Password:
							</label>
						</div>
						<input
							placeholder="password..."
							type="text"
							id="password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							name="password"
							className="input input-bordered"
						/>
					</div>

					<div className="flex flex-col w-full mb-5">
						<div>
							<label htmlFor="city" className="text-blue-300 mb-2">
								City:
							</label>
						</div>
						<input
							placeholder="City name"
							type="text"
							id="city"
							required
							value={city}
							onChange={(e) => setCity(e.target.value)}
							name="city"
							className="input input-bordered"
						/>
					</div>

					<div className="flex flex-col w-full mb-5">
						<div>
							<label htmlFor="state" className="text-blue-300 mb-2">
								State:
							</label>
						</div>
						<select
							id="state"
							required
							value={state}
							onChange={(e) => setState(e.target.value)}
							name="state"
							className="input input-bordered"
						>
							<option value="">Select a state...</option>
							<option value="AL">Alabama</option>
							<option value="AK">Alaska</option>
							<option value="AZ">Arizona</option>
							<option value="AR">Arkansas</option>
							<option value="CA">California</option>
							<option value="CO">Colorado</option>
							<option value="CT">Connecticut</option>
							<option value="DE">Delaware</option>
							<option value="FL">Florida</option>
							<option value="GA">Georgia</option>
							<option value="HI">Hawaii</option>
							<option value="ID">Idaho</option>
							<option value="IL">Illinois</option>
							<option value="IN">Indiana</option>
							<option value="IA">Iowa</option>
							<option value="KS">Kansas</option>
							<option value="KY">Kentucky</option>
							<option value="LA">Louisiana</option>
							<option value="ME">Maine</option>
							<option value="MD">Maryland</option>
							<option value="MA">Massachusetts</option>
							<option value="MI">Michigan</option>
							<option value="MN">Minnesota</option>
							<option value="MS">Mississippi</option>
							<option value="MO">Missouri</option>
							<option value="MT">Montana</option>
							<option value="NE">Nebraska</option>
							<option value="NV">Nevada</option>
							<option value="NH">New Hampshire</option>
							<option value="NJ">New Jersey</option>
							<option value="NM">New Mexico</option>
							<option value="NY">New York</option>
							<option value="NC">North Carolina</option>
							<option value="ND">North Dakota</option>
							<option value="OH">Ohio</option>
							<option value="OK">Oklahoma</option>
							<option value="OR">Oregon</option>
							<option value="PA">Pennsylvania</option>
							<option value="RI">Rhode Island</option>
							<option value="SC">South Carolina</option>
							<option value="SD">South Dakota</option>
							<option value="TN">Tennessee</option>
							<option value="TX">Texas</option>
							<option value="UT">Utah</option>
							<option value="VT">Vermont</option>
							<option value="VA">Virginia</option>
							<option value="WA">Washington</option>
							<option value="WV">West Virginia</option>
							<option value="WI">Wisconsin</option>
							<option value="WY">Wyoming</option>
						</select>
					</div>

					<div className="flex flex-col w-full mb-5">
						<div>
							<label htmlFor="roleInGame" className="text-blue-300 mb-2">
								What role are you playing in this camapaign?:
							</label>
						</div>
						<select
							id="roleInGame"
							required
							value={roleInGame}
							onChange={(e) => setRoleInGame(e.target.value)}
							name="gameRole"
							className="input input-bordered"
						>
							<option value="">Which will you be?</option>
							<option value="Player">Player</option>
							<option value="Dungeon Master">Dungeon Master</option>
						</select>
					</div>

					{roleInGame === "Dungeon Master" && (
						<div className="flex flex-col w-full mb-5">
							<div>
								<label htmlFor="seatsOpen" className="text-blue-300 mb-2">
									How many seats do you need to fill on this adventure?:
								</label>
							</div>
							<input
								type="number"
								id="seatsOpen"
								required
								value={seatsOpen}
								onChange={(e) => setSeatsOpen(e.target.value)}
								name="seatsOpen"
								className="input input-bordered"
								min="1"
								max="6"
							/>
						</div>
					)}

					<div className="flex flex-col w-full mb-5">
						<div>
							<label htmlFor="campaign" className="text-blue-300 mb-2">
								Campaign:
							</label>
						</div>
						<select
							id="campaign"
							required
							value={campaign}
							onChange={(e) => setCampaign(e.target.value)}
							name="campaign"
							className="input input-bordered"
						>
							<option value="">Select a campaign:</option>
							<option value="Baldur's Gate: Descent into Avernus">
								Baldur's Gate: Descent into Avernus
							</option>
							<option value="Candlekeep Mysteries">Candlekeep Mysteries</option>
							<option value="Critical Role: Call of the Netherdeep">
								Critical Role: Call of the Netherdeep
							</option>
							<option value="Curse of Strahd">Curse of Strahd</option>
							<option value="Dragonlance: Shadow of the Dragon Queen">
								Dragonlance: Shadow of the Dragon Queen
							</option>
							<option value="Dragons of Stormwreck Isle">Dragons of Stormwreck Isle</option>
							<option value="Ghosts of Saltmarsh">Ghosts of Saltmarsh</option>
							<option value="Ghost of Dragonspear Castle">Ghost of Dragonspear Castle</option>
							<option value="Hoard of the Dragon Queen">Hoard of the Dragon Queen</option>
							<option value="Icewind Dale: Rime of the Frostmaiden">
								Icewind Dale: Rime of the Frostmaiden
							</option>
							<option value="Infernal Machine Rebuild">Infernal Machine Rebuild</option>
							<option value="Journeys through the Radiant Citadel">
								Journeys through the Radiant Citadel
							</option>
							<option value="Keys from the Golden Vault">Keys from the Golden Vault</option>
							<option value="Lost Laboratory of Kwalish">Lost Laboratory of Kwalish</option>
							<option value="Lost Mine of Phandelver">Lost Mine of Phandelver</option>
							<option value="Out of the Abyss">Out of the Abyss</option>
							<option value="Princes of the Apocalypse">Princes of the Apocalypse</option>
							<option value="Storm King's Thunder">Storm King's Thunder</option>
							<option value="Tales from the Yawning Portal">Tales from the Yawning Portal</option>
							<option value="The Forge of Fury">The Forge of Fury</option>
							<option value="Tomb of Horrors">Tomb of Horrors</option>
							<option value="The Rise of Tiamat">The Rise of Tiamat</option>
							<option value="The Wild Beyond the Witchlight">The Wild Beyond the Witchlight</option>
							<option value="Tomb of Annihilation">Tomb of Annihilation</option>
							<option value="Tyranny of Dragons">Tyranny of Dragons</option>
							<option value="Waterdeep: Dragon Heist">Waterdeep: Dragon Heist</option>
							<option value="Waterdeep: Dungeon of the Mad Mage">
								Waterdeep: Dungeon of the Mad Mage
							</option>
						</select>
					</div>

					{username != null && password != null && (
						<div>
							<button className={"btn btn-primary btn-circle"} onClick={onSubmit}>
								Create
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
