import React from "react";
import { useNavigate } from "react-router-dom";

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
 * saves useNavigate() to the variable DivToPass
 */
export function ModuleSection() {
	const divToPass = useNavigate();

	/** The handleClick function that should send the user to the appropriate subpage.
	 * @param number, passed in the URL, the Cmapaign page will extract it and use that num value to determine which game is to be shown.
	 * @param title, the title of the webpage that the React hook will send the user to
	 */
	const handleClick = (number: number, title: string) => {
		divToPass(`/campaign/${number}/${title}`);
	};

	return (
		<div className="module-section">
			{/****************************  ROW 1 ***********************/}
			<div className="module-row">
				<div
					className="module-block yawning-portal"
					onClick={() => handleClick(0, "TheYawningPortal")}
				>
					<img alt="Tales of the Yawning Portal" className="module-cover" src={yawningPortal} />
					<p className="module-text">
						<strong>
							Tales From The Yawning Portal <br />
						</strong>{" "}
						Within this tome are seven of the deadliest dungeons from the history of Dungeons &amp;
						Dragons, updated for the current edition of the game. Some are classics that have hosted
						an untold number of adventurers, while others are newer creations, boldly staking a
						claim to their place in the pantheon of notable adventures.
					</p>
				</div>
				<div className="module-block out-abyss" onClick={() => handleClick(1, "OutofTheAbyss")}>
					<img alt="Out of the Abyss" className="module-cover" src={outOfAbyss} />
					<p className="module-text">
						<strong>Out Of The Abyss</strong> <br />
						The Underdark is a subterranean wonderland, a vast and twisted labyrinth where fear
						reigns. It is here that the dark elf Gromph Baenre, Archmage of Menzoberranzan, casts a
						foul spell meant to ignite a magical energy that suffuses the Underdark, and he tears
						open portals to the demonic Abyss in the process. What steps through surprises even him,
						and from that moment on, the insanity that pervades the Underdark escalates and
						threatens to shake the Forgotten Realms to its foundations. Stop the madness before it
						consumes you!
					</p>
				</div>
				<div
					className="module-block storm-king"
					onClick={() => handleClick(2, "StormKingsThunder")}
				>
					<img alt="Storm King's Thunder" className="module-cover" src={stormKing} />
					<p className="module-text">
						<strong>
							Storm King's Thunder <br />
						</strong>
						Ages ago, giants and dragons waged war across the Savage Frontier. These battles are
						long forgotten by the human civilizations of today, but ancient relics remain. And now,
						the land shudders once more with the thunder of giant footsteps. Puny adventurers must
						rise up to the challenge, gather their strength, unlock the power of ancient runes, and
						take the fight to the giants' doorsteps. Only then can they forge an alliance to end the
						war before it begins.
					</p>
				</div>
			</div>

			{/****************************  ROW 2 ***********************/}

			<div className="module-row">
				<div className="module-block dragon-heist" onClick={() => handleClick(3, "DragonHeist")}>
					<img alt="Waterdeep: Dragon Heist" className="module-cover" src={dragonHeist} />
					<p className="module-text">
						<strong>
							Waterdeep: Dragon Heist <br />
						</strong>
						Take a mad romp through the wards of Waterdeep as you uncover a villainous plot
						involving some of the city's most influential figures. A grand urban caper awaits you.
						Pit your skill and bravado against villains the likes of which you've never faced
						before, and let the dragon hunt begin!
					</p>
				</div>
				<div className="module-block curse-strahd" onClick={() => handleClick(4, "CurseStrahd")}>
					<img alt="Curse of Strahd" className="module-cover" src={curseStrahd} />
					<p className="module-text">
						<strong>
							Curse of Strahd <br />
						</strong>
						Unravel the mysteries of Barovia and face the ancient vampire Strahd von Zarovich in
						this gothic horror adventure. Explore the cursed land, encounter haunted locations, and
						brave the terrors that lie within Castle Ravenloft. Only the bravest heroes have a
						chance to free Barovia from its dark ruler's grasp.
					</p>
				</div>
				<div
					className="module-block descent-avernus"
					onClick={() => handleClick(5, "DescentIntoAvernus")}
				>
					<img alt="Descent Into Avernus" className="module-cover" src={descentAvernus} />
					<p className="module-text">
						<strong>
							Descent into Avernus <br />
						</strong>
						Descend into the first layer of the Nine Hells in this epic adventure. Journey through
						the city of Baldur's Gate, confront devils and demons, and uncover the secrets of the
						Blood War. Can you prevent the archdevil Zariel from enacting her nefarious plans and
						save the city from damnation?
					</p>
				</div>
			</div>

			{/****************************  ROW 3 ***********************/}

			<div className="module-row">
				<div
					className="module-block ghost-saltmarsh"
					onClick={() => handleClick(6, "GhostsSaltmarsh")}
				>
					<img className="module-cover" src={ghostSaltmarsh} alt="Ghosts of Saltmarsh" />
					<p className="module-text">
						<strong>
							Ghosts of Saltmarsh <br />
						</strong>
						Nestled on the coast of the Azure Sea is Saltmarsh, a sleepy fishing village that sits
						on the precipice of destruction. Smugglers guide their ships to hidden coves, willing to
						slit the throat of anyone fool enough to cross their path. Cruel sahuagin gather beneath
						the waves, plotting to sweep away coastal cities. While Saltmarsh slumbers, the evils
						that seek to plunder it grow stronger.
					</p>
				</div>

				<div
					className="module-block infernal-machine"
					onClick={() => handleClick(7, "InfernalMachine")}
				>
					<img className="module-cover" src={infernalMachine} alt="Infernal Machine Rebuild" />
					<p className="module-text">
						<strong>
							Infernal Machine Rebuild <br />
						</strong>
						Infernal Machine Rebuild launches players across distant places - and times to uncover
						additional components in order to reassemble the fabled Infernal Machine of Lum the Mad!
					</p>
				</div>

				<div
					className="module-block labratory-kwalish"
					onClick={() => handleClick(8, "LabOfKwalish")}
				>
					<img className="module-cover" src={lostLab} alt="Lost Laboratory of Kwalish" />
					<p className="module-text">
						<strong>
							Lost Laboratory of Kwalish <br />
						</strong>
						Laboratory of Kwalish explores an alternate expedition into the Barrier Peaks as players
						search for the lost lab of the legendary artificer. He disappeared in the peaks eons
						ago... as it turns out, finding a crashed planar ship and studying its technology to
						fuel his own research.
					</p>
				</div>
			</div>

			{/****************************  ROW 4 ***********************/}

			<div className="module-row">
				<div
					className="module-block princes-apocalypse"
					onClick={() => handleClick(9, "PrincesApocalypse")}
				>
					<img className="module-cover" src={princesApoc} alt="Princes of the Apocalypse" />
					<p className="module-text">
						<strong>
							Princes of the Apocalypse <br />
						</strong>
						The first signs are always small: bandits on the roads, pirates on the Dessarin River,
						monster sightings throughout the Sumber Hills - all too close to the lands of civilized
						folk. Are these events all some bizarre coincidence, or is there a deeper reason behind
						them? <br />
						Working through its prophets, the Elder Elemental Eye has emerged to spread chaos across
						the Forgotten Realms. How will the adventurers prevent absolute devastation?
					</p>
				</div>

				<div
					className="module-block tomb-annihilation"
					onClick={() => handleClick(10, "TombAnnihil")}
				>
					<img className="module-cover" src={tombAnnihil} alt="Tomb of Annihilation" />
					<p className="module-text">
						<strong>
							Tomb of Annihilation <br />
						</strong>
						The talk of the streets and taverns has been about the so-called Death Curse: a wasting
						disease afflicting everyone who's ever been raised from the dead. Victims grow thinner
						and weaker each day, slowly but steadily sliding towards the death they once denied.
						When they finally succumb, they can't be raised - and neither can anyone else. Discover
						what's behind this curse and the secrets that lie in the Jungles of Chult in the
						adventure!
					</p>
				</div>

				<div className="module-block mad-mage" onClick={() => handleClick(11, "MadMage")}>
					<img className="module-cover" src={madMage} alt="Waterdeep: Dungeon of the Mad Mage" />
					<p className="module-text">
						<strong>
							Waterdeep: Dungeon of the Mad Mage <br />
						</strong>
						Dive into the dungeon shunned by all but the most daring adventurers. Known as
						Undermountain, this dungeon is the domain of the mad wizard Halaster Blackcloak. Long
						has the Mad Mage dwelt in these forlorn depths, seeding his lair with monsters, traps,
						and mysteries. This adventure picks up where Waterdeep: Dragon Heist leaves off,
						exploring the twenty-three levels of Undermountain along with the subterranean refuge of
						Skullport.
					</p>
				</div>
			</div>

			{/****************************  ROW 5 ***********************/}

			<div className="module-row">
				<div
					className="module-block rime-frostmaiden"
					onClick={() => handleClick(12, "RimeFrostmaiden")}
				>
					<img
						className="module-cover"
						src={rimeFrostmaiden}
						alt="Icewind Dale: Rime of the Frostmaiden"
					/>
					<p className="module-text">
						<strong>
							Icewind Dale: Rime of the Frostmaiden <br />
						</strong>
						Buy Icewind Dale: Rime of the Frostmaiden to start playing a chilling horror adventure.
						Beneath the unyielding night sky, you stand before a towering glacier and recite an
						ancient rhyme, causing a crack to form in the great wall of ice. Beyond this yawning
						fissure, the Caves of Hunger await. What fantastic secrets and treasures are entombed in
						the sunless heart of the glacier, and what will their discovery mean for the denizens of
						Icewind Dale?
					</p>
				</div>

				<div
					className="module-block candlekeep-mysteries"
					onClick={() => handleClick(13, "CandlekeepMystery")}
				>
					<img className="module-cover" src={candleKeep} alt="Candlekeep Mysteries" />
					<p className="module-text">
						<strong>
							Candlekeep Mysteries <br />
						</strong>
						Historians, sages, and others who crave knowledge flock to the library fortress of
						Candlekeep to peruse its vast collection of books, scribbled into which are the answers
						to the mysteries that bedevil them. Many of these books contain their own
						mysteries--each one a doorway to adventure. Will your players dare to cross that
						threshold?
					</p>
				</div>

				<div
					className="module-block beyond-witchlight"
					onClick={() => handleClick(14, "WildWitchlight")}
				>
					<img
						className="module-cover"
						src={wildWitchlight}
						alt="The Wild Beyond the Witchlight: A Feywild Adventure"
					/>
					<p className="module-text">
						<strong>
							The Wild Beyond the Witchlight: A Feywild Adventure <br />
						</strong>
						Once every eight years, the fantastic Witchlight Carnival touches down on your world,
						bringing joy to one settlement after the next. Its owners, Mister Witch and Mister
						Light, know how to put on a good show. But there’s more to this magical extravaganza
						than meets the eye! <br />
						The carnival is a gateway to a fantastic Feywild domain unlike anything found on the
						Material Plane. Time has not been kind to this realm, however, and dark days lie ahead
						unless someone can thwart the dastardly schemes of the Hourglass Coven.
					</p>
				</div>
			</div>

			{/****************************  ROW 6 ***********************/}

			<div className="module-row">
				<div
					className="module-block call-netherdeep"
					onClick={() => handleClick(15, "CallNetherdeep")}
				>
					<img
						className="module-cover"
						src={callNetherdeep}
						alt="Critical Role: Call of the Netherdeep"
					/>
					<p className="module-text">
						<strong>
							Critical Role: Call of the Netherdeep <br />
						</strong>
						The greed of mortals has awakened a powerful entity long thought destroyed. For eons,
						this mighty champion of the gods has been imprisoned in the darkest depths of Exandria.
						His name has been forgotten, as have his heroic deeds. Languishing in despair, he calls
						out for new heroes to save him. <br />
						Inspired by the campaigns of the hit series Critical Role, this adventure begins in the
						Wastes of Xhorhas and leads to the glimmering oasis-city of Ank’Harel on the continent
						of Marquet, and from there into a sunken realm of gloom, corruption, and sorrow known as
						the Netherdeep. Above it all, the red moon of Ruidus watches, twisting the fates of
						those who have the power to shape the course of history.
					</p>
				</div>

				<div
					className="module-block radiant-citadel"
					onClick={() => handleClick(16, "RadiantCitadel")}
				>
					<img
						className="module-cover"
						src={radiantCitadel}
						alt="Journeys Through the Radiant Citadel"
					/>
					<p className="module-text">
						<strong>
							Journeys Through the Radiant Citadel <br />
						</strong>
						Through the mists of the Ethereal Plane shines the Radiant Citadel. Travelers from
						across the multiverse flock to this mysterious bastion to share their traditions,
						stories, and calls for heroes. A crossroads of wonders and adventures, the Radiant
						Citadel is the first step on the path to legend. Where will your journeys take you?
					</p>
				</div>

				<div
					className="module-block dragons-stormwreck"
					onClick={() => handleClick(17, "DragonsStormwreck")}
				>
					<img className="module-cover" src={stormWreck} alt="Dragons of Stormwreck Isle" />
					<p className="module-text">
						<strong>
							Dragons of Stormwreck Isle <br />
						</strong>
						Dragons of Stormwreck Isle is your gateway to action-packed adventures in the
						cooperative storytelling game DUNGEONS & DRAGONS, where heroes battle monsters, find
						treasure, and undertake epic quests. This adventure contains everything you need to play
						heroic characters caught up in an ancient war among dragons as they explore the secrets
						of Stormwreck Isle.
					</p>
				</div>
			</div>

			{/****************************  ROW 7 ***********************/}

			<div className="module-row">
				<div className="module-block shadow-queen" onClick={() => handleClick(18, "DragonQueen")}>
					<img
						className="module-cover"
						src={dragonQueen}
						alt="Dragonlance: Shadow of the Dragon Queen"
					/>
					<p className="module-text">
						<strong>
							Dragonlance: Shadow of the Dragon Queen <br />
						</strong>
						Takhisis the Dragon Queen has returned to the world of Krynn. Across the land, her
						armies of fanatical draconians wage a brutal war of conquest. As the Dragon Armies march
						on the unprepared nation of Solamnia, only the defenders of the city of Kalaman stand in
						their way. But the Dragon Armies want more than just to crush their foes. An ancient
						evil in the Dragon Queen’s service seeks a magical weapon that could dominate Krynn for
						all time. <br />
						Dragonlance: Shadow of the Dragon Queen is a tale of conflict and defiance set during
						the legendary War of the Lance. Create characters from Krynn, the world of the
						Dragonlance setting, then march them to the front lines of battle against the terrifying
						Dragon Armies.
					</p>
				</div>

				<div
					className="module-block tyranny-dragons"
					onClick={() => handleClick(19, "TyrannyDragons")}
				>
					<img className="module-cover" src={tyrannyDragons} alt="Tyranny of Dragons" />
					<p className="module-text">
						<strong>
							Tyranny of Dragons <br />
						</strong>
						The forces of Tiamat, Queen of Evil Dragons, bring war to the Forgotten Realms. Led by
						the sinister Cult of the Dragon, an army of dragons and foul villains wage a merciless
						campaign to unleash their draconic god upon the world. Opposing them is a desperate
						alliance including the heroic Harpers and treacherous Zhentarim. This fragile coalition
						needs heroes to unite them and find ways to resist the draconic threat. Do you have the
						courage to stand against the Cult of the Dragon and the threat of Tiamat's immortal
						tyranny?
					</p>
				</div>

				<div className="module-block golden-vault" onClick={() => handleClick(20, "GoldenVault")}>
					<img className="module-cover" src={goldenVault} alt="Keys From the Golden Vault" />
					<p className="module-text">
						<strong>
							Keys From the Golden Vault <br />
						</strong>
						Some jobs require more than simply wielding a sword or slinging a spell. Whether it’s
						procuring a well-guarded item or obtaining crucial information from an imprisoned
						contact, these tasks require careful planning and flawless execution. The secretive
						organization called the Golden Vault specializes in hiring crews for such jobs, and for
						the most daunting assignments—pursuing fabulous treasures and stopping dire threats—that
						crew is your character.
					</p>
				</div>
			</div>
		</div>
	);
}
