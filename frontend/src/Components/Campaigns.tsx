import { MessageService } from "@/Services/MessageService.tsx";
import { profileState } from "@/Services/RecoilState.tsx";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@/Services/Auth.tsx";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import yawningPortal from "./../assets/images/636383247115658092.jpeg";
import outOfAbyss from "./../assets/images/636383500945700817.jpeg";
import stormKing from "./../assets/images/636383501361665378.jpeg";
import dragonHeist from "./../assets/images/636632335939805190.jpeg";
import curseStrahd from "./../assets/images/637244603965977140.jpeg";
import descentAvernus from "./../assets/images/637244675832719441.jpeg";
import ghostSaltmarsh from "./../assets/images/637245493047936420.jpeg";
import infernalMachine from "./../assets/images/637248086063224834.jpeg";
import lostLab from "./../assets/images/637248091075319276.jpeg";
import princesApoc from "./../assets/images/637248137744435932.jpeg";
import tombAnnihil from "./../assets/images/637248669136195626.jpeg";
import madMage from "./../assets/images/637248684031810278.jpeg";
import rimeFrostmaiden from "./../assets/images/637278965847502335.jpeg";
import candleKeep from "./../assets/images/637456355214291364.jpeg";
import wildWitchlight from "./../assets/images/637587419509160992.jpeg";
import callNetherdeep from "./../assets/images/637695655261542821.jpeg";
import radiantCitadel from "./../assets/images/637830510509865265.jpeg";
import stormWreck from "./../assets/images/637921086362458107.jpeg";
import dragonQueen from "./../assets/images/637951679601337771.jpeg";
import tyrannyDragons from "./../assets/images/638070661674299942.jpeg";
import goldenVault from "./../assets/images/638070671792143197.jpeg";

/**
 * These two are the arrays that will determine which module/game is shown.
 */
export const gameTitle: string[] = [
	"Tales from the Yawning Portal",
	"Out of the Abyss",
	"Storm King's Thunder",
	"Waterdeep: Dragon Heist",
	"Curse of Strahd",
	"Baldur's Gate: Descent into Avernus",
	"Ghosts of Saltmarsh",
	"The Infernal Machine",
	"Lost Laboratory of Kwalish",
	"Princes of the Apocalypse",
	"Tomb of Annihilation",
	"Waterdeep: Dungeon of the Mad Mage",
	"Icewind Dale: Rime of the Frostmaiden",
	"Candlekeep Adventures",
	"The Wild Beyond the Witchlight: A Feywild Adventure",
	"Critical Role: Call of the Netherdeep",
	"Journey through the Radiant Citadel",
	"Dragons of Stromwreck Isle",
	"Dragonlance: Shadow of the Dragon Queen",
	"Tyranny of Dragons",
	"Keys from the Golden Vault",
];
export const gameImage: string[] = [
	yawningPortal,
	outOfAbyss,
	stormKing,
	dragonHeist,
	curseStrahd,
	descentAvernus,
	ghostSaltmarsh,
	infernalMachine,
	lostLab,
	princesApoc,
	tombAnnihil,
	madMage,
	rimeFrostmaiden,
	candleKeep,
	wildWitchlight,
	callNetherdeep,
	radiantCitadel,
	stormWreck,
	dragonQueen,
	tyrannyDragons,
	goldenVault,
];

export const gameDescript: string[] = [
	"Within this tome are seven of the deadliest dungeons from the history of Dungeons & Dragons, updated for the current edition of the game. Some are classics that have hosted an untold number of adventurers, while others are newer creations, boldly staking a claim to their place in the pantheon of notable adventures.",
	"The Underdark is a subterranean wonderland, a vast and twisted labyrinth where fear reigns. It is here that the dark elf Gromph Baenre, Archmage of Menzoberranzan, casts a foul spell meant to ignite a magical energy that suffuses the Underdark, and he tears open portals to the demonic Abyss in the process. What steps through surprises even him, and from that moment on, the insanity that pervades the Underdark escalates and threatens to shake the Forgotten Realms to its foundations. Stop the madness before it consumes you!",
	"Ages ago, giants and dragons waged war across the Savage Frontier. These battles are long forgotten by the human civilizations of today, but ancient relics remain. And now, the land shudders once more with the thunder of giant footsteps. Puny adventurers must rise up to the challenge, gather their strength, unlock the power of ancient runes, and take the fight to the giants' doorsteps. Only then can they forge an alliance to end the war before it begins.",
	"Take a mad romp through the wards of Waterdeep as you uncover a villainous plot involving some of the city's most influential figures. A grand urban caper awaits you. Pit your skill and bravado against villains the likes of which you've never faced before, and let the dragon hunt begin!",
	"Unravel the mysteries of Barovia and face the ancient vampire Strahd von Zarovich in this gothic horror adventure. Explore the cursed land, encounter haunted locations, and brave the terrors that lie within Castle Ravenloft. Only the bravest heroes have a chance to free Barovia from its dark ruler's grasp.",
	"Descend into the first layer of the Nine Hells in this epic adventure. Journey through the city of Baldur's Gate, confront devils and demons, and uncover the secrets of the Blood War. Can you prevent the archdevil Zariel from enacting her nefarious plans and save the city from damnation?",
	"Nestled on the coast of the Azure Sea is Saltmarsh, a sleepy fishing village that sits on the precipice of destruction. Smugglers guide their ships to hidden coves, willing to slit the throat of anyone fool enough to cross their path. Cruel sahuagin gather beneath the waves, plotting to sweep away coastal cities. While Saltmarsh slumbers, the evils that seek to plunder it grow stronger.",
	"Infernal Machine Rebuild launches players across distant places - and times to uncover additional components in order to reassemble the fabled Infernal Machine of Lum the Mad!",
	"Laboratory of Kwalish explores an alternate expedition into the Barrier Peaks as players search for the lost lab of the legendary artificer. He disappeared in the peaks eons ago... as it turns out, finding a crashed planar ship and studying its technology to fuel his own research.",
	"The first signs are always small: bandits on the roads, pirates on the Dessarin River, monster sightings throughout the Sumber Hills - all too close to the lands of civilized folk. Are these events all some bizarre coincidence, or is there a deeper reason behind them? Working through its prophets, the Elder Elemental Eye has emerged to spread chaos across the Forgotten Realms. How will the adventurers prevent absolute devastation?",
	"The talk of the streets and taverns has been about the so-called Death Curse: a wasting disease afflicting everyone who's ever been raised from the dead. Victims grow thinner and weaker each day, slowly but steadily sliding towards the death they once denied. When they finally succumb, they can't be raised - and neither can anyone else. Discover what's behind this curse and the secrets that lie in the Jungles of Chult in the adventure!",
	"Dive into the dungeon shunned by all but the most daring adventurers. Known as Undermountain, this dungeon is the domain of the mad wizard Halaster Blackcloak. Long has the Mad Mage dwelt in these forlorn depths, seeding his lair with monsters, traps, and mysteries. This adventure picks up where Waterdeep: Dragon Heist leaves off, exploring the twenty-three levels of Undermountain along with the subterranean refuge of Skullport.",
	"Buy Icewind Dale: Rime of the Frostmaiden to start playing a chilling horror adventure. Beneath the unyielding night sky, you stand before a towering glacier and recite an ancient rhyme, causing a crack to form in the great wall of ice. Beyond this yawning fissure, the Caves of Hunger await. What fantastic secrets and treasures are entombed in the sunless heart of the glacier, and what will their discovery mean for the denizens of Icewind Dale?",
	"Historians, sages, and others who crave knowledge flock to the library fortress of Candlekeep to peruse its vast collection of books, scribbled into which are the answers to the mysteries that bedevil them. Many of these books contain their own mysteries--each one a doorway to adventure. Will your players dare to cross that threshold?",
	"Once every eight years, the fantastic Witchlight Carnival touches down on your world, bringing joy to one settlement after the next. Its owners, Mister Witch and Mister Light, know how to put on a good show. But there’s more to this magical extravaganza than meets the eye! The carnival is a gateway to a fantastic Feywild domain unlike anything found on the Material Plane. Time has not been kind to this realm, however, and dark days lie ahead unless someone can thwart the dastardly schemes of the Hourglass Coven.",
	"The greed of mortals has awakened a powerful entity long thought destroyed. For eons, this mighty champion of the gods has been imprisoned in the darkest depths of Exandria. His name has been forgotten, as have his heroic deeds. Languishing in despair, he calls out for new heroes to save him. Inspired by the campaigns of the hit series Critical Role, this adventure begins in the Wastes of Xhorhas and leads to the glimmering oasis-city of Ank’Harel on the continent of Marquet, and from there into a sunken realm of gloom, corruption, and sorrow known as the Netherdeep. Above it all, the red moon of Ruidus watches, twisting the fates of those who have the power to shape the course of history.",
	"Through the mists of the Ethereal Plane shines the Radiant Citadel. Travelers from across the multiverse flock to this mysterious bastion to share their traditions, stories, and calls for heroes. A crossroads of wonders and adventures, the Radiant Citadel is the first step on the path to legend. Where will your journeys take you?",
	"Dragons of Stormwreck Isle is your gateway to action-packed adventures in the cooperative storytelling game DUNGEONS & DRAGONS, where heroes battle monsters, find treasure, and undertake epic quests. This adventure contains everything you need to play heroic characters caught up in an ancient war among dragons as they explore the secrets of Stormwreck Isle.",
	"Takhisis the Dragon Queen has returned to the world of Krynn. Across the land, her armies of fanatical draconians wage a brutal war of conquest. As the Dragon Armies march on the unprepared nation of Solamnia, only the defenders of the city of Kalaman stand in their way. But the Dragon Armies want more than just to crush their foes. An ancient evil in the Dragon Queen’s service seeks a magical weapon that could dominate Krynn for all time. Dragonlance: Shadow of the Dragon Queen is a tale of conflict and defiance set during the legendary War of the Lance. Create characters from Krynn, the world of the Dragonlance setting, then march them to the front lines of battle against the terrifying Dragon Armies.",
	"The forces of Tiamat, Queen of Evil Dragons, bring war to the Forgotten Realms. Led by the sinister Cult of the Dragon, an army of dragons and foul villains wage a merciless campaign to unleash their draconic god upon the world. Opposing them is a desperate alliance including the heroic Harpers and treacherous Zhentarim. This fragile coalition needs heroes to unite them and find ways to resist the draconic threat. Do you have the courage to stand against the Cult of the Dragon and the threat of Tiamat's immortal tyranny?",
	"Some jobs require more than simply wielding a sword or slinging a spell. Whether it’s procuring a well-guarded item or obtaining crucial information from an imprisoned contact, these tasks require careful planning and flawless execution. The secretive organization called the Golden Vault specializes in hiring crews for such jobs, and for the most daunting assignments—pursuing fabulous treasures and stopping dire threats—that crew is your character.",
];

interface CampaignProps {
	number: number;
}

/**
 * Campaigns component!
 * @param number passed in by ModuleSection, the number itself will act as a index for the purposes of determining the image for the game, and the title to be displayed.
 */
export const Campaign: React.FC<CampaignProps> = ({ number }) => {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);
	const [message, setMessage] = useState<string>("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [submissionError, setSubmissionError] = useState(false);
	const auth = useAuth();
	const currentProfile = useRecoilValue(profileState);
	const navigate = useNavigate();

	useEffect(() => {
		// Function to fetch user data based on the game type
		const fetchUserData = async () => {
			try {
				const response = await axios.get("http://localhost:8080/users", {
					params: {
						gametype: gameTitle[number],
					},
				});

				const userData = response.data;
				setUsers(userData);
			} catch (error) {
				// Handle error
				console.error("Error while fetching!", error);
			}
		};
		
		fetchUserData();
	}, [number]); // Run the effect whenever number changes

	// Open w/ user info
	const openModal = (userId) => {
		const user = users.find((user) => user.id === userId);
		setSelectedUser(user);
		setIsModalOpen(true);
	};

	// Colse
	const closeModal = () => {
		setSelectedUser(null);
		setMessage("");
		setIsModalOpen(false);
	};

	// Send message - I cannibalized key-parts of Messages.tsx for this step! Which is why it's missing.
	const sendMessage = async () => {
		// Send the message logic here
		const sender_id = auth.userId;
		const receiver_id = currentProfile.id;
		try {
			await MessageService.send(sender_id, receiver_id, message);
			// If we succeed, send the user onward to message history
			navigate("/messagehistory");
		} catch (err) {
			setSubmissionError(true);
		}
		console.log("Sending message:", message);
		closeModal();
	};

	return (
		<div className="campaign-page">
			<header className="module-title">
				<h1>{gameTitle[number]}</h1>
			</header>
			<main>
				<div className="campaign-block">
					{number >= 0 && number < gameTitle.length && (
						<div className="game-info">
							<img alt={gameTitle[number]} className="module-cover" src={gameImage[number]} />
						</div>
					)}
					<div className="game-descrip">
						<p className="descrip-text">{gameDescript[number]}</p>
					</div>
				</div>
				<div className="user-list">
					{users.map((user) => (
						<div key={user.id} className="user-item">
							<p>Name: {user.name}</p>
							<p>City: {user.city}</p>
							<p>Seats Open: {user.seatsOpen}</p>
							<button onClick={() => openModal(user.id)}>Message</button>
						</div>
					))}
				</div>

				{/* Modal structure 'kinda' pulled from W3 schools, but heavily customized to my stuff*/}
				{isModalOpen && selectedUser && (
					<div className="modal">
						<div className="modal-content">
							<h2>Send Message</h2>
							<p>Name: {selectedUser.name}</p>
							<p>Seats Open: {selectedUser.seatsOpen}</p>
							<textarea
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								placeholder="Enter your message here..."
								rows={6}
							></textarea>
							<div className="modal-buttons">
								<button onClick={sendMessage}>Send</button>
								<button onClick={closeModal}>Close</button>
							</div>
						</div>
					</div>
				)}
			</main>
		</div>
	);
};
