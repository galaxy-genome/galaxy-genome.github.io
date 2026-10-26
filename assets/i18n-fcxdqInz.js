import{i as e,r as t,t as n}from"./react-DB-4Zxce.js";import{t as r}from"./preload-helper-BZ1Pz5am.js";import{n as i}from"./dist-73md-sHI.js";import{t as a}from"./reference-pA-DyXo0.js";var o=t({default:()=>s}),s={back:`Back`,close:`Close`,cancel:`Cancel`,undo:`Undo`,more:`More`,open:`Open`,delete:`Delete`,duplicate:`Duplicate`,remove:`Remove`,done:`Done`,favorite:`Favorite`,unfavorite:`Unfavorite`,mods_one:`{count} mod`,mods_other:`{count} mods`},c=t({default:()=>l}),l={notSet:`Not set`,hold:`Hold {control}`,holdTogether:`Hold {controls} together`,and:` and `,then:`, then `,allAnyOrder:`Do all of these, in any order: {list}`,allInOrder:`Do all of these, in this order: {list}`,shipyardOffers:`The shipyard offers {modules}`,control_ENGINE_LEFT:`turn left`,control_ENGINE_RIGHT:`turn right`,never:`Never: this step ends when your ship is destroyed`,neverLabel:`Never (the step ends only by failing)`,gameOver:`💥 Game over`,gameOverLine:`💥 Game over: your ship is destroyed. The quest fails.`,shipReaches:`{pilot} reaches {place}`,thePlayer:`the player`,ownStation:`your own station`,category_travel:`Travel`,category_travel_hint:`Arrive in a system, warp, fly a distance`,category_stations:`Stations`,category_stations_hint:`Open a station menu, the bar, story missions`,category_planets:`Planets`,category_planets_hint:`Scan, select, land, leave`,category_ships:`Ships`,category_ships_hint:`Destroyed, selected, warped away, stopped`,category_combat:`Combat`,category_combat_hint:`No enemies left, countermeasures`,category_mining_and_cargo:`Mining and cargo`,category_mining_and_cargo_hint:`Collect cargo, seismic charges, ores`,category_dialogue_and_time:`Dialogue and time`,category_dialogue_and_time_hint:`Dialogue closed, seconds into the step`,category_your_own_station:`Your own station`,category_your_own_station_hint:`Upgrade the bar or trade port`,category_screens_and_buttons:`Screens and buttons`,category_screens_and_buttons_hint:`The player opens a screen or taps a button`,category_game_events:`Game events`,category_game_events_hint:`Missions, pirates and events the game raises`,ACTION_WARP_END_SYSTEM__label:`Arrive in a system (in space)`,ACTION_WARP_END_SYSTEM__sentence:`the player arrives in {p}, in space`,ACTION_WARP_IN_SYSTEM__label:`Jump toward a system`,ACTION_WARP_IN_SYSTEM__sentence:`the player jumps toward {p}`,ACTION_WARP_END_label:`Any warp ends`,ACTION_WARP_END_sentence:`any warp jump ends`,ACTION_WARP_BEGIN_label:`Warp starts`,ACTION_WARP_BEGIN_sentence:`the player starts a warp jump`,SCREEN_ACTION_ROUTE_SYSTEM__label:`Plot a route to a system`,SCREEN_ACTION_ROUTE_SYSTEM__sentence:`the player plots a route to {p}`,ACTION_PLAYER_DIST__label:`Fly a distance from the centre`,ACTION_PLAYER_DIST__sentence:`the player is {p} ls from the system centre`,PLAYER_SHIP_STOP_label:`The player’s ship stops`,PLAYER_SHIP_STOP_sentence:`the player’s ship stops`,ACTION_NEBULA__label:`In a system with a nebula`,ACTION_NEBULA__sentence:`the player is in a system with the {p} nebula`,ACTION_GATES_REPAIR_label:`Warp gate repaired`,ACTION_GATES_REPAIR_sentence:`a warp gate is repaired`,ACTION_CLICK_STATION__label:`Open a station’s menu`,ACTION_CLICK_STATION__sentence:`the player opens the station menu at {p}`,SCREEN_PORT_BAR_label:`Open the bar`,SCREEN_PORT_BAR_sentence:`the player opens a station bar`,CLICK_ACCEPT_STORY_MISSION_label:`Accept a story mission`,CLICK_ACCEPT_STORY_MISSION_sentence:`the player accepts a story mission`,GET_STORY_REWARD_label:`Collect a story mission reward`,GET_STORY_REWARD_sentence:`the player collects a story mission reward`,SCREEN_PORT_SHIPYARD_label:`Open the shipyard`,SCREEN_PORT_SHIPYARD_sentence:`the player opens the shipyard`,SCREEN_PORT_MODULES_label:`Open station modules`,SCREEN_PORT_MODULES_sentence:`the player opens station modules`,SCREEN_PORT_MARKET_label:`Open the market`,SCREEN_PORT_MARKET_sentence:`the player opens the market`,SCREEN_PORT_MISSIONS_label:`Open the missions board`,SCREEN_PORT_MISSIONS_sentence:`the player opens the missions board`,SCREEN_PORT_SERVICE_label:`Open station service`,SCREEN_PORT_SERVICE_sentence:`the player opens station service`,SCREEN_PORT_DISCOVERIES_label:`Open discoveries`,SCREEN_PORT_DISCOVERIES_sentence:`the player opens discoveries`,ACTION_CLICK_PLANET__label:`Select a planet`,ACTION_CLICK_PLANET__sentence:`the player selects {p}`,ACTION_SCAN_PLANET__label:`Scan a planet`,ACTION_SCAN_PLANET__sentence:`the player scans {p}`,ACTION_SCAN_PLANET_TYPE__label:`Scan a planet or star type`,ACTION_SCAN_PLANET_TYPE__sentence:`the player scans a {p}`,LAND_ON_PLANET__label:`Land on a planet`,LAND_ON_PLANET__sentence:`the player lands on {p}`,LEAVE_PLANET_label:`Leave a planet`,LEAVE_PLANET_sentence:`the player leaves a planet’s surface`,ACTION_SHIP_DESTROYED__label:`Ship destroyed`,ACTION_SHIP_DESTROYED__sentence:`ship {p} is destroyed`,ACTION_SELECT_SHIP__label:`Select a ship`,ACTION_SELECT_SHIP__sentence:`the player selects {p}`,ACTION_SHIP_WARPED__label:`Ship warps away`,ACTION_SHIP_WARPED__sentence:`{p} warps away`,SHIP_STOP__label:`Ship reaches a place`,SHIP_STOP__sentence:`{p}`,ACTION_WARP_TRACK__label:`Obtain a ship’s warp trail`,ACTION_WARP_TRACK__sentence:`the player obtains {p}’s warp trail`,NO_ENEMY_label:`No enemies left`,NO_ENEMY_sentence:`no enemies are left`,ACTION_ATTACK_label:`Attack pressed`,ACTION_ATTACK_sentence:`the player presses Attack`,ACTION_CHAFF_LAUNCHER_label:`Chaff launched`,ACTION_CHAFF_LAUNCHER_sentence:`the player launches chaff`,ACTION_HEATSINK_label:`Heat sink used`,ACTION_HEATSINK_sentence:`the player uses a heat sink`,ACTION_MISSILE_DEF_label:`Missile defence used`,ACTION_MISSILE_DEF_sentence:`the player uses missile defence`,ACTION_SHIELD_CELL_label:`Shield cell used`,ACTION_SHIELD_CELL_sentence:`the player uses a shield cell`,ACTION_FIGHTERS_label:`Fighters launched`,ACTION_FIGHTERS_sentence:`the player launches fighters`,ACTION_SILENT_MODE_label:`Silent running`,ACTION_SILENT_MODE_sentence:`the player switches to silent running`,COLLECT_CARGO__label:`Collect cargo`,COLLECT_CARGO__sentence:`the player collects {p}`,COLLECT_MATERIAL__label:`Mine a material in space`,COLLECT_MATERIAL__sentence:`the player mines {p} in space`,ACTION_MATERIAL_BELT__label:`Find an ore with the spectrometer`,ACTION_MATERIAL_BELT__sentence:`the spectrometer finds {p}`,PLANET_MINING_END_label:`Planet mining ends`,PLANET_MINING_END_sentence:`mining on a planet ends`,ACTION_SEISMIC_CHRG__label:`Seismic charge reaches a level`,ACTION_SEISMIC_CHRG__sentence:`a seismic charge reaches {p}%`,ACTION_SEISMIC_BOOM_S_label:`Seismic charge succeeds`,ACTION_SEISMIC_BOOM_S_sentence:`a seismic charge detonates successfully`,ACTION_DIALOG_COMPLETE_label:`Dialogue closed`,ACTION_DIALOG_COMPLETE_sentence:`the dialogue is closed`,TIME_TICK__label:`Seconds into the step`,TIME_TICK__sentence:`{p} seconds have passed in this step`,OWNSTATION_UPGRADE_BAR_label:`Upgrade the bar`,OWNSTATION_UPGRADE_BAR_sentence:`the player upgrades their bar`,OWNSTATION_UPGRADE_TRADE_label:`Upgrade the trade port`,OWNSTATION_UPGRADE_TRADE_sentence:`the player upgrades their trade port`,SCREEN_OWNSTATION_label:`Open own station`,SCREEN_OWNSTATION_sentence:`the player opens their own station`,SCREEN_GALAXY_MAP_label:`Galaxy map opened`,SCREEN_GALAXY_MAP_sentence:`galaxy map opened`,SCREEN_ACTION_MAP_ROUTE_label:`Route plotted on the map`,SCREEN_ACTION_MAP_ROUTE_sentence:`route plotted on the map`,SCREEN_GALAXY_MAP_FILTERS_label:`Map filters opened`,SCREEN_GALAXY_MAP_FILTERS_sentence:`map filters opened`,SCREEN_MAP_BOOKMARKS_label:`Bookmarks opened`,SCREEN_MAP_BOOKMARKS_sentence:`bookmarks opened`,SCREEN_MAP_BOOKMARK_ADD_label:`Bookmark added`,SCREEN_MAP_BOOKMARK_ADD_sentence:`bookmark added`,SCREEN_MODULES_label:`Modules opened`,SCREEN_MODULES_sentence:`modules opened`,SCREEN_SYSTEM_OBJECTS_label:`Objects opened`,SCREEN_SYSTEM_OBJECTS_sentence:`objects opened`,SCREEN_SYSTEM_OBJECTS_MAP_label:`System map opened`,SCREEN_SYSTEM_OBJECTS_MAP_sentence:`system map opened`,SCREEN_CARGO_label:`Cargo opened`,SCREEN_CARGO_sentence:`cargo opened`,SCREEN_MISSIONS_SHIP_label:`Missions panel opened`,SCREEN_MISSIONS_SHIP_sentence:`missions panel opened`,SCREEN_REPAIR_SHIP_label:`Repair menu opened`,SCREEN_REPAIR_SHIP_sentence:`repair menu opened`,SCREEN_SPECS_label:`Specifications opened`,SCREEN_SPECS_sentence:`specifications opened`,SCREEN_FLEET_SHIP_label:`Fleet opened`,SCREEN_FLEET_SHIP_sentence:`fleet opened`,SCREEN_PLANET_INFO_label:`Planet info opened`,SCREEN_PLANET_INFO_sentence:`planet info opened`,SCREEN_ACTION_REPAIR_ALL_label:`Repair all pressed`,SCREEN_ACTION_REPAIR_ALL_sentence:`repair all pressed`,SCREEN_ACTION_REFUEL_label:`Refuel pressed`,SCREEN_ACTION_REFUEL_sentence:`refuel pressed`,SYS_OBJ_SELECT_SHIP_label:`Ship selected in the list`,SYS_OBJ_SELECT_SHIP_sentence:`ship selected in the list`,SYS_OBJ_SELECT_PLANET_label:`Planet selected in the list`,SYS_OBJ_SELECT_PLANET_sentence:`planet selected in the list`,SYS_OBJ_SELECT_STATION_label:`Station selected in the list`,SYS_OBJ_SELECT_STATION_sentence:`station selected in the list`,SYS_OBJ_SELECT_CARGO_label:`Cargo selected in the list`,SYS_OBJ_SELECT_CARGO_sentence:`cargo selected in the list`,ACTION_AUTOPILOT_label:`Autopilot pressed`,ACTION_AUTOPILOT_sentence:`autopilot pressed`,ACTION_FLIGHT_ASSIST_label:`Flight assist pressed`,ACTION_FLIGHT_ASSIST_sentence:`flight assist pressed`,ACTION_WARP_JUMP_label:`Warp pressed`,ACTION_WARP_JUMP_sentence:`warp pressed`,ACTION_PLANET_SCAN_label:`Planet scan pressed`,ACTION_PLANET_SCAN_sentence:`planet scan pressed`,ACTION_PLANET_LANDING_label:`Planet landing pressed`,ACTION_PLANET_LANDING_sentence:`planet landing pressed`,ACTION_SPECTRUM_label:`Spectrometer pressed`,ACTION_SPECTRUM_sentence:`spectrometer pressed`,ACTION_POWER_SYS_label:`Systems power pressed`,ACTION_POWER_SYS_sentence:`systems power pressed`,ACTION_POWER_WEP_label:`Weapons power pressed`,ACTION_POWER_WEP_sentence:`weapons power pressed`,ACTION_POWER_ENG_label:`Engines power pressed`,ACTION_POWER_ENG_sentence:`engines power pressed`,ACTION_BOOST_label:`Boost pressed`,ACTION_BOOST_sentence:`boost pressed`,ACTION_BRAKE_label:`Brake pressed`,ACTION_BRAKE_sentence:`brake pressed`,ACTION_FIRE_label:`Fire pressed`,ACTION_FIRE_sentence:`fire pressed`,ACTION_QUICKSAVE_label:`Quick save pressed`,ACTION_QUICKSAVE_sentence:`quick save pressed`,ACTION_SETTINGS_label:`Settings pressed`,ACTION_SETTINGS_sentence:`settings pressed`,ACTION_SHOW_SHIP_MENU_label:`Ship menu opened`,ACTION_SHOW_SHIP_MENU_sentence:`ship menu opened`,ACTION_SHOW_STATION_MENU_label:`Station menu opened`,ACTION_SHOW_STATION_MENU_sentence:`station menu opened`,CLICK_BUY_GREEN_GOODS_label:`Green goods bought`,CLICK_BUY_GREEN_GOODS_sentence:`green goods bought`,CLICK_SELL_GOODS_WITH_PROFIT_label:`Goods sold at a profit`,CLICK_SELL_GOODS_WITH_PROFIT_sentence:`goods sold at a profit`,CLICK_SELECT_ENEMY_label:`Enemy selected in the list`,CLICK_SELECT_ENEMY_sentence:`enemy selected in the list`,CLICK_TURN_ON_MODULE_label:`Module switched on`,CLICK_TURN_ON_MODULE_sentence:`module switched on`,CLICK_CHANGE_MODULE_PRIORITY_label:`Module priority changed`,CLICK_CHANGE_MODULE_PRIORITY_sentence:`module priority changed`,PLANET_MINING_label:`Mining pressed on a planet`,PLANET_MINING_sentence:`mining pressed on a planet`,PLANET_TAKEOFF_label:`Take off pressed`,PLANET_TAKEOFF_sentence:`take off pressed`,SHIPSHOP_label:`Ship shop opened`,SHIPSHOP_sentence:`ship shop opened`,MODULESSHOP_label:`Module shop opened`,MODULESSHOP_sentence:`module shop opened`,ENGINEER_SCREEN_label:`Engineer opened`,ENGINEER_SCREEN_sentence:`engineer opened`,GARAGE_SCREEN_label:`Garage opened`,GARAGE_SCREEN_sentence:`garage opened`,ACTION_MISSION_HUNT_COMPLETE_label:`Pirate hunt mission completed`,ACTION_MISSION_HUNT_COMPLETE_sentence:`pirate hunt mission completed`,ACTION_MISSION_RESCUE_COMPLETE_label:`Rescue mission completed`,ACTION_MISSION_RESCUE_COMPLETE_sentence:`rescue mission completed`,ACTION_MISSION_BUGHUNT_COMPLETE_label:`Bug hunt mission completed`,ACTION_MISSION_BUGHUNT_COMPLETE_sentence:`bug hunt mission completed`,ACTION_MISSION_ILLEGAL_COMPLETE_label:`Illegal mission completed`,ACTION_MISSION_ILLEGAL_COMPLETE_sentence:`illegal mission completed`,ACTION_PIRATE_SPAWN_label:`A mission pirate spawns`,ACTION_PIRATE_SPAWN_sentence:`a mission pirate spawns`,ACTION_CARAVAN_SPAWN_label:`A caravan spawns`,ACTION_CARAVAN_SPAWN_sentence:`a caravan spawns`,MINING_PIRATE_SPAWN_label:`Pirates arrive while mining`,MINING_PIRATE_SPAWN_sentence:`pirates arrive while mining`,SCANNED_ATTACKED_BY_PIRATE_label:`Scanned and attacked by a pirate`,SCANNED_ATTACKED_BY_PIRATE_sentence:`scanned and attacked by a pirate`,EVENT_SPAWN_PIRATES_label:`Pirate event starts`,EVENT_SPAWN_PIRATES_sentence:`pirate event starts`,EVENT_END_PIRATES_label:`Pirate event ends`,EVENT_END_PIRATES_sentence:`pirate event ends`,EVENT_SPAWN_ZENTARKS_label:`Zentarks event starts`,EVENT_SPAWN_ZENTARKS_sentence:`zentarks event starts`,EVENT_END_ZENTARKS_label:`Zentarks event ends`,EVENT_END_ZENTARKS_sentence:`zentarks event ends`,EVENT_SPAWN_WRECK_label:`Wreck event`,EVENT_SPAWN_WRECK_sentence:`wreck event`,EVENT_SPAWN_REPAIR_label:`Repair event`,EVENT_SPAWN_REPAIR_sentence:`repair event`,EVENT_SPAWN_REFUEL_label:`Refuel event`,EVENT_SPAWN_REFUEL_sentence:`refuel event`,EVENT_OWNSTATION_PIRATES_label:`Pirates attack your station`,EVENT_OWNSTATION_PIRATES_sentence:`pirates attack your station`,EVENT_END_OWNSTATION_PIRATES_label:`Station attack ends`,EVENT_END_OWNSTATION_PIRATES_sentence:`station attack ends`,WARP_ALIEN_HOOK_label:`Pulled out of warp by aliens`,WARP_ALIEN_HOOK_sentence:`pulled out of warp by aliens`,ACTION_MissionTypeMiningStart_label:`Board mining mission taken`,ACTION_MissionTypeMiningStart_sentence:`the player takes a mining mission from the board`,ACTION_MissionTypeMiningCOMPLETE_label:`Board mining mission handed in`,ACTION_MissionTypeMiningCOMPLETE_sentence:`the player hands in a mining mission`,ACTION_MissionTypeFindGoodsStart_label:`Board find goods mission taken`,ACTION_MissionTypeFindGoodsStart_sentence:`the player takes a find goods mission from the board`,ACTION_MissionTypeFindGoodsCOMPLETE_label:`Board find goods mission handed in`,ACTION_MissionTypeFindGoodsCOMPLETE_sentence:`the player hands in a find goods mission`,ACTION_MissionTypeCaravanHuntStart_label:`Board caravan hunt mission taken`,ACTION_MissionTypeCaravanHuntStart_sentence:`the player takes a caravan hunt mission from the board`,ACTION_MissionTypeCaravanHuntCOMPLETE_label:`Board caravan hunt mission handed in`,ACTION_MissionTypeCaravanHuntCOMPLETE_sentence:`the player hands in a caravan hunt mission`,ACTION_MissionTypeIntimidateStart_label:`Board intimidation mission taken`,ACTION_MissionTypeIntimidateStart_sentence:`the player takes an intimidation mission from the board`,ACTION_MissionTypeIntimidateCOMPLETE_label:`Board intimidation mission handed in`,ACTION_MissionTypeIntimidateCOMPLETE_sentence:`the player hands in an intimidation mission`,ACTION_MissionTypeBugHuntStart_label:`Board bug hunt mission taken`,ACTION_MissionTypeBugHuntStart_sentence:`the player takes a bug hunt mission from the board`,ACTION_MissionTypeBugHuntCOMPLETE_label:`Board bug hunt mission handed in`,ACTION_MissionTypeBugHuntCOMPLETE_sentence:`the player hands in a bug hunt mission`,ACTION_MissionTypeContractMurderStart_label:`Board contract kill mission taken`,ACTION_MissionTypeContractMurderStart_sentence:`the player takes a contract kill mission from the board`,ACTION_MissionTypeContractMurderCOMPLETE_label:`Board contract kill mission handed in`,ACTION_MissionTypeContractMurderCOMPLETE_sentence:`the player hands in a contract kill mission`,ACTION_MissionTypeTouristStart_label:`Board tourist mission taken`,ACTION_MissionTypeTouristStart_sentence:`the player takes a tourist mission from the board`,ACTION_MissionTypeTouristCOMPLETE_label:`Board tourist mission handed in`,ACTION_MissionTypeTouristCOMPLETE_sentence:`the player hands in a tourist mission`,ACTION_MissionTypeCourierStart_label:`Board courier mission taken`,ACTION_MissionTypeCourierStart_sentence:`the player takes a courier mission from the board`,ACTION_MissionTypeCourierCOMPLETE_label:`Board courier mission handed in`,ACTION_MissionTypeCourierCOMPLETE_sentence:`the player hands in a courier mission`,ACTION_MissionTypeMoneyHelpStart_label:`Board money help mission taken`,ACTION_MissionTypeMoneyHelpStart_sentence:`the player takes a money help mission from the board`,ACTION_MissionTypeMoneyHelpCOMPLETE_label:`Board money help mission handed in`,ACTION_MissionTypeMoneyHelpCOMPLETE_sentence:`the player hands in a money help mission`,ACTION_MissionTypePirateHuntStart_label:`Board pirate hunt mission taken`,ACTION_MissionTypePirateHuntStart_sentence:`the player takes a pirate hunt mission from the board`,ACTION_MissionTypePirateHuntCOMPLETE_label:`Board pirate hunt mission handed in`,ACTION_MissionTypePirateHuntCOMPLETE_sentence:`the player hands in a pirate hunt mission`,ACTION_MissionTypeTransferGoodsStart_label:`Board goods transfer mission taken`,ACTION_MissionTypeTransferGoodsStart_sentence:`the player takes a goods transfer mission from the board`,ACTION_MissionTypeTransferGoodsCOMPLETE_label:`Board goods transfer mission handed in`,ACTION_MissionTypeTransferGoodsCOMPLETE_sentence:`the player hands in a goods transfer mission`,ACTION_MissionRescueStart_label:`Board rescue mission taken`,ACTION_MissionRescueStart_sentence:`the player takes a rescue mission from the board`,ACTION_MissionRescueCOMPLETE_label:`Board rescue mission handed in`,ACTION_MissionRescueCOMPLETE_sentence:`the player hands in a rescue mission`,ACTION_MissionTypeIllegal_label:`Illegal job taken in the bar`,ACTION_MissionTypeIllegal_sentence:`the player takes an illegal job in the bar`,PLANET_MINING_DONE__label:`Finish mining a material on a planet`,PLANET_MINING_DONE__sentence:`the player finishes mining {p} on a planet`,ENGINE_LEFT_label:`Turn left pressed`,ENGINE_LEFT_sentence:`turn left pressed`,ENGINE_RIGHT_label:`Turn right pressed`,ENGINE_RIGHT_sentence:`turn right pressed`,ACTION_FN1_label:`Function button 1 pressed`,ACTION_FN1_sentence:`function button 1 pressed`,ACTION_FN2_label:`Function button 2 pressed`,ACTION_FN2_sentence:`function button 2 pressed`,ACTION_FN3_label:`Function button 3 pressed`,ACTION_FN3_sentence:`function button 3 pressed`,ACTION_ZOOMSWITCH_label:`Zoom switch key pressed`,ACTION_ZOOMSWITCH_sentence:`zoom switch key pressed`,DRONE_COLLECTORS_label:`Collector drones button pressed`,DRONE_COLLECTORS_sentence:`collector drones button pressed`,SCREEN_ACTION_MAP_ADD_POINT_label:`Map point added`,SCREEN_ACTION_MAP_ADD_POINT_sentence:`map point added`,ACTION_SHOW_EXTERNAL_label:`External view button pressed`,ACTION_SHOW_EXTERNAL_sentence:`external view button pressed`,ACTION_BOTTOM_MENU_label:`Bottom menu opened`,ACTION_BOTTOM_MENU_sentence:`bottom menu opened`,ACTION_HELP_label:`Help opened`,ACTION_HELP_sentence:`help opened`,ACTION_ACHIVES_label:`Achievements button pressed`,ACTION_ACHIVES_sentence:`achievements button pressed`,ACTION_SELECT_PLANET_WITH_STATION_label:`Planet with a station selected on the system map`,ACTION_SELECT_PLANET_WITH_STATION_sentence:`planet with a station selected on the system map`,shipsObjects_label:`Ships tab opened in system objects`,shipsObjects_sentence:`ships tab opened in system objects`,planetsObjects_label:`Planets tab opened in system objects`,planetsObjects_sentence:`planets tab opened in system objects`,RESCUE_SCREEN_label:`Rescue screen opened`,RESCUE_SCREEN_sentence:`rescue screen opened`,ACHIVs_label:`Achievements tab opened`,ACHIVs_sentence:`achievements tab opened`,LEADER_BOARD_PLANETS_label:`Planets leaderboard opened`,LEADER_BOARD_PLANETS_sentence:`planets leaderboard opened`,LEADER_BOARD_SYSTEMS_label:`Systems leaderboard opened`,LEADER_BOARD_SYSTEMS_sentence:`systems leaderboard opened`,LEADER_BOARD_BATTLES_label:`Battles leaderboard opened`,LEADER_BOARD_BATTLES_sentence:`battles leaderboard opened`,PLANET_LEFT_label:`Rover left pressed`,PLANET_LEFT_sentence:`rover left pressed`,PLANET_RIGHT_label:`Rover right pressed`,PLANET_RIGHT_sentence:`rover right pressed`,PLANET_ENGINES_label:`Rover engines pressed`,PLANET_ENGINES_sentence:`rover engines pressed`,PLANET_MOTOR_MODE_label:`Rover motor mode pressed`,PLANET_MOTOR_MODE_sentence:`rover motor mode pressed`,CLICK_GREEN_GOODS_label:`Cheap goods tapped in the market`,CLICK_GREEN_GOODS_sentence:`cheap goods tapped in the market`,CLICK_RED_GOODS_label:`Expensive goods tapped in the market`,CLICK_RED_GOODS_sentence:`expensive goods tapped in the market`,CLICK_SELL_GREEN_GOODS_label:`Goods sold in the market`,CLICK_SELL_GREEN_GOODS_sentence:`goods sold in the market`,CLICK_SHIPYARD_MODULES_SHIELDS_label:`Shields tapped in the module shop`,CLICK_SHIPYARD_MODULES_SHIELDS_sentence:`shields tapped in the module shop`,CLICK_SHIPYARD_MODULES_SHIELDS_2D_label:`Shield module tapped in available modules`,CLICK_SHIPYARD_MODULES_SHIELDS_2D_sentence:`shield module tapped in available modules`,ACTION_SHIPYARD_MODULES_SHIELDS_2D_BUY_label:`Shield module bought`,ACTION_SHIPYARD_MODULES_SHIELDS_2D_BUY_sentence:`shield module bought`,EVENT_SPAWN_NPC_KILLTARGET_label:`Kill-target event starts`,EVENT_SPAWN_NPC_KILLTARGET_sentence:`kill-target event starts`,EVENT_SPAWN_PIRATE_MISSION_label:`Pirate mission event starts`,EVENT_SPAWN_PIRATE_MISSION_sentence:`pirate mission event starts`,EVENT_SPAWN_PIRATEvsNPC_label:`Pirates-versus-traders event starts`,EVENT_SPAWN_PIRATEvsNPC_sentence:`pirates-versus-traders event starts`,EVENT_SPAWN_PIRATEvsLAW_label:`Pirates-versus-police event starts`,EVENT_SPAWN_PIRATEvsLAW_sentence:`pirates-versus-police event starts`,EVENT_SPAWN_ANGLERvsNPC_label:`Angler attack event starts`,EVENT_SPAWN_ANGLERvsNPC_sentence:`angler attack event starts`,EVENT_SPAWN_BUGHUNT_label:`Bug hunt event starts`,EVENT_SPAWN_BUGHUNT_sentence:`bug hunt event starts`,EVENT_ACTIVATE_PIRATES_label:`Pirate event activated`,EVENT_ACTIVATE_PIRATES_sentence:`pirate event activated`,EVENT_ACTIVATE_PIRATE_MISSION_label:`Pirate mission event activated`,EVENT_ACTIVATE_PIRATE_MISSION_sentence:`pirate mission event activated`,EVENT_ACTIVATE_REPAIR_label:`Repair event activated`,EVENT_ACTIVATE_REPAIR_sentence:`repair event activated`,EVENT_ACTIVATE_REFUEL_label:`Refuel event activated`,EVENT_ACTIVATE_REFUEL_sentence:`refuel event activated`,EVENT_ACTIVATE_WRECK_label:`Wreck event activated`,EVENT_ACTIVATE_WRECK_sentence:`wreck event activated`,EVENT_ACTIVATE_PIRATEvsNPC_label:`Pirates-versus-traders event activated`,EVENT_ACTIVATE_PIRATEvsNPC_sentence:`pirates-versus-traders event activated`,EVENT_ACTIVATE_ANGLERvsNPC_label:`Angler attack event activated`,EVENT_ACTIVATE_ANGLERvsNPC_sentence:`angler attack event activated`,EVENT_ACTIVATE_PIRATEvsLAW_label:`Pirates-versus-police event activated`,EVENT_ACTIVATE_PIRATEvsLAW_sentence:`pirates-versus-police event activated`,EVENT_ACTIVATE_MURDERCONTRACT_label:`Contract kill event activated`,EVENT_ACTIVATE_MURDERCONTRACT_sentence:`contract kill event activated`,EVENT_ACTIVATE_INTIMIDATE_label:`Intimidation event activated`,EVENT_ACTIVATE_INTIMIDATE_sentence:`intimidation event activated`,EVENT_ACTIVATE_ALIENBUGS_label:`Alien bugs event activated`,EVENT_ACTIVATE_ALIENBUGS_sentence:`alien bugs event activated`,EVENT_END_PIRATEvsNPC_label:`Pirates-versus-traders event ends`,EVENT_END_PIRATEvsNPC_sentence:`pirates-versus-traders event ends`,EVENT_END_ANGLERvsNPC_label:`Angler attack event ends`,EVENT_END_ANGLERvsNPC_sentence:`angler attack event ends`,EVENT_END_PIRATEvsLAW_label:`Pirates-versus-police event ends`,EVENT_END_PIRATEvsLAW_sentence:`pirates-versus-police event ends`},u=t({default:()=>d}),d={intro1:`You have a zip file from the Quest Editor’s **Download** button. This guide puts it into the game.`,intro2:"**The goal:** copy the files inside the zip’s `mod` folder into this folder on your phone:",folder:`Internal storage › Android › data › com.skvgames.GalaxyGenome › files`,intro3:"Put them **straight into `files`**, not into a new folder inside it. The game reads `Quest0.json` to `Quest199.json`, `StarsStations.json`, and a `textures` folder (which becomes `files › textures`).",intro4:`Pick one method. **On Windows, use Method 1. On a Mac, use Method 2.**`,problems:`Common problems`,windows:`Windows:`,mac:`Mac:`,m1Title:`Method 1: USB cable and File transfer (Windows, recommended)`,m1Need:`You need a Windows computer and a USB cable that carries data (some cheap cables only charge).`,m1S1:`Step 1: Unzip the download`,m1S1Body:"Unzip the zip and open the `mod` folder inside it. You see files like `Quest0.json`.",m1S2:`Step 2: Connect the phone`,m1S2a:`Unlock the phone and plug it into the computer.`,m1S2b:`Swipe down from the top of the phone screen. Tap the notification that says something like **Charging this device via USB** or **USB for file transfer**.`,m1S2c:`Tap **File transfer** (some phones say **Transfer files** or **MTP**).`,m1S2d:`If the phone asks **Allow access to phone data?**, tap **Allow**.`,m1S2Note:`Don’t see the notification? Unplug, plug in again, and keep the phone unlocked. Try another cable or USB port.`,m1S3:`Step 3: Copy the files`,m1S3a:`In File Explorer, open **This PC › your phone › Internal storage › Android › data › com.skvgames.GalaxyGenome › files**.`,m1S3b:"Copy everything from the `mod` folder into it. Choose **Replace** if asked.",m1P1:`**The computer doesn’t see the phone.** Unlock it, pick **File transfer**, try another cable (data, not charge-only).`,m1P2:"**No `com.skvgames.GalaxyGenome` folder?** Open the game once on the phone, then close it. Unplug and plug in again.",m1P3:`**Folder looks empty or old?** The computer shows a saved view. Unplug and plug in again, or restart the phone.`,m1P4:`**“Access denied” or can’t copy?** Make sure the phone is unlocked and set to **File transfer**, not **Charging only**.`,m1P5:`**Still blocked?** Some phones hide this folder from computers. Use Method 2.`,m2Title:`Method 2: adb and USB debugging (recommended for Mac)`,m2Intro:`adb is a free Google tool that sends files to a phone from a command window. It works when File transfer can’t see the folder.`,m2Need:`You need a computer and a USB cable that carries data (some cheap cables only charge).`,m2S1:`Step 1: Install adb (platform-tools)`,m2S1a:`Download **SDK Platform-Tools** for your computer from [developer.android.com/tools/releases/platform-tools](https://developer.android.com/tools/releases/platform-tools).`,m2S1b:"Unzip it. You get a folder named `platform-tools`.\n- Windows: move it to `C:\\platform-tools`.\n- Mac: move it into your home folder (Finder › Go › Home). If you use Homebrew: `brew install --cask android-platform-tools`",m2S2:`Step 2: Turn on USB debugging on the phone`,m2S2a:`Open **Settings › About phone**. (Samsung: **About phone › Software information**.)`,m2S2b:`Tap **Build number** 7 times. You see **“You are now a developer!”** Enter your PIN if asked.
- Xiaomi: tap **MIUI version** or **OS version** 7 times instead.`,m2S2c:`Go back to **Settings**. Open **System › Developer options** (Samsung: at the bottom of Settings).`,m2S2d:`Turn on **USB debugging**. Tap **OK**.`,m2S2e:`Plug the phone into the computer. The phone asks **Allow USB debugging?** Tick **Always allow from this computer** and tap **Allow**.`,m2S3:`Step 3: Open a command window in platform-tools`,m2S3Win:"**Windows:** open the `C:\\platform-tools` folder in File Explorer. Click the address bar, type `cmd`, press Enter.",m2S3Mac:"**Mac:** open **Terminal** (Applications › Utilities) and type `cd ~/platform-tools`, press Enter.",m2S4:`Step 4: Check the phone is connected`,m2S4Win:`adb devices`,m2S4Mac:`./adb devices`,m2S4Body:"You should see a line ending in `device`. If it says `unauthorized`, look at the phone and tap **Allow**. If nothing is listed, try another cable and check USB debugging is on.",m2S5:`Step 5: Copy the files`,m2S5a:"First unzip the download from the Quest Editor. Inside is a `mod` folder with files like `Quest0.json`.",m2S5b:"Replace the path below with where that `mod` folder is. The `/.` at the end copies what’s **inside** `mod`, including `textures`, not the `mod` folder itself.",m2S5WinLabel:`Windows (the folder is in Downloads, named after your zip):`,m2S5Win:`adb push "%USERPROFILE%\\Downloads\\my-mod\\mod\\." /sdcard/Android/data/com.skvgames.GalaxyGenome/files/`,m2S5Mac:`./adb push ~/Downloads/my-mod/mod/. /sdcard/Android/data/com.skvgames.GalaxyGenome/files/`,m2S5c:"You see a line like `12 files pushed`.",m2S6:`Step 6: Check the files arrived`,m2S6Win:`adb shell ls /sdcard/Android/data/com.skvgames.GalaxyGenome/files/`,m2S6Mac:`./adb shell ls /sdcard/Android/data/com.skvgames.GalaxyGenome/files/`,m2S6a:"You should see `Quest0.json` and the rest, and `textures` if your mod has one, next to the game’s own `Save1.SOL` files. If you see a folder named `mod` instead, you forgot the `/.`: run the push again with it.",m2S6b:`When done, you can turn USB debugging off again in Developer options.`,m2P1:"**`adb` is not recognized.** The command window isn’t in the platform-tools folder. Redo Step 3.",m2P2:"**`unauthorized`.** Look at the phone and tap **Allow**.",m2P3:`**No device listed.** The cable may only charge; try another. Check USB debugging is on, and unplug and plug in again.`,m2P4:"**`No such file or directory`.** Open the game once on the phone so it makes its folder, then push again. Check the `mod` path is right.",m2P5:"**A `mod` folder appears on the phone.** The `/.` was missing. Run the push again with it, then delete the extra folder: `adb shell rm -r /sdcard/Android/data/com.skvgames.GalaxyGenome/files/mod`",m2P6:"**Mac: `no such file or directory: ./adb`.** Installed with Homebrew? Type `adb` without `./`.",m3Title:`Method 3: The phone’s own Files app`,m3Intro:"No computer needed, but **this only works on older Android versions.** Android 11 and newer protect `Android › data`, and Android 13 and newer block it for normal file apps.",m3Check:`Check your Android version`,m3Ca:`Open **Settings**.`,m3Cb:`Tap **About phone** (on some phones: **About phone › Software information**).`,m3Cc:`Look at **Android version**.`,m3ThVersion:`Android version`,m3ThCan:`Can the Files app copy into Android › data?`,m3R1a:`10 or older`,m3R1b:`Yes.`,m3R2a:`11 or 12`,m3R2b:`Often. The app may show **Use this folder** and ask you to **Allow** access. Depends on the phone maker.`,m3R3a:`13 or newer`,m3R3b:`No, on most phones. Use Method 1 or 2.`,m3Uncertain:`Phone makers change their file apps. Some Samsung (My Files) and Xiaomi phones on Android 13+ still show the folder after an update, others don’t. If you can open the folder and paste, it worked: the game’s Modifications screen shows Mod exists: Yes.`,m3Steps:`Steps (Android 10, 11, 12)`,m3S1:`Download the zip on the phone.`,m3S2:`Open **Files** (or **My Files** on Samsung, **File Manager** on Xiaomi). Go to **Downloads**.`,m3S3:"Tap the zip, then **Extract** (or **Unzip**). Open the new folder, then `mod`.",m3S4:`Select all: long-press one file, then tap **Select all** (or the circle at the top).`,m3S5:`Tap **Copy** (sometimes under the **⋮** menu).`,m3S6:`Go back to **Internal storage** and open **Android › data › com.skvgames.GalaxyGenome › files**.
- If it asks to allow access to this folder, tap **Use this folder**, then **Allow**.`,m3S7:`Tap **Paste** (or **Copy here**).`,m3P1:`**“Can’t use this folder” or the folder is empty.** Your phone blocks it. Use Method 1 or 2.`,swTitle:`Switch the mod on in the game`,sw1:`Open Galaxy Genome. On the main menu, tap **Modifications**.`,sw2:`Under **Side Quests**, check that **Mod exists** shows **Yes** in yellow.`,sw3:`Tap the **Activated** box so it shows the orange cross.`,sw4:`Do the same under **Stars and Stations** or **Textures** if your download has those files.`,sw5:`If the game asks for file access, tap **Allow**.`,swUpdate:`**After every game update**, the game switches mods off. Open Modifications and switch them on again. Rating battles are off while mods are on.`,swP1:"**Mod exists: No.** The files are in a subfolder (`files › mod`) or the wrong folder. Move them straight into `com.skvgames.GalaxyGenome › files`.",swP2:`**Quests don’t show up.** Check Activated is ticked. Bar quests have requirements; a quest may need another quest finished first.`,swP3:"**Two mods overwrite each other.** Each quest needs its own file number, and only one `StarsStations.json` fits. In the editor, star both mods and use **Download** on the home screen: it combines them for you.",summary:"Copy the files in the zip’s `mod` folder straight into **Android › data › com.skvgames.GalaxyGenome › files** on your phone, then switch the mod on in the game’s **Modifications** menu. Pick one method:",sum1:`**Method 1: USB cable and File transfer.** Recommended on Windows.`,sum2:`**Method 2: adb and USB debugging.** Recommended on a Mac, and when File transfer can’t see the folder.`,sum3:`**Method 3: the phone’s own Files app.** No computer, but only on Android 12 and older.`,openGuide:`Open the full install guide`},f=t({default:()=>p}),p={readOnly:`Game quests are read-only`,readOnlyHelp:`Make your own copy to change it.`,makeCopy:`Make a copy`,cantUndo:`Can’t undo: it changed since`,removedPart:`Removed “{name}”`,deletedMod:`Deleted “{name}”`,deletedMods_one:`Deleted {count} mod`,deletedMods_other:`Deleted {count} mods`,madeCopy:`Made a copy of “{name}”`,copyTitle:`{name} (copy)`,addedEntry:`Added “{name}” to your home`,removedEntry:`Removed “{name}” from your home`,autoEntry:`Automatic`,beforeRestore:`Before restore`,beforeRemoving:`Before removing “{name}”`,beforeQuestId:`Before changing quest ID {from}`,restored:`Restored “{name}”`,justNow:`just now`,minutesAgo:`{n}m ago`,hoursAgo:`{n}h ago`,daysAgo:`{n}d ago`,fixRenumberGame:`Gave “{quest}” in {mod} a new quest ID ({from} → {to}) because the game uses it.`,fixRenumberFavorite:`Gave “{quest}” in {mod} a new quest ID ({from} → {to}) because another favorite uses it.`,fixMergedStars_one:`Merged {count} stars & stations mod into one StarsStations.json.`,fixMergedStars_other:`Merged {count} stars & stations mods into one StarsStations.json.`,issueModErrors:`“{mod}” has errors; the game may skip it.`,issueQuestErrors_one:`{count} quest in “{mod}” has errors; the game may skip it.`,issueQuestErrors_other:`{count} quests in “{mod}” have errors; the game may skip them.`,issueModNoLang:`“{mod}” has no {lang} version, so its quests are left out.`,issueQuestNoLang_one:`{count} quest in “{mod}” has no {lang} version and is left out.`,issueQuestNoLang_other:`{count} quests in “{mod}” have no {lang} version and are left out.`,issueRequiredNotFavorite:`{mod} requires {required}, which is not a favorite. The game needs both files.`,issueRequiredMissing:`{mod} requires {required}, which is not on this device.`,alsoFavorite:`Also favorite {mod}`,favoritedRequired:`{mod} is now a favorite`,issueTooManyFiles:`Your favorites need {count} quest files, {over} past the game’s {max}. Files past Quest{last}.json never load. Unfavorite mods to drop at least {over}; the largest are {largest}.`,alsoFavorited:`Also favorited {mods}`,overQuestLimit:`Favorites now need {count} quest files; the game loads only {max}.`,issueRequirement:`“{quest}” needs quest {id}, which isn’t in your favorites. It won’t appear until that quest is finished.`,issuePilotClash:`“{a}” and “{b}” both spawn a ship called {pilot}. If both run at once, the second is not spawned.`,issueGeneratedDeleted:`“{a}” uses the generated system {system}, which the stars of “{b}” remove from the game’s map.`,issueGeneratedChanged:`“{a}” uses the generated system {system}, which the stars of “{b}” move or turn into a different star.`,issueStarClash:`{star} is added by both “{a}” and “{b}”; the second one wins.`,issueStarTwice:`{star} is a new star in both “{a}” and “{b}”; the game makes two systems with that name.`,issueStarValues:`{star} is in both “{a}” and “{b}” with a different {fields}; the values of “{b}” win because it loads later.`,issueStationClash:`Station “{station}” is in both “{a}” and “{b}”; the game skips the second.`,issueStarOverlap:`{star} of “{b}” shares a map slot with {other} of “{a}”, so players cannot see or select it.`,issuePlanetShift:`Station “{station}” of “{b}” sits on body {n} of {system}, but with the planets of “{a}” loaded first, body {n} is {body}.`,issueCompanionReparent:`{planet} of “{b}” orbits the companion star {companion} of “{a}” in {system}, not the main star.`,issueOrbitClash:`{planet} uses an orbit another favorite already uses in {system}; the game skips it.`,issueTextureClash:`“{a}” and “{b}” both replace {texture}; the second one wins.`,template_blank:`Blank`,template_blank_description:`Two empty steps to start from.`,diagram_Step:`Step`,template_delivery:`Delivery`,template_delivery_description:`Talk, fly to a system, open the station menu, done.`,diagram_Talk:`Talk`,diagram_Fly:`Fly`,diagram_Dock:`Station`,template_ambush:`Ambush`,template_ambush_description:`Fly somewhere, pirates attack, destroy them.`,diagram_Pirates:`Pirates`,diagram_Win:`Win`,template_choice:`A hard choice`,template_choice_description:`Two choices that rejoin.`,diagram_Offer:`Offer`,diagram_Fight:`Fight`,diagram_Sneak:`Sneak`,diagram_Ending:`Ending`,template_space:`Space encounter`,template_space_description:`Starts by itself when the player arrives near a point.`,diagram_Arrive:`Arrive`,diagram_Encounter:`Encounter`,template_job:`Station job`,template_job_description:`A mission card with a story reward.`,diagram_Mission:`Mission`,diagram_Reward:`Reward`},m=t({default:()=>h}),h={aria_edit:`Galaxy map. Drag a star to move it, tap empty space to add a star, pinch or scroll to zoom.`,aria_point:`Galaxy map. Tap or drag to place the point.`,aria_circle:`Galaxy map. Drag the centre to move the area, drag the ring to resize it.`,aria_pick:`Galaxy map. Tap a system to choose it.`,aria_view:`Galaxy map. Tap a numbered pin to select that step, pinch or scroll to zoom.`,loading:`Loading the galaxy…`,zoomIn:`Zoom in`,zoomOut:`Zoom out`,fit:`Fit to quest places`,openFullMap:`Full map`,openFullMapCircle:`Open in full map`,cancel:`Cancel`,done:`Done`,title_point:`Star position`,title_circle:`Quest area`,title_pick:`Pick a system`,title_panel:`Galaxy map`,openInTab:`New tab`,centreOnSystem:`Centre on a system`,radius:`Radius`,help:`Light years on the galaxy map. Sol is at 0, 0; Y grows toward the top of the map.`,pickHelp:`Tap a system to choose it. Zoom in to see generated systems.`,pickOnMap:`Pick on map`,contextSol:`Sol (start)`,contextFromSol:`{ly} ly from Sol, {direction}`,dir_n:`north`,dir_ne:`north-east`,dir_e:`east`,dir_se:`south-east`,dir_s:`south`,dir_sw:`south-west`,dir_w:`west`,dir_nw:`north-west`,miniMap:`Map around {name}. Opens the full map.`,editHint:`Drag a star to move it. Tap empty space to add a star.`,newStar:`New star {n}`,gmMarker:`The galaxy map marks {system} with a “!”.`,gmSideQuest:`Side quest [Space station bar]`,gmType:`TYPE: `,gmFuel:`FUEL: `,gmExplored:`EXPLORED: `,gmSecurity:`SECURITY: `,gmStations:`STATIONS`,gmYes:`Yes`,gmNo:`No`,outside:`{name} is outside the galaxy. Players may not be able to jump there.`,overlap:`{name} sits on top of {other} on the game’s map, so players cannot see or select it.`,hides:`The game hides {other} to make room for {name}.`,removes:`Generated systems give way to {name}: {other}.`,renumbers:`Generated systems in the cell of {name} move or become different stars: {other}.`,moves:`Moves {name} from {x}, {y}.`},g=t({default:()=>_}),_={untitled:`Untitled`,stepN:`Step {n}`,checkpoint:`Checkpoint`,copied:`{what} copied`,clipboardBlocked:`The browser blocked the clipboard`,clipboardBlockedHint:`Select the text and copy it by hand.`,goToStep:`Go to {name}`,stepLower:`step {n}`,jsonTitle:`JSON`,jsonSubtitle:`Advanced view`,jsonPart:`Part of the quest`,jsonWhole:`Whole quest`,jsonMode:`Mode`,jsonReadOnly:`Read only`,jsonEdit:`Edit JSON`,jsonValid:`Valid JSON`,jsonCancel:`Cancel`,jsonApply:`Apply edits`,jsonApplyToast:`Edits go through import`,jsonApplyToastHint:`The import review lists every change before it is applied.`,jsonCopy:`Copy`,langTitle:`Language versions`,langDescription:`Each version shares the quest ID, steps, ships and logic. Download puts the one matching the chosen game language in the mod.`,langVersions:`Versions`,langOriginal:`Original`,langTranslate:`Translate`,langRemove:`Remove {name}`,langRemoveTitle:`Remove {name}?`,langRemoveBody:`Its translated text is deleted. The original and other versions stay.`,langRemoveConfirm:`Remove`,langRemoved:`Removed {name}`,langAdd:`Add a language`,langAdded:`Added {name}`,langAddedHint:`Same ID, steps and logic. Text needs translation.`,trTitle:`Translate · {name}`,trNoVersion:`No such version`,trNoVersionBody:`Add it from ⋮ › Translate and language versions.`,trFollows:`Steps, ships and conditions follow the {primary} version automatically; only text is translated here.`,trCount:`{done} of {total} translated`,trProgress:`Translation progress`,trOnlyMissing:`Untranslated only`,trAllDone:`All translated`,trAllDoneBody:`Every text field in this version has a translation.`,trNeeds:`Needs translation`,trGroupQuest:`Quest`,trGroupStep:`Step {n} · {name}`,trGroupRumors:`Rumors`,trQuestName:`Quest name`,trDescription:`Description`,trContact:`Contact name`,trJournal:`Journal`,trLine:`Line {n} · {speaker}`,trSpeaker:`Speaker`,trChoice:`Choice {n}`,trPilot:`Mission pilot name`,trRumor:`Rumor {n}`,exTitleQuest:`Export this quest file`,exTitleStars:`Export the stars file`,exDescription:`{title}. Exports only this one file. To install all your favorites as one mod, use Download on the home screen.`,exErrors_one:`{message} Fix before downloading or sharing.`,exErrors_other:`{count} errors stop the game loading this mod. Fix before downloading or sharing.`,exShowProblems:`Show problems`,exInFavorites:`In your favorites`,exAddFavorite:`Add to favorites`,exInFavoritesHint:`Bundled when you press Download on the home screen`,exAddFavoriteHint:`Favorites are bundled into one zip by Download`,exRemovedFavorite:`Removed from favorites`,exAddedFavorite:`Added to favorites`,exDownload:`Download this file`,exFixFirst:`Fix errors first`,exShare:`Share`,exShareHint:`Save to Files or send to another app`,exCopy:`Copy JSON`,exCopyHint:`For forums and Discord`,exBackup:`Download editor backup`,exBackupHint:`Every language version, no History`,exBackupDone:`Backup downloaded`,exDownloaded:`Downloaded {file}`,exDownloadedHint:`See the install guide to put it on your phone.`,exNoShare:`Sharing files is not available in this browser`,exNoShareHint:`Use Download to save {file}.`,exFileNumber:`File number`,exFileNumberHint:`The game loads Quest0 to Quest199.`,exInstall:`How to install on your phone`,exWarnings_one:`{count} warning`,exWarnings_other:`{count} warnings`,exWarningsBody:`The mod loads, but check these first.`,exShareAnyway:`Share anyway`,exDownloadAnyway:`Download anyway`,hiTitle:`History`,hiIntro:`The editor keeps a copy before your first change after a break, before removing or restoring, and on import. The newest 20 automatic copies of each mod are kept; named ones stay until you delete them.`,hiSave:`Save a copy to History`,hiSaved:`Copy saved to History`,hiDefaultName:`Copy {n}`,hiEmpty:`No History yet`,hiEmptyBody:`Save a copy before trying something risky, so you can come back to it.`,hiAuto:`Automatic`,hiNamed:`Named`,hiActions:`Actions for {name}`,hiRestore:`Restore`,hiRename:`Rename`,hiDelete:`Delete`,hiDeleted:`Deleted “{name}”`,hiSaveButton:`Save`,hiName:`Name`,hiNameHelp:`For example: Before adding the ambush. A named copy is kept until you delete it.`,hiNamePlaceholder:`Name`,hiRestoreTitle:`Restore “{name}”?`,hiRestoreBody:`The mod goes back to how it was then. A copy of the current state is saved to History first. Textures stay as they are.`,hiDeletedSection:`Deleted mods`,hiDeletedRow:`{title} · Deleted`,hiDaysLeft_one:`{count} day left`,hiDaysLeft_other:`{count} days left`,ruEveryBar:`Every bar`,ruThisBar:`This quest's bar`,ruThisBarOnly:`This quest's bar only`,ruDeleted:`Rumor deleted`,ruTip:`Rumors are lines the bartender tells players, pointing them toward your quest.`,ruEmpty:`No rumors`,ruEmptyBody:`Gossip players hear in station bars. Optional, but it makes a quest feel alive.`,ruAdd:`Add a rumor`,ruCount_one:`{count} rumor`,ruCount_other:`{count} rumors`,ruDelete:`Delete`,ruEmptyRumor:`Empty rumor`,ruNeverHeard:`Never heard`,ruRumor:`Rumor`,ruDone:`Done`,ruHelp:`Overheard gossip in station bars.`,ruPlaceholder:`They say a courier vanished near Wolf 359…`,ruWhere:`Where heard`,ruWhereHelp:`Local rumors play in the bar of the quest's station.`,ruNoStation:`This quest has no station, so local rumors are never heard.`,flChoiceAdded:`Choice added`,flChoiceAddedHint:`Edit its text in the step’s dialogue.`,flGraph:`Graph of how steps connect`,flNodeLabel:`Step {n}, {name}`,flNodeUnreachable:`Step {n}, {name}, nothing leads here`,flZoomIn:`Zoom in`,flZoomOut:`Zoom out`,flReset:`Reset view`,flChoice:`Choice`,flNothingLeads:`Nothing leads here`,flQuestEnds:`Quest ends`,flGoesTo:`“{label}” goes to step {n} · {name}`,flThen:`Then step {n} · {name}`,flMainStory:`Main story (past step 68)`,flUnknownQuest:`Unknown quest {id}`,qgGraph:`Requirement graph`,qgSubtitle:`What it needs first`,qgNodeLabel:`{name}, {kind}`,qgKindGame:`Game quest`,qgKindStory:`Main story`,qgKindMine:`This mod`,qgKindFavorite:`Favourite mod`,qgKindUnknown:`Not installed`,qgMainStory:`Main story, past step 68`,qgThisQuest:`This quest`,qgHint:`Each quest sits below everything the game checks before offering it. Tap a quest to see what it needs.`,qgNothing:`Nothing comes first`,qgNothingBody:`This quest has no requirements, so it can be offered from the start.`,flRequires:`Requires`,flNoRequired:`No required quests. Anyone can get this quest.`,flRequiredBy:`Required by`,flNoDependents:`No mods here require this quest.`,flView:`View`,flFlow:`Flow`,flDepends:`Depends on`,flMap:`Map`,qmStartArea:`Start area`,qmLoop:`Loop`,qmStartPin:`Start: {place}`,qmStartLine:`Start: bar at {station}, {system}`,qmNoPlaces:`No step names a system, station or planet, and the quest has no start area.`,qmNotFound:`{name} is not on the map`,qmOpenStep:`Open step`,spStep:`Step`,spWhere:`Where`,spTrigger:`Trigger`,spDialogue:`Dialogue`,spLines_one:`{count} line`,spLines_other:`{count} lines`,spNext:`Next`,spComplete:`Quest complete`,spNowhere:`No place`,flNothingDepends:`No other quest has to be finished first. This quest unlocks nothing.`,qmStrip:`Steps with no place on the map`,qmUnresolved_one:`1 place name was not found on the map: {names}`,qmUnresolved_other:`{count} place names were not found on the map: {names}`,qmShowProblems:`Show problems`,smSubtitle:`Quest map`,smFavoritesTitle:`Map of favorites`,smNoFavorites:`No favorite quests yet`,smNoQuests:`This mod has no quests`,smEmptyBody:`Quests appear here as coloured routes over the places they use.`,smHelp:`Each quest is a route through its places in step order. Dashed routes are longer than {ly} ly, more than one jump without a jump booster. White dashed arrows lead to quests that need the earlier quest finished. Tap a quest to hide or show it.`,smUnlocks:`unlocks`,smPlaces_one:`1 place`,smPlaces_other:`{count} places`,smNoPlaces:`No places on the map`,smRequires:`needs {ids}`,smNotFound_one:`1 not found`,smNotFound_other:`{count} not found`,smMap:`Map`,smShowAll:`Show all`,smHideAll:`Hide all`,smQuestCount:`{count} quests`,flNoSteps:`No steps yet`,flNoStepsBody:`Add steps and their connections show here.`,flNext:`Next step`,flProblem:`Problem`,flAsGraph:`Graph`,flAsList:`List`,flListTitle:`Steps and where they lead`,flFallThrough:`After “{from}” ends, the quest continues into “{to}”.`,flFix:`Fix: add a choice to jump to “{to}”`,teRestart:`Restart`,teUnnamed:`Unnamed`,teYou:`You`,teAttacksYou:`attacks you`,teAttacks:`attacks {target}`,teTurns:`turns {behaviour}`,teDestroyed:`is destroyed`,teNothing:`does nothing`,teOrder:`{who} {what}`,teReloaded:`Reloaded from checkpoint`,teChose:`Chose “{text}”`,teJournal:`Journal`,teMission:`{type} at {station}`,teMissionReward:`{credits} CR · +{rep} rep`,teEmptyChoice:`Empty choice`,teHidden_one:`{count} more choice not shown: the game shows at most 3.`,teHidden_other:`{count} more choices not shown: the game shows at most 3.`,teNothingToTest:`Nothing to test`,teNothingToTestBody:`Add steps first, then play through them here.`,teGoSteps:`Go to Steps`,teLoop:`The quest went round the same steps too many times.`,teTip:`This checks the quest's logic, not the game's graphics or timing.`,teDownloadTip:`Download the mod, copy it to the game, and start a new save to see the quest offered.`,teDownload:`Download for testing`,teSkip:`Skip dialogue`,teWaiting:`Waiting for`,tePretend:`Pretend it happened`,teStuck:`This step never finishes. The quest gets stuck here.`,teFailAll:`The quest fails only when all of these have happened in this step.`,teFailPick:`Pick what happened:`,teCancel:`Cancel`,tePretendFail:`Pretend a failure…`,teReloadCheckpoint:`Reload checkpoint (step {n})`,teFailed:`Quest failed`,teReload:`Reload`,teComplete:`Quest complete. Reward {total} CR.`,tePath:`Path taken`,teAnother:`Try another path`},ee=t({default:()=>te}),te={mainStoryPast68:`Main story past step 68`,untitledQuest:`Untitled quest`,untitled:`Untitled`,subtitle:`Quest · {lang}`,tipNext:`Next: open Steps to write what happens.`,openSteps:`Open Steps`,sectionQuest:`Quest`,questName:`Quest name`,questNameHelp:`Shown in the bar and in the Quest complete message.`,questNameRequired:`No quest name. Players see a blank title.`,description:`Description`,descriptionHelp:`What the contact says when the player looks at the quest in the bar.`,descriptionRequired:`No description. Players see a blank description.`,language:`Language`,languageHelp:`The quest is only offered to players whose game is set to this language. To translate, use ⋮ › Translate and language versions.`,questId:`Quest ID`,questIdHelp:`The game identifies quests by this number in saves and in other quests' requirements. Changing it after players have started your quest resets their progress.`,change:`Change`,sectionContact:`Contact`,noContactName:`No contact name`,name:`Name`,nameHelp:`The name shown for the person offering the quest.`,nameRequired:`No contact name. The bar shows this contact without a name.`,portrait:`Portrait`,portraitHelp:`Their picture in the bar and in dialogue.`,portraitUnknown:`The game doesn't know “{name}”; it will show Tourist1.`,unnamed:`Unnamed`,noDescription:`No description yet.`,sectionStart:`How it starts`,summaryBar:`Offered at {station}`,summaryBarBy:`Offered at {station} by {name}`,noStation:`no station`,summaryNear:`Any bar within {radius} ly of {x}, {y}`,summarySpaceWarp:`{chance}% chance when arriving in a system`,summarySpaceScan:`{chance}% chance when scanning a planet`,modeBar:`In a station bar`,modeNear:`Near a point`,modeSpace:`In space`,modeBarHelp:`A contact waits in one station's bar.`,modeNearHelp:`Offered in any bar near a point on the galaxy map.`,modeSpaceHelp:`Starts by itself when the player arrives in a system or scans a planet nearby.`,station:`Station`,stationHelp:`The bar where the contact waits.`,stationMissing:`No station chosen. Nobody will offer this quest.`,chooseStation:`Choose a station`,didYouMean:`Did you mean {name}?`,trigger:`Trigger`,triggerWarp:`Arriving in a system`,triggerScan:`Scanning a planet`,chance:`Chance`,chanceHelp:`The chance each time the trigger happens inside the area.`,chanceZero:`Chance is 0%, so it never starts.`,chancePercent:`Chance percent`,pointRadius:`Point and radius`,pointRadiusHelp:`Galaxy map coordinates in light years. Sol is 0, 0.`,within:`Within`,of:`of`,nearPointNote:`Every station bar within the radius offers this quest. The radius is measured flat on the galaxy map, from the point to the station's system.`,spaceInfo:`Starts only when one of the player's three quest slots is free, and never again once finished.`,sectionRequirements:`Requirements`,requirements_one:`{count} requirement`,requirements_other:`{count} requirements`,anyone:`Anyone can take this quest`,noRequirements:`No requirements. Anyone can take this quest.`,finishedFirst:`Finished quests first`,finishedFirstHelp:`All of these must be finished. Until then the quest is not listed at all.`,unknownRequirement:`No quest with this ID here. If it isn't installed, this quest never appears.`,removeFinished:`Remove finished quests requirement`,chooseQuests:`Choose quests`,karma:`Karma`,karmaHelp:`Checked when the player taps Accept. Drag a handle to the end for no limit.`,karmaRange:`Karma range`,noLimit:`No limit`,removeKarma:`Remove karma requirement`,faction:`Faction reputation`,factionHelp:`Total reputation across that faction's stations. Checked on Accept.`,factionSelect:`Faction`,chooseFaction:`Choose a faction`,removeFaction:`Remove faction requirement`,ownStation:`Own station repaired`,ownStationHelp:`Only offered once the player's own station is repaired.`,removeOwn:`Remove own station requirement`,addRequirement:`Add requirement`,finishedQuests:`Finished quests`,sectionReward:`Reward`,rewardSummary:`{total} CR estimated`,rewardEstimate:`Reward estimate`,noReward:`Nothing in this quest earns a reward yet.`,capped:`Capped at 250 CR.`,rewardNote:`Mods are paid by the game, max 250 CR. Reward fields in the file are ignored.`,why:`Why?`,whyLabel:`Why is the reward estimated?`,whyBody:`The game pays mod quests itself: 50 CR when a ship attacks the player (150 if attackers outweigh the others), 20 CR for each step that ends on arrival, up to 250 CR.`,reward:`Reward`,karmaReward:`Karma reward`,ignoredByGame:`The game ignores this for mods.`,sectionAbout:`About this mod`,noAuthor:`No author`,aboutIntro:`These details belong to the whole mod, not just this file. They are needed if you share it in the mod library.`,contributeHelp:`To add your mod to the community library, submit it through the form on GitHub, or post the file on Discord.`,submitToLibrary:`Submit to library`,author:`Author`,version:`Version`,versionHelp:`Raised automatically on export when the mod changed.`,summary:`Summary`,licence:`Licence`,link:`Link`,tags:`Tags`,changeQuestId:`Change quest ID`,useThisId:`Use this ID`,pickFree:`Pick a free number`,idWhole:`Enter a whole number above 0.`,idGamePre:`Used by the game's quest`,idGamePost:`The game will skip your file.`,idDupePre:`Also used by your mod`,idDupePost:`Only one of them will load.`,idFree:`Free to use.`,idChanged:`Quest ID changed to {id}`,updateReqsTitle:`Update requirements?`,updateReqsBody_one:`{names} requires quest {from}. Change it to require {to}?`,updateReqsBody_other:`{names} require quest {from}. Change them to require {to}?`,leaveAsIs:`Leave as is`,update:`Update`,updatedMods_one:`Updated {count} mod`,updatedMods_other:`Updated {count} mods`},v=t({default:()=>ne}),ne={gameQuestN:`Game quest {id}`,thisModQuests:`This mod`,thisMod:`This mod`,required:`Required`,fromOtherMods:`From other mods on this device`,fromOtherModsHelp:`Choosing one makes that mod a required mod: players need both installed.`,requireTitle:`Require {mod}?`,requireBody:`{name} comes from {mod}. Your mod will list {mod} as a required mod: players need both installed, and Download reminds you to favorite it too.`,requireAccept:`Add as required mod`,requiredAdded:`{mod} added as a required mod`,recent:`Recent`,portrait:`Portrait`,searchPortraits:`Search portraits`,noPortrait:`No portrait matches “{q}”.`,ship:`Ship`,searchShips:`Search ships`,size:`Size`,sizeSmall:`Small`,sizeMedium:`Medium`,sizeLarge:`Large`,sizeClass:`{size} class`,alwaysHostile:`Always hostile`,noShip:`No ship matches.`,behaviour:`Behaviour`,searchBehaviours:`Search behaviours`,groupFriendly:`Friendly`,groupNeutral:`Neutral`,groupHostile:`Hostile`,groupSpecial:`Special`,noBehaviour:`No behaviour matches.`,alwaysHostileNote:`Angler, Angler-Mother and Automaton ships are always hostile in mods, whatever you pick.`,system:`System`,station:`Station`,planet:`Planet`,searchSystem:`Search systems`,searchStation:`Search stations`,searchPlanet:`Search planets`,noSystem:`No system matches.`,noStation:`No station matches.`,noPlanet:`No planet matches.`,map:`Map`,viewOnMap:`View on map`,unknownSecurity:`Unknown`,hasStation:`Has station`,filters:`Filters`,faction:`Faction`,ownStation:`Your own station`,ownStationHelp:`The player's repaired station, wherever it is`,inSystem:`In {system}`,showing:`Showing {limit} of {total}. Search to narrow.`,chooseSystemFirst:`Choose a system first.`,finishedQuests:`Finished quests first`,done:`Done`,nearestStation:`Nearest: {station} ({ly} ly)`,doneCount:`Done ({count})`,mainStory:`Main story`,pastStep68:`Past step 68`,idN:`ID {id}`,searchQuests:`Search by name or ID`,gameSideQuests:`The game's side quests`,inSpace:`In space`,untitledQuest:`Untitled quest`,cargo:`Cargo`,searchGoods:`Search goods`,noGoods:`No goods match.`,location:`Location`,locationHelp:`Light years on the galaxy map. Sol is at 0, 0; the galactic core is near 25, 25898.`,cancel:`Cancel`,apply:`Apply`,centreOnSystem:`Centre on a system`,mapAria:`Galaxy map. Tap to place the point.`,sol:`Sol`,galacticCore:`Galactic core`,zoomIn:`Zoom in`,zoomOut:`Zoom out`,centrePoint:`Centre on the point`,gridLy:`grid {step} ly`,radius:`Radius`,openFullMap:`Open in full map`},re=t({default:()=>ie}),ie={title:`Problems`,severity:`Problem severity`,errors:`Errors`,warnings:`Warnings`,tips:`Tips`,none:`No problems`,noneStars:`The game will load these stars and stations as written.`,noneQuest:`The game will load this quest as written. Test it once, then export.`,testIt:`Test it`,no_error:`No errors.`,no_warning:`No warnings.`,no_tip:`No tips.`,goTo:`Go to`,hideTip:`Hide this tip`,hideAllTips:`Hide all tips`},ae=t({default:()=>oe}),oe={open:`Quick build systems`,help:`Move the map to put the centre where the systems go.`,x:`X`,y:`Y`,radius:`Radius`,lyValue:`{n} ly`,count:`Systems to create`,generate:`Generate`,created_one:`Created 1 system.`,created_other:`Created {count} systems.`,shortfall:`Created {placed} of {requested} systems.`,shortfallNear:`Created {placed} of {requested} systems. The rest of the circle is within 4.37 ly of existing systems.`,shortfallOutside:`Created {placed} of {requested} systems. The rest of the circle is outside the galaxy.`,shortfallBatch:`Created {placed} of {requested} systems. The rest of the circle is within 4.37 ly of the new systems.`},se=t({default:()=>ce}),ce={behaviourAlly:`Fights alongside the player.`,behaviourAllyAFK:`On the player’s side but stays put.`,behaviourLawForces:`Police. Attacks wanted pilots.`,behaviourTrader:`Flies between stations. Defends itself.`,behaviourTraderNoWeapons:`A trader with no guns.`,behaviourMiner:`Mines asteroids.`,behaviourExplorer:`Wanders and scans.`,behaviourMercenary:`A hired gun.`,behaviourPirate:`Attacks traders and the player. “No enemies left” doesn’t count it.`,behaviourEnemy:`Attacks the player on sight. “No enemies left” waits for it.`,behaviourFighter:`A combat pilot.`,behaviourAutomaton:`Automaton machine behaviour.`,behaviourZentarks:`Zentarks alien behaviour.`,behaviourAngler:`Angler creature behaviour.`,missionPirateHunt:`Pirate hunt`,missionPirateHuntHelp:`Destroy a named ship.`,missionFindGoods:`Find goods`,missionFindGoodsHelp:`Bring cargo to the station.`,missionTransferGoods:`Transfer goods`,missionTransferGoodsHelp:`Deliver cargo to another station.`,missionMining:`Mining`,missionMiningHelp:`Mine and deliver an ore.`,missionCourier:`Courier`,missionCourierHelp:`Carry a package to a station.`,missionTourist:`Tourist`,missionTouristHelp:`Fly a passenger somewhere.`,missionMoneyHelp:`Money help`,missionMoneyHelpHelp:`Help someone with credits.`,missionBugHunt:`Bug hunt`,missionBugHuntHelp:`Clear out alien bugs.`,missionRescueMission:`Rescue`,missionRescueMissionHelp:`Help a disabled ship. Destroying it fails the mission.`,missionCaravanHunt:`Caravan hunt`,missionCaravanHuntHelp:`Intercept a trade caravan.`,missionContractMurder:`Contract`,missionContractMurderHelp:`Eliminate a target pilot.`,missionIntimidate:`Intimidate`,missionIntimidateHelp:`A fight: destroy the escorts and bring the target’s hull below 30% without destroying it.`,portraitCommon:`Common`,portraitSpecial:`Special`,starMainSequence:`Main sequence`,starGiants:`Giants`,starDwarfs:`Dwarfs`,starWolfRayet:`Wolf-Rayet`,starYoung:`Young stars`,starPulsars:`Pulsars and magnetars`,starCarbon:`Carbon and S stars`,starBlackHole:`Black hole`,portraitStory:`Story characters`,stationOrbitalDark:`Orbital dark`,stationOrbitalWhite:`Orbital white`,stationNova:`Nova`,stationFarm:`Farm`,stationHighTech:`High-tech`,stationAsteroid:`Asteroid`},le=t({default:()=>ue}),ue={rewardAttackersOutweigh:`Attacking ships outweigh the others`,rewardAttack:`A ship attacks the player`,rewardArrival:`Step {n} ends on arrival`,labelSteps:`Steps`,labelQuestId:`Quest ID`,labelStation:`Station`,labelRequires:`Required mods`,depNotRequired:`{name} comes from {mod}, which is not a required mod. Players without it get a quest that cannot find it.`,depAdd:`Add {mod} as a required mod`,depMissing:`Requires {mod}, which is not on this device.`,depAddFromLibrary:`Add from library`,depUnused:`Requires {mod}, but nothing in this mod uses it any more.`,depRemove:`Remove requirement`,chooseSystem:`Choose a system`,chooseStation:`Choose a station`,chooseQuest:`Choose a quest`,questN:`Quest {id}`,chooseCondition:`Choose a condition`,labelChance:`Chance`,labelPortrait:`Portrait`,labelRequirements:`Requirements`,labelRumors:`Rumors`,labelStep:`Step {n} · {name}`,labelLine:`{step} · line {n}`,untitled:`Untitled`,minSteps:`A quest needs at least 2 steps or the game skips it.`,idGame:`This ID belongs to one of the game’s quests. The game will skip your file.`,idGameNamed:`This ID belongs to the game’s quest “{name}”. The game will skip your file.`,idDupe:`Only one of these will load: “{name}” uses the same ID.`,noStation:`No station chosen. Nobody will offer this quest.`,stationUnknown:`No station called “{name}”.`,stationUnknownGuess:`No station called “{name}”. Did you mean “{guess}”?`,chanceZero:`Chance is 0%, so it never starts.`,portraitUnknown:`The game doesn’t know “{name}”; it will show Tourist1.`,requirementUnknown:`No quest with ID {id} here. If it isn’t installed, this quest never appears.`,requirementMainStoryOnly:`The game stops at the main story requirement, so the quests listed beside it are never checked. Remove them, or remove the main story.`,gameQuestN:`Game side quest {id}`,neverFinishes:`Step {n} never finishes. The quest gets stuck here.`,buttonPrefix:`The game adds BUTTON_ itself. Remove it?`,buttonPrefixFix:`Remove BUTTON_`,conditionUnknown:`The game doesn’t report “{name}”, so this never happens.`,systemUnknown:`No system called “{name}”.`,systemUnknownGuess:`No system called “{name}”. Did you mean “{guess}”?`,systemGenerated:`“{name}” is a generated system. Station missions can only target catalogue or mod systems.`,systemHidden:`“{name}” is not on the galaxy map, so the player cannot travel there.`,planetUnknown:`No planet called “{name}” in this quest’s systems.`,neverFires:`Nothing named “None” exists, so this step never finishes. Only a step that destroys your ship may end this way.`,noEnemyUncounted:`This step finishes when no enemies are left, but the game counts only Enemy and Angler ships, so its hostile ships never finish it.`,noEnemyMakeEnemy:`Make this step’s hostile ships Enemy`,shipMissing:`No ship called “{name}” exists by this step.`,failAll:`The quest fails only when all of these have happened in this step.`,journalEmpty:`The journal is empty, so players aren’t told what to do in this step.`,unreachable:`Nothing leads to step {n}.`,checkpointStranded:`Reloading at “{step}” gets stuck: {pilot} is spawned in step {n}, which reloading skips.`,checkpointMove:`Move checkpoint to step {n}`,checkpointFirst:`The game never saves at step 1, so this checkpoint does nothing.`,checkpointOff:`Turn off checkpoint`,checkpointDialog:`Reloading at this step skips its dialogue and choices.`,tooManyChoices:`Only the first {max} choices show.`,longLine:`Long lines get cut off on small screens.`,noSpeaker:`No speaker name: the game shows {name}.`,theContact:`the quest’s contact`,useContactName:`Use this name`,choiceNowhere:`Choice “{name}” goes nowhere, so it continues to the next step.`,duplicatePilot:`The second “{name}” is not spawned.`,modelGameOnly:`Only the game’s own story can spawn the {name}. A mod’s quest file can’t name it, so the game spawns an Ion instead.`,storyOnly:`This step holds controls, needs several actions or stocks the shipyard. Only the game’s main story can do that: the game’s mod loader ignores it and uses the step’s one finish condition.`,storyOnlyFix:`Remove it`,modelGameOnlyFix:`Use {fallback}`,modelUnknown:`The game doesn’t know the ship model “{name}”; it spawns an {fallback} instead.`,behaviourUnknown:`The game doesn’t know the behaviour “{name}”; the ship acts as {fallback} instead.`,goodsUnknown:`The game doesn’t know the cargo “{name}”; it uses {fallback} instead.`,alwaysHostile:`{name} ships are always hostile in mods.`,creditCap:`The game caps mission credits at {max} CR.`,repCap:`The game caps mission reputation at {max}.`,fallThrough:`After “{from}” ends, the quest continues into “{to}”. Add a choice to jump to the ending.`,localRumor:`This quest has no station, so local rumors are never heard.`,sagittarius:`Sagittarius A* cannot be changed.`,planetTypeUnknown:`The game doesn’t know the planet type “{name}” and skips this planet.`,orbitTaken:`Another planet in {system} already uses this orbit. The game skips this one.`,starTypeUnknown:`The game doesn’t know the star type “{name}”; it shows a red dwarf instead.`,stationNameTaken:`The game already has a station called “{name}” and skips this one.`,stationNoStar:`The game places stations only in systems listed under Stars in this file. Add {system} as a star or this station is skipped.`,stationPlanetMissing:`This station orbits planet {n}, but the game loads only {count} planets for {system} from this file. It skips the station.`,planetCompanion:`“{name}” is a star type: the game adds it to {system} as a second star, and every later planet of {system} in this file orbits that star.`,planetAfterCompanion:`The star-type entry “{name}” comes earlier in this system, so the game puts this planet in orbit around that second star.`,stationOnStar:`Planet {n} of this system is “{name}”, a star type. The game skips stations on stars.`,stationNoPlanets:`The game loads no planets for {system} from this file, so it skips this station.`,missionTypeUnknown:`The game doesn’t know the mission type “{name}”; it becomes a Courier mission.`,spaceRequirements:`A quest that starts in space ignores its requirements: finished quests, karma, faction reputation and own station are never checked.`,startInBar:`Start in a bar instead`,nearOwnStation:`A quest offered in bars near a point ignores the own station requirement.`,finishJoined:`Finishes when takes one condition. The game reads “A;B” as one name that never happens, so the step never finishes.`,missionFirstStep:`The mission board never shows a mission from step 1. Add a step before it.`,missionNotStory:`Story is off, so accepting and handing in this mission raise no quest events, and the mission can time out.`,missionStoryOn:`Turn on Story`,missionTurnIn:`This step has a station mission but no hand-in: finish on Accept a story mission, and finish a later step on Collect a story mission reward.`,missionAddTurnIn:`Add a hand-in step`,turnInStepName:`Hand in the mission`,missionHomeModStation:`“{name}” comes from a stars mod, and the game loads quests before stars mods.`,missionHomeBreaks:`The game stops loading here: this quest, every quest file after it and all stars mods are skipped. Offer the mission at a game station.`,checkpointWarp:`Loading this checkpoint from the in-game menu finishes this step at once, because loading ends with a warp. After a restart the step waits for the next warp.`,missionSystemMissing:`No target system. The game fails to load this quest.`},de=t({default:()=>fe}),fe={title:`Save file`,rotate:`Turn your device sideways`,rotateHelp:`The station screens are landscape, as in the game.`,load:`LOAD`,loadTitle:`Save file`,loadHelp:`Open Save1.SOL, Save2.SOL or Save3.SOL from the game folder. Nothing is overwritten: an edited save leaves as a new download.`,loadFailed:`That file is not a Galaxy Genome save.`,loaded:`{file} loaded`,station:`STATION`,ship:`SHIP`,credits:`CREDITS`,modules:`MODULES`,shipyard:`SHIPYARD`,market:`MARKET`,service:`SERVICE`,storage:`STORAGE`,ships:`SHIPS`,galaxy:`GALAXY`,cargo:`CARGO`,specs:`SPECS`,soon:`Not in this version yet`,balance:`Balance`,owner:`Owner`,ownerLocal:`Local game`,save:`SAVE`,back:`BACK`,blocked:`Blocked, {field}: {message}`,saved:`{file} downloaded`},pe=t({default:()=>me}),me={tabOverview:`Overview`,tabSteps:`Steps`,tabFlow:`Flow`,tabRumors:`Rumors`,tabTest:`Test`,tabStars:`Stars`,tabPlanets:`Planets`,tabStations:`Stations`,tabMap:`Map`,saving:`Saving…`,saved:`Saved`,notSaved:`Not saved`,noProblems:`No problems`,problemCounts:`{errors} errors, {warnings} warnings`,inspector:`Help and problems`,inspector_help:`Help`,inspector_problems:`Problems`,inspectorEmpty:`Select a field to see what it does.`,modGone:`This mod doesn’t exist any more.`,backToMods:`Back to my mods`,modSettings:`Mod settings`,switchProduct:`Switch app`,starMap:`Star Map`,questEditor:`Quest Editor`,loadouts:`Loadouts`,wiki:`Wiki`,export:`Export`,languageVersions:`Translate and language versions`,history:`History`,loading:`Loading`,advanced:`Advanced view`,hideAdvanced:`Hide advanced view`,viewJson:`Game file (JSON)`,share:`Share`,duplicateMod:`Duplicate mod`,help:`Help`,settings:`Settings`,deleteMod:`Delete mod`,offline:`Offline`,redo:`Redo`,myMods:`My mods`,modSections:`Mod sections`,gameQuest:`The game’s own quest. Read-only.`,makeCopy:`Make my copy`,palette:`Command palette`,paletteSearch:`Jump to a step, tab, mod or action…`,paletteEmpty:`Nothing matches.`,paletteActions:`Actions`,paletteMods:`Mods`,untitledStep:`Untitled step`,newMod:`New mod`,download:`Download`,shortcuts:`Keyboard shortcuts`,keyPalette:`Command palette`,keyUndo:`Undo`,keyRedo:`Redo`,keyShortcuts:`This list`,keyEsc:`Close the top sheet or dialog`,keyListMove:`Move through the list`,keyListEnds:`First or last row`,keyListOpen:`Open the highlighted row`,keyListDelete:`Delete the highlighted row (Backspace on Mac)`,installTitle:`Install as an app`,installBody:`Opens full screen and works without a connection.`,install:`Install`,iosTap:`Tap`,iosShare:`Share`,iosThen:`then`,iosAdd:`Add to Home Screen`,sharedFile:`Open the file from the Open button.`},he=t({default:()=>ge}),ge={stepOf:`Step {n} of {total}`,stepMissing:`This step doesn’t exist any more.`,delete:`Delete`,duplicate:`Duplicate`,done:`Done`,change:`Change`,type_PirateHunt:`Pirate hunt`,type_FindGoods:`Find goods`,type_TransferGoods:`Transfer goods`,type_Mining:`Mining`,type_Courier:`Courier`,type_Tourist:`Tourist`,type_MoneyHelp:`Money help`,type_BugHunt:`Bug hunt`,type_RescueMission:`Rescue`,type_CaravanHunt:`Caravan hunt`,type_ContractMurder:`Contract`,type_Intimidate:`Intimidate`,inGameAs:`Shown in game as: {title}`,typeDesc_PirateHunt:`Destroy a named ship.`,typeDesc_FindGoods:`Bring cargo to the station.`,typeDesc_TransferGoods:`Deliver cargo to another station.`,typeDesc_Mining:`Mine and deliver an ore.`,typeDesc_Courier:`Carry a package to a station.`,typeDesc_Tourist:`Fly a passenger somewhere.`,typeDesc_MoneyHelp:`Help someone with credits.`,typeDesc_BugHunt:`Clear out alien bugs.`,typeDesc_RescueMission:`Help a disabled ship. Destroying it fails the mission.`,typeDesc_CaravanHunt:`Intercept a trade caravan.`,typeDesc_ContractMurder:`Eliminate a target pilot.`,typeDesc_Intimidate:`A fight: destroy the escorts and bring the target’s hull below 30% without destroying it.`,missionTitle:`Station mission`,missionEmptyTitle:`No mission in this step`,missionEmptyBody:`A station mission puts a card on a station's mission board: hunt a pirate, deliver cargo, fly a tourist.`,missionAdd:`Add a mission`,missionRemoved:`Mission removed`,missionRemove:`Remove mission`,missionAt:`{type} at {station}`,noStation:`no station`,noTargetSystem:`No target system`,credits:`{amount} CR`,sectionMission:`Mission`,type:`Type`,missionType:`Mission type`,offeredAt:`Offered at`,offeredAtHelp:`The station whose mission board shows this card.`,offeredAtError:`Choose the station that offers this mission.`,chooseStation:`Choose a station`,story:`Story mission`,storyHelp:`Needed for the Accept a story mission and Collect a story mission reward conditions. Story missions never time out.`,repNeeded:`Reputation needed`,sectionTarget:`Target`,none:`none`,system:`System`,chooseSystem:`Choose a system`,station:`Station`,targetStationHelp:`If this is the same as the offering station, the game picks another within 100 ly.`,sameStation:`Same as the offering station: the game picks another station within 100 ly.`,sectionShip:`Target ship`,ship:`Ship`,unknownShip:`Unknown ship. The game uses Ion instead.`,chooseShip:`Choose a ship`,pilot:`Pilot`,pilotHelp:`Use this name in {condition} conditions.`,shipDestroyed:`Ship destroyed`,hull:`Hull`,sectionCargo:`Cargo`,cargoSummary:`{count} t {goods}`,goods:`Goods`,chooseGoods:`Choose goods`,amount:`Amount`,sectionPay:`Pay`,paySummary:`{credits} CR · {rep} rep`,creditsLabel:`Credits`,creditsHelp:`The game caps this at 100,000 CR.`,creditsOver:`The game pays at most {cap} CR; the rest is lost.`,reputation:`Reputation`,repHelp:`The game caps this at 3.`,repOver:`The game gives at most {cap} reputation.`,targetSystem:`Target system`,targetStation:`Target station`,ordersTitle:`Ship orders`,orderDeleted:`Order deleted`,ordersEmptyTitle:`No orders in this step`,ordersEmptyBody:`Orders tell ships that already exist to attack, change behaviour or be destroyed.`,addOrder:`Add order`,ordersCount:`Orders ({count})`,reward:`Reward`,rewardNote:`A ship counts as attacking for the reward only when it targets the player with Attack on. Mods are paid by the game, max 250 CR.`,order:`Order`,whichShip:`Which ship`,whichShipHelp:`Orders apply to ships that already exist.`,pilotUnknown:`No ship with this pilot name appears in this or an earlier step.`,chooseShipOrder:`Choose a ship.`,thePlayer:`The player`,pilotName:`Pilot name`,typePilot:`Or type a pilot name`,whatToDo:`What to do`,attack:`Attack`,changeBehaviour:`Change behaviour`,destroyNow:`Destroy now`,target:`Target`,stayPutHelp:`The miner stays where it is.`,attackHelp:`Attack the chosen target.`,stayPut:`Stay put`,newBehaviour:`New behaviour`,destroyedNote:`The ship is destroyed on the spot.`,sWho:`{ship} {actions}.`,sAShip:`A ship`,sPlayerObject:`the player`,sStaysPut:`stays put`,sAttacks:`attacks {target}`,sBecomes:`becomes {behaviour}`,sDestroyed:`is destroyed`,sNothing:`does nothing`,sAnd:` and `,sComma:`, `,shipsTitle:`Ships appear`,shipsCount:`Ships appear ({count})`,duplicated:`Duplicated {name}`,deleted:`Deleted {name}`,shipWord:`ship`,pilotN:`Pilot {n}`,shipsEmptyTitle:`No ships in this step`,shipsEmptyBody:`Ships appear when this step starts. Add a pirate to fight, a trader to escort, or an ally to fly with.`,addShip:`Add ship`,noPilot:`No pilot name`,hostile:`Hostile`,sameName:`Same name`,matchesPlayer:`Matches the player`,nearPlayerAt:`Near player, {distance}`,atPos:`At {x}, {y}`,shipSheet:`Ship`,pilotNameHelp:`Other steps refer to this ship by its pilot name. Must be unique while the ship exists.`,pilotRequired:`No pilot name. Orders and events can’t refer to this ship.`,autoMatch:`Auto-match player`,autoMatchHelp:`Picks a combat ship worth 70–130% of the player's, at Master level. Model and level below are ignored.`,whichShipAppears:`Which ship appears.`,hullSize:`{size} hull`,notKnownShip:`Not a known ship`,alwaysHostile:`Always hostile in mods`,equipment:`Equipment`,equipmentHelp:`How well equipped it is.`,behaviour:`Behaviour`,alwaysHostileHelp:`This ship attacks the player whatever its behaviour.`,behaviourHelp:`How it acts. {description}`,tint:`Tint`,tintHelp:`Tints the ship.`,noTint:`No tint`,customTint:`Custom tint`,tint_Red:`Red`,tint_Amber:`Amber`,tint_Green:`Green`,tint_Cyan:`Cyan`,tint_Blue:`Blue`,tint_Violet:`Violet`,where:`Where`,whereNearHelp:`In a random direction. 0 is about half a screen.`,wherePosHelp:`Measured from the system's centre.`,nearThePlayer:`Near the player`,atAPosition:`At a position`,distanceFromPlayer:`Distance from the player`,distance:`Distance`,xLs:`X (ls)`,yLs:`Y (ls)`,zeroNote:`0, 0 means “near the player” to the game.`,radarLabel:`Position from the system centre`,radarValue:`X {x}, Y {y} light seconds`,radarRange:`±{range} ls`},_e=t({default:()=>ve}),ve={deleted:`Deleted “{name}”`,untitled:`Untitled`,untitledStar:`Untitled star`,untitledPlanet:`Untitled planet`,untitledStation:`Untitled station`,delete:`Delete`,done:`Done`,noSystem:`No system`,searchStarTypes:`Search star types`,noStarTypeMatch:`No star type matches “{q}”.`,starType:`Star type`,planetType:`Planet type`,modName:`Mod name`,modNameRequired:`No mod name. The editor and Download list it untitled.`,inThisMod:`In this mod`,starsCount:`Stars`,planetsCount:`Planets`,stationsCount:`Stations`,oneFileInfo:`The game reads one stars & stations file. Download merges your favorites into one.`,modSettings:`Mod settings`,starsEmpty:`Add a new star system, or use an existing system's name to move and change it.`,addAStar:`Add a star`,add:`Add`,addStar:`Add star`,starCount_one:`{count} star`,starCount_other:`{count} stars`,planetCount_one:`{count} planet`,planetCount_other:`{count} planets`,changesGame:`Changes game`,newStar:`New star`,starOf:`Star {n} of {total}`,name:`Name`,sgrLocked:`Sagittarius A* cannot be changed.`,starNameRequired:`No name. The map shows this star without a label.`,starNameHelp:`Using the name of an existing system moves and changes that system.`,gameSystemInfo:`{name} is a game system. This moves and changes that system.`,position:`Position`,positionHelp:`Light years. The map uses X and Y; Z is height.`,pickOnMap:`Pick on the map`,starPosition:`Star position`,security:`Security`,type:`Type`,chooseStarType:`Choose a star type`,secAnarchy:`Anarchy`,secLow:`Low`,secMedium:`Medium`,secHigh:`High`,secOnly:`Only`,secNoOne:`No one`,secConflict:`Conflict`,planetsEmpty:`Planets orbit a star from this mod or an existing game system.`,addAPlanet:`Add a planet`,addPlanet:`Add planet`,planetSubtitle:`{type} · orbit {orbit}`,moonsSuffix_one:` · {count} moon`,moonsSuffix_other:` · {count} moons`,newPlanet:`New planet`,planetOf:`Planet {n} of {total}`,planetNameRequired:`No name. The game shows this planet without a label.`,system:`System`,chooseSystem:`Choose a system.`,chooseSystemPlaceholder:`Choose a system`,choosePlanetType:`Choose a planet type`,orbit:`Orbit`,orbitHelp:`Planets use multiples of 100.`,roundedDown:`Rounded down to {n}`,moons:`Moons`,size:`Size`,rings:`Rings`,material:`Material`,materialHelp:`A material found there.`,clear:`Clear`,none:`None`,planetsDiscovered:`Planets from mods start out already discovered.`,stationsEmpty:`Stations orbit a planet. Players open its menu to trade and take missions there.`,addAStation:`Add a station`,addStation:`Add station`,stationCount_one:`{count} station`,stationCount_other:`{count} stations`,bodyN:`body {n}`,newStation:`New station`,stationOf:`Station {n} of {total}`,stationNameRequired:`No name. The game shows this station without a label.`,orbits:`Orbits`,orbitsHelp:`Counts this file’s planets in the system, in order.`,choosePlanet:`Choose a planet`,chooseSystemFirst:`Choose a system first`,kindStar:`star`,kindPlanet:`planet`,kindOther:`other`,stationType:`Station type`,faction:`Faction`,stationSkipped:`A station missing any field is skipped.`,noBodies:`This system has no known bodies. Add planets to it on the Planets tab.`,bodyStar:`Star · must be a planet`,bodyPlanet:`Planet`,bodyOther:`Not a planet`,mapLabel:`Galaxy map. Drag to pan, pinch or scroll to zoom.`,zoomIn:`Zoom in`,zoomOut:`Zoom out`,fitStars:`Fit this mod's stars`,grid:`grid {n} ly`,mapSummary:`{stars} stars · {planets} planets · {stations} stations`,openFullMap:`Open in full map`,nothingInSystem:`No planets or stations in this mod yet.`,tapStar:`Tap a star to see its planets and stations.`,addStarsFirst:`Add stars on the Stars tab to see them here.`},ye=t({default:()=>be}),be={requires:`Requires: {mods}`,requiredMods:`Requires`,open:`Open`,openFile:`Open file`,shareLink:`Share link`,offline:`Offline`,modLibrary:`Mod library`,gameQuests:`The game’s quests`,language:`Language`,help:`Help`,settings:`Settings`,cancelSelection:`Cancel selection`,selected_one:`{count} selected`,selected_other:`{count} selected`,selectAll:`Select all`,tipFavoritesA:`Tap `,tipFavoritesB:` to favorite a mod. `,tipFavoritesC:` bundles your favorites into one zip for your phone, plus a backup of everything here.`,download:`Download`,storageBannerSafari:`Safari clears saved data after 7 days without a visit unless the editor is added to the Home Screen.`,storageBanner:`Your browser may clear saved mods when it runs low on space. Ask it to keep them, or download a backup.`,dismiss:`Dismiss`,modsKept:`Your mods will be kept`,modsKeptHelp:`The browser won’t clear them to free space.`,keepSafe:`Keep my mods safe`,keepSafeShort:`Keep safe`,downloadABackup:`Download a backup`,persistRefused:`The browser didn’t agree to keep your mods`,persistRefusedHelp:`Install the editor as an app or bookmark it, then try again. Until then, download a backup now and then.`,restore:`Restore`,discard:`Discard`,searchMods:`Search mods`,filter:`Filter`,filterAll:`All`,filterFavorites:`Favorites`,filterMine:`Mine`,filterCommunity:`Community`,filterProblems:`Problems`,loading:`Loading mods`,noModsMatch:`No mods match`,noFavoritesYetBody:`No favorites yet. Tap the star on any mod to add it.`,nothingCalled:`Nothing called “{query}”.`,nothingCalledFiltered:`Nothing called “{query}” with this filter.`,noModsFilter:`No mods with this filter.`,clearFilters:`Clear search and filters`,sort:`Sort`,sortRecent:`Recently edited`,sortName:`Name`,sortStatus:`Status`,new:`New`,myMods:`My mods`,writeOwn:`Write your own quest`,writeOwnHelp:`No code. About 2 minutes with a template.`,topCommunity:`Top community mods`,noCommunityMatch:`No community mods match.`,communityRemoved:`You removed the community mods from your home.`,browseLibrary:`Browse the library`,browseModLibrary:`Browse the mod library`,favorites_one:`{count} favorite`,favorites_other:`{count} favorites`,noFavoritesYet:`No favorites yet`,questFileCount:`{count}/{max} quests`,bundledIntoDownload:`Bundled into your download`,starToInclude:`Star mods to put them in the game`,dropTitle:`Drop to open`,dropHelp:`A zip you downloaded from here, a QuestN.json or StarsStations.json.`,dropWrongType:`Drop a .zip or .json file`,about:`About {title}`,favoriteNamed:`Favorite {title}`,unfavoriteNamed:`Unfavorite {title}`,quests_one:`{count} quest`,quests_other:`{count} quests`,textures_one:`{count} texture`,textures_other:`{count} textures`,starsStations:`Stars & stations`,texturesType:`Textures`,texturesTypeHelp:`Replace ship and station art with your own images.`,comingSoon:`Coming Soon!`,starsStationsLower:`stars & stations`,empty:`Empty`,untitled:`Untitled`,errors_one:`{count} error`,errors_other:`{count} errors`,warnings_one:`{count} warning`,warnings_other:`{count} warnings`,ready:`Ready`,communityMarker:`Community`,actionsFor:`Actions for {title}`,contents:`Contents`,removeFromHome:`Remove from home`,interfaceLanguage:`Interface language`,interfaceLanguageHelp:`Changes the editor’s menus and help. Your quests keep their own language.`,newStarsTitle:`New stars & stations`,newMod:`New mod`,newModHelp:`What do you want to make?`,sideQuest:`Side quest`,sideQuestHelp:`Dialogue, ships and missions. Most people start here.`,starsStationsHelp:`Add or move stars, planets and stations on the galaxy map.`,chooseTemplate:`Choose a template`,chooseTemplateHelp:`Everything is changeable later.`,zipUnreadable:`This zip couldn’t be read`,zipStateDamaged:`The saved state inside this zip is damaged`,zipNoModFiles:`No mod files in this zip`,opened:`Opened “{title}”`,restored_one:`Restored {count} mod from {file}`,restored_other:`Restored {count} mods from {file}`,added_one:`Added {count} mod`,added_other:`Added {count} mods`,addedSkipped_one:`Added {count} mod, {skipped} already here`,addedSkipped_other:`Added {count} mods, {skipped} already here`,openHelp:`A zip you downloaded from here, a QuestN.json from 2022 onward, or StarsStations.json.`,chooseFile:`Choose a file`,chooseFileHelp:`.zip or .json from your device`,orPaste:`Or paste JSON`,pasteJson:`Paste JSON`,pastedJson:`Pasted JSON`,reviewPasted:`Review pasted JSON`,noFileHandy:`No file handy? Try a 2022-style file with a few problems.`,trySample:`Try a sample file`,openBackup:`Open this backup?`,openBackupBody_one:`{file} holds {count} mod and your settings. Add the mod to what’s here, or replace everything with this file.`,openBackupBody_other:`{file} holds {count} mods and your settings. Add the mods to what’s here, or replace everything with this file.`,addToMine:`Add to mine`,replaceEverything:`Replace everything`,replaceEverythingQ:`Replace everything on this device?`,replaceEverythingBody:`Every mod and History entry here is deleted and replaced by the backup. Download a backup of what is here first if you may want it back.`,backupNotSaved:`Couldn’t open the backup: this browser didn’t save it.`,backupNewerFields:`Made by a newer editor. Kept but not editable here: {fields}`,editor:`Editor`,tips:`Tips`,tipsHelp:`A one-line explainer the first time each screen opens.`,advanced:`Advanced view`,advancedHelp:`Shows the file’s key names beside labels, and the JSON tab.`,storage:`Storage`,mbUsed:`{mb} MB used`,storageDetail:`{mods} mods · {entries} History entries`,storageUsed:`{used} used of {quota}`,historyHelp:`Earlier copies of every mod, and deleted mods for 30 days`,historyBySize:`History entries by size`,clearAllData:`Clear all Mods data`,clearAllDataHelp:`Empties the database and preferences; the next load is a first visit`,clearAllDataQ:`Clear all Mods data?`,clearAllDataBody:`Every mod, History entry, texture and Mods preference on this device is deleted, then Mods reloads as on a first visit. Builds, the Hangar and your save stay.`,persistent:`Persistent: the browser won’t clear your mods.`,notPersistent:`Not persistent: the browser may clear your mods when space runs low.`,mockupTools:`Start over`,simStorageFull:`Simulate storage full`,simStorageFullHelp:`Every save fails as on a full device, until switched off.`,loadSamples:`Load sample mods`,loadSamplesHelp:`The Long Haul, A Hard Choice`,samplesAdded:`Sample mods added`,resetFirstRun:`Delete every mod`,resetFirstRunHelp:`Deletes every mod and History entry`,needsConnection:`Checking needs a connection.`,aboutSection:`About`,appName:`Galaxy Genome Quest Editor`,appAbout:`A fan-made tool. Galaxy Genome is a game by SKV Games.`,helpCentre:`Help centre`,deleteEverythingQ:`Delete every mod?`,deleteEverythingBody:`Every mod and History entry on this device is deleted. This can’t be undone. Type DELETE to confirm.`,deleteEverything:`Delete every mod`,everythingDeleted:`Every mod deleted`,typeDelete:`Type DELETE to confirm`,sourceCommunityEntry:`Community library · {entry}`,sourceCommunityModified:`Community library · {entry} · Modified`,sourceLocal:`Made here`,sourceImport:`Opened from a file`,sourceGame:`The game’s own quest`,sourceCommunity:`Community library`,statQuests:`Quests`,statSteps:`Steps`,statLines:`Dialogue lines`,statChoices:`Choices`,statShips:`Ships`,statMissions:`Station missions`,statRumors:`Rumors`,statSystems:`Systems used`,statStars:`Stars`,statPlanets:`Planets`,statStations:`Stations`,statTextures:`Textures`,modIdCopied:`Mod ID copied`,copyFailed:`Couldn’t copy`,version:`Version`,lastModified:`Last modified`,created:`Created`,author:`Author`,you:`You`,licence:`Licence`,languages:`Languages`,yes:`Yes`,no:`No`,modId:`Mod ID`,copyModId:`Copy mod ID`,modIdHelp:`Unique to this copy of the mod, so different versions of the same mod can sit side by side.`,downloaded:`Downloaded {file}`,downloadedHelp:`Copy the files in its “mod” folder to your phone.`,howToInstall:`How to install`,downloadHelp:`Your favorites as one mod for the game, and everything here so you can open it again later.`,fixErrorToDownload:`Fix the error above to download.`,downloadZip:`Download zip`,fileName:`File name`,whatsInZip:`What’s in the zip`,forYourPhone:`for your phone`,gameLanguage:`Game language`,gameLanguageIs:`Game language: {lang}`,gameLanguageChange:`Game language: {lang}. Change`,gameLanguageHelp:`The game only offers quests in its own language, so the mod holds one.`,noFavTapA:`No favorites yet. Tap `,noFavTapB:` on a mod to include it.`,questFilesIn_one:`{count} quest file in {lang}`,questFilesIn_other:`{count} quest files in {lang}`,noQuestsIn:`No quests in {lang}`,mergedFrom_one:`merged from {count} mod`,mergedFrom_other:`merged from {count} mods`,everythingHere:`everything here`,stateHelp_one:`All {count} mod, favorites, History and settings. Open the zip here to get it all back.`,stateHelp_other:`All {count} mods, favorites, History and settings. Open the zip here to get it all back.`,needsALook:`Needs a look`,fixedAutomatically:`Fixed automatically ({n})`,readyNothing:`Ready. Nothing needs your attention.`,texturesAdded_one:`Added {count} texture`,texturesAdded_other:`Added {count} textures`,textureUnpaired:`Missing a .png or .xml for {names}`,textureUnpairedHelp:`Each texture needs both files with the same name, like txtr_ships1.png and txtr_ships1.xml.`,noTextureFiles:`No texture files`,noTextureFilesHelp:`Texture files are named txtr_<sheet>.png and .xml.`,newQuest:`New quest`,untitledMod:`Untitled mod`,modSubtitle:`Mod · {contents}`,aboutThisMod:`About this mod`,duplicateMod:`Duplicate mod`,deleteMod:`Delete mod`,submitToLibrary:`Submit to library`,modSettings:`Mod settings`,historyAndDeleted:`History and deleted mods`,selectMods:`Select mods`,fromLibrary:`From the community library · {entry} v{version}`,fromLibraryBy:`From the community library · {entry} v{version} · by {author}`,modified:`Modified`,changedFrom:`Changed from {entry} v{version}`,addOriginal:`Add original from library`,tipContents:`A mod is a set of files. Pick the quest or stars you want to work on; the star favorites the whole mod.`,modName:`Mod name`,modNameHelp:`What the mod is called on the home screen and in the library.`,summary:`Summary`,summaryPlaceholder:`One or two sentences for the library.`,lastChanged:`Last changed {ago}`,addQuest:`Add quest`,questsHeading:`Quests ({n})`,searchQuests:`Search quests by name, ID or dialogue`,noQuestsInMod:`No quests in this mod.`,noQuestMatches:`No quest matches “{query}”.`,steps_one:`{count} step`,steps_other:`{count} steps`,startsInSpace:`Starts in space`,noStation:`No station`,barAtIn:`Bar at {station} ({system})`,barAt:`Bar at {station}`,startsNear:`Near a point: any bar within {radius} ly of {x}, {y}`,unlocksAfter:`Unlocks after {name}`,playedInOrderHeader:`Played in order: {count} chapters`,playedInOrder_one:`{count} quest, played in order`,playedInOrder_other:`{count} quests, played in order`,chainStartsAt:`starts at {station}`,idN:`ID {id}`,removeQuest:`Remove quest`,starsCounts:`{stars} stars · {planets} planets · {stations} stations`,starsActions:`Stars actions`,removeStars:`Remove stars & stations`,noneInMod:`None in this mod.`,addStars:`Add stars & stations`,addTextures:`Add textures`,texturesHeading:`Textures ({n})`,texturesEmpty:`Texture sheets replace the game’s art. Adding them here is coming soon; a mod you open or import keeps the ones it has.`,textureSheetAlt:`{name} texture sheet`,textureSize_one:`{kb} KB · {count} sprite`,textureSize_other:`{kb} KB · {count} sprites`,removeNamed:`Remove {name}`,addAQuest:`Add a quest`,addAQuestHelp:`Start from a template. You can change everything later.`,submitTitle:`Submit to library`,submitHelp:`Share your mod through a short form on GitHub. You need a free GitHub account.`,submitButton:`Download zip and open the form`,submitZipHolds:`The zip holds`,submitStep1:`The button downloads the zip and opens the “Submit a mod” form with your mod’s details filled in.`,submitStep2:`Sign in to GitHub, drag the zip into the form, choose a licence and submit. A check comments within a few minutes, and a maintainer adds the mod to the library.`,submitDiscordA:`No GitHub account? Share the zip on `,submitDiscordB:` and a maintainer adds it for you.`,submitNoAuthor:`Add your name as the author above before you share.`,submitLearnMore:`About the community library`},xe=t({default:()=>Se}),Se={help:`Help`,searchHelp:`Search help`,articles:`Articles`,noMatchTitle:`No articles match`,noMatchBody:`Nothing about “{query}”. Try a word from the game, like “checkpoint” or “station”.`,helpGroup:`Help · {group}`,nextArticle:`Next article`,tryIt:`Try it:`,"group.Start":`Start`,"group.Build":`Build`,"group.Publish":`Publish`,"group.Reference":`Reference`,"term.step":`Step`,"term.checkpoint":`Checkpoint`,"term.journal":`Journal`,"term.condition":`Condition`,"term.choice":`Choice`,"term.contact":`Contact`,"term.pilot":`Pilot name`,"term.behaviour":`Behaviour`,"term.mission":`Station mission`,"term.version":`Language version`,"def.step":`One stage of a quest. It shows dialogue, spawns ships and gives orders when it starts, then waits for its Finishes when condition.`,"def.checkpoint":`A step that saves the quest when it begins. Reloading resumes there, without that step’s dialogue, ships or orders. Before the first checkpoint, reloading resumes at step 1.`,"def.journal":`The line in the player’s journal while a step is active. Write it as an instruction.`,"def.condition":`Something that happens in the game, such as arriving in a system or a ship being destroyed. It finishes or fails a step.`,"def.choice":`A button on the last line of dialogue. Each choice goes to a step you pick. The game shows at most 3.`,"def.contact":`The person who offers the quest in the bar: a name and a portrait.`,"def.pilot":`The name a spawned ship is known by. Orders and conditions in later steps refer to the ship by this name.`,"def.behaviour":`How a ship acts: fights for the player, trades, mines, or attacks on sight.`,"def.mission":`A mission card on a station’s mission board, shown while a step is active.`,"def.version":`A linked copy of a quest in another language. It shares the quest ID, steps and ships.`,"title.getting-started":`Getting started: your first quest in 5 minutes`,"title.mods-and-files":`Mods, files and Mod settings`,"title.steps-and-choices":`How steps, choices and branches work`,"title.conditions":`Conditions: every “Finishes when” explained`,"title.ships-and-orders":`Ships and orders`,"title.station-missions":`Station missions`,"title.rewards":`How rewards are worked out`,"title.space-quests":`Starting quests in space`,"title.requirements":`Requirements and quest chains`,"title.translating":`Translating a quest`,"title.stars-and-stations":`Stars, planets and stations`,"title.textures":`Textures`,"title.favorites-and-download":`Favorites and Download`,"title.installing":`Installing mods on your phone`,"title.install-guide":`Install guide`,"title.not-showing":`Why didn’t my quest show up?`,"title.opening-files":`Opening zips and mod files`,"title.community-library":`The community library and sharing your mod`,"title.glossary":`Glossary`,"title.older-files":`Opening older mod files`,"kw.getting-started":`new first template create`,"kw.mods-and-files":`mod settings contents files quest add remove submit`,"kw.steps-and-choices":`branch choice options dialogue jump questID`,"kw.conditions":`finishes fails action complete trigger`,"kw.ships-and-orders":`spawn pilot behaviour attack destroy`,"kw.station-missions":`task mission board credits reputation`,"kw.rewards":`credits pay reward CR karma`,"kw.space-quests":`random space trigger chance radius point`,"kw.requirements":`required completed karma faction chain`,"kw.translating":`language translate version ru es pt cn`,"kw.stars-and-stations":`star planet station system orbit`,"kw.textures":`texture txtr png xml sprite art sheet`,"kw.favorites-and-download":`favorite star download zip language flag state backup`,"kw.installing":`install folder android copy modifications`,"kw.install-guide":`install guide usb adb files folder copy zip android data modifications switch`,"kw.not-showing":`missing checklist skipped not appear`,"kw.opening-files":`open import zip restore backup paste drag drop`,"kw.community-library":`community library share submit github pull request discord catalogue`,"kw.glossary":`terms words definitions`,"kw.older-files":`2021 old format import array`,gsIntro:`A side quest is a contact in a station bar, a short description, and a chain of steps.`,gs1:`On the home screen, tap New under My mods, then Side quest.`,gs2:`Pick a template. Delivery is the quickest: talk, fly, open the station menu.`,gs3:`Give the quest a name, choose its language and the station where it’s offered.`,gs4:`Open Steps and write the journal line and dialogue for each step.`,gs5:`Check Problems. When it shows no errors, tap the star to favorite the mod, then Download on the home screen and follow the install guide.`,gsTry:`open the steps of “The Long Haul”`,mfIntro:`A mod is a set of files that belong together: any number of quests, one stars & stations file, and texture sheets. The home screen shows one card per mod.`,mfContents:`Mod settings`,mfContentsBody:`Tapping a mod with one file opens that file’s editor. A mod with more opens its Mod settings page, which holds the mod’s name, version and author and lists every quest, the stars & stations file and the textures. From a quest, open it with Mod settings on the Overview page or in the ⋮ menu.`,mf1:`Add quest starts a new quest in the mod from a template.`,mf2:`Add stars & stations adds the mod’s one StarsStations.json.`,mf3:`Add textures takes txtr_ sheets with their .xml files.`,mf4:`Each file’s ⋯ menu removes it from the mod.`,mfIds:`Every mod has its own ID, so two versions of the same mod can sit side by side. Favorites, Duplicate and Delete always act on the whole mod.`,scIntro:`Steps run in order. When a step’s condition happens, the next step starts. Steps only advance when no dialogue is open.`,scChoices:`Choices`,scChoicesBody:`The last line of a step’s dialogue can offer up to 3 choices. Each choice goes to a step you pick, or continues to the next step. Choice text can’t contain ; or =.`,scRejoin:`Branches that rejoin`,scRejoinBody:`After a branch step ends, the quest continues into the step right below it in the list. If that is the other branch, add a choice that jumps to the ending instead. The Problems list flags this.`,scOnly:`A quest can only branch through choices. Each step has one Finishes when, and Fails when ends the whole quest with “Mission failed”. To give a fight two outcomes, offer the choice before it: Fight or Break off.`,scTry:`see the branches of “A Hard Choice”`,cIntro:`Each step finishes when one condition happens; the game has no “either of two”. A step can also fail: the quest fails only when every Fails when condition has happened during that step. Failing ends the quest, shows “Mission failed” and forgets its progress, so it can be taken again. It never branches.`,cButton:`The game adds BUTTON_ in front of every condition itself, so never type it.`,cItem:`{label}: when {sentence}.`,cMore_one:`And {count} more in the condition picker.`,cMore_other:`And {count} more in the condition picker.`,soIntro:`Ships appear when their step starts. Each has a pilot name; later steps give orders and check conditions by that name.`,so1:`A ship whose pilot name already exists in the game is not spawned. Pick names other quests are unlikely to use.`,so2:`Orders apply only to ships that already exist: attack a target, change behaviour, or destroy on the spot.`,so3:`Angler, Angler-Mother and Automaton ships are always hostile in mods.`,so4:`Ships are not saved. Reloading at a checkpoint skips that step’s ships, so put the checkpoint before the step that spawns a ship the quest still needs.`,soBehaviours:`Behaviours`,soTry:`open the fight step in “A Hard Choice”`,smIntro:`A station mission puts a card on a station’s mission board while its step is active. It takes two steps: the mission’s step finishes on Accept a story mission, the next on Collect a story mission reward. Add station mission on the Steps page creates both.`,sm1:`The game caps mission credits at 100,000 CR and reputation at 3.`,sm2:`If the target station is the offering station, the game picks another within 100 ly.`,sm3:`Keep Story on. Only story missions raise the accept and reward conditions, and only they never time out. The board never shows a mission from step 1.`,smTypes:`Types`,rwIntro:`The game pays mod quests itself. The Reward and Karma reward fields in the file are ignored.`,rw1:`50 CR when a ship attacks the player.`,rw2:`150 CR instead, when the attacking ships outweigh the other ships (small 1, medium 3, large 8).`,rw3:`+20 CR for each step that ends on arriving in a system.`,rw4:`The total is capped at 250 CR.`,rwNote:`A ship counts as attacking only when an order targets the player with Attack on. The Overview shows the live estimate.`,sqIntro:`A quest can start by itself instead of being offered in a bar. Choose Starts in space under How it starts.`,sq1:`Trigger: arriving in a system, or scanning a planet.`,sq2:`Chance: the chance each time the trigger happens inside the area.`,sq3:`Point and radius: galaxy map light years. Sol is 0, 0.`,sq4:`It starts only when one of the player’s three quest slots is free, and never again once finished.`,sq5:`Space quests start only in the game’s language, and ignore every requirement: finished quests, karma, faction reputation and own station.`,rqIntro:`A quest can wait for other quests. All listed quests must be finished; until then it isn’t listed at all.`,rq1:`Pick the game’s quests, your own mods, or Main story past step 68.`,rq2:`If a required quest isn’t installed, this quest never appears.`,rq3:`Only completion is visible between quests. Which choice a player took is not.`,rq4:`Karma and faction reputation are checked when the player taps Accept.`,rq5:`Only bar quests check requirements. A quest that starts in space ignores all of them, and one offered near a point ignores own station.`,trIntro:`Each language version shares the quest ID and structure. The game offers a quest in a bar only when its language matches the player’s game language.`,tr1:`Open the quest’s ⋮ menu, then Translate and language versions, then Add a language.`,tr2:`The translate view lists every text field with the original above the translation.`,tr3:`Download puts one language in the zip, picked with the flag on the mod/ row: two files with one ID don’t coexist, whatever their language.`,ssIntro:`A stars & stations file adds or changes systems. The game reads one StarsStations.json; Download merges the files of all your favorite mods into one.`,ss1:`Using the name of an existing system moves and changes that system. Sagittarius A* can’t be changed.`,ss2:`Planet orbits use multiples of 100. A second planet on the same orbit in a system is skipped.`,ss3:`A station must orbit a planet, not a star. A station missing any field is skipped.`,ss4:`Planets from mods start out already discovered.`,txIntro:`A texture sheet replaces some of the game’s art. It is two files with the same name: a picture, txtr_<sheet>.png, and its map of sprites, txtr_<sheet>.xml.`,tx1:`On a mod’s Mod settings page, tap Add textures and pick both files. You can pick several sheets at once; each .png is paired with its .xml.`,tx2:`A file without its partner is named in an error and not added.`,tx3:`Download copies the sheets of your favorite mods into mod/textures/ in the zip.`,tx4:`When two favorite mods replace the same sheet, the later one wins, and Download lists it under Needs a look.`,fdIntro:`The star on any mod makes it a favorite. Favorites are what goes into the game; nothing else about the mod changes, and community mods can be favorites too.`,fdZip:`What’s in the zip`,fdZipBody:`Download on the home screen always makes one zip named with today’s date and your file name.`,fd1:`mod/ holds the files to copy to your phone: a Quest0.json, Quest1.json and so on for every quest of every favorite, one StarsStations.json merged from all of them, and textures/.`,fd2:`state/ holds everything in the editor: every mod, favorites, History, textures and settings. Open the zip here later to get it all back.`,fdLang:`Game language`,fdLangBody:`The game only offers quests in its own language, so mod/ holds one language. The flag on the mod/ row shows it; tap it to pick another. Quests without that language are left out and listed.`,fdFixes:`Download numbers the files, gives a new ID to any quest whose ID clashes, and lists anything that needs a look. More than 200 quest files can’t be downloaded: the game loads Quest0.json to Quest199.json and nothing past them. Quest files already on your phone from other mods use the same 200 slots, so copy the new files over them rather than beside them.`,ofIntro:`Open, at the top of the home screen, takes a file from your device or pasted JSON.`,of1:`A zip downloaded from here brings back its state/: add its mods to what’s here, or replace everything with it.`,of2:`Any other zip is searched for QuestN.json, StarsStations.json and texture sheets, which become one new mod.`,of3:`A single QuestN.json or StarsStations.json goes to a review screen that lists every fix before anything is added.`,of4:`On a computer, drop a .zip or .json anywhere on the home screen.`,clIntro:`The community library holds mods shared by other players. The most popular are on your home screen; browse the rest from Mod library.`,cl1:`Edit a community mod in place. The first change marks it Modified; the library can then add the original again beside your changed copy. Duplicate makes a separate mod of your own and takes over the favorite.`,cl2:`Remove from home takes an unmodified community mod off your home screen; add it back from the library. A modified copy is your work, so it is deleted like your own mods, with undo.`,cl3:`A link like /community/<entry-id> opens that mod’s page here, with Add to my mods; put a screen after it, as in /community/<entry-id>/test, to add the mod if it isn’t on this device and open it there.`,clShare:`Sharing your mod`,clShareBody:`The library is a folder in the editor’s own repository. A mod joins it through the “Submit a mod” form on GitHub; you need a GitHub account, nothing else.`,clStep1:`Fill in the mod’s name, version, author and summary on its Mod settings page.`,clStep2:`Choose Submit to library from the quest’s ⋮ menu, the Mod settings ⋮ menu or the Overview page, then Download zip and open the form.`,clStep3:`Drag the zip into the form and submit. A check comments on your submission; when it passes, a maintainer reviews and adds the mod.`,clDiscord:`No GitHub account? Share the zip on Discord and a maintainer adds it for you.`,clGithub:`GitHub`,clDiscordLink:`Discord`,clRedditLink:`Reddit`,clVersions:`A new version of a mod is a new catalogue entry with its own mod ID, so players’ copies of the old version keep working.`,olderIntro:`The editor opens quest files from 2022 onward: files from the 2022 editor, files in the game’s current format, and anything hand-edited in between.`,olderList:`A 2021 file is a bare list rather than one object with settings and questParts, so it can’t be read. Rebuild the quest from a template instead.`,olderRepair:`Import repairs byte order marks, comments, trailing commas and curly quotes, and lists every change before anything is added.`,backHome:`Back to My mods`,ckMinSteps:`The quest has at least 2 steps`,ckIdGame:`Its ID isn’t one of the game’s own quests (100002–100044)`,ckIdDupe:`No other mod here uses the same ID`,ckStation:`It’s offered at a station that exists, or starts in space with a chance above 0%`,ckFinish:`Every step can finish`,ckReq:`Every required quest is installed`,ckNoneTitle:`No quests to check`,ckNoneBody:`This checklist runs against one of your quests. Make one, or load the sample mods.`,ckLoadSamples:`Load sample mods`,ckIntro:`The game skips a quest without any message. Pick a quest to check it.`,ckPick:`Quest to check`,ckInFile:`In the file`,ckGoTo:`Go to {place}`,ckOnPhone:`On your phone`,ckPhoneLang:`Your game’s language is set to match this quest ({lang}). A bar only offers quests in the game’s language.`,ckPhoneFolder:`The file sits directly in the mod folder and is named Quest0.json to Quest199.json.`,ckPhoneSwitch:`Side Quests is switched on in Modifications. After a game update, switch it on again.`,ckPhoneId:`No other installed file uses the same quest ID. The lower file number wins.`,ckInstallGuide:`Open the install guide`,ckOthers:`Other problems in this quest`,igTitle:`Install on your phone`,igSubtitle:`Install guide`,igCopied:`Copied`,igCopyBlocked:`Copy isn’t allowed here`,igCopyPath:`Copy folder path`,igCopy:`Copy`,ig3Alt:`The game’s Modifications screen: Side Quests shows Mod exists: Yes: 1 and its Activated box is ticked with an orange cross.`,ig3Caption:`Mod exists turns yellow once the game finds your files. Tap the Activated box under each section you installed so it shows the orange cross. Tap the picture to see it full size.`,ckChecking:`Checking`,ckChange:`Change`,ckSearch:`Search mods, quests, IDs or dialogue`,ckNoMatch:`No quest matches.`},Ce=t({default:()=>we}),we={showGraph:`Show the requirement graph`,requiredAdded:`{mod} added as a required mod`,requiresList:`Requires {mods}`,addWithRequired:`Add with required mods`,addToMyMods:`Add to my mods`,entryInfo:`Community · v{version} · {age}`,entryParts:`In this mod`,modifiedCopy:`Your modified copy`,fixCurly:`Replaced curly quotes around keys and text`,fixComments:`Removed comments`,fixCommas:`Removed trailing commas`,fixBom:`Removed the byte order mark at the start of the file`,fixCase:`Read “{found}” as “{key}”`,fixNumber:`{label}: read “{value}” as a number`,fixOn:`{label}: read “{value}” as on`,fixZh:`Language “zh” written as “cn”, the code the game reads`,fixButton:`Removed BUTTON_ from the condition of {where}`,fixOrderBehaviour:`{where}: orders for {ships} had no behaviour, which the game reads as Trader; each now keeps its ship’s own`,fixShipType:`{where}: target ship “{value}” written as the game’s name “{internal}”`,causeEnd:`The file ends too early. A closing bracket, brace or quote is probably missing.`,causeLineBreak:`A line break sits inside some text. Join the line, or write \\n.`,causeSingle:`Text is wrapped in single quotes. Mod files need double quotes.`,causeComma:`A comma is probably missing at the end of the line before.`,causeOther:`Something here is not valid JSON. Check the quotes and commas around this spot.`,lookNumber:`{label}: “{value}” is not a number, so {def} is used.`,lookBool:`{label}: “{value}” is not on or off, so it is off.`,lookNoSettings:`The file has no quest settings, so the game would skip it. Defaults are filled in.`,lookChance:`Chance is {chance}; the game expects 0 to 1.`,lookChoice:`{where}: the choice “{piece}” is malformed, so it shows no button.`,lookShip:`{where}: the game doesn’t know the ship “{value}”; it will use Ion.`,lookBehaviour:`{where}: the game doesn’t know the behaviour “{value}”; it will use Trader.`,lookLevel:`{where}: the game doesn’t know the level “{value}”; it will use the lowest.`,lookShipType:`{where}: the game doesn’t know the ship type “{value}”; it will use Ion.`,keptReward:`Reward and karma reward (the game works out a mod’s reward itself)`,keptUnknownKey:`Unknown key “{key}” on {where}`,labelSpace:`Starts in space`,labelNearPoint:`Offered near a point`,labelMinKarma:`Minimum karma`,labelMaxKarma:`Maximum karma`,labelChance:`Chance`,labelReward:`Reward`,labelKarmaReward:`Karma reward`,labelQuestId:`Quest ID`,labelPointX:`Point X`,labelPointY:`Point Y`,labelRadius:`Radius`,labelFactionRep:`Faction reputation`,labelOwnStation:`Own station required`,labelCloseTime:`{where} close time`,labelCheckpoint:`{where} checkpoint`,labelReminderInterval:`{where} reminder interval`,labelDistance:`{where} distance`,labelAutoLevel:`{where} auto level`,labelOrder:`{where} order`,labelCredits:`{where} credits`,labelReputation:`{where} reputation`,labelHull:`{where} hull`,labelCargo:`{where} cargo count`,labelStarX:`Star X`,labelStarY:`Star Y`,labelStarZ:`Star Z`,labelOrbit:`Orbit`,labelMoons:`Moons`,labelSize:`Size`,labelRings:`Rings`,labelPlanet:`Planet`,whereStep:`Step {n}`,whereLine:`{where}, line {n}`,whereShip:`{where}, ship {n}`,whereReminder:`{where} reminder`,whereMission:`{where} mission`,importedQuest:`Imported quest`,importedStars:`Imported stars`,after:`After {list}`,mainStory:`the main story`,questN:`quest {id}`,title:`Mod library`,gameSubtitle:`{count} game quests · read-only`,communitySubtitle:`{count} community mods`,tabs:`Library`,community:`Community`,gameQuests:`Game quests`,searchGame:`Search by name, contact or station`,searchCommunity:`Search community mods`,communityTip:`Mods shared by other players, most popular first. Add one to your home, or add and favorite it to include it in your download.`,noModsMatch:`No mods match`,libraryEmpty:`No mods in the library yet.`,nothingMatches:`Nothing matches “{query}”.`,questFiles_one:`{count} quest file`,questFiles_other:`{count} quest files`,starsStations:`Stars & stations`,textures_one:`{count} texture`,textures_other:`{count} textures`,licence:`licence {licence}`,open:`Open`,favorited:`Favorited`,favorite:`Favorite`,onHomeRemove:`On your home · Remove`,addToHome:`Add to home`,modifiedOnHome:`Modified copy on your home`,addOriginal:`Add original`,addAndFavorite:`Add and favorite`,gameTip:`These are the game’s own side quests. Open one to see how it’s built, then make a copy to edit.`,gameTipList:`These are the game’s own side quests: who offers each one, where, and what it needs first.`,noQuestsMatch:`No quests match`,nothingMatchesGame:`Nothing matches “{query}”. Try a contact or station name.`,startsInSpace:`Starts in space`,steps_one:`{count} step`,steps_other:`{count} steps`,copyTitle:`{name} (copy)`,copied:`Made a copy of “{name}”`,copiedBody:`It has its own quest ID, so both can be installed.`,gameQuestSubtitle:`Game quest · ID {id}`,gameLocked:`The game’s own quest. Make a copy to edit.`,contact:`Contact`,offered:`Offered`,requires:`Requires`,nothing:`Nothing`,steps:`Steps`,stepN:`Step {n}`,journal:`Journal: {text}`,finishesWhen:`Finishes when`,makeCopy:`Make a copy`,openInEditor:`Open in editor`,reviewTitle:`Review import`,modFile:`mod file`,nothingToReview:`Nothing to review`,nothingToReviewBody:`Open a mod file to see what import will change before it’s added.`,openModFile:`Open a mod file`,trySample:`Try a sample file`,rejectedTitle:`This doesn’t look like a 2022 or newer mod file`,rejectedBody:`The file isn’t a single JSON object. Files from 2021 and earlier use a different layout.`,olderFiles:`About older mod files`,tryAnother:`Try another file`,cantRead:`This file can’t be read`,lineColumn:`Line {line}, column {column}`,handEdit:`Comments, trailing commas and curly quotes are already fixed for you; this one needs a hand edit.`,idChanged:`Quest ID {old} changed to {id}`,importedEntry:`Imported {file}`,summaryQuest:`Quest · {lang} · {steps}`,toLookAt:`{count} to look at`,ready:`Ready`,fixesMade_one:` · {count} fix made`,fixesMade_other:` · {count} fixes made`,nothingBlocks:`Nothing blocks the import. You can fix the rest inside the editor.`,fixedAuto:`Fixed automatically · {count}`,nothingFixed:`Nothing needed fixing`,nothingFixedDot:`Nothing needed fixing.`,needsLook:`Needs a look · {count}`,items:`{count} items`,allClear:`All clear`,allClearDot:`All clear.`,pickNewId:`Pick a new ID`,importAndOpen:`Import and open {place}`,keptAsIs:`Kept as is · {count}`,nothingExtra:`Nothing extra`,nothingExtraFile:`Nothing extra in the file.`,import:`Import`,nameRequired:`Give your quest a name.`,quickSetup:`Quick setup`,templateSubtitle:`Template · {name}`,questName:`Quest name`,questNameHelp:`Shown in the bar and the journal.`,questNamePlaceholder:`Parcel for Sirius`,language:`Language`,languageHelp:`The game only offers a quest in a bar when its language matches the player’s. Add more languages later.`,whereOffered:`Where it’s offered`,whereSpaceHelp:`This quest starts by itself near a point in space. Set the point on the overview.`,whereBarHelp:`The contact offers the quest in this station’s bar.`,chooseStation:`Choose a station`,station:`Station`,setupNote:`Contact and portrait come from the template. The quest ID is picked for you. Everything is changeable later.`,createQuest:`Create quest`,modName:`Mod name`,createMod:`Create mod`},Te=t({default:()=>Ee}),Ee={stepN:`Step {n}`,stepOf:`Step {n} of {total}`,stepSubtitle:`Step {n} · {name}`,copyName:`{name} (copy)`,notFound:`This step doesn’t exist any more.`,goesTo:`Goes to`,continueNext:`Continue to the next step`,newStepAtEnd:`New step at the end`,lines_one:`{count} line`,lines_other:`{count} lines`,ships_one:`{count} ship`,ships_other:`{count} ships`,orders_one:`{count} order`,orders_other:`{count} orders`,none:`none`,noLines:`no dialogue`,noShips:`no ships`,noOrders:`no orders`,noMission:`no mission`,noneCap:`None`,tipSteps:`A quest is a chain of steps. Tap a step to edit what happens in it.`,emptySteps:`A quest is a chain of steps. Each step shows dialogue, spawns ships, then waits for something to happen.`,addFirstStep:`Add first step`,addStep:`Add step`,addedStep:`Added step {n}`,duplicatedStep:`Duplicated step {n}`,beforeDeleting:`Before deleting step {n}`,deletedStep:`Deleted “{name}”`,steps:`Steps`,reorder:`Reorder`,reorderHint:`Drag the handles. Choices follow their steps wherever they move.`,fallsThrough:`Falls through`,reachedByChoice:`Reached by a choice`,nothingLeadsHere:`Nothing leads here`,insertBeforeN:`Insert a step before step {n}`,insertBefore:`Insert before`,insertAfter:`Insert after`,stepActions:`Step {n} actions`,stepCardLabel:`Step {n}: {name}`,checkpointShort:`CP`,stationMission:`Station mission`,choicesTo:`↳ choices: {targets}`,next:`next`,addMission:`Add station mission`,addedMission:`Added a station mission and its hand-in step`,missionStepName:`Take the mission`,missionJournal:`Accept the mission on the {station} mission board.`,turnInJournal:`Complete the mission and collect the reward at {station}.`,briefingStepName:`Briefing`,stepName:`Step name`,step:`Step`,previousStep:`Previous step`,nextStep:`Next step`,tipStepEditor:`A step runs top to bottom: it shows its dialogue and ships, then waits until it finishes.`,journal:`Journal`,journalEntry:`Journal entry`,journalHelp:`The line in the player’s journal while this step is active. Write it as an instruction.`,journalPlaceholder:`Destroy the pirates.`,jumpLabel:`Jump label`,jumpLabelHelp:`Assigned automatically on export. Choices that go to this step use it; 0 means nothing jumps here.`,checkpoint:`Save checkpoint here`,checkpointHelp:`Saves the quest when this step begins. Reloading resumes here without this step’s dialogue, ships or orders, and ships from earlier steps are gone.`,whenStarts:`When this step starts`,dialogue:`Dialogue`,shipsAppear:`Ships appear`,shipOrders:`Ship orders`,finishesWhen:`Finishes when`,finishesWhenSentence:`Finishes when {condition}.`,chooseFinish:`Choose what finishes this step`,gameNotes:`Also in the game`,finishHint:`One condition. When it happens the next step begins; steps only advance when no dialogue is open. To let the player pick a path, end the step before it with choices.`,failsWhen:`Fails when`,optional:`(optional)`,and:`and`,removeFailure:`Remove failure condition`,addFailure:`Add failure condition`,failHint:`Failing ends the whole quest; it never branches. It fails only when every one of these has happened during this step, and can then be taken again. For a risky moment with two outcomes, offer choices before it instead.`,failureRemoved:`Failure condition removed`,finishesWhenTitle:`Finishes when…`,failsWhenTitle:`Fails when…`,suggestDialogue:`Dialogue closed`,suggestNoEnemy:`No enemies left`,suggestDestroyed:`Ship destroyed: {pilot}`,missionFrom:`The mission is from step {n}: {mission}.`,suggestReward:`Collect a story mission reward`,searchConditions:`Search: arrive, station, destroy`,nothingMatches:`Nothing matches “{query}”.`,suggested:`Suggested for this step`,preview:`Preview`,useThis:`Use this`,system:`System`,systemHelp:`Choose a system from the list or the map.`,chooseSystem:`Choose a system`,recent:`Recent`,nearSol:`Near Sol`,station:`Station`,stationHelp:`Choose a station.`,chooseStation:`Choose a station`,ownStation:`Your own station`,inSystem:`In system`,inSystemHelp:`Narrows the planet list.`,planet:`Planet`,planetHelp:`Choose a planet of the system.`,choosePlanet:`Choose a planet`,pilot:`Pilot`,pilotHelp:`Ships spawned in this step or earlier, or type a pilot name.`,pilotHelpNone:`No ships are spawned by this step or earlier. Type a pilot name.`,pilotStops:`The ship that stops.`,place:`Place`,placeHelp:`The player, a station or a planet.`,thePlayer:`The player`,ore:`Ore`,material:`Material`,cargo:`Cargo`,chooseCargo:`Choose cargo`,planets:`Planets`,seconds:`Seconds`,secondsHelp:`Counted from the start of this step.`,distance:`Distance`,distanceHelp:`Light seconds from the system centre.`,chargeLevel:`Charge level`,nebula:`Nebula`,previewGame:`Preview in game style`,dialogueEmpty:`Lines appear in order when the step starts. The last line can offer choices.`,addLine:`Add a line`,lineDeleted:`Line deleted`,editHint:`Tap a line to edit. Drag to reorder, swipe to delete.`,editLineN:`Edit line {n}`,noSpeaker:`No speaker`,waits:`waits`,emptyMessage:`Empty message`,untitledChoice:`Untitled choice`,choiceGoesTo:`“{choice}” goes to {target}`,stepLower:`step {n}`,theNextStep:`the next step`,lineOf:`Line {n} of {total}`,nextLine:`Next line`,restart:`Restart`,skipTyping:`Skip typing`,lineN:`Line {n}`,line:`Line`,speaker:`Speaker`,speakerHelp:`Name shown above the message.`,speakerPlaceholder:`Captain Reyes`,portrait:`Portrait`,portraitHelp:`Picture beside the message.`,portraitUnknown:`The game doesn’t know “{name}”; it will show Tourist1.`,message:`Message`,messageHelp:`Keep it under about 320 characters.`,messageLong:`Long lines get cut off on small screens.`,closesAfter:`Closes after`,closesAfterHelp:`Seconds before the message closes by itself. Lines with choices usually wait.`,waitsForPlayer:`Waits until the player closes it`,waitForPlayer:`Wait for the player`,choicesCount:`Choices ({n} of {max})`,choicesHelp:`Buttons under the message. Up to 3.`,laterLines:`The step’s later lines still show after a choice is tapped.`,choiceText:`Choice {n} text`,buttonText:`Button text`,removeChoice:`Remove choice {n}`,choiceBlocked:`; and = can’t be used in choice text.`,addChoice:`Add choice`,maxChoices:`The game shows at most 3 choices. Chain another line for more.`},De=t({default:()=>Oe}),Oe={moreInfo:`More information`,learnMore:`Learn more ›`,moreActions:`More actions`,confirm:`Confirm`,sheet:`Sheet`,dragToReorder:`Drag to reorder`,dismissTip:`Dismiss tip`,clearSearch:`Clear search`,decrease:`Decrease`,increase:`Increase`,remove:`Remove`,storageFull:`Your device is out of space. Changes aren’t being saved.`,downloadBackup:`Download backup`,cantSave:`This browser can’t save. Download a backup before closing.`,draftRecovered:`Unsaved text recovered in “{title}”`,draftRestored:`Restored unsaved text in “{title}”`,draftDiscarded:`Recovered text discarded`,restore:`Restore`,discard:`Discard`,freeSpace:`Free space`,needsConnection:`needs a connection`},ke=Symbol.for(`immer-nothing`),Ae=Symbol.for(`immer-draftable`),y=Symbol.for(`immer-state`);function b(e,...t){throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var x=Object,je=x.getPrototypeOf,Me=`constructor`,Ne=`prototype`,Pe=`configurable`,Fe=`enumerable`,Ie=`writable`,Le=`value`,S=e=>!!e&&!!e[y];function C(e){return e?Be(e)||qe(e)||!!e[Ae]||!!e[Me]?.[Ae]||Je(e)||Ye(e):!1}var Re=x[Ne][Me].toString(),ze=new WeakMap;function Be(e){if(!e||!Xe(e))return!1;let t=je(e);if(t===null||t===x[Ne])return!0;let n=x.hasOwnProperty.call(t,Me)&&t[Me];if(n===Object)return!0;if(!Ze(n))return!1;let r=ze.get(n);return r===void 0&&(r=Function.toString.call(n),ze.set(n,r)),r===Re}function Ve(e,t,n=!0){He(e)===0?(n?Reflect.ownKeys(e):x.keys(e)).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function He(e){let t=e[y];return t?t.type_:qe(e)?1:Je(e)?2:Ye(e)?3:0}var Ue=(e,t,n=He(e))=>n===2?e.has(t):x[Ne].hasOwnProperty.call(e,t),We=(e,t,n=He(e))=>n===2?e.get(t):e[t],Ge=(e,t,n,r=He(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function Ke(e,t){return e===t?e!==0||1/e==1/t:e!==e&&t!==t}var qe=Array.isArray,Je=e=>e instanceof Map,Ye=e=>e instanceof Set,Xe=e=>typeof e==`object`,Ze=e=>typeof e==`function`,Qe=e=>typeof e==`boolean`;function $e(e){let t=+e;return Number.isInteger(t)&&String(t)===e}var et=e=>Xe(e)?e?.[y]:null,w=e=>e.copy_||e.base_,tt=e=>e.modified_?e.copy_:e.base_;function nt(e,t){if(Je(e))return new Map(e);if(Ye(e))return new Set(e);if(qe(e))return Array[Ne].slice.call(e);let n=Be(e);if(t===!0||t===`class_only`&&!n){let t=x.getOwnPropertyDescriptors(e);delete t[y];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){let i=n[r],a=t[i];a[Ie]===!1&&(a[Ie]=!0,a[Pe]=!0),(a.get||a.set)&&(t[i]={[Pe]:!0,[Ie]:!0,[Fe]:a[Fe],[Le]:e[i]})}return x.create(je(e),t)}{let t=je(e);if(t!==null&&n)return{...e};let r=x.create(t);return x.assign(r,e)}}function rt(e,t=!1){return ot(e)||S(e)||!C(e)?e:(He(e)>1&&x.defineProperties(e,{set:at,add:at,clear:at,delete:at}),x.freeze(e),t&&Ve(e,(e,t)=>{rt(t,!0)},!1),e)}function it(){b(2)}var at={[Le]:it};function ot(e){return e===null||!Xe(e)||x.isFrozen(e)}var st=`MapSet`,ct=`Patches`,lt=`ArrayMethods`,ut={};function dt(e){let t=ut[e];return t||b(0,e),t}var ft=e=>!!ut[e];function pt(e,t){ut[e]||(ut[e]=t)}var mt,ht=()=>mt,gt=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:ft(st)?dt(st):void 0,arrayMethodsPlugin_:ft(lt)?dt(lt):void 0});function _t(e,t){t&&(e.patchPlugin_=dt(ct),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function vt(e){yt(e),e.drafts_.forEach(xt),e.drafts_=null}function yt(e){e===mt&&(mt=e.parent_)}var bt=e=>mt=gt(mt,e);function xt(e){let t=e[y];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function St(e,t){t.unfinalizedDrafts_=t.drafts_.length;let n=t.drafts_[0];if(e!==void 0&&e!==n){n[y].modified_&&(vt(t),b(4)),C(e)&&(e=Ct(t,e));let{patchPlugin_:r}=t;r&&r.generateReplacementPatches_(n[y].base_,e,t)}else e=Ct(t,n);return wt(t,e,!0),vt(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e===ke?void 0:e}function Ct(e,t){if(ot(t))return t;let n=t[y];if(!n)return Mt(t,e.handledSet_,e);if(!Et(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){let{callbacks_:t}=n;if(t)for(;t.length>0;)t.pop()(e);At(n,e)}return n.copy_}function wt(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&rt(t,n)}function Tt(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var Et=(e,t)=>e.scope_===t,Dt=[];function Ot(e,t,n,r){let i=w(e),a=e.type_;if(r!==void 0&&We(i,r,a)===t){Ge(i,r,n,a);return}if(!e.draftLocations_){let t=e.draftLocations_=new Map;Ve(i,(e,n)=>{if(S(n)){let r=t.get(n)||[];r.push(e),t.set(n,r)}})}let o=e.draftLocations_.get(t)??Dt;for(let e of o)Ge(i,e,n,a)}function kt(e,t,n){e.callbacks_.push(function(r){let i=t;if(!i||!Et(i,r))return;r.mapSetPlugin_?.fixSetContents(i);let a=tt(i);Ot(e,i.draft_??i,a,n),At(i,r)})}function At(e,t){if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(e.assigned_?.size??0)>0)){let{patchPlugin_:n}=t;if(n){let r=n.getPath(e);r&&n.generatePatches_(e,r,t)}Tt(e)}}function jt(e,t,n){let{scope_:r}=e;if(S(n)){let i=n[y];Et(i,r)&&i.callbacks_.push(function(){Vt(e),Ot(e,n,tt(i),t)})}else C(n)&&e.callbacks_.push(function(){let i=w(e);e.type_===3?i.has(n)&&Mt(n,r.handledSet_,r):We(i,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Mt(We(e.copy_,t,e.type_),r.handledSet_,r)})}function Mt(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||S(e)||t.has(e)||!C(e)||ot(e)?e:(t.add(e),Ve(e,(r,i)=>{if(S(i)){let t=i[y];Et(t,n)&&(Ge(e,r,tt(t),e.type_),Tt(t))}else C(i)&&Mt(i,t,n)}),e)}function Nt(e,t){let n=qe(e),r={type_:+!!n,scope_:t?t.scope_:ht(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0},i=r,a=Pt;n&&(i=[r],a=Ft);let{revoke:o,proxy:s}=Proxy.revocable(i,a);return r.draft_=s,r.revoke_=o,[s,r]}var Pt={get(e,t){if(t===y)return e;let n=e.scope_.arrayMethodsPlugin_,r=e.type_===1&&typeof t==`string`;if(r&&n?.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);let i=w(e);if(!Ue(i,t,e.type_))return Rt(e,i,t);let a=i[t];if(e.finalized_||!C(a)||r&&e.operationMethod&&n?.isMutatingArrayMethod(e.operationMethod)&&$e(t))return a;if(a===It(e.base_,t)||Lt(e,t,a)){Vt(e);let n=e.type_===1?+t:t,r=Ut(e.scope_,a,e,n);return e.copy_[n]=r}return a},has(e,t){return t in w(e)},ownKeys(e){return Reflect.ownKeys(w(e))},set(e,t,n){let r=zt(w(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){let r=It(w(e),t),i=r?.[y];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(Ke(n,r)&&(n!==void 0||Ue(e.base_,t,e.type_)))return!0;Vt(e),Bt(e)}return e.copy_[t]===n&&(n!==void 0||Ue(e.copy_,t,e.type_))||Number.isNaN(n)&&Number.isNaN(e.copy_[t])?!0:(e.copy_[t]=n,e.assigned_.set(t,!0),jt(e,t,n),!0)},deleteProperty(e,t){return Vt(e),It(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),Bt(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){let n=w(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Ie]:!0,[Pe]:e.type_!==1||t!==`length`,[Fe]:r[Fe],[Le]:n[t]}},defineProperty(){b(11)},getPrototypeOf(e){return je(e.base_)},setPrototypeOf(){b(12)}},Ft={};for(let e in Pt){let t=Pt[e];Ft[e]=function(){let e=arguments;return e[0]=e[0][0],t.apply(this,e)}}Ft.deleteProperty=function(e,t){return Ft.set.call(this,e,t,void 0)},Ft.set=function(e,t,n){return Pt.set.call(this,e[0],t,n,e[0])};function It(e,t){let n=e[y];return(n?w(n):e)[t]}function Lt(e,t,n){return e.type_!==1||!e.allIndicesReassigned_||e.assigned_?.get(t)||!C(n)||n[y]?!1:e.baseRefs_.has(n)}function Rt(e,t,n){let r=zt(t,n);return r?Le in r?r[Le]:r.get?.call(e.draft_):void 0}function zt(e,t){if(!(t in e))return;let n=je(e);for(;n;){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=je(n)}}function Bt(e){e.modified_||(e.modified_=!0,e.parent_&&Bt(e.parent_))}function Vt(e){e.copy_||=(e.assigned_=new Map,nt(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Ht=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(e,t,n)=>{if(Ze(e)&&!Ze(t)){let n=t;t=e;let r=this;return function(e=n,...i){return r.produce(e,e=>t.call(this,e,...i))}}Ze(t)||b(6),n!==void 0&&!Ze(n)&&b(7);let r;if(C(e)){let i=bt(this),a=Ut(i,e,void 0),o=!0;try{r=t(a),o=!1}finally{o?vt(i):yt(i)}return _t(i,n),St(r,i)}if(!e||!Xe(e)){if(r=t(e),r===void 0&&(r=e),r===ke&&(r=void 0),this.autoFreeze_&&rt(r,!0),n){let t=[],i=[];dt(ct).generateReplacementPatches_(e,r,{patches_:t,inversePatches_:i}),n(t,i)}return r}b(1,e)},this.produceWithPatches=(e,t)=>{if(Ze(e))return(t,...n)=>this.produceWithPatches(t,t=>e(t,...n));let n,r;return[this.produce(e,t,(e,t)=>{n=e,r=t}),n,r]},Qe(e?.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),Qe(e?.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),Qe(e?.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){C(e)||b(8),S(e)&&(e=Wt(e));let t=bt(this),n=Ut(t,e,void 0);return n[y].isManual_=!0,yt(t),n}finishDraft(e,t){let n=e&&e[y];(!n||!n.isManual_)&&b(9);let{scope_:r}=n;return _t(r,t),St(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){let r=t[n];if(r.path.length===0&&r.op===`replace`){e=r.value;break}}n>-1&&(t=t.slice(n+1));let r=dt(ct).applyPatches_;return S(e)?r(e,t):this.produce(e,e=>r(e,t))}};function Ut(e,t,n,r){let[i,a]=Je(t)?dt(st).proxyMap_(t,n):Ye(t)?dt(st).proxySet_(t,n):Nt(t,n);return(n?.scope_??ht()).drafts_.push(i),a.callbacks_=n?.callbacks_??[],a.key_=r,n&&r!==void 0?kt(n,a,r):a.callbacks_.push(function(e){e.mapSetPlugin_?.fixSetContents(a);let{patchPlugin_:t}=e;a.modified_&&t&&t.generatePatches_(a,[],e)}),i}function Wt(e){return S(e)||b(10,e),Gt(e)}function Gt(e){if(!C(e)||ot(e))return e;let t=e[y],n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=nt(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=nt(e,!0);return Ve(n,(e,t)=>{Ge(n,e,Gt(t))},r),t&&(t.finalized_=!1),n}function Kt(){function e(n,r=[]){if(n.key_!==void 0){let e=n.parent_.copy_??n.parent_.base_,t=et(We(e,n.key_)),i=We(e,n.key_);if(i===void 0||i!==n.draft_&&i!==n.base_&&i!==n.copy_||t!=null&&t.base_!==n.base_)return null;let a=n.parent_.type_===3,o;if(a){let e=n.parent_;o=Array.from(e.drafts_.keys()).indexOf(n.key_)}else o=n.key_;if(!(a&&e.size>o||Ue(e,o)))return null;r.push(o)}if(n.parent_)return e(n.parent_,r);r.reverse();try{t(n.copy_,r)}catch{return null}return r}function t(e,t){let n=e;for(let e=0;e<t.length-1;e++){let r=t[e];if(n=We(n,r),!Xe(n)||n===null)throw Error(`Cannot resolve path at '${t.join(`/`)}'`)}return n}let n=`replace`,r=`remove`;function i(e,t,n){if(e.scope_.processedForPatches_.has(e))return;e.scope_.processedForPatches_.add(e);let{patches_:r,inversePatches_:i}=n;switch(e.type_){case 0:case 2:return o(e,t,r,i);case 1:return a(e,t,r,i);case 3:return s(e,t,r,i)}}function a(e,t,i,a){let{base_:o,assigned_:s}=e,c=e.copy_;c.length<o.length&&([o,c]=[c,o],[i,a]=[a,i]);let l=e.allIndicesReassigned_===!0;for(let e=0;e<o.length;e++){let r=c[e],u=o[e];if((l||s?.get(e.toString()))&&r!==u){let o=r?.[y];if(o&&o.modified_)continue;let s=t.concat([e]);i.push({op:n,path:s,value:d(r)}),a.push({op:n,path:s,value:d(u)})}}for(let e=o.length;e<c.length;e++){let n=t.concat([e]);i.push({op:`add`,path:n,value:d(c[e])})}for(let e=c.length-1;o.length<=e;--e){let n=t.concat([e]);a.push({op:r,path:n})}}function o(e,t,i,a){let{base_:o,copy_:s,type_:c}=e;Ve(e.assigned_,(e,l)=>{let u=We(o,e,c),f=We(s,e,c),p=l?Ue(o,e)?n:`add`:r;if(u===f&&p===n)return;let m=t.concat(e);i.push(p===r?{op:p,path:m}:{op:p,path:m,value:d(f)}),a.push(p===`add`?{op:r,path:m}:p===r?{op:`add`,path:m,value:d(u)}:{op:n,path:m,value:d(u)})})}function s(e,t,n,i){let{base_:a,copy_:o}=e,s=0;a.forEach(e=>{if(!o.has(e)){let a=t.concat([s]);n.push({op:r,path:a,value:e}),i.unshift({op:`add`,path:a,value:e})}s++}),s=0,o.forEach(e=>{if(!a.has(e)){let a=t.concat([s]);n.push({op:`add`,path:a,value:e}),i.unshift({op:r,path:a,value:e})}s++})}function c(e,t,r){let{patches_:i,inversePatches_:a}=r;i.push({op:n,path:[],value:t===ke?void 0:t}),a.push({op:n,path:[],value:e})}function l(e,t){return t.forEach(t=>{let{path:i,op:a}=t,o=e;for(let e=0;e<i.length-1;e++){let t=He(o),n=i[e];typeof n!=`string`&&typeof n!=`number`&&(n=``+n),(t===0||t===1)&&(n===`__proto__`||n===Me)&&b(19),Ze(o)&&n===Ne&&b(19),o=We(o,n),(o===null||!Xe(o))&&b(18,i.join(`/`))}let s=He(o),c=u(t.value),l=i[i.length-1];switch(a){case n:switch(s){case 2:return o.set(l,c);case 3:b(16);default:return o[l]=c}case`add`:switch(s){case 1:return l===`-`?o.push(c):o.splice(l,0,c);case 2:return o.set(l,c);case 3:return o.add(c);default:return o[l]=c}case r:switch(s){case 1:return o.splice(l,1);case 2:return o.delete(l);case 3:return o.delete(t.value);default:return delete o[l]}default:b(17,a)}}),e}function u(e){if(!C(e))return e;if(qe(e))return e.map(u);if(Je(e))return new Map(Array.from(e.entries()).map(([e,t])=>[e,u(t)]));if(Ye(e))return new Set(Array.from(e).map(u));let t=Object.create(je(e));for(let n in e)t[n]=u(e[n]);return Ue(e,Ae)&&(t[Ae]=e[Ae]),t}function d(e){return S(e)?u(e):e}pt(ct,{applyPatches_:l,generatePatches_:i,generateReplacementPatches_:c,getPath:e})}globalThis.Iterator?.from;var qt=new Ht;qt.produce;var Jt=qt.produceWithPatches.bind(qt),Yt=qt.setAutoFreeze.bind(qt),Xt=99999999,Zt=a.systems,Qt=a.stations,$t=a.bodies,en=new Map;for(let[e,t,n,r]of a.starTypes){let i={label:n,fuel:!!r};en.set(e,i),en.set(t,i)}var tn=e=>en.get(e),nn={"Trade Federation":`Federation`,USA:`Federation`,"United Empire":`Empire`,Russian:`Empire`,"Interstellar Alliance":`Alliance`,China:`Alliance`,Independent:`Independent`,Pirates:`Pirates`},rn={Anarchy:`Anarchy`,Low:`Low`,Medium:`Medium`,High:`High`,Only:`Anarchy`,NoOne:`Anarchy`,Conflict:`Conflict Zone`},an=[],on=a.gameQuests,sn=e=>on.find(t=>t.id===e);async function cn(){try{let e=await fetch(`/mods/data/game-quests.json`);return!e.ok||!e.headers.get(`content-type`)?.includes(`json`)?!1:(an.push(...await e.json()),!0)}catch{return!1}}var ln=100002,un=100044,dn=[99996,99997,99998,99999,199981,199982],fn=[{key:`en`,label:`EN`,name:`English`},{key:`ru`,label:`RU`,name:`Русский`},{key:`es`,label:`ES`,name:`Español`},{key:`pt`,label:`PT`,name:`Português`},{key:`cn`,label:`中文`,name:`中文`}],pn=[{get name(){return $(`reference.portraitCommon`)},items:[`Tourist1`,`Tourist2`,`Tourist3`,`Tourist4`,`Pirate1`,`Pirate2`,`Pirate3`,`Pirate4`,`Pirate5`,`Pirate6`]},{get name(){return $(`reference.portraitStory`)},items:[`Henry`,`Informant`,`Eva`,`Edmond Anger`,`Police Forces`,`Assistant`,`Marcus`,`David Evans`,`RT-01`,`Dr. Landau`,`G. Hopper`,`Automaton`,`Walker`,`Yuri Grom`,`Kaito`,`Dina`,`Victor`,`Ruby`,`Yana Seest`]},{get name(){return $(`reference.portraitSpecial`)},items:[`Daily Task`,`Expedition`,`None`]}],mn=pn.flatMap(e=>e.items),hn=[{key:`ion`,name:`Ion`,internal:`Ion`,size:`Small`},{key:`atom`,name:`Atom`,internal:`Atom`,size:`Small`},{key:`zeus`,name:`Zeus`,internal:`Zeus`,size:`Small`},{key:`chaser`,name:`Chaser`,internal:`Chaser`,size:`Small`},{key:`vortex`,name:`Vortex`,internal:`Vertex`,size:`Small`},{key:`hawk`,name:`Hawk`,internal:`Hawk`,size:`Small`},{key:`wasp`,name:`Wasp`,internal:`Wasp`,size:`Small`},{key:`falcon`,name:`Falcon`,internal:`Falcon`,size:`Medium`,gameOnly:!0,modFallback:`hawk`},{key:`pangolin`,name:`Pangolin`,internal:`KLA-6`,size:`Medium`},{key:`pangolinmk2`,name:`Pangolin MK2`,internal:`PangolinMK2`,size:`Medium`},{key:`phoenix`,name:`Phoenix`,internal:`Phoenix`,size:`Medium`},{key:`porter`,name:`Porter`,internal:`Porter`,size:`Medium`},{key:`vanger`,name:`Vanger`,internal:`Buran`,size:`Medium`},{key:`viking`,name:`Viking`,internal:`Viking`,size:`Medium`},{key:`valkiria`,name:`Valkyrie`,internal:`Valkiria`,size:`Medium`},{key:`mvalkyrie`,name:`Valkyrie M`,internal:`MValkyrie`,size:`Medium`},{key:`overseer`,name:`Overseer`,internal:`Overseer`,size:`Medium`},{key:`delver`,name:`Delver`,internal:`Delver`,size:`Medium`},{key:`gladiator`,name:`Gladiator`,internal:`Gladiator`,size:`Medium`},{key:`therion`,name:`Therion`,internal:`Therion`,size:`Medium`},{key:`scorpion`,name:`Scorpion`,internal:`Scorpion`,size:`Medium`},{key:`keeper`,name:`Keeper`,internal:`Keeper`,size:`Medium`},{key:`specter`,name:`Specter`,internal:`Specter`,size:`Medium`},{key:`barracuda`,name:`Barracuda`,internal:`Avant`,size:`Medium`},{key:`behemoth`,name:`Behemoth`,internal:`KLA8M`,size:`Large`},{key:`pilgrim`,name:`Pilgrim`,internal:`Pilgrim`,size:`Large`},{key:`goliath`,name:`Goliath`,internal:`Goliath`,size:`Large`},{key:`mantis`,name:`Mantis`,internal:`Mantis`,size:`Large`},{key:`cardinal`,name:`Cardinal`,internal:`Cardinal`,size:`Large`},{key:`leviathan`,name:`Leviathan`,internal:`KLA9`,size:`Large`},{key:`kraken`,name:`Kraken`,internal:`Kraken`,size:`Large`},{key:`grinder`,name:`Grinder`,internal:`Grinder`,size:`Large`},{key:`phasis`,name:`Prometheus`,internal:`Phasis`,size:`Large`},{key:`nemesis`,name:`Nemesis`,internal:`Nemesis`,size:`Large`},{key:`hyperion`,name:`Hyperion`,internal:`Hyperion`,size:`Large`},{key:`titan`,name:`Reaper`,internal:`Titan`,size:`Large`},{key:`discordia`,name:`Discordia`,internal:`Discordia`,size:`Large`},{key:`anglerb`,name:`Angler`,internal:`Angler-B`,size:`Medium`,alwaysHostile:!0},{key:`anglerm`,name:`Angler-Mother`,internal:`Mother`,size:`Large`,alwaysHostile:!0},{key:`automaton`,name:`Automaton`,internal:`Automaton`,size:`Medium`,alwaysHostile:!0},{key:`sarffscout`,name:`Zentarks Scout`,internal:`sarffScout`,size:`Small`},{key:`sarffgiant`,name:`Zentarks Hunter`,internal:`SarffGiant`,size:`Large`}],gn=e=>hn.find(t=>t.key===e.toLowerCase()),_n=e=>hn.find(t=>t.internal===e),vn=[`Harmless`,`Novice`,`Competent`,`Expert`,`Master`,`Dangerous`],T=(e,t,n)=>({key:e,group:t,hostile:n,get description(){return $(`reference.behaviour${e}`)}}),E=(e,t)=>({key:e,focus:t,get name(){return $(`reference.mission${e}`)},get description(){return $(`reference.mission${e}Help`)}}),yn=[T(`Ally`,`Friendly`,!1),T(`AllyAFK`,`Friendly`,!1),T(`LawForces`,`Friendly`,!1),T(`Trader`,`Neutral`,!1),T(`TraderNoWeapons`,`Neutral`,!1),T(`Miner`,`Neutral`,!1),T(`Explorer`,`Neutral`,!1),T(`Mercenary`,`Neutral`,!1),T(`Pirate`,`Hostile`,!0),T(`Enemy`,`Hostile`,!0),T(`Fighter`,`Hostile`,!0),T(`Automaton`,`Special`,!0),T(`Zentarks`,`Special`,!0),T(`Angler`,`Special`,!0)],bn=[`Enemy`,`Angler`],xn=(e,t,n)=>e.slice(0,t+1).flatMap(e=>e.ships).findLast(e=>e.pilot===n)?.behaviour;function Sn(e,t,n){return e.changeBehaviour?e.behaviour:e.ship===`player`?`Player`:xn(t,n,e.ship)??``}var Cn=[E(`PirateHunt`,`ship`),E(`FindGoods`,`goods`),E(`TransferGoods`,`goods`),E(`Mining`,`goods`),E(`Courier`,`target`),E(`Tourist`,`target`),E(`MoneyHelp`,`target`),E(`BugHunt`,`target`),E(`RescueMission`,`goods`),E(`CaravanHunt`,`ship`),E(`ContractMurder`,`ship`),E(`Intimidate`,`ship`)],wn=[`Low`,`Proven`,`Confidence`,`Ally`],Tn=[{key:`GreatEmpire`,name:`United Empire`},{key:`TradeFederation`,name:`Trade Federation`},{key:`StellarAlliance`,name:`Interstellar Alliance`},{key:`Independent`,name:`Independent`},{key:`PirateClan`,name:`Pirates`}],En=[{key:`Russian`,name:`United Empire`},{key:`USA`,name:`Trade Federation`},{key:`China`,name:`Interstellar Alliance`},{key:`Independent`,name:`Independent`},{key:`Pirates`,name:`Pirates`}],Dn=`Narcotics.Slaves.BasicMedicines.NanoMedicines.Grain.Fish.Tea.Meat.FruitAndVegetables.ComputerComponents.Robotics.PersonalWeapons.BattleWeapons.Leather.NaturalFabrics.SyntheticFabrics.MilitaryFabrics.Aluminium.Gold.Titanium.Copper.Iron.Platinum.Thorium.Uranium.Samarium.Hafnium.Thallium.Tantalum.SurvivalEquipment.Clothing.DomesticAppliances.Oil.HydrogenFuel.Water.LiquidOxygen.Diamonds.Alexandrite.Bouxite.Gallite.Coltan.Bromellite.Rutile.Uraninite.Monazite.Painite.Lepidolite.LithiumHydroxide.MethaneClathrate.EscapePod.AnglerEye.AnglerFang.AutomatonComponent.EscapePodRare.EscapePodPirate.EscapePodRarePirate.Zentarks Diamond.Drone.VoidOpal.Musgravite`.split(`.`),On=e=>{let t=e.replace(/([a-z])([A-Z])/g,`$1 $2`).replace(/([A-Z])([A-Z][a-z])/g,`$1 $2`);return t.charAt(0)+t.slice(1).toLowerCase()},kn=[`Anarchy`,`Low`,`Medium`,`High`,`Only`,`NoOne`,`Conflict`],An=[{get name(){return $(`reference.starMainSequence`)},colour:`#ffd27a`,items:[`M-RedDwarf`,`K-YellowOrange`,`G-WhiteYellow`,`F-White`,`A-BlueWhite`,`B-BlueWhite`,`O-BlueWhite`]},{get name(){return $(`reference.starGiants`)},colour:`#ff9a5a`,items:[`K-RedGiant`,`M-RedGiant`,`G-YellowGiant`,`F-YellowGiant`,`M-RedSupergiant`,`F-YellowSupergiant`,`A-BlueWhiteSupergiant`,`B-BlueWhiteSupergiant`,`O-BlueSupergiant`,`O-Hypergiant`]},{get name(){return $(`reference.starDwarfs`)},colour:`#dfe9ff`,items:[`DA-WhiteDwarf`,`DAV-WhiteDwarf`,`DAZ-WhiteDwarf`,`DB-WhiteDwarf`,`DBV-WhiteDwarf`,`DC-WhiteDwarf`,`DCV-WhiteDwarf`,`DO-WhiteDwarf`,`DOV-WhiteDwarf`,`DQ-WhiteDwarf`,`DX-WhiteDwarf`,`L-BrownDwarf`,`T-BrownDwarf`,`Y-BrownDwarf`]},{get name(){return $(`reference.starWolfRayet`)},colour:`#9ec8ff`,items:[`WolfRayetStar`,`WC-WolfRayetStar`,`WN-WolfRayetStar`,`WNC-WolfRayetStar`,`WO-WolfRayetStar`]},{get name(){return $(`reference.starYoung`)},colour:`#ffe7a8`,items:[`HerbigAeStar`,`HerbigBeStar`,`TauriG`,`TauriK`,`TauriF`,`TauriM`]},{get name(){return $(`reference.starPulsars`)},colour:`#b69cff`,items:[`BursterPulsar`,`RadioPulsar`,`MillisecondPulsar`,`SoftGammaRepeaterMagnetar`,`AnomalousX-rayMagnetar`]},{get name(){return $(`reference.starCarbon`)},colour:`#ff7a6a`,items:[`CarbonC-RStar`,`CarbonC-HdStar`,`CarbonC-HStar`,`CarbonC-JStar`,`CarbonC-NStar`,`CarbonC-SStar`,`CarbonM-SStar`,`S-Star`]},{get name(){return $(`reference.starBlackHole`)},colour:`#5f7f8e`,items:[`BlackHole`]}],jn=[`EarthLikePlanet`,`GasGiantClassI`,`GasGiantClassII`,`GasGiantClassIII`,`GasGiantClassIV`,`GasGiantClassV`,`HeliumRichGasGiant`,`GasGiantwithAmmoniaLife`,`GasGiantwithWaterLife`,`WaterWorld`,`IcePlanet`,`RockPlanet`,`HighMetalPlanet`,`MetalRichPlanet`,`AmmoniaPlanet`,`WaterGiant`],Mn=[{key:`OrbitalDark`,get name(){return $(`reference.stationOrbitalDark`)}},{key:`OrbitalWhite`,get name(){return $(`reference.stationOrbitalWhite`)}},{key:`NovaStation`,get name(){return $(`reference.stationNova`)}},{key:`FarmStation`,get name(){return $(`reference.stationFarm`)}},{key:`StationHighTech`,get name(){return $(`reference.stationHighTech`)}},{key:`AsteroidStation`,get name(){return $(`reference.stationAsteroid`)}}],Nn=[`CC-BY-4.0`,`CC-BY-SA-4.0`,`CC0`,`All rights reserved`],Pn=[`Combat`,`Trade`,`Exploration`,`Story`,`Short`,`Long`];function Fn(e){let t=e.requires.split(/[;,]/).map(e=>e.trim()).filter(Boolean).map(Number);return t.length?$(`startLib.after`,{list:t.map(e=>e===0?$(`startLib.mainStory`):sn(e)?.name??$(`startLib.questN`,{id:e})).join(`, `)}):``}var D=e=>crypto.randomUUID();function In(e=[]){let t=0;do t=1e6+Math.floor(Math.random()*3e9);while(e.includes(t)||t<=100044);return t}function Ln(e,t){let n=Date.now();return{id:D(`mod`),type:e,title:t,author:``,version:`1.0.0`,summary:``,licence:`CC-BY-4.0`,link:``,tags:[],createdAt:n,updatedAt:n,origin:`local`,favorite:!1}}function Rn(e={}){return{questName:``,description:``,questId:In(),lang:`en`,stationName:``,charName:``,charImage:`Tourist1`,startMode:`bar`,trigger:`warp`,chance:.25,pointX:0,pointY:0,radius:50,requiredQuestIds:[],minKarma:null,maxKarma:null,faction:`none`,factionMinRep:0,ownStationRequired:!1,reward:0,karmaReward:0,...e}}function zn(e={}){return{id:D(`line`),speaker:``,portrait:`Tourist1`,text:``,closeAfterSec:5,choices:[],...e}}function O(e={}){return{id:D(`step`),name:``,journal:``,checkpoint:!1,dialogue:[],ships:[],orders:[],mission:null,finishWhen:`ACTION_DIALOG_COMPLETE`,failWhen:[],reminder:[],reminderEverySec:999999999,...e}}function Bn(e={}){return{id:D(`ship`),pilot:``,model:`hawk`,level:`Competent`,behaviour:`Pirate`,autoLvl:!1,placement:`nearPlayer`,distance:200,x:0,y:0,tint:null,...e}}function Vn(e={}){return{id:D(`order`),ship:``,attack:!0,target:`player`,changeBehaviour:!1,behaviour:`Enemy`,destroy:!1,...e}}function Hn(e={}){return{type:`PirateHunt`,homeStation:`Thunder Station`,story:!0,level:`Low`,targetSystem:`Sirius`,targetStation:``,targetShipType:`Hawk`,targetShipName:``,targetShipHull:.85,goods:`Tea`,goodsCount:2,credits:25e3,reputation:1,...e}}function Un(e,t){let n=Rn({questName:e,...t.settings});return{meta:{...Ln(`quest`,e),type:`quest`},primaryLang:n.lang,versions:{[n.lang]:{settings:n,steps:t.steps,rumors:t.rumors}}}}function Wn(e){return{meta:{...Ln(`stars`,e),type:`stars`},stars:[],planets:[],stations:[]}}function Gn(e,t){let n=t??[],r=new Map(n.map(e=>[e.id,e])),i=n.length===e.length&&!e.some(e=>r.has(e.id));return(e,t)=>i?n[t]:r.get(e.id)}function Kn(e,t){for(let n of[`_extra`,`_layout`,`_kept`])t?.[n]?e[n]=t[n]:delete e[n]}function qn(e,t){let n=structuredClone(e);n.settings.lang=t.settings.lang,n.settings.questName=t.settings.questName??``,n.settings.description=t.settings.description??``,n.settings.charName=t.settings.charName??``,Kn(n,t),Kn(n.settings,t.settings);let r=(e,t)=>{let n=Gn(e,t);e.forEach((e,t)=>{let r=n(e,t);Kn(e,r),e.speaker=r?.speaker??``,e.text=r?.text??``;let i=Gn(e.choices,r?.choices);e.choices.forEach((e,t)=>{e.text=i(e,t)?.text??``})})},i=Gn(n.steps,t.steps);n.steps.forEach((e,t)=>{let n=i(e,t);Kn(e,n);let a=Gn(e.ships,n?.ships);e.ships.forEach((e,t)=>Kn(e,a(e,t)));let o=Gn(e.orders,n?.orders);e.orders.forEach((e,t)=>Kn(e,o(e,t))),e.mission&&Kn(e.mission,n?.mission??void 0),e.name=n?.name??``,e.journal=n?.journal??``,r(e.dialogue,n?.dialogue),r(e.reminder,n?.reminder),e.mission&&(e.mission.targetShipName=n?.mission?.targetShipName??``)});let a=Gn(n.rumors,t.rumors);return n.rumors.forEach((e,t)=>{let n=a(e,t);Kn(e,n),e.text=n?.text??``}),n}var Jn=(e,t)=>e.reduce((e,n)=>e+n.quests.filter(e=>e.versions[t]).length,0),Yn=(e,t)=>`${e}~${t}`;function Xn(e){let t=e.lastIndexOf(`~`);return t<0?{modId:e,partId:null}:{modId:e.slice(0,t),partId:e.slice(t+1)}}var Zn=new WeakMap;function Qn(e){let t=[];for(let n of e.quests){let r=n.versions[n.primaryLang]?.settings.questName;t.push({meta:{...e.meta,id:Yn(e.meta.id,n.id),type:`quest`,title:r||e.meta.title},primaryLang:n.primaryLang,versions:n.versions})}return e.stars&&t.push({meta:{...e.meta,id:Yn(e.meta.id,e.stars.id),type:`stars`,title:e.meta.title},stars:e.stars.stars,planets:e.stars.planets,stations:e.stars.stations,_extra:e.stars._extra,_layout:e.stars._layout,_kept:e.stars._kept}),t}function $n(e){let t=Zn.get(e);if(t)return t;let n=Qn(e);return Zn.set(e,n),n}var er=e=>e.quests.length+ +!!e.stars+e.textures.length;function tr(e){return er(e)===1?e.quests[0]?Yn(e.meta.id,e.quests[0].id):e.stars?Yn(e.meta.id,e.stars.id):null:null}var nr=(e,t)=>{let{type:n,...r}=e;return{...r,id:t}};function rr(e,t,n=[]){let r=e[0],i=t?.id??D(`mod`),a={meta:{...r?nr(r.meta,i):{},favorite:!1,...t,id:i},quests:[],stars:null,textures:n};for(let t of e){if(t.meta.type===`stars`){let e=t;a.stars?(a.stars.stars.push(...e.stars),a.stars.planets.push(...e.planets),a.stars.stations.push(...e.stations)):a.stars={id:`stars`,stars:e.stars,planets:e.planets,stations:e.stations,_extra:e._extra,_layout:e._layout,_kept:e._kept};continue}let e=t,n=e.versions[e.primaryLang],r=a.quests.find(e=>Object.values(e.versions)[0]?.settings.questId===n.settings.questId);if(r&&!r.versions[e.primaryLang]){r.versions[e.primaryLang]=qn(r.versions[r.primaryLang],n);continue}let i=String(n.settings.questId??D());a.quests.push({id:a.quests.some(e=>e.id===i)?D():i,primaryLang:e.primaryLang,versions:{...e.versions}})}return!t?.title&&r&&(a.meta.title=r.meta.title),a}var ir=/^txtr_[a-z0-9]+$/i;function ar(e){let t=e=>e.split(`/`).pop().replace(/\.(png|xml)$/i,``),n=new Map;for(let r of e){if(r.name.includes(`__MACOSX`)||!/\.(png|xml)$/i.test(r.name)||!ir.test(t(r.name)))continue;let e=n.get(t(r.name))??{};/\.png$/i.test(r.name)?e.png=r.bytes:e.xml=r.bytes,n.set(t(r.name),e)}let r=[],i=[];for(let[e,t]of n)t.png&&t.xml?r.push({id:e,name:e,png:`data:image/png;base64,${or(t.png)}`,xml:new TextDecoder().decode(t.xml)}):i.push(e);return{textures:r,unpaired:i}}function or(e){let t=``;for(let n=0;n<e.length;n+=32768)t+=String.fromCharCode(...e.subarray(n,n+32768));return btoa(t)}function sr(e){let t=atob(e.slice(e.indexOf(`,`)+1)),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}var cr={id:`community-humanity-at-war`,title:`Humanity At War`,author:`Novian Fenrir`,summary:`Commander Shawn calls for a warship to answer hostile signatures south of core space: rendezvous with the ASF fleet, hold SPOCS 253 against the Nusian invaders, and report back to Huashi Base. A work in progress.`,tags:[`Story`,`Combat`,`Preview`],popularity:1e3,files:[{name:`en/Quest0.json`,text:`{
  "settings": {
    "QuestName": "Humanity At War",
    "QuestDescription": "You might be a fighter by the looks of it. Sensors shows multiple signatures at the south of core space, They might be hostile, might have a base set up there and they might attack at any second, Join our forces and we may pay you in a huge sum. Humanity is counting on you. If you're not ready, come back later when you have a Fleet and piloting a capable warship.",
    "ID": 1232036082,
    "StationName": "Manson Orbital",
    "Lang": "en",
    "isRandomStationQuest": false,
    "isRandomSpaceQuest": false,
    "RandomQuestX": 0,
    "RandomQuestY": 0,
    "RandomQuestRadius": 50,
    "RandomSpaceQuestChance": 0.25,
    "RandomSpaceQuestTrigger": "warp",
    "CharName": "Commander Shawn",
    "CharImage": "Tourist4",
    "MinKarma": -101,
    "MaxKarma": 101,
    "Faction": "",
    "FactionMinRep": 0,
    "RequestedQuestIDCompleted": "",
    "OwnStationRequired": false,
    "Reward": 0,
    "KarmaReward": 0
  },
  "BarRumors": [],
  "questParts": [
    {
      "name": "Step 1",
      "TODO": "Combat test",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Commander Shawn",
          "showTimeSec": 99999999,
          "text": "I'm glad that you accepted, I'm Commander Shawn of the ASF, aka Alliance Security Force. Secret but powerful faction in human space. We monitor the entire Core Space for incoming Galaxy wide threats, and we might have one. Now that you're here, you now have an objective. You're ready?",
          "character": "Tourist4",
          "options": "1=Yes sir.;"
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Step 2",
      "TODO": "Combat test",
      "questID": 1,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Commander Shawn",
          "showTimeSec": 99999999,
          "text": "Glad to hear it, now just to be sure, we need to test your skills. We just sent some Drone-piloted ships, a Cruiser-sized warship and 2 Vikings. it will attack you once detected. Destroy it and wait for results, good luck.",
          "character": "Tourist4",
          "options": ""
        }
      ],
      "completeAction": "NO_ENEMY",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [
        {
          "Name": "Drone Cruiser Alpha",
          "shipLevel": "Competent",
          "shipModel": "cardinal",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Drone Cruiser Escort 1",
          "shipLevel": "Competent",
          "shipModel": "viking",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Drone Cruiser Escort 2",
          "shipLevel": "Competent",
          "shipModel": "viking",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        }
      ],
      "shipControl": [
        {
          "ShipName": "Drone Cruiser Alpha",
          "SetTarget": "player",
          "shipBehavior": "Enemy",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Drone Cruiser Escort 2",
          "SetTarget": "player",
          "shipBehavior": "Enemy",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Drone Cruiser Escort 1",
          "SetTarget": "player",
          "shipBehavior": "Enemy",
          "Destroy": false,
          "Attack": true
        }
      ],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "",
      "TODO": "Head back to Manson Orbital",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Commander Shawn",
          "showTimeSec": 99999999,
          "text": "Impressive, captain. You prove your worth. Usually most of the ASF Pilots or Captains fail this but you nailed it. I'm surprised.",
          "character": "Tourist4",
          "options": ""
        },
        {
          "Name": "Commander Shawn",
          "showTimeSec": 99999999,
          "text": "Until then, I will assign you to ASF Task Force Iota. But first, head back to Manson Orbital and meet me in the Conference Room. ",
          "character": "Tourist4",
          "options": ""
        }
      ],
      "completeAction": "ACTION_CLICK_STATION_Manson Orbital",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "",
      "TODO": "Head to SPOCS 253 to rendezvous with the assigned ASF Task Forces",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Story",
          "showTimeSec": 99999999,
          "text": "You arrive at Manson Orbital's Hangar Bay. You decided to buy a drink before heading to the Conference Room to meet with Commander Shawn and the assigned Task Force members...",
          "character": "None",
          "options": ""
        },
        {
          "Name": "Commander Shawn",
          "showTimeSec": 99999999,
          "text": "Captain, glad you're here. We've just started to talk about the plans. Oh and meet Admiral Reyes of the ASF Task Force Iota.",
          "character": "Tourist4",
          "options": ""
        },
        {
          "Name": "Admiral Reyes",
          "showTimeSec": 99999999,
          "text": "It's a pleasure meeting with you captain. I've heard about your fighting skills against the Pirates, now heard about the mention of you from the test, I'm impressed.",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "Admiral Reyes",
          "showTimeSec": 99999999,
          "text": "Now, to the plan. Long-range sensors detected a Fleet in SPOCS 253. Consisting of 3 Discordias and 4 Hyperions. Might outnumber us but don't worry, there are 2 Task Forces that will accompany us. Commander, further details of the plan.",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "Commander Shawn",
          "showTimeSec": 99999999,
          "text": "Understood, Admiral. There are 2 Task Forces that will accompany Iota in SPOCS 253, Kappa from Altair and Alpha from Alpha Centauri, alongside some local security forces from the Mining Station, Huashi Base. Remember, this will be a huge battle if things go south, so expect casualties.",
          "character": "Tourist4",
          "options": ""
        },
        {
          "Name": "Commander Shawn",
          "showTimeSec": 99999999,
          "text": "Expect hostile reinforcements during the battle, we detected some readings from one of the neighbouring systems and we don't know where but expect the unexpected. When the hostiles are destroyed, head to Huashi Base for resupply and refuel, and await further instructions. Is everybody clear?",
          "character": "Tourist4",
          "options": ""
        },
        {
          "Name": "Crews, Captains and Officers",
          "showTimeSec": 99999999,
          "text": "SIR YES SIR, FOR PEACE, SECURITY AND JUSTICE!",
          "character": "None",
          "options": ""
        }
      ],
      "completeAction": "ACTION_WARP_END_SYSTEM_SPOCS 253",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "",
      "TODO": "Destroy Hostile Forces",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Admiral Reyes",
          "showTimeSec": 99999999,
          "text": "All ships is now present in the system, unknown ships is in the area. All ships stay alert. Do not fire unless they fire at us. Hail them.",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "Admiral Reyes",
          "showTimeSec": 99999999,
          "text": "Attention Unknown vessels, this is Admiral Reyes of the Alliance Security Force. Identify yourself and state your purpose in the area.",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "Unknown",
          "showTimeSec": 99999999,
          "text": "Revenge.... Destroy Traitors.... Destroy Valkryian Imperial scum.... Destroy its allies.... Avenge the Sovereign....",
          "character": "Pirate6",
          "options": ""
        },
        {
          "Name": "Unknown",
          "showTimeSec": 99999999,
          "text": "Avenge the Sovereign and Emperor.... Long Live the Nusian Empire....",
          "character": "Pirate5",
          "options": ""
        },
        {
          "Name": "Admiral Reyes Ship's Assistant",
          "showTimeSec": 99999999,
          "text": "Detecting weapon's charge from Unidentified  vessels, Combat imminent.",
          "character": "Assistant",
          "options": ""
        },
        {
          "Name": "Admiral Reyes",
          "showTimeSec": 99999999,
          "text": "All ships prepare for combat! Engage on target! Destroy them!",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "Assistant",
          "showTimeSec": 5,
          "text": "Warning, Unknown Carrier 3 is targeting our ship. 2 ASF Battleships is currently engaging the Carrier. But Evasive maneuvers is recommended.",
          "character": "Assistant",
          "options": ""
        }
      ],
      "completeAction": "ACTION_SHIP_DESTROYED_Unknown Carrier 3",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [
        {
          "Name": "Unknown Battleship 1",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Pirate",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Unknown Battleship 2",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Pirate",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Unknown Battleship 3",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Pirate",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Unknown Battleship 4",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Pirate",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Unknown Carrier 1",
          "shipLevel": "Dangerous",
          "shipModel": "discordia",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Pirate",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Unknown Carrier 2",
          "shipLevel": "Dangerous",
          "shipModel": "discordia",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Pirate",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Unknown Carrier 3",
          "shipLevel": "Dangerous",
          "shipModel": "discordia",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Pirate",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Carrier Iota Judgment",
          "shipLevel": "Dangerous",
          "shipModel": "discordia",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Carrier Iota Liberty",
          "shipLevel": "Dangerous",
          "shipModel": "discordia",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Battleship Iota Victory",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Battleship Iota Justice",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Cruiser Kappa Constitution",
          "shipLevel": "Dangerous",
          "shipModel": "kraken",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Cruiser Kappa York",
          "shipLevel": "Dangerous",
          "shipModel": "kraken",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Cruiser Alpha Cambridge",
          "shipLevel": "Dangerous",
          "shipModel": "mantis",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Cruiser Alpha London",
          "shipLevel": "Dangerous",
          "shipModel": "mantis",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Security Battleship 1",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Security Battleship 2",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        }
      ],
      "shipControl": [
        {
          "ShipName": "Unknown Battleship 1",
          "SetTarget": "ASF Battleship Iota Victory",
          "shipBehavior": "Pirate",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Unknown Battleship 2",
          "SetTarget": "ASF Battleship Iota Justice",
          "shipBehavior": "Pirate",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Unknown Battleship 3",
          "SetTarget": "ASF Cruiser Kappa Constitution",
          "shipBehavior": "Pirate",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Unknown Battleship 3",
          "SetTarget": "ASF Cruiser Kappa York",
          "shipBehavior": "Pirate",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Unknown Battleship 4",
          "SetTarget": "ASF Cruiser Alpha Cambridge",
          "shipBehavior": "Pirate",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Unknown Battleship 4",
          "SetTarget": "ASF Cruiser Alpha London",
          "shipBehavior": "Pirate",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Unknown Carrier 1",
          "SetTarget": "ASF Carrier Iota Judgment",
          "shipBehavior": "Pirate",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Unknown Carrier 2",
          "SetTarget": "ASF Carrier Iota Liberty",
          "shipBehavior": "Pirate",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Unknown Carrier 3",
          "SetTarget": "player",
          "shipBehavior": "Pirate",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "ASF Security Battleship 2",
          "SetTarget": "Unknown Carrier 3",
          "shipBehavior": "Ally",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "ASF Security Battleship 1",
          "SetTarget": "Unknown Carrier 3",
          "shipBehavior": "Ally",
          "Destroy": false,
          "Attack": true
        }
      ],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "",
      "TODO": "Destroy Hostile Forces",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Unknown",
          "showTimeSec": 99999999,
          "text": "Nusian Emergency-Response Team Deployed. Hostile Forces detected. Combat imminent. Charging weapons.",
          "character": "Automaton",
          "options": ""
        },
        {
          "Name": "Admiral Reyes",
          "showTimeSec": 5,
          "text": "We got hostile reinforcements! What the hell are those things?!",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "ASF Captain",
          "showTimeSec": 99999999,
          "text": "Damn it! They took down our engines. All crews, abandon shi-! *sounds of explosions before going static*",
          "character": "Tourist3",
          "options": ""
        },
        {
          "Name": "Admiral Reyes",
          "showTimeSec": 5,
          "text": "All ships! Keep focusing fire on other ships BUT those things! Captain, you and the 2 Security Battleships will take care of those 2. Good luck, captain.",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "ASF Security Droid",
          "showTimeSec": 99999999,
          "text": "Hostile vessel detected. Designation: Nusian Automaton. Prepare for combat.",
          "character": "Police Forces",
          "options": ""
        },
        {
          "Name": "Nusian Automaton",
          "showTimeSec": 99999999,
          "text": "Destroy the attackers. Nusia-Kappa-09 and Nusia-Kappa-10 is engaging. Cleansing protocol engaged.",
          "character": "Automaton",
          "options": ""
        }
      ],
      "completeAction": "NO_ENEMY",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [
        {
          "Name": "Nusia-Kappa-09",
          "shipLevel": "Dangerous",
          "shipModel": "automaton",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Nusia-Kappa-10",
          "shipLevel": "Dangerous",
          "shipModel": "automaton",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        }
      ],
      "shipControl": [
        {
          "ShipName": "Nusia-Kappa-09",
          "SetTarget": "ASF Security Battleship 1",
          "shipBehavior": "Enemy",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Nusia-Kappa-10",
          "SetTarget": "ASF Security Battleship 2",
          "shipBehavior": "Enemy",
          "Destroy": false,
          "Attack": true
        }
      ],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "",
      "TODO": "Head to Huashi Base",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Admiral Reyes",
          "showTimeSec": 5,
          "text": "Damn.. that's a close one, glad we made it out in one piece, all ships head to Huashi Base and await further instructions. ",
          "character": "Tourist1",
          "options": ""
        }
      ],
      "completeAction": "ACTION_CLICK_STATION_Huashi Base",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "",
      "TODO": "Meet up with Admiral Reyes",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Admiral Reyes",
          "showTimeSec": 99999999,
          "text": "I owe you one Captain. For destroying the 2 Automatons or.. whatever that is. We rest for a while. Meet me in my ship in 4 hours. See ya later.",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "Story",
          "showTimeSec": 99999999,
          "text": "4 hours has passed, and some of the ASF Captains started to sleep in their ships. You head to Admiral Reyes ship as instructed...",
          "character": "None",
          "options": ""
        },
        {
          "Name": "Admiral Reyes",
          "showTimeSec": 99999999,
          "text": "Captain, glad you're here. We just received another objective from ASF Command, you're ready for this?",
          "character": "Tourist1",
          "options": "2=Yes, Admiral.;"
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "",
      "TODO": "Rendezvous with the ASF \\"New Aurora\\" Fleet in LP 157-32 System",
      "questID": 2,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Admiral Reyes",
          "showTimeSec": 99999999,
          "text": "Alright, this is a difficult one. Very difficult. Huashi's sensors detected a much stronger attack force in LP 157-32. Task Force Iota will head there and rendezvous with the ASF Fleet \\"New Aurora\\". Task Force Alpha and Kappa will stay here to defend Huashi Base from future small attacks.",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "Admiral Reyes",
          "showTimeSec": 99999999,
          "text": "Mind you, Captain, that attack force is far stronger than those previous Fleet we encountered earlier. So even if we outnumber them, who knows they'll outgun us.",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "Admiral Reyes",
          "showTimeSec": 99999999,
          "text": "Based on the data we gathered from the local security forces for that fleet's affiliation, they're called Nusian Empire, and part of \\"Houses of Nas\\" Alliance.",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "Admiral Reyes",
          "showTimeSec": 99999999,
          "text": "They're one of the most powerful Empires in their galaxy, had multiple success operations, so don't even expect that we can defeat them easily.",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "Admiral Reyes",
          "showTimeSec": 99999999,
          "text": "They might have its friends with them, so this might be a brutal battle. Rendezvous with the ASF \\"New Aurora\\" Fleet in LP 157-32 system Captain.",
          "character": "Tourist1",
          "options": ""
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "",
      "TODO": "Rendezvous with the ASF \\"New Aurora\\" Fleet in LP 157-32 System",
      "questID": 0,
      "isCheckPoint": true,
      "dialogText": [
        {
          "Name": "Story Early Warning System",
          "showTimeSec": 99999999,
          "text": "Warning! Entering LP 157-32 will result in a brutal battle, quick death, constant lag and may involve with a overpowered unknown ship you've never encountered before (or if you encountered it). ",
          "character": "None",
          "options": ""
        },
        {
          "Name": "Story Early Warning System",
          "showTimeSec": 99999999,
          "text": "You've now reached a save point before the worse, if you are really sure your ship and the fleet is well equipped, proceed to the system. If not, upgrade and AVOID the target system until you're fully ready.",
          "character": "None",
          "options": ""
        },
        {
          "Name": "Story Early Warning System",
          "showTimeSec": 99999999,
          "text": "If died, all the Early Warning System's dialogue will not appear, but you will remember.",
          "character": "None",
          "options": ""
        },
        {
          "Name": "Story Early Warning System",
          "showTimeSec": 5,
          "text": "You have been warned.",
          "character": "None",
          "options": ""
        }
      ],
      "completeAction": "ACTION_WARP_END_SYSTEM_LP 157-32",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "",
      "TODO": "Destroy the Attackers",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Admiral Reyes",
          "showTimeSec": 99999999,
          "text": "All ships is now present in the system. Grand Admiral, awaiting your orders.",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "ASF Grand Admiral \\"Aurora\\"",
          "showTimeSec": 99999999,
          "text": "All ships stay alert, they should be here by now. Charge up your weapons.",
          "character": "Tourist2",
          "options": ""
        },
        {
          "Name": "ASF Captain",
          "showTimeSec": 99999999,
          "text": "Grand Admiral! They're already here, we're surrounded!",
          "character": "Tourist3",
          "options": ""
        },
        {
          "Name": "Nusian Automaton",
          "showTimeSec": 99999999,
          "text": "Allied Forces now surrounded the hostiles. Hailing the Hostile vessel...",
          "character": "Automaton",
          "options": ""
        },
        {
          "Name": "Nusian Automaton",
          "showTimeSec": 99999999,
          "text": "Attention hostile vessels, you are entering the domain of the Houses of Nas and are interfering with the Houses of Nas operations, turn back or be destroyed.",
          "character": "Automaton",
          "options": ""
        },
        {
          "Name": "ASF Grand Admiral \\"Aurora\\"",
          "showTimeSec": 99999999,
          "text": "Grand Admiral \\"Aurora\\" on board of \\"New Aurora\\", you have no right of being in our space, this system is rightfully declared as ASF territory.",
          "character": "Tourist2",
          "options": ""
        },
        {
          "Name": "Alvaro Automaton",
          "showTimeSec": 99999999,
          "text": "Foolish human, you have no right of declaring this system as your territory. You have no authority over us.",
          "character": "Automaton",
          "options": ""
        },
        {
          "Name": "Sirius Automaton",
          "showTimeSec": 99999999,
          "text": "Return where you came from, monkey. Or we will disintegrate you.",
          "character": "Automaton",
          "options": ""
        },
        {
          "Name": "Nusian Automaton",
          "showTimeSec": 99999999,
          "text": "Silence. This is your final warning, human. Return where you came from, inform your superiors that we do not seek war against humanity, we hunt and exterminate the culprits and its allies who have made our Sovereign, our Emperor, obsessed of hunting those very people.",
          "character": "Automaton",
          "options": ""
        },
        {
          "Name": "Admiral Reyes",
          "showTimeSec": 99999999,
          "text": "Then answer this, who the hell are those people back on SPOCS 253? They opened fire on us first and they muttered some revenge. Who the hell are they? They killed my damn men. ANSWER ME! WHO ARE THEY?!",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "ASF Grand Admiral \\"Aurora\\"",
          "showTimeSec": 99999999,
          "text": "Admiral Reyes, do not be so damn aggressive towards those automatons.",
          "character": "Tourist2",
          "options": ""
        },
        {
          "Name": "Nusian Automaton",
          "showTimeSec": 99999999,
          "text": "Twisted Nusian people who have now beyond insanity and attacked anyone who stands in their way, they are too obsessed of violence. They do it for the Sovereign, the Emperor.",
          "character": "Automaton",
          "options": ""
        },
        {
          "Name": "Nusian Automaton",
          "showTimeSec": 99999999,
          "text": "There are some reports of failed experimental subjects within those Nusian ships, working under the twisted Nusians. 15% of the Nusian Empire is twisted, insane and beyond. That's the reason of why we are created to replace them, exterminate them if necessary, while also focusing our main objective.",
          "character": "Automaton",
          "options": ""
        },
        {
          "Name": "ASF Grand Admiral \\"Aurora\\"",
          "showTimeSec": 99999999,
          "text": "That doesn't convince us to return, our purpose is to monitor for galaxy-wide threats and exterminate them. We protect, we give Justice, we manage Harmony.",
          "character": "Tourist2",
          "options": ""
        },
        {
          "Name": "Nusian Automaton",
          "showTimeSec": 99999999,
          "text": "Your loss, human. We will give you a respectable warrior's death. All Automatons, engage.",
          "character": "Automaton",
          "options": ""
        },
        {
          "Name": "Sirius Automaton",
          "showTimeSec": 99999999,
          "text": "Sirius Automatons, weapons charged and ready, kill those monkeys.",
          "character": "Automaton",
          "options": ""
        },
        {
          "Name": "Alvaro Automaton",
          "showTimeSec": 99999999,
          "text": "Alvaro Automatons, engage. Shove those humans back where they came from.",
          "character": "Automaton",
          "options": ""
        }
      ],
      "completeAction": "NO_ENEMY",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [
        {
          "Name": "Nusian Automaton \\"Ki'Rek\\"",
          "shipLevel": "Dangerous",
          "shipModel": "automaton",
          "distanceFromPlayer": 0,
          "spawnX": -840,
          "spawnY": -550,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Nusian Automaton \\"Je'ruk\\"",
          "shipLevel": "Dangerous",
          "shipModel": "automaton",
          "distanceFromPlayer": 0,
          "spawnX": -510,
          "spawnY": -780,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Nusian Automaton \\"Pe'Nar\\"",
          "shipLevel": "Dangerous",
          "shipModel": "automaton",
          "distanceFromPlayer": 0,
          "spawnX": -590,
          "spawnY": -570,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Alvaro Automaton \\"Asmartuk\\"",
          "shipLevel": "Dangerous",
          "shipModel": "automaton",
          "distanceFromPlayer": 0,
          "spawnX": 620,
          "spawnY": -550,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Alvaro Automaton \\"Saryak\\"",
          "shipLevel": "Dangerous",
          "shipModel": "automaton",
          "distanceFromPlayer": 0,
          "spawnX": 850,
          "spawnY": -530,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Alvaro Automaton \\"Teruko\\"",
          "shipLevel": "Dangerous",
          "shipModel": "automaton",
          "distanceFromPlayer": 0,
          "spawnX": 670,
          "spawnY": -780,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Sirius Automaton \\"Revenant\\"",
          "shipLevel": "Dangerous",
          "shipModel": "automaton",
          "distanceFromPlayer": 0,
          "spawnX": 10,
          "spawnY": 620,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Sirius Automaton \\"Retribution\\"",
          "shipLevel": "Dangerous",
          "shipModel": "automaton",
          "distanceFromPlayer": 0,
          "spawnX": 130,
          "spawnY": 780,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Sirius Automaton \\"Avenger\\"",
          "shipLevel": "Dangerous",
          "shipModel": "automaton",
          "distanceFromPlayer": 0,
          "spawnX": -150,
          "spawnY": 820,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Lance Battleship \\"New Aurora\\"",
          "shipLevel": "Dangerous",
          "shipModel": "titan",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Lance Battleship \\"Nur\\"",
          "shipLevel": "Dangerous",
          "shipModel": "titan",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Lance Battleship \\"Favonius\\"",
          "shipLevel": "Dangerous",
          "shipModel": "titan",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Carrier \\"Aoi\\"",
          "shipLevel": "Dangerous",
          "shipModel": "discordia",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Carrier \\"Fallos\\"",
          "shipLevel": "Dangerous",
          "shipModel": "discordia",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Battleship Iota \\"Victory\\"",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Battleship Iota \\"Justice\\"",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Carrier Iota \\"Liberty\\"",
          "shipLevel": "Dangerous",
          "shipModel": "discordia",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Carrier Iota \\"Judgment\\"",
          "shipLevel": "Dangerous",
          "shipModel": "discordia",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        }
      ],
      "shipControl": [
        {
          "ShipName": "Nusian Automaton \\"Je'ruk\\"",
          "SetTarget": "ASF Lance Battleship \\"New Aurora\\"",
          "shipBehavior": "Enemy",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Nusian Automaton \\"Pe'Nar\\"",
          "SetTarget": "ASF Lance Battleship \\"Nur\\"",
          "shipBehavior": "Enemy",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Nusian Automaton \\"Ki'Rek\\"",
          "SetTarget": "ASF Lance Battleship \\"Favonius\\"",
          "shipBehavior": "Enemy",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Alvaro Automaton \\"Asmartuk\\"",
          "SetTarget": "ASF Carrier \\"Aoi\\"",
          "shipBehavior": "Enemy",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Alvaro Automaton \\"Saryak\\"",
          "SetTarget": "ASF Carrier \\"Fallos\\"",
          "shipBehavior": "Enemy",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Alvaro Automaton \\"Teruko\\"",
          "SetTarget": "ASF Battleship Iota \\"Victory\\"",
          "shipBehavior": "Enemy",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Sirius Automaton \\"Revenant\\"",
          "SetTarget": "ASF Battleship Iota \\"Justice\\"",
          "shipBehavior": "Enemy",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Sirius Automaton \\"Retribution\\"",
          "SetTarget": "ASF Carrier Iota \\"Liberty\\"",
          "shipBehavior": "Enemy",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Sirius Automaton \\"Avenger\\"",
          "SetTarget": "ASF Carrier Iota \\"Judgment\\"",
          "shipBehavior": "Enemy",
          "Destroy": false,
          "Attack": true
        }
      ],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "",
      "TODO": "Destroy the Elite Drones",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Nusian Elite Drone \\"Zar'nuk\\"",
          "showTimeSec": 99999999,
          "text": "Nusia-Elite Automaton Reinforcements Deployed. Hostile Forces detected. Combat imminent. Nusia \\"Zu'kor\\" and Nusia \\"Zar'nuk\\" is engaging the enemy.",
          "character": "Automaton",
          "options": ""
        },
        {
          "Name": "Admiral Reyes",
          "showTimeSec": 5,
          "text": "Captain! We have to destroy those things immediately!",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "ASF Grand Admiral \\"Aurora\\"",
          "showTimeSec": 5,
          "text": "All units focus fire on those 2 drones now before we all get killed!",
          "character": "Tourist2",
          "options": ""
        }
      ],
      "completeAction": "NO_ENEMY",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [
        {
          "Name": "Nusian Elite Drone \\"Zu'kor\\"",
          "shipLevel": "Dangerous",
          "shipModel": "sarffgiant",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Nusian Elite Drone \\"Zar'nuk\\"",
          "shipLevel": "Dangerous",
          "shipModel": "sarffgiant",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        }
      ],
      "shipControl": [
        {
          "ShipName": "Nusian Elite Drone \\"Zar'nuk\\"",
          "SetTarget": "ASF Lance Battleship \\"Favonius\\"",
          "shipBehavior": "Enemy",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Nusian Elite Drone \\"Zar'nuk\\"",
          "SetTarget": "ASF Lance Battleship \\"Nur\\"",
          "shipBehavior": "Enemy",
          "Destroy": false,
          "Attack": true
        }
      ],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "",
      "TODO": "Return to SPOCS 253 to assist the defenders",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "ASF Grand Admiral \\"Aurora\\"",
          "showTimeSec": 99999999,
          "text": "All hostile ships is destroyed. I'm impressed by your skills, captain. Hiring you is a good idea.",
          "character": "Tourist2",
          "options": ""
        },
        {
          "Name": "Admiral Reyes",
          "showTimeSec": 5,
          "text": "He always is, Grand Admiral. Now that the Attack Force now destroyed, we can try to salvage some things and see what we can find- ",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "ASF Captain",
          "showTimeSec": 99999999,
          "text": "Grand Admiral! We're receiving distress signals from SPOCS 253, it's the ASF Task Force Kappa and Alpha!",
          "character": "Tourist3",
          "options": ""
        },
        {
          "Name": "ASF Distressed Captain",
          "showTimeSec": 99999999,
          "text": "This is ASF Cruiser York, we are currently under heavy fire from an another Nusian Attack Force in SPOCS 253, We need assistance!",
          "character": "None",
          "options": ""
        },
        {
          "Name": "ASF Grand Admiral \\"Aurora\\"",
          "showTimeSec": 99999999,
          "text": "Captain, this is your duty to head there and assist the defenders, we are dispatching 3 Carriers as your escort. Good luck.",
          "character": "Tourist2",
          "options": ""
        }
      ],
      "completeAction": "ACTION_WARP_END_SYSTEM_SPOCS 253",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [
        {
          "Name": "ASF Carrier \\"Missouri\\"",
          "shipLevel": "Dangerous",
          "shipModel": "discordia",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Mercenary",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Carrier \\"Norfolk\\"",
          "shipLevel": "Dangerous",
          "shipModel": "discordia",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Mercenary",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Carrier \\"Glasgow\\"",
          "shipLevel": "Dangerous",
          "shipModel": "discordia",
          "distanceFromPlayer": 200,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Mercenary",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        }
      ],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "",
      "TODO": "Destroy the Nusian Invaders",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Commander Shawn",
          "showTimeSec": 99999999,
          "text": "Captain, glad to see you here. We just picked up an another Nusian Fleet here. It's best for you to join our fleet so you don't die.",
          "character": "Tourist4",
          "options": ""
        },
        {
          "Name": "ASF Captain",
          "showTimeSec": 99999999,
          "text": "Commander, I'm picking up a new Fleet coming from South. It's not Nusian or ASF. I don't know who that is.",
          "character": "Tourist3",
          "options": ""
        },
        {
          "Name": "Commander Shawn",
          "showTimeSec": 99999999,
          "text": "Attention Unidentified Fleet, you are entering the battlefield area between the ASF and Nusians. Identify yourself or we will mark you as hostile.",
          "character": "Tourist4",
          "options": ""
        },
        {
          "Name": "Unknown",
          "showTimeSec": 99999999,
          "text": "Stand down. We mean you no harm. We've come here to assist you against the Nusians. Empress Juno is willing to meet you once it is over.",
          "character": "Pirate3",
          "options": ""
        },
        {
          "Name": "High Sentinel Rika",
          "showTimeSec": 99999999,
          "text": "High Sentinel Rika, Acting Commanding Officer of the Valkryian Navy Fleet \\"Pride of Valkryia\\". We'll assist you in battle.",
          "character": "Pirate3",
          "options": ""
        },
        {
          "Name": "Commander Shawn",
          "showTimeSec": 5,
          "text": "Affirmative. All ships, prepare for combat. Destroy those Nusian ships.",
          "character": "Tourist4",
          "options": ""
        }
      ],
      "completeAction": "NO_ENEMY",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [
        {
          "Name": "Nusian Battleship \\"Mak'war\\"",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 0,
          "spawnX": 620,
          "spawnY": 90,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Nusian Battleship \\"Mu'Sah\\"",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 0,
          "spawnX": 650,
          "spawnY": -120,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Nusian Battleship \\"Her'ah\\"",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 0,
          "spawnX": 610,
          "spawnY": 0,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Nusian Battleship \\"Heraan\\"",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 0,
          "spawnX": 720,
          "spawnY": 10,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Nusian Battleship \\"Moash\\"",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 0,
          "spawnX": 690,
          "spawnY": 110,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Nusian Battleship \\"Vella\\"",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 0,
          "spawnX": 680,
          "spawnY": -110,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Nusian Battleship \\"Tekel\\"",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 0,
          "spawnX": 860,
          "spawnY": 50,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Nusian Battleship \\"Dani\\"",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 0,
          "spawnX": 860,
          "spawnY": -110,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Security Battleship 1",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 0,
          "spawnX": -390,
          "spawnY": 530,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Security Battleship 2",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 0,
          "spawnX": -490,
          "spawnY": 340,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Cruiser Kappa Constitution",
          "shipLevel": "Dangerous",
          "shipModel": "kraken",
          "distanceFromPlayer": 0,
          "spawnX": -480,
          "spawnY": 550,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Cruiser Kappa York",
          "shipLevel": "Dangerous",
          "shipModel": "kraken",
          "distanceFromPlayer": 0,
          "spawnX": -590,
          "spawnY": 430,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Cruiser Alpha Cambridge",
          "shipLevel": "Dangerous",
          "shipModel": "mantis",
          "distanceFromPlayer": 0,
          "spawnX": -260,
          "spawnY": 690,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "ASF Cruiser Alpha London",
          "shipLevel": "Dangerous",
          "shipModel": "mantis",
          "distanceFromPlayer": 0,
          "spawnX": -390,
          "spawnY": 620,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "VNS Carrier \\"Light\\"",
          "shipLevel": "Dangerous",
          "shipModel": "discordia",
          "distanceFromPlayer": 0,
          "spawnX": -90,
          "spawnY": -850,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "VNS Carrier \\"Harmony\\"",
          "shipLevel": "Dangerous",
          "shipModel": "discordia",
          "distanceFromPlayer": 0,
          "spawnX": 110,
          "spawnY": -840,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "VNS Battleship \\"Unity\\"",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 0,
          "spawnX": 10,
          "spawnY": -710,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "VNS Battleship \\"Valkryia\\"",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 0,
          "spawnX": -120,
          "spawnY": -680,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "VNS Battleship \\"Pride\\"",
          "shipLevel": "Dangerous",
          "shipModel": "hyperion",
          "distanceFromPlayer": 0,
          "spawnX": 120,
          "spawnY": -670,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Nusian Carrier \\"Car'syik\\"",
          "shipLevel": "Dangerous",
          "shipModel": "discordia",
          "distanceFromPlayer": 0,
          "spawnX": 740,
          "spawnY": 230,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Nusian Carrier \\"Car'iosk\\" ",
          "shipLevel": "Dangerous",
          "shipModel": "discordia",
          "distanceFromPlayer": 0,
          "spawnX": 850,
          "spawnY": 120,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Nusian Carrier \\"Car'om\\"",
          "shipLevel": "Dangerous",
          "shipModel": "discordia",
          "distanceFromPlayer": 0,
          "spawnX": 850,
          "spawnY": -150,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Nusian Carrier \\"Car'nik\\"",
          "shipLevel": "Dangerous",
          "shipModel": "discordia",
          "distanceFromPlayer": 0,
          "spawnX": 870,
          "spawnY": -320,
          "shipBehavior": "Enemy",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Commander Shawn",
          "shipLevel": "Dangerous",
          "shipModel": "titan",
          "distanceFromPlayer": 0,
          "spawnX": -650,
          "spawnY": 730,
          "shipBehavior": "Ally",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        }
      ],
      "shipControl": [
        {
          "ShipName": "Nusian Battleship \\"Mak'war\\"",
          "SetTarget": "VNS Battleship \\"Unity\\"",
          "shipBehavior": "Enemy",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Nusian Battleship \\"Mu'Sah\\"",
          "SetTarget": "ASF Security Battleship 1",
          "shipBehavior": "Enemy",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Nusian Battleship \\"Her'ah\\"",
          "SetTarget": "ASF Security Battleship 2",
          "shipBehavior": "Enemy",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "ASF Cruiser Kappa Constitution",
          "SetTarget": "Nusian Battleship \\"Heraan\\"",
          "shipBehavior": "Ally",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "ASF Cruiser Kappa York",
          "SetTarget": "Nusian Battleship \\"Heraan\\"",
          "shipBehavior": "Ally",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "ASF Cruiser Alpha Cambridge",
          "SetTarget": "Nusian Battleship \\"Moash\\"",
          "shipBehavior": "Ally",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "ASF Cruiser Alpha London",
          "SetTarget": "Nusian Battleship \\"Moash\\"",
          "shipBehavior": "Ally",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Commander Shawn",
          "SetTarget": "Nusian Battleship \\"Vella\\"",
          "shipBehavior": "Ally",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "VNS Battleship \\"Valkryia\\"",
          "SetTarget": "Nusian Battleship \\"Tekel\\"",
          "shipBehavior": "Ally",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "VNS Battleship \\"Pride\\"",
          "SetTarget": "Nusian Battleship \\"Dani\\"",
          "shipBehavior": "Ally",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "VNS Carrier \\"Light\\"",
          "SetTarget": "Nusian Carrier \\"Car'syik\\"",
          "shipBehavior": "Ally",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "VNS Carrier \\"Harmony\\"",
          "SetTarget": "Nusian Carrier \\"Car'iosk\\" ",
          "shipBehavior": "Ally",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "ASF Carrier \\"Missouri\\"",
          "SetTarget": "Nusian Carrier \\"Car'om\\"",
          "shipBehavior": "Mercenary",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "ASF Carrier \\"Norfolk\\"",
          "SetTarget": "Nusian Carrier \\"Car'nik\\"",
          "shipBehavior": "Mercenary",
          "Destroy": false,
          "Attack": true
        }
      ],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "",
      "TODO": "Head to Huashi Base",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Commander Shawn",
          "showTimeSec": 99999999,
          "text": "Damn, that was a close one. I owe you one, High Sentinel. ",
          "character": "Tourist4",
          "options": ""
        },
        {
          "Name": "High Sentinel Rika",
          "showTimeSec": 99999999,
          "text": "Don't mention it. Oh, Empress is waiting for you in Huashi Base, Commander.",
          "character": "Pirate3",
          "options": ""
        },
        {
          "Name": "Commander Shawn",
          "showTimeSec": 99999999,
          "text": "Understood. Captain, why don't you accompany me and see who's this \\"Empress Juno\\" really are?",
          "character": "Tourist4",
          "options": ""
        }
      ],
      "completeAction": "ACTION_CLICK_STATION_Huashi Base",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "",
      "TODO": "End",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Story",
          "showTimeSec": 99999999,
          "text": "This is the end of another WIP thing, more is coming soon. Thank you for playing the mod! Save travels, captain.",
          "character": "None",
          "options": ""
        },
        {
          "Name": "Novian Fenrir",
          "showTimeSec": 99999999,
          "text": "Sweet F$*/¥?^ Liberty.... now I can rest.. for 1-4 days before going back to work. My back is KILLING me...",
          "character": "None",
          "options": ""
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    }
  ]
}`}],licence:`MIT`,version:`0.3`,updated:1790517166312,source:`Posted on the Galaxy Genome Discord by Novian Fenrir; released under MIT with the author's permission.`,posted:`2026-09-15`,role:`both`},lr={id:`owner-of-record`,title:`Owner of Record`,author:`Galaxy Genome Quest Editor team`,summary:`A four-chapter story: an insurance adjuster hires you to bring back ODA-4, a cargo android whose memory holds evidence against a broker. Chapters 2–4 are not yet playtested.`,licence:`MIT`,tags:[`Story`,`Preview`],popularity:0,version:`1.0.1`,updated:1790517166320,files:[{name:`Quest0.json`,lang:`en`,text:`{
  "settings": {
    "QuestName": "Recovery Contract",
    "QuestDescription": "An insurance adjuster with one missing android and one unfinished form. The job is about the android, not the pay.",
    "ID": 7413001,
    "StationName": "Manson Orbital",
    "Lang": "en",
    "isRandomStationQuest": false,
    "isRandomSpaceQuest": false,
    "RandomQuestX": 0,
    "RandomQuestY": 0,
    "RandomQuestRadius": 50,
    "RandomSpaceQuestChance": 0.25,
    "RandomSpaceQuestTrigger": "warp",
    "CharName": "Hesper Vale",
    "CharImage": "Tourist1",
    "MinKarma": -101,
    "MaxKarma": 101,
    "Faction": "",
    "FactionMinRep": 0,
    "RequestedQuestIDCompleted": "",
    "OwnStationRequired": false,
    "Reward": 0,
    "KarmaReward": 0
  },
  "BarRumors": [
    {
      "text": "They say an android paid cash for a survey of Ross 154. Nobody out there takes cash.",
      "type": "local"
    }
  ],
  "questParts": [
    {
      "name": "Hesper's offer",
      "TODO": "Hear out the insurance adjuster.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Hesper Vale",
          "showTimeSec": 9,
          "text": "You fly, I assume. I have a missing asset and a form that says malfunction.",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "Hesper Vale",
          "showTimeSec": 10,
          "text": "Cargo android ODA-4 walked off its freighter. I need it back before the claim closes.",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "Hesper Vale",
          "showTimeSec": 8,
          "text": "Security bills the Federation. You bill me, and you are cheaper.",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "Hesper Vale",
          "showTimeSec": 99999999,
          "text": "Last ping: Barnard's Star. Ask Tomas at the Nexus Station bar. Do not shoot anything.",
          "character": "Tourist1",
          "options": "1=Fly to Barnard's Star;"
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Travel",
      "TODO": "Jump into Barnard's Star. ODA-4 was last seen there. Ask for Tomas at Nexus Station.",
      "questID": 1,
      "isCheckPoint": true,
      "dialogText": [],
      "completeAction": "ACTION_WARP_END_SYSTEM_Barnard's Star",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Dock",
      "TODO": "Dock at Nexus Station in Barnard's Star and find Tomas.",
      "questID": 0,
      "isCheckPoint": true,
      "dialogText": [],
      "completeAction": "ACTION_CLICK_STATION_Nexus Station",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Tomas's price",
      "TODO": "Choose a job for Tomas.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Tomas Reyk",
          "showTimeSec": 6,
          "text": "An adjuster sent you. You have the look.",
          "character": "Tourist2",
          "options": ""
        },
        {
          "Name": "Tomas Reyk",
          "showTimeSec": 8,
          "text": "Questions cost extra. Carry something for me and my memory gets better.",
          "character": "Tourist2",
          "options": ""
        },
        {
          "Name": "Tomas Reyk",
          "showTimeSec": 99999999,
          "text": "A crate next door, or a long run for a friend. The long run I remember longer.",
          "character": "Tourist2",
          "options": "2=Take the crate job;3=Take the long run;"
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Accept crate job",
      "TODO": "Take Tomas's crate job (to Vertex Terminal) from the Nexus Station mission board.",
      "questID": 2,
      "isCheckPoint": true,
      "dialogText": [],
      "completeAction": "CLICK_ACCEPT_STORY_MISSION",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": {
        "Type": "Courier",
        "TargetShipType": "Hawk",
        "TargetShipName": "",
        "TargetShipHull": 0.85,
        "Level": "Low",
        "Story": true,
        "Reward": 2000,
        "Reputation": 1,
        "TargetSystem": "Barnard's Star",
        "TargetStation": "Vertex Terminal",
        "HomeStation": "Nexus Station",
        "TargetGoodsCount": 2,
        "TargetGoods": "Tea"
      },
      "failureActions": ""
    },
    {
      "name": "Hand in crate job",
      "TODO": "Deliver Tomas's crate to Vertex Terminal and collect the reward.",
      "questID": 0,
      "isCheckPoint": true,
      "dialogText": [],
      "completeAction": "GET_STORY_REWARD",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "The fact, crate version",
      "TODO": "Tell Tomas what you will tell the adjuster.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Tomas, on comms",
          "showTimeSec": 8,
          "text": "Crate arrived. Fair is fair. ODA-4 bought a planet survey of Ross 154.",
          "character": "Tourist2",
          "options": ""
        },
        {
          "Name": "Tomas, on comms",
          "showTimeSec": 99999999,
          "text": "Androids do not pay cash. Somebody taught it. What will you tell the adjuster?",
          "character": "Tourist2",
          "options": "5=Everything;4=Nothing yet;"
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Accept long run",
      "TODO": "Take Tomas's long run (to Thunder Station) from the Nexus Station mission board.",
      "questID": 3,
      "isCheckPoint": true,
      "dialogText": [],
      "completeAction": "CLICK_ACCEPT_STORY_MISSION",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": {
        "Type": "Courier",
        "TargetShipType": "Hawk",
        "TargetShipName": "",
        "TargetShipHull": 0.85,
        "Level": "Low",
        "Story": true,
        "Reward": 2000,
        "Reputation": 1,
        "TargetSystem": "Sol",
        "TargetStation": "Thunder Station",
        "HomeStation": "Nexus Station",
        "TargetGoodsCount": 2,
        "TargetGoods": "Tea"
      },
      "failureActions": ""
    },
    {
      "name": "Hand in long run",
      "TODO": "Deliver Tomas's package to Thunder Station in Sol and collect the reward.",
      "questID": 0,
      "isCheckPoint": true,
      "dialogText": [],
      "completeAction": "GET_STORY_REWARD",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "The fact, long run version",
      "TODO": "Tell Tomas what you will tell the adjuster.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Tomas, on comms",
          "showTimeSec": 9,
          "text": "My friend says thank you. So do I. ODA-4 bought a planet survey of Ross 154.",
          "character": "Tourist2",
          "options": ""
        },
        {
          "Name": "Tomas, on comms",
          "showTimeSec": 99999999,
          "text": "Androids do not pay cash. Somebody taught it. What will you tell the adjuster?",
          "character": "Tourist2",
          "options": "5=Everything;4=Nothing yet;"
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Say nothing (bridge)",
      "TODO": "Keep it quiet for now.",
      "questID": 4,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Tomas, on comms",
          "showTimeSec": 99999999,
          "text": "Quiet. Good for business. Your next drink is on the house.",
          "character": "Tourist2",
          "options": "6=Head out;"
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Report",
      "TODO": "Dock at Manson Orbital in Wolf 359 and tell Hesper what Tomas said.",
      "questID": 5,
      "isCheckPoint": true,
      "dialogText": [],
      "completeAction": "ACTION_CLICK_STATION_Manson Orbital",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Hesper's doubt",
      "TODO": "Hesper has a question the form cannot answer.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Hesper Vale",
          "showTimeSec": 6,
          "text": "Cash. The form does not have a box for that.",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "Hesper Vale",
          "showTimeSec": 7,
          "text": "Keep going. And pilot, tell me first if the form is wrong.",
          "character": "Tourist1",
          "options": ""
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Shared final",
      "TODO": "ODA-4 went to Ross 154. Tomas has the next lead.",
      "questID": 6,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Tomas, on comms",
          "showTimeSec": 7,
          "text": "Ross 154 is close to me. Come see me when you are ready.",
          "character": "Tourist2",
          "options": ""
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    }
  ]
}`},{name:`Quest1.json`,lang:`en`,text:`{
  "settings": {
    "QuestName": "Cold Trail",
    "QuestDescription": "Tomas has a lead on the runaway android, and a message somebody wants you to hear first.",
    "ID": 7413002,
    "StationName": "Nexus Station",
    "Lang": "en",
    "isRandomStationQuest": false,
    "isRandomSpaceQuest": false,
    "RandomQuestX": 0,
    "RandomQuestY": 0,
    "RandomQuestRadius": 50,
    "RandomSpaceQuestChance": 0.25,
    "RandomSpaceQuestTrigger": "warp",
    "CharName": "Tomas Reyk",
    "CharImage": "Tourist2",
    "MinKarma": -101,
    "MaxKarma": 101,
    "Faction": "",
    "FactionMinRep": 0,
    "RequestedQuestIDCompleted": "7413001",
    "OwnStationRequired": false,
    "Reward": 0,
    "KarmaReward": 0
  },
  "BarRumors": [
    {
      "text": "They say a pirate called Lask keeps other ships away from Ross 154.",
      "type": "local"
    }
  ],
  "questParts": [
    {
      "name": "Tomas: the trail",
      "TODO": "Hear what Tomas knows.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Tomas Reyk",
          "showTimeSec": 9,
          "text": "Whatever you told the adjuster, the trail is Ross 154. The survey named planet Sorg.",
          "character": "Tourist2",
          "options": ""
        },
        {
          "Name": "Tomas Reyk",
          "showTimeSec": 9,
          "text": "Before you go, a freighter captain left a message for whoever came asking.",
          "character": "Tourist2",
          "options": ""
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Iva's message",
      "TODO": "Listen to Iva Dorn's message.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Iva Dorn, recorded message",
          "showTimeSec": 7,
          "text": "Iva Dorn, captain. ODA-4 crewed my freighter for six years.",
          "character": "Tourist4",
          "options": ""
        },
        {
          "Name": "Iva Dorn, recorded message",
          "showTimeSec": 8,
          "text": "We lost three runs in one season. Nobody loses three by accident.",
          "character": "Tourist4",
          "options": ""
        },
        {
          "Name": "Iva Dorn, recorded message",
          "showTimeSec": 8,
          "text": "Same broker sold every escort. If you find ODA, ask it what it saw.",
          "character": "Tourist4",
          "options": ""
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Jump into Ross 154",
      "TODO": "Jump into Ross 154, then scan planet Sorg.",
      "questID": 0,
      "isCheckPoint": true,
      "dialogText": [],
      "completeAction": "ACTION_WARP_END_SYSTEM_Ross 154",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Scan Sorg",
      "TODO": "Scan planet Sorg in Ross 154. Repair your planet scanner first if it is damaged.",
      "questID": 0,
      "isCheckPoint": true,
      "dialogText": [],
      "completeAction": "ACTION_SCAN_PLANET_Sorg",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Lask hails",
      "TODO": "A pirate named Lask is shadowing you. Fight or break off.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Lask",
          "showTimeSec": 8,
          "text": "You scanned the wrong rock, pilot. This sector has an arrangement.",
          "character": "Pirate2",
          "options": ""
        },
        {
          "Name": "Lask",
          "showTimeSec": 99999999,
          "text": "Leave the android and fly home. That is the whole offer.",
          "character": "Pirate2",
          "options": "2=Fight;1=Break off;"
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [
        {
          "Name": "Lask",
          "shipLevel": "Novice",
          "shipModel": "hawk",
          "distanceFromPlayer": 400,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Mercenary",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        }
      ],
      "shipControl": [
        {
          "ShipName": "Lask",
          "SetTarget": "player",
          "shipBehavior": "Mercenary",
          "Destroy": false,
          "Attack": false
        }
      ],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Break off",
      "TODO": "Jump away to break off from Lask.",
      "questID": 1,
      "isCheckPoint": false,
      "dialogText": [],
      "completeAction": "ACTION_WARP_BEGIN",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Bridge: Tomas",
      "TODO": "Report back to Tomas.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Tomas, on comms",
          "showTimeSec": 99999999,
          "text": "Smart. Lask is paid. Somebody pays him.",
          "character": "Tourist2",
          "options": "3=Return to the trail;"
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Fight Lask",
      "TODO": "Destroy Lask. Jumping away abandons the fight.",
      "questID": 2,
      "isCheckPoint": false,
      "dialogText": [],
      "completeAction": "ACTION_SHIP_DESTROYED_Lask",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [
        {
          "ShipName": "Lask",
          "SetTarget": "player",
          "shipBehavior": "Pirate",
          "Destroy": false,
          "Attack": true
        }
      ],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Tomas: fight callback",
      "TODO": "Lask is gone.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Tomas, on comms",
          "showTimeSec": 6,
          "text": "Lask is gone. Whoever paid him will send more.",
          "character": "Tourist2",
          "options": ""
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Shared final",
      "TODO": "Lask was guarding something in Ross 154. Tomas wants to talk.",
      "questID": 3,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Tomas, on comms",
          "showTimeSec": 6,
          "text": "He was guarding something. Come see me.",
          "character": "Tourist2",
          "options": ""
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    }
  ]
}`},{name:`Quest2.json`,lang:`en`,text:`{
  "settings": {
    "QuestName": "The Record",
    "QuestDescription": "Lask was guarding a planet. Tomas thinks the android is hiding near it.",
    "ID": 7413003,
    "StationName": "Nexus Station",
    "Lang": "en",
    "isRandomStationQuest": false,
    "isRandomSpaceQuest": false,
    "RandomQuestX": 0,
    "RandomQuestY": 0,
    "RandomQuestRadius": 50,
    "RandomSpaceQuestChance": 0.25,
    "RandomSpaceQuestTrigger": "warp",
    "CharName": "Tomas Reyk",
    "CharImage": "Tourist2",
    "MinKarma": -101,
    "MaxKarma": 101,
    "Faction": "",
    "FactionMinRep": 0,
    "RequestedQuestIDCompleted": "7413002",
    "OwnStationRequired": false,
    "Reward": 0,
    "KarmaReward": 0
  },
  "BarRumors": [
    {
      "text": "They say a Federation adjuster is asking every pilot in Barnard's Star about a cargo android.",
      "type": "local"
    }
  ],
  "questParts": [
    {
      "name": "Tomas: scan it",
      "TODO": "Hear what Tomas worked out.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Tomas Reyk",
          "showTimeSec": 9,
          "text": "You came back from Ross 154 in one piece. Lask was guarding Glede, not Sorg.",
          "character": "Tourist2",
          "options": ""
        },
        {
          "Name": "Tomas Reyk",
          "showTimeSec": 7,
          "text": "Scan Glede. Repair your scanner first if it is damaged.",
          "character": "Tourist2",
          "options": ""
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Jump into Ross 154",
      "TODO": "Jump into Ross 154, then scan planet Glede.",
      "questID": 0,
      "isCheckPoint": true,
      "dialogText": [],
      "completeAction": "ACTION_WARP_END_SYSTEM_Ross 154",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Scan Glede",
      "TODO": "Scan planet Glede in Ross 154.",
      "questID": 0,
      "isCheckPoint": true,
      "dialogText": [],
      "completeAction": "ACTION_SCAN_PLANET_Glede",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "ODA found",
      "TODO": "A small shuttle is coming to meet you.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "ODA-4",
          "showTimeSec": 99999999,
          "text": "I apologise for the inconvenience of being found.",
          "character": "Automaton",
          "options": "2=Show me the record;1=I am taking you in;"
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [
        {
          "Name": "ODA-4 (shuttle)",
          "shipLevel": "Harmless",
          "shipModel": "atom",
          "distanceFromPlayer": 400,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "TraderNoWeapons",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        }
      ],
      "shipControl": [
        {
          "ShipName": "ODA-4 (shuttle)",
          "SetTarget": "player",
          "shipBehavior": "TraderNoWeapons",
          "Destroy": false,
          "Attack": false
        }
      ],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "ODA's argument to a hunter",
      "TODO": "ODA-4 asks you to look first.",
      "questID": 1,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "ODA-4",
          "showTimeSec": 99999999,
          "text": "Then take me. But look first.",
          "character": "Automaton",
          "options": "3=Look;"
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "ODA's answer to a listener",
      "TODO": "ODA-4 is ready to show you.",
      "questID": 2,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "ODA-4",
          "showTimeSec": 99999999,
          "text": "Thank you. Nobody asks.",
          "character": "Automaton",
          "options": "3=Look;"
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "The record",
      "TODO": "ODA-4 is the only copy of the real cargo log.",
      "questID": 3,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "ODA-4",
          "showTimeSec": 9,
          "text": "Three runs. One broker sold the escort routes. The pirates were paid to be there.",
          "character": "Automaton",
          "options": ""
        },
        {
          "Name": "ODA-4",
          "showTimeSec": 8,
          "text": "The broker then claimed the losses. The log shows every transfer.",
          "character": "Automaton",
          "options": ""
        },
        {
          "Name": "ODA-4",
          "showTimeSec": 5,
          "text": "There is one copy. It is in me.",
          "character": "Automaton",
          "options": ""
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Lask's Wing arrives",
      "TODO": "Lask's Wing is here. Fight or break off.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "ODA-4",
          "showTimeSec": 99999999,
          "text": "Two ships. They fly for the man who paid Lask. I will hide near the planet.",
          "character": "Automaton",
          "options": "5=Fight;4=Break off;"
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [
        {
          "Name": "Lask's Wing",
          "shipLevel": "Novice",
          "shipModel": "hawk",
          "distanceFromPlayer": 400,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Mercenary",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        },
        {
          "Name": "Lask's Wing Two",
          "shipLevel": "Harmless",
          "shipModel": "hawk",
          "distanceFromPlayer": 400,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Mercenary",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        }
      ],
      "shipControl": [
        {
          "ShipName": "Lask's Wing",
          "SetTarget": "player",
          "shipBehavior": "Mercenary",
          "Destroy": false,
          "Attack": false
        },
        {
          "ShipName": "Lask's Wing Two",
          "SetTarget": "player",
          "shipBehavior": "Mercenary",
          "Destroy": false,
          "Attack": false
        },
        {
          "ShipName": "ODA-4 (shuttle)",
          "SetTarget": "Glede",
          "shipBehavior": "TraderNoWeapons",
          "Destroy": false,
          "Attack": false
        }
      ],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Break off",
      "TODO": "Jump away and draw the wing after you.",
      "questID": 4,
      "isCheckPoint": false,
      "dialogText": [],
      "completeAction": "ACTION_WARP_BEGIN",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Bridge: ODA",
      "TODO": "The wing followed you out.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "ODA-4, on comms",
          "showTimeSec": 99999999,
          "text": "They followed you. I am hidden again. Thank you.",
          "character": "Automaton",
          "options": "6=Head to Barnard's Star;"
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Fight the wing",
      "TODO": "Destroy Lask's Wing. Jumping away abandons the fight.",
      "questID": 5,
      "isCheckPoint": false,
      "dialogText": [],
      "completeAction": "ACTION_SHIP_DESTROYED_Lask's Wing",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [
        {
          "ShipName": "Lask's Wing",
          "SetTarget": "player",
          "shipBehavior": "Pirate",
          "Destroy": false,
          "Attack": true
        },
        {
          "ShipName": "Lask's Wing Two",
          "SetTarget": "player",
          "shipBehavior": "Pirate",
          "Destroy": false,
          "Attack": true
        }
      ],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "ODA: fight callback",
      "TODO": "The wing leader is gone.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "ODA-4, on comms",
          "showTimeSec": 9,
          "text": "You fought them for me. Nobody has done that. I apologise for the damage.",
          "character": "Automaton",
          "options": ""
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Shared final",
      "TODO": "Hesper wants the android. Tomas says sleep on it.",
      "questID": 6,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Hesper Vale, on comms",
          "showTimeSec": 6,
          "text": "Pilot, I heard you found it. Bring it to me.",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "ODA-4, on comms",
          "showTimeSec": 9,
          "text": "If she has me, the log is copied out and I am wiped. Please think about it.",
          "character": "Automaton",
          "options": ""
        },
        {
          "Name": "Tomas, on comms",
          "showTimeSec": 6,
          "text": "Sleep on it. Come see me when you know.",
          "character": "Tourist2",
          "options": ""
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    }
  ]
}`},{name:`Quest3.json`,lang:`en`,text:`{
  "settings": {
    "QuestName": "Owner of Record",
    "QuestDescription": "The record has one copy, and it walks. Decide who gets it.",
    "ID": 7413004,
    "StationName": "Nexus Station",
    "Lang": "en",
    "isRandomStationQuest": false,
    "isRandomSpaceQuest": false,
    "RandomQuestX": 0,
    "RandomQuestY": 0,
    "RandomQuestRadius": 50,
    "RandomSpaceQuestChance": 0.25,
    "RandomSpaceQuestTrigger": "warp",
    "CharName": "Tomas Reyk",
    "CharImage": "Tourist2",
    "MinKarma": -101,
    "MaxKarma": 101,
    "Faction": "",
    "FactionMinRep": 0,
    "RequestedQuestIDCompleted": "7413003",
    "OwnStationRequired": false,
    "Reward": 0,
    "KarmaReward": 0
  },
  "BarRumors": [
    {
      "text": "They say a cargo log changed hands in Ross 154, and a broker named Karr stopped sleeping.",
      "type": "local"
    }
  ],
  "questParts": [
    {
      "name": "The choice",
      "TODO": "Decide who gets the record.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Tomas Reyk",
          "showTimeSec": 8,
          "text": "You found it, and you let it talk. Now you decide who hears it.",
          "character": "Tourist2",
          "options": ""
        },
        {
          "Name": "Tomas Reyk",
          "showTimeSec": 9,
          "text": "Give it to Hesper: the log is copied out, ODA is wiped, and Karr is named.",
          "character": "Tourist2",
          "options": ""
        },
        {
          "Name": "Tomas Reyk",
          "showTimeSec": 9,
          "text": "Let ODA carry it: ODA stays itself. A broadcast is a story, not evidence.",
          "character": "Tourist2",
          "options": ""
        },
        {
          "Name": "Tomas Reyk",
          "showTimeSec": 99999999,
          "text": "Karr keeps his post then, and Hesper loses hers for losing the asset.",
          "character": "Tourist2",
          "options": "1=Give the record to Hesper;5=Let ODA carry it;"
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "H: jump into Ross 154",
      "TODO": "Jump into Ross 154 to collect ODA-4.",
      "questID": 1,
      "isCheckPoint": true,
      "dialogText": [],
      "completeAction": "ACTION_WARP_END_SYSTEM_Ross 154",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "H: scan Glede",
      "TODO": "Scan planet Glede in Ross 154 so ODA-4 knows it is you.",
      "questID": 0,
      "isCheckPoint": true,
      "dialogText": [],
      "completeAction": "ACTION_SCAN_PLANET_Glede",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "H: ODA comes aboard",
      "TODO": "ODA-4 is in your cargo bay. Fly to Wolf 359.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "ODA-4, on comms",
          "showTimeSec": 7,
          "text": "You chose. I will not make it harder. Open your cargo bay.",
          "character": "Automaton",
          "options": ""
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "H: jump into Wolf 359",
      "TODO": "Jump into Wolf 359. Hesper is waiting at Manson Orbital.",
      "questID": 0,
      "isCheckPoint": true,
      "dialogText": [],
      "completeAction": "ACTION_WARP_END_SYSTEM_Wolf 359",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "H: Karr hails",
      "TODO": "Karr's Contractor is on you. Fight or break off.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Anselm Karr, on comms",
          "showTimeSec": 8,
          "text": "Anselm Karr. I know what is in your cargo bay. Sell it to me instead.",
          "character": "Tourist3",
          "options": ""
        },
        {
          "Name": "Anselm Karr, on comms",
          "showTimeSec": 99999999,
          "text": "Everyone in this sector owes me an escort. Soon, you too.",
          "character": "Tourist3",
          "options": "3=Fight;2=Break off;"
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [
        {
          "Name": "Karr's Contractor",
          "shipLevel": "Novice",
          "shipModel": "viking",
          "distanceFromPlayer": 400,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Mercenary",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        }
      ],
      "shipControl": [
        {
          "ShipName": "Karr's Contractor",
          "SetTarget": "player",
          "shipBehavior": "Mercenary",
          "Destroy": false,
          "Attack": false
        }
      ],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "H: break off",
      "TODO": "Jump away to break off from Karr's Contractor.",
      "questID": 2,
      "isCheckPoint": false,
      "dialogText": [],
      "completeAction": "ACTION_WARP_BEGIN",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "H: bridge, Hesper",
      "TODO": "Come back and dock at Manson Orbital.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Hesper Vale, on comms",
          "showTimeSec": 99999999,
          "text": "He will not follow you into my dock. Come back and dock at Manson Orbital.",
          "character": "Tourist1",
          "options": "4=Return to Manson Orbital;"
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "H: fight",
      "TODO": "Destroy Karr's Contractor. Jumping away abandons the fight.",
      "questID": 3,
      "isCheckPoint": false,
      "dialogText": [],
      "completeAction": "ACTION_SHIP_DESTROYED_Karr's Contractor",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [
        {
          "ShipName": "Karr's Contractor",
          "SetTarget": "player",
          "shipBehavior": "Pirate",
          "Destroy": false,
          "Attack": true
        }
      ],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "H: Hesper, fight callback",
      "TODO": "Dock at Manson Orbital.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Hesper Vale, on comms",
          "showTimeSec": 9,
          "text": "Karr will say he never sent anyone. The log will say otherwise. Dock with me.",
          "character": "Tourist1",
          "options": ""
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "H: dock at Manson Orbital",
      "TODO": "Dock at Manson Orbital in Wolf 359 and hand ODA-4 to Hesper.",
      "questID": 4,
      "isCheckPoint": true,
      "dialogText": [],
      "completeAction": "ACTION_CLICK_STATION_Manson Orbital",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "H: Hesper files",
      "TODO": "Hesper has filed. Tomas is waiting at Nexus Station.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Hesper Vale",
          "showTimeSec": 8,
          "text": "The log is copied. Anselm Karr is named on the claim, in full.",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "Hesper Vale",
          "showTimeSec": 99999999,
          "text": "The form is right now. I hate it.",
          "character": "Tourist1",
          "options": "9=Fly to Barnard's Star;"
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "O: jump into Ross 154",
      "TODO": "Jump into Ross 154. ODA-4 needs a clear sky to broadcast.",
      "questID": 5,
      "isCheckPoint": true,
      "dialogText": [],
      "completeAction": "ACTION_WARP_END_SYSTEM_Ross 154",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "O: scan Glede",
      "TODO": "Scan planet Glede in Ross 154 so ODA-4 knows it is you.",
      "questID": 0,
      "isCheckPoint": true,
      "dialogText": [],
      "completeAction": "ACTION_SCAN_PLANET_Glede",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "O: the relay guard",
      "TODO": "Karr's Contractor guards the relay. Fight or break off.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "ODA-4, on comms",
          "showTimeSec": 99999999,
          "text": "Karr sent a guard to the old relay. I cannot broadcast while it watches.",
          "character": "Automaton",
          "options": "7=Fight;6=Break off;"
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [
        {
          "Name": "Karr's Contractor",
          "shipLevel": "Novice",
          "shipModel": "viking",
          "distanceFromPlayer": 400,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "Mercenary",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        }
      ],
      "shipControl": [
        {
          "ShipName": "Karr's Contractor",
          "SetTarget": "player",
          "shipBehavior": "Mercenary",
          "Destroy": false,
          "Attack": false
        }
      ],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "O: break off",
      "TODO": "Jump away and lead the guard off.",
      "questID": 6,
      "isCheckPoint": false,
      "dialogText": [],
      "completeAction": "ACTION_WARP_BEGIN",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "O: return",
      "TODO": "Jump back into Ross 154 and scan Glede again.",
      "questID": 0,
      "isCheckPoint": true,
      "dialogText": [],
      "completeAction": "ACTION_SCAN_PLANET_Glede",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "O: bridge, ODA",
      "TODO": "ODA-4 is ready.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "ODA-4, on comms",
          "showTimeSec": 99999999,
          "text": "It is still chasing your trail. I am ready.",
          "character": "Automaton",
          "options": "8=Meet ODA;"
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "O: fight",
      "TODO": "Destroy Karr's Contractor. Jumping away abandons the fight.",
      "questID": 7,
      "isCheckPoint": false,
      "dialogText": [],
      "completeAction": "ACTION_SHIP_DESTROYED_Karr's Contractor",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [
        {
          "ShipName": "Karr's Contractor",
          "SetTarget": "player",
          "shipBehavior": "Pirate",
          "Destroy": false,
          "Attack": true
        }
      ],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "O: ODA, fight callback",
      "TODO": "The relay is clear.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "ODA-4, on comms",
          "showTimeSec": 5,
          "text": "The relay is clear. I am coming out.",
          "character": "Automaton",
          "options": ""
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "O: ODA broadcasts",
      "TODO": "ODA-4 broadcasts the log and leaves.",
      "questID": 8,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "ODA-4",
          "showTimeSec": 7,
          "text": "Broadcasting. Every station in range has the log now.",
          "character": "Automaton",
          "options": ""
        },
        {
          "Name": "ODA-4",
          "showTimeSec": 5,
          "text": "I am not sorry I left.",
          "character": "Automaton",
          "options": ""
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [
        {
          "Name": "ODA-4",
          "shipLevel": "Harmless",
          "shipModel": "atom",
          "distanceFromPlayer": 300,
          "spawnX": 0,
          "spawnY": 0,
          "shipBehavior": "TraderNoWeapons",
          "autoLVL": false,
          "color": "0xFFFFFFFF"
        }
      ],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "O: Hesper, on comms",
      "TODO": "Tomas is waiting at Nexus Station.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Hesper Vale, on comms",
          "showTimeSec": 7,
          "text": "I heard the broadcast. The asset is lost, and so is my job.",
          "character": "Tourist1",
          "options": ""
        },
        {
          "Name": "Hesper Vale, on comms",
          "showTimeSec": 7,
          "text": "You told me first, in a way. That is more than the form did.",
          "character": "Tourist1",
          "options": ""
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Dock at Nexus Station",
      "TODO": "Dock at Nexus Station in Barnard's Star.",
      "questID": 9,
      "isCheckPoint": true,
      "dialogText": [],
      "completeAction": "ACTION_CLICK_STATION_Nexus Station",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Two drinks",
      "TODO": "It is over. Tomas remembers.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Tomas Reyk",
          "showTimeSec": 5,
          "text": "Two drinks. One for you.",
          "character": "Tourist2",
          "options": ""
        },
        {
          "Name": "Tomas Reyk",
          "showTimeSec": 5,
          "text": "And one for the one who is not here.",
          "character": "Tourist2",
          "options": ""
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    }
  ]
}`}],source:`Written for the editor`,role:`both`},ur={id:`parcel-for-sirius`,title:`Parcel for Sirius`,author:`Galaxy Genome Quest Editor team`,summary:`A short delivery run: carry an unmarked parcel to Sirius, no questions asked.`,tags:[`Story`],popularity:0,files:[{name:`Quest9002.json`,lang:`en`,text:`{
  "settings": {
    "QuestName": "Parcel for Sirius",
    "QuestDescription": "I need something delivered, no questions asked.",
    "ID": 9002,
    "StationName": "Thunder Station",
    "Lang": "en",
    "isRandomStationQuest": false,
    "isRandomSpaceQuest": false,
    "RandomQuestX": 0,
    "RandomQuestY": 0,
    "RandomQuestRadius": 50,
    "RandomSpaceQuestChance": 0.25,
    "RandomSpaceQuestTrigger": "warp",
    "CharName": "Harry",
    "CharImage": "Tourist2",
    "MinKarma": -101,
    "MaxKarma": 101,
    "Faction": "",
    "FactionMinRep": 0,
    "RequestedQuestIDCompleted": "",
    "OwnStationRequired": false,
    "Reward": 0,
    "KarmaReward": 0
  },
  "BarRumors": [
    {
      "text": "They say couriers to Sirius get paid double and asked nothing.",
      "type": "global"
    }
  ],
  "questParts": [
    {
      "name": "Briefing",
      "TODO": "Take the parcel to Sirius.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Harry",
          "showTimeSec": 5,
          "text": "Sirius. Don\\u2019t open it.",
          "character": "Tourist2",
          "options": ""
        }
      ],
      "completeAction": "ACTION_DIALOG_COMPLETE",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "To Sirius",
      "TODO": "Fly to Sirius.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [],
      "completeAction": "ACTION_WARP_END_SYSTEM_Sirius",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    },
    {
      "name": "Hand over",
      "TODO": "Dock at Cooper City.",
      "questID": 0,
      "isCheckPoint": false,
      "dialogText": [
        {
          "Name": "Harry",
          "showTimeSec": 5,
          "text": "Good. We never met.",
          "character": "Tourist2",
          "options": ""
        }
      ],
      "completeAction": "ACTION_CLICK_STATION_Cooper City",
      "dialogTextRepeat": [],
      "repeatTextTimeSec": 999999999,
      "shipSpawn": [],
      "shipControl": [],
      "task_on_station": null,
      "failureActions": ""
    }
  ]
}`}],licence:`MIT`,version:`1.0.0`,updated:1789407207142,source:`Editor template`,role:`library`},dr=(e,t)=>e===t||JSON.stringify(e)===JSON.stringify(t);function k(e,t){let n=e._extra??{};if(!e._layout)return{...t,...n};let r=e._kept??{},i={},a=new Map(Object.keys(t).map(e=>[e.toLowerCase(),e])),o=new Set,s=(e,n)=>{o.add(n);let a=r[n];a&&dr(a.written,t[n])?a.value!==void 0&&(i[e]=a.value):i[e]=t[n]};for(let r of e._layout){if(r in n){i[r]=n[r];continue}let e=r in t?r:a.get(r.toLowerCase());e!==void 0&&!o.has(e)&&s(r,e)}for(let e of Object.keys(t))o.has(e)||s(e,e);for(let[e,t]of Object.entries(n))e in i||(i[e]=t);return i}function fr(e){let t=new Set(e.flatMap(e=>e.dialogue.flatMap(e=>e.choices.map(e=>e.targetStepId))).filter(Boolean)),n=new Map,r=1;return e.forEach(e=>{if(!t.has(e.id))return n.set(e.id,0);for(;dn.includes(r);)r++;n.set(e.id,r++)}),n}var pr=(e,t)=>k(e,{Name:e.speaker,showTimeSec:e.closeAfterSec,text:e.text,character:e.portrait,options:e.choices.map(e=>`${e.targetStepId?t.get(e.targetStepId)??0:0}=${e.text};`).join(``)});function mr(e,t,n){let r=n.indexOf(e);return k(e,{name:e.name,TODO:e.journal,questID:t.get(e.id)??0,isCheckPoint:e.checkpoint,dialogText:e.dialogue.map(e=>pr(e,t)),completeAction:e.finishWhen??``,dialogTextRepeat:e.reminder.map(e=>pr(e,t)),repeatTextTimeSec:e.reminderEverySec,shipSpawn:e.ships.map(e=>k(e,{Name:e.pilot,shipLevel:e.level,shipModel:gn(e.model)?.modFallback??e.model,distanceFromPlayer:e.placement===`nearPlayer`?e.distance:0,spawnX:e.placement===`position`?e.x:0,spawnY:e.placement===`position`?e.y:0,shipBehavior:e.behaviour,autoLVL:e.autoLvl,color:e.tint?`0xFF${e.tint.replace(`#`,``).toUpperCase()}`:`0xFFFFFFFF`})),shipControl:e.orders.map(e=>k(e,{ShipName:e.ship,SetTarget:e.target,shipBehavior:Sn(e,n,r),Destroy:e.destroy,Attack:e.attack})),task_on_station:e.mission&&k(e.mission,{Type:e.mission.type,TargetShipType:gn(e.mission.targetShipType)?.internal??e.mission.targetShipType,TargetShipName:e.mission.targetShipName,TargetShipHull:e.mission.targetShipHull,Level:e.mission.level,Story:e.mission.story,Reward:e.mission.credits,Reputation:e.mission.reputation,TargetSystem:e.mission.targetSystem,TargetStation:e.mission.targetStation,HomeStation:e.mission.homeStation,TargetGoodsCount:e.mission.goodsCount,TargetGoods:e.mission.goods}),failureActions:e.failWhen.join(`;`)})}function hr(e){let t=e.settings,n=fr(e.steps);return k(e,{settings:k(t,{QuestName:t.questName,QuestDescription:t.description,ID:t.questId,StationName:t.startMode===`bar`?t.stationName:``,Lang:t.lang,isRandomStationQuest:t.startMode===`nearPoint`,isRandomSpaceQuest:t.startMode===`space`,RandomQuestX:t.pointX,RandomQuestY:t.pointY,RandomQuestRadius:t.radius,RandomSpaceQuestChance:t.chance,RandomSpaceQuestTrigger:t.trigger,CharName:t.charName,CharImage:t.charImage,MinKarma:t.minKarma??-101,MaxKarma:t.maxKarma??101,Faction:t.faction===`none`?``:t.faction,FactionMinRep:t.factionMinRep,RequestedQuestIDCompleted:t.requiredQuestIds.join(`;`),OwnStationRequired:t.ownStationRequired,Reward:t.reward,KarmaReward:t.karmaReward}),BarRumors:e.rumors.map(e=>k(e,{text:e.text,type:e.scope})),questParts:e.steps.map(t=>mr(t,n,e.steps))})}function gr(e){return k(e,{Stars:e.stars.map(e=>k(e,{Name:e.name,X:e.x,Y:e.y,Z:e.z,security:e.security,type:e.type})),Planets:e.planets.map(e=>k(e,{Name:e.name,system:e.system,type:e.type,dist:e.orbit,sput:e.moons,size:e.size,rings:e.rings,...e.material?{mater1:e.material}:{}})),Stations:e.stations.map(e=>k(e,{Name:e.name,StarSystem:e.system,PlanetID:e.bodyIndex,type:e.type,Faction:e.faction}))})}var _r=e=>JSON.stringify(e,null,2);function vr(e,t){let n=URL.createObjectURL(new Blob([t],{type:`application/json`}));Object.assign(document.createElement(`a`),{href:n,download:e}).click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}async function yr(e,t=$(`output.jsonTitle`)){try{await navigator.clipboard.writeText(e),i.success($(`output.copied`,{what:t}))}catch{i.error($(`output.clipboardBlocked`),{description:$(`output.clipboardBlockedHint`)})}}function A(e,t){try{return $(`startLib.${e}`,t)}catch{return we[e].replace(/\{(\w+)\}/g,(e,n)=>t&&n in t?String(t[n]):e)}}var j=e=>!!e&&typeof e==`object`&&!Array.isArray(e);function br(e,t){let n=``,r=null;for(let i=0;i<e.length;i++){let a=e[i];if(r){if(a===`\\`){n+=a+(e[i+1]??``),i++;continue}if(a===`"`||r===`“`&&a===`”`){n+=`"`,r=null;continue}n+=a;continue}if(a===`"`)r=`"`,n+=a;else if(a===`“`||a===`”`)r=`“`,n+=`"`,t.add(A(`fixCurly`));else if(a===`/`&&e[i+1]===`/`){for(;i+1<e.length&&e[i+1]!==`
`;)i++;t.add(A(`fixComments`))}else if(a===`/`&&e[i+1]===`*`){let r=e.indexOf(`*/`,i+2),a=e.slice(i,r<0?e.length:r+2);n+=a.replace(/[^\n]/g,``),i+=a.length-1,t.add(A(`fixComments`))}else a===`,`&&/^\s*[\]}]/.test(e.slice(i+1,i+200))?t.add(A(`fixCommas`)):n+=a}return n}function xr(e,t){let n=t instanceof Error?t.message:String(t),r=Math.min(Number(/position (\d+)/.exec(n)?.[1]??e.length),e.length),i=e.slice(0,r).split(`
`),a=i.length,o=i[i.length-1].length+1,s=e.split(`
`),c=Math.max(0,a-3),l=e.slice(Math.max(0,r-40),r).trimEnd(),u=/end of JSON/i.test(n)?A(`causeEnd`):/control character/i.test(n)?A(`causeLineBreak`):e[r]===`'`?A(`causeSingle`):/["\d\]}el]$/.test(l)&&/^\s*["{[]/.test(e.slice(r))?A(`causeComma`):A(`causeOther`);return{kind:`parse-error`,line:a,column:o,snippet:s.slice(c,a+2),errorLine:a-1-c,cause:u}}function Sr(e){let t=new Set,n=[],r=[],i=e;i.charCodeAt(0)===65279&&(i=i.slice(1),t.add(A(`fixBom`)));let a;try{a=JSON.parse(i)}catch{let e=br(i,t);try{a=JSON.parse(e)}catch(t){return xr(e,t)}}if(!j(a))return{kind:`rejected`};let o=(e,n,r=``)=>{if(n in e)return e[n];let i=Object.keys(e).find(e=>e.toLowerCase()===n.toLowerCase());if(i!==void 0)return t.add(A(`fixCase`,{found:i+r,key:n})),e[i]},s=(e,r,i)=>e==null||e===``?r:typeof e==`number`&&Number.isFinite(e)?e:typeof e==`string`&&Number.isFinite(Number(e))?(t.add(A(`fixNumber`,{label:i,value:e})),Number(e)):typeof e==`boolean`?+!!e:(n.push(A(`lookNumber`,{label:i,value:String(e),def:r})),r),c=(e,r)=>e==null?!1:typeof e==`boolean`?e:e===`true`||e===1||e===`1`?(t.add(A(`fixOn`,{label:r,value:String(e)})),!0):(e===`false`||e===0||e===`0`||e===``||n.push(A(`lookBool`,{label:r,value:String(e)})),!1),l=e=>e==null?``:typeof e==`string`?e:typeof e==`object`?JSON.stringify(e):String(e),u=e=>Array.isArray(e)?e.filter(j):[];if((o(a,`Stars`)??o(a,`Planets`)??o(a,`Stations`))!==void 0&&o(a,`questParts`)===void 0&&o(a,`settings`)===void 0){let e=Dr(a,o,s,l,u);return Er(e,a,gr(e),Tr),{kind:`ok`,mod:e,fixed:[...t],look:n,kept:r}}let d=o(a,`settings`);j(d)||n.push(A(`lookNoSettings`));let f=j(d)?d:{},p=l(o(f,`Lang`)).toLowerCase(),m=p===`zh`?`cn`:fn.find(e=>e.key===p)?.key??`en`;p===`zh`&&t.add(A(`fixZh`));let h=c(o(f,`isRandomSpaceQuest`),A(`labelSpace`)),g=c(o(f,`isRandomStationQuest`),A(`labelNearPoint`)),_=s(o(f,`MinKarma`),-101,A(`labelMinKarma`)),ee=s(o(f,`MaxKarma`),101,A(`labelMaxKarma`)),te=s(o(f,`RandomSpaceQuestChance`),.25,A(`labelChance`));(te<0||te>1)&&n.push(A(`lookChance`,{chance:te}));let v=l(o(f,`Faction`)),ne=s(o(f,`Reward`),0,A(`labelReward`)),re=s(o(f,`KarmaReward`),0,A(`labelKarmaReward`));(ne||re)&&r.push(A(`keptReward`));let ie={questName:l(o(f,`QuestName`)),description:l(o(f,`QuestDescription`)),questId:s(o(f,`ID`),0,A(`labelQuestId`))||void 0,lang:m,stationName:l(o(f,`StationName`)),charName:l(o(f,`CharName`)),charImage:l(o(f,`CharImage`))||`Tourist1`,startMode:h?`space`:g?`nearPoint`:`bar`,trigger:l(o(f,`RandomSpaceQuestTrigger`))===`planetScan`?`planetScan`:`warp`,chance:te,pointX:s(o(f,`RandomQuestX`),0,A(`labelPointX`)),pointY:s(o(f,`RandomQuestY`),0,A(`labelPointY`)),radius:s(o(f,`RandomQuestRadius`),50,A(`labelRadius`)),requiredQuestIds:l(o(f,`RequestedQuestIDCompleted`)).split(/[;,]/).map(e=>e.trim()).filter(Boolean).map(Number).filter(Number.isFinite),minKarma:_<=-101?null:_,maxKarma:ee>=101?null:ee,faction:[`GreatEmpire`,`TradeFederation`,`StellarAlliance`,`Independent`,`PirateClan`].includes(v)?v:`none`,factionMinRep:s(o(f,`FactionMinRep`),0,A(`labelFactionRep`)),ownStationRequired:c(o(f,`OwnStationRequired`),A(`labelOwnStation`)),reward:ne,karmaReward:re};ie.questId||delete ie.questId;let ae=u(o(a,`questParts`)),oe=new Map,se=ae.map(e=>{let t=O(),n=o(e,`questID`);return n!=null&&Number.isFinite(Number(n))&&!oe.has(Number(n))&&oe.set(Number(n),t.id),t}),ce=(e,t,r)=>e.map((e,i)=>{let a=A(`whereLine`,{where:t,n:i+1}),c=[];r&&l(o(e,`options`)).split(`;`).filter(e=>e.trim()).forEach(e=>{let t=e.split(`=`);if(t.length!==2){n.push(A(`lookChoice`,{where:a,piece:e}));return}let r=Number(t[0].trim());c.push({id:D(`ch`),text:t[1],targetStepId:oe.get(r)??`missing-${t[0].trim()}`})});let u=s(o(e,`showTimeSec`),5,A(`labelCloseTime`,{where:a}));return zn({speaker:l(o(e,`Name`)),portrait:l(o(e,`character`))||`Tourist1`,text:l(o(e,`text`)),closeAfterSec:u>=999999?Xt:u,choices:c})}),le=e=>{if(e==null||e===``)return null;let t=typeof e==`number`?e:parseInt(String(e).replace(/^0x|^#/i,``),16);return!Number.isFinite(t)||t>>>0==4294967295?null:`#${(t>>>0&16777215).toString(16).padStart(6,`0`)}`};ae.forEach((e,i)=>{let a=A(`whereStep`,{n:i}),d=se[i];d.name=l(o(e,`name`))||a,d.journal=l(o(e,`TODO`)),d.checkpoint=c(o(e,`isCheckPoint`),A(`labelCheckpoint`,{where:a})),d.dialogue=ce(u(o(e,`dialogText`)),a,!0);let f=u(o(e,`dialogTextRepeat`));f.length&&(d.reminder=ce(f,A(`whereReminder`,{where:a}),!1));let p=o(e,`notes`);Array.isArray(p)&&(d.notes=p.map(l));let m=t=>{let n=o(e,t);return Array.isArray(n)&&n.length?n.map(l):null},h=m(`buttons_task`),g=m(`buttons_task_hold`),_=m(`module_on_station`);h&&(d.buttonsTask=h),o(e,`buttons_task_order`)===!1&&(d.buttonsTaskOrder=!1),g&&(d.buttonsTaskHold=g),_&&(d.moduleOnStation=_),d.reminderEverySec=s(o(e,`repeatTextTimeSec`),999999999,A(`labelReminderInterval`,{where:a}));let ee=l(o(e,`completeAction`)).trim();ee.startsWith(`BUTTON_`)&&(ee=ee.slice(7),t.add(A(`fixButton`,{where:a}))),d.finishWhen=ee||null,d.failWhen=l(o(e,`failureActions`)).split(`;`).map(e=>e.trim().replace(/^BUTTON_/,``)).filter(Boolean),d.ships=u(o(e,`shipSpawn`)).map((e,t)=>{let r=A(`whereShip`,{where:a,n:t+1}),i=l(o(e,`shipModel`)).toLowerCase()||`ion`;gn(i)||n.push(A(`lookShip`,{where:r,value:i}));let u=l(o(e,`shipBehavior`))||`Trader`;yn.some(e=>e.key===u)||n.push(A(`lookBehaviour`,{where:r,value:u}));let d=l(o(e,`shipLevel`));d&&!vn.includes(d)&&n.push(A(`lookLevel`,{where:r,value:d}));let f=s(o(e,`distanceFromPlayer`),0,A(`labelDistance`,{where:r})),p=s(o(e,`spawnX`),0,`${r} X`),m=s(o(e,`spawnY`),0,`${r} Y`);return Bn({pilot:l(o(e,`Name`)),model:i,behaviour:u,level:vn.includes(d)?d:`Harmless`,autoLvl:c(o(e,`autoLVL`),A(`labelAutoLevel`,{where:r})),distance:f,x:p,y:m,placement:f>0||!p&&!m?`nearPlayer`:`position`,tint:le(o(e,`color`))})});let te=[];d.orders=u(o(e,`shipControl`)).map(e=>{let t=l(o(e,`shipBehavior`)),n=l(o(e,`ShipName`));return!t&&(n===`player`||xn(se,i,n)!==void 0)&&te.push(n),Vn({ship:n,target:l(o(e,`SetTarget`)),attack:c(o(e,`Attack`),A(`labelOrder`,{where:a})),destroy:c(o(e,`Destroy`),A(`labelOrder`,{where:a})),changeBehaviour:!!t,behaviour:t||`Enemy`})}),te.length&&t.add(A(`fixOrderBehaviour`,{where:a,ships:te.map(e=>`“${e}”`).join(`, `)}));let v=o(e,`task_on_station`);if(j(v)){let e=A(`whereMission`,{where:a}),r=l(o(v,`TargetShipType`));if(r&&!_n(r)){let i=gn(r);i?(t.add(A(`fixShipType`,{where:e,value:r,internal:i.internal})),r=i.internal):n.push(A(`lookShipType`,{where:e,value:r}))}let i=s(o(v,`Reward`),0,A(`labelCredits`,{where:e})),u=s(o(v,`Reputation`),0,A(`labelReputation`,{where:e}));d.mission=Hn({type:l(o(v,`Type`))||`PirateHunt`,homeStation:l(o(v,`HomeStation`)),story:c(o(v,`Story`),e),level:[`Low`,`Proven`,`Confidence`,`Ally`].includes(l(o(v,`Level`)))?l(o(v,`Level`)):`Low`,targetSystem:l(o(v,`TargetSystem`)),targetStation:l(o(v,`TargetStation`)),targetShipType:r||`Ion`,targetShipName:l(o(v,`TargetShipName`)),targetShipHull:s(o(v,`TargetShipHull`),1,A(`labelHull`,{where:e})),goods:l(o(v,`TargetGoods`))||`Water`,goodsCount:s(o(v,`TargetGoodsCount`),0,A(`labelCargo`,{where:e})),credits:i,reputation:u})}let ne=new Set([`name`,`todo`,`questid`,`ischeckpoint`,`dialogtext`,`dialogtextrepeat`,`repeattexttimesec`,`completeaction`,`failureactions`,`shipspawn`,`shipcontrol`,`task_on_station`,`notes`,...Cr]);Object.keys(e).filter(e=>!ne.has(e.toLowerCase())&&!e.endsWith(`Info`)).forEach(e=>r.push(A(`keptUnknownKey`,{key:e,where:a})))});let ue=u(o(a,`BarRumors`)).map(e=>({id:D(`rumor`),text:l(o(e,`text`)),scope:l(o(e,`type`))===`global`?`global`:`local`})),de=Un(ie.questName||A(`importedQuest`),{settings:{...ie,questName:ie.questName??``},steps:se,rumors:ue});de.meta.origin=`import`;let fe=de.versions[de.primaryLang];return Er(fe,a,hr(fe),wr),fe.steps.forEach(e=>e.orders.forEach(e=>{e.changeBehaviour||delete e._kept?.shipBehavior})),{kind:`ok`,mod:de,fixed:[...t],look:n,kept:r}}var Cr=[`buttons_task`,`buttons_task_order`,`buttons_task_hold`,`module_on_station`],wr={settings:[`settings`,{}],BarRumors:[`rumors`,{}],questParts:[`steps`,{dialogText:[`dialogue`,{}],dialogTextRepeat:[`reminder`,{}],shipSpawn:[`ships`,{}],shipControl:[`orders`,{}],task_on_station:[`mission`,{}]}]},Tr={Stars:[`stars`,{}],Planets:[`planets`,{}],Stations:[`stations`,{}]};function Er(e,t,n,r){e._layout=Object.keys(t);let i=e=>e in t?e:Object.keys(t).find(t=>t.toLowerCase()===e.toLowerCase()),a=new Set;for(let[o,s]of Object.entries(n)){let n=i(o);n!==void 0&&a.add(n);let c=n===void 0?void 0:t[n],l=r[o],u=l&&e[l[0]];if(l&&Array.isArray(c)&&Array.isArray(s)&&Array.isArray(u)){let e=c.filter(j);if(e.length===s.length){e.forEach((e,t)=>{j(s[t])&&u[t]&&Er(u[t],e,s[t],l[1])});continue}}if(l&&j(c)&&j(s)&&j(u)){Er(u,c,s,l[1]);continue}(c===void 0||JSON.stringify(c)!==JSON.stringify(s))&&((e._kept??={})[o]={written:s,value:c})}for(let n of Object.keys(t))!a.has(n)&&!Cr.includes(n)&&((e._extra??={})[n]=t[n])}function Dr(e,t,n,r,i){let a=Wn(A(`importedStars`));return a.meta.origin=`import`,a.stars=i(t(e,`Stars`)).map(e=>({id:D(`star`),name:r(t(e,`Name`)),x:n(t(e,`X`),0,A(`labelStarX`)),y:n(t(e,`Y`),0,A(`labelStarY`)),z:n(t(e,`Z`),0,A(`labelStarZ`)),security:r(t(e,`security`))||`Low`,type:r(t(e,`type`))})),a.planets=i(t(e,`Planets`)).map(e=>({id:D(`planet`),name:r(t(e,`Name`)),system:r(t(e,`system`)),type:r(t(e,`type`)),orbit:n(t(e,`dist`),100,A(`labelOrbit`)),moons:n(t(e,`sput`),0,A(`labelMoons`)),size:n(t(e,`size`),1,A(`labelSize`)),rings:n(t(e,`rings`),0,A(`labelRings`)),material:r(t(e,`mater1`))||null})),a.stations=i(t(e,`Stations`)).map(e=>({id:D(`station`),name:r(t(e,`Name`)),system:r(t(e,`StarSystem`)),bodyIndex:n(t(e,`PlanetID`),1,A(`labelPlanet`)),type:r(t(e,`type`))||`OrbitalDark`,faction:r(t(e,`Faction`))||`Independent`})),a.stars[0]?.name&&(a.meta.title=a.stars[0].name),a}var Or=`Quest150.json`,kr=`﻿{
  // exported from the 2022 editor, then edited by hand
  "settings": {
    "QuestName": "Smuggler's Run",
    "QuestDescription": "Quiet work, good pay.",
    "ID": 100040,
    "StationName": "Thunder Station",
    "Lang": "en",
    "isRandomStationQuest": false,
    "isRandomSpaceQuest": false,
    "CharName": "Marla",
    "CharImage": "Pirate2",
    "RequestedQuestIDCompleted": "",
    "Reward": 5000,
    "KarmaReward": 0,
  },
  "BarRumors": [ { "text": "Someone at Thunder Station pays well for quiet pilots.", "type": "local" } ],
  "questparts": [
    {
      "name": "Briefing", "TODO": "Talk to Marla.", "questID": 1, "isCheckPoint": true,
      "dialogText": [
        { "Name": "Marla", "character": "Pirate2", "text": "Four ways to do this. Pick one.", "showTimeSec": "99999999",
          "options": "2=Fly direct;3=Take the long way;2=Bribe the patrol;3=Walk away;" }
      ],
      "dialogTextRepeat": [ { "Name": "Marla", "character": "Pirate2", "text": "Still waiting.", "showTimeSec": 5, "options": null } ],
      "completeAction": "BUTTON_ACTION_DIALOG_COMPLETE"
    },
    {
      "name": "Direct", "TODO": "Fly to Sirius.", "questID": 2,
      "shipSpawn": [ { "Name": "Patrol", "shipModel": "Hawk", "shipLevel": "Novice", "shipBehavior": "Police", "distanceFromPlayer": 300, "color": "0xFFFFFFFF" } ],
      "completeAction": "ACTION_WARP_END_SYSTEM_Sirius",
      "task_on_station": { "Type": "PirateHunt", "HomeStation": "Thunder Station", "TargetShipType": "barracuda", "TargetShipName": "Vex", "Reward": 150000, "Reputation": 1, "Level": "Low", "Story": true }
    },
    {
      "name": "The long way", "TODO": "Dock at Cooper City.", "questID": 3,
      "completeAction": "ACTION_CLICK_STATION_Cooper City",
    },
  ]
}`,Ar=Object.assign({"/src/tabs/mods/data/library/community-humanity-at-war.json":cr,"/src/tabs/mods/data/library/owner-of-record.json":lr,"/src/tabs/mods/data/library/parcel-for-sirius.json":ur}),jr={},Mr=[...Object.values(Ar),...Object.values(jr)].toSorted((e,t)=>t.popularity-e.popularity),Nr=e=>Mr.find(t=>t.id===e);function Pr(e,t=[]){let n={entryId:e.id,entryTitle:e.title,author:e.author,licence:e.licence,popularity:e.popularity},r=[];for(let t of e.files){let e=Sr(t.text);e.kind===`ok`&&r.push(e.mod)}return rr(r,{id:`${e.id}@${e.version}`,title:e.title,author:e.author,summary:e.summary,version:e.version,tags:e.tags,origin:`community`,community:n,createdAt:e.updated,updatedAt:e.updated,favorite:!1,link:``,licence:`All rights reserved`,...e.requires?.length?{requires:e.requires}:{}},t)}async function Fr(e){if(!e.textures?.length)return[];let t=`/mods/${e.textureBase??``}`;return Promise.all(e.textures.map(async e=>{let[n,r]=await Promise.all([fetch(`${t}${e}.png`).then(e=>e.arrayBuffer()),fetch(`${t}${e}.xml`).then(e=>e.text())]);return{id:e,name:e,png:`data:image/png;base64,${or(new Uint8Array(n))}`,xml:r}}))}var Ir=new Set([`overview`,`steps`,`flow`,`rumors`,`test`,`translate`,`json`,`history`,`stars`,`planets`,`stations`,`build`,`map`]),Lr=e=>e.quests[0]?.id??e.stars?.id;function Rr(e,t){if(t===`stars`&&e.stars)return e.stars.id;if(e.quests.some(e=>e.id===t))return t;let n=Number(t);return Number.isInteger(n)&&n>=1?e.quests[n-1]?.id:void 0}function zr(e,t,n){let r=e.quests.find(e=>e.id===t),i=r?.versions[r.primaryLang]?.steps??[];if(i.some(e=>e.id===n))return n;let a=Number(n);return Number.isInteger(a)&&a>=0&&i[a]?.id||n}function Br(e,t){let n=t.split(`/`).filter(Boolean),r=n.length>1&&Ir.has(n[1])?Rr(e,n[0]):void 0,i=r??Lr(e),a=r?n.slice(1):n;return a[0]===`steps`&&a[1]&&(a[1]=zr(e,i,a[1])),{partId:i,path:a.join(`/`)}}function Vr(e,t,n){if(e.meta.origin===`game`&&e.meta.id.startsWith(`game-`)){let[r,i,...a]=n.split(`/`),o=e.quests.find(e=>e.id===t),s=r===`steps`&&i?o?.versions[o.primaryLang]?.steps.findIndex(e=>e.id===i)??-1:-1;return`/built-in/${Number(e.meta.id.slice(5))-1e5}${n?`/${s>=0?[`steps`,s,...a].join(`/`):n}`:``}`}let r=e.meta.community?.entryId;if(!r||e.meta.modified)return null;if(!t||!n)return`/community/${r}`;let i=e.quests.findIndex(e=>e.id===t),a=t===e.stars?.id?`stars`:i>=0?String(i+1):null;if(!a)return null;let o=Br(e,n);return`/community/${r}/${t===Lr(e)&&o.partId===t&&o.path===n?``:`${a}/`}${n}`}function Hr(e,t){let n=e.meta.community;if(!n||e.meta.modified)return;let r=t.find(e=>e.id===n.entryId);return r&&r.version!==e.meta.version?r:void 0}var Ur={id:`sample-long-haul`,title:`The Long Haul`,author:`Galaxy Genome Quest Editor team`,licence:`MIT`,source:`Written for the editor`,role:`default`,quest:{settings:{QuestName:`The Long Haul`,QuestDescription:`Mara Voss needs a cargo run across six systems, no questions asked.`,ID:7700001,StationName:`Thunder Station`,Lang:`en`,isRandomStationQuest:!1,isRandomSpaceQuest:!1,RandomQuestX:0,RandomQuestY:0,RandomQuestRadius:50,RandomSpaceQuestChance:.25,RandomSpaceQuestTrigger:`warp`,CharName:`Mara Voss`,CharImage:`Tourist1`,MinKarma:-101,MaxKarma:101,Faction:``,FactionMinRep:0,RequestedQuestIDCompleted:``,OwnStationRequired:!1,Reward:0,KarmaReward:0},BarRumors:[{text:`A courier at Thunder Station is looking for a pilot with a big cargo hold and no schedule.`,type:`local`}],questParts:[{name:`Mara: the job`,TODO:`Hear Mara Voss out at Thunder Station.`,questID:0,isCheckPoint:!1,dialogText:[{Name:`Mara Voss`,showTimeSec:8,text:`Six drops, six systems, one manifest nobody reads too closely.`,character:`Tourist1`,options:``},{Name:`Mara Voss`,showTimeSec:99999999,text:`Pay's good. In or out?`,character:`Tourist1`,options:`1=Take the job;0=Ask about the pay;`}],completeAction:`ACTION_DIALOG_COMPLETE`,dialogTextRepeat:[],repeatTextTimeSec:999999999,shipSpawn:[],shipControl:[],task_on_station:null,failureActions:``},{name:`Dock at Cooper City`,TODO:`Warp to Sirius and dock at Cooper City for the first drop.`,questID:1,isCheckPoint:!0,dialogText:[],completeAction:`ACTION_CLICK_STATION_Cooper City`,dialogTextRepeat:[],repeatTextTimeSec:999999999,shipSpawn:[],shipControl:[],task_on_station:null,failureActions:``},{name:`Ambush in Capella`,TODO:`Warp into Capella. A pirate drops out of warp with you. Destroy it.`,questID:2,isCheckPoint:!0,dialogText:[],completeAction:`ACTION_SHIP_DESTROYED_Draeg`,dialogTextRepeat:[],repeatTextTimeSec:999999999,shipSpawn:[{Name:`Draeg`,shipLevel:`Novice`,shipModel:`hawk`,distanceFromPlayer:400,spawnX:0,spawnY:0,shipBehavior:`Pirate`,autoLVL:!1,color:`0xFFFFFFFF`}],shipControl:[{ShipName:`Draeg`,SetTarget:`player`,shipBehavior:`Pirate`,Destroy:!1,Attack:!0}],task_on_station:null,failureActions:``},{name:`Dock at Qiufen Platform`,TODO:`Dock at Qiufen Platform in Capella to unload.`,questID:3,isCheckPoint:!1,dialogText:[],completeAction:`ACTION_CLICK_STATION_Qiufen Platform`,dialogTextRepeat:[],repeatTextTimeSec:999999999,shipSpawn:[],shipControl:[],task_on_station:null,failureActions:``},{name:`Choose the route`,TODO:`Pick a route out of Capella.`,questID:4,isCheckPoint:!1,dialogText:[{Name:`Mara Voss, on comms`,showTimeSec:99999999,text:`Two ways from here. Fast and quiet, or slow and safe.`,character:`Tourist1`,options:`5=Fast route, through The Wheel;6=Safe route, through Meridian City;`}],completeAction:`ACTION_DIALOG_COMPLETE`,dialogTextRepeat:[],repeatTextTimeSec:999999999,shipSpawn:[],shipControl:[],task_on_station:null,failureActions:``},{name:`Dock at The Wheel`,TODO:`Warp into LHS 1857 and dock at The Wheel.`,questID:5,isCheckPoint:!1,dialogText:[{Name:`Mara Voss, on comms`,showTimeSec:99999999,text:`Fast lane, quiet skies. Keep going.`,character:`Tourist1`,options:`7=Continue;`}],completeAction:`ACTION_CLICK_STATION_The Wheel`,dialogTextRepeat:[],repeatTextTimeSec:999999999,shipSpawn:[],shipControl:[],task_on_station:null,failureActions:``},{name:`Dock at Meridian City`,TODO:`Warp to Ross 720 and dock at Meridian City.`,questID:6,isCheckPoint:!1,dialogText:[{Name:`Mara Voss, on comms`,showTimeSec:99999999,text:`Slow lane, but nobody looks twice. Keep going.`,character:`Tourist1`,options:`7=Continue;`}],completeAction:`ACTION_CLICK_STATION_Meridian City`,dialogTextRepeat:[],repeatTextTimeSec:999999999,shipSpawn:[],shipControl:[],task_on_station:null,failureActions:``},{name:`Scan in GD 219`,TODO:`Warp into GD 219 and scan planet A6.`,questID:7,isCheckPoint:!0,dialogText:[],completeAction:`ACTION_SCAN_PLANET_A6`,dialogTextRepeat:[],repeatTextTimeSec:999999999,shipSpawn:[],shipControl:[],task_on_station:null,failureActions:``},{name:`Deliver at Xandar`,TODO:`Dock at Xandar to deliver the last crate and collect payment.`,questID:8,isCheckPoint:!1,dialogText:[{Name:`Mara Voss, on comms`,showTimeSec:6,text:`Last stop. Dock and I'll wire the rest.`,character:`Tourist1`,options:``}],completeAction:`ACTION_CLICK_STATION_Xandar`,dialogTextRepeat:[],repeatTextTimeSec:999999999,shipSpawn:[],shipControl:[],task_on_station:null,failureActions:``}]}},Wr={id:`sample-choice`,title:`A Hard Choice`,author:`Galaxy Genome Quest Editor team`,licence:`MIT`,source:`Editor template`,role:`default`,template:`choice`},M=e=>$(`lib.diagram_${e.replace(/\W+/g,`_`)}`),Gr={charName:`Harry`,charImage:`Tourist2`},Kr=[{key:`blank`,get name(){return $(`lib.template_blank`)},get description(){return $(`lib.template_blank_description`)},get diagram(){return[M(`Step`),M(`Step`)]},build:(e,t)=>Un(e,{settings:{stationName:t,...Gr},steps:[O({name:`Step 1`}),O({name:`Step 2`})],rumors:[]})},{key:`delivery`,get name(){return $(`lib.template_delivery`)},get description(){return $(`lib.template_delivery_description`)},get diagram(){return[M(`Talk`),M(`Fly`),M(`Dock`)]},build:(e,t)=>Un(e,{settings:{stationName:t,description:`I need something delivered, no questions asked.`,...Gr},steps:[O({name:`Briefing`,journal:`Take the parcel to Sirius.`,dialogue:[zn({speaker:`Harry`,portrait:`Tourist2`,text:`Sirius. Don’t open it.`})]}),O({name:`To Sirius`,journal:`Fly to Sirius.`,finishWhen:`ACTION_WARP_END_SYSTEM_Sirius`}),O({name:`Hand over`,journal:`Open the station menu at Cooper City.`,finishWhen:`ACTION_CLICK_STATION_Cooper City`,dialogue:[zn({speaker:`Harry`,portrait:`Tourist2`,text:`Good. We never met.`})]})],rumors:[]})},{key:`ambush`,get name(){return $(`lib.template_ambush`)},get description(){return $(`lib.template_ambush_description`)},get diagram(){return[M(`Fly`),M(`Pirates`),M(`Win`)]},build:(e,t)=>Un(e,{settings:{stationName:t,description:`Someone is raiding convoys near Wolf 359.`,...Gr},steps:[O({name:`Briefing`,journal:`Fly to Wolf 359.`,finishWhen:`ACTION_WARP_END_SYSTEM_Wolf 359`}),O({name:`Ambush`,journal:`Destroy the pirates.`,finishWhen:`NO_ENEMY`,ships:[Bn({pilot:`Hunter`,model:`hawk`,behaviour:`Enemy`}),Bn({pilot:`Jackal`,model:`wasp`,level:`Novice`,behaviour:`Enemy`})],orders:[Vn({ship:`Hunter`}),Vn({ship:`Jackal`})]}),O({name:`Report`,journal:`Report back.`,finishWhen:`ACTION_CLICK_STATION_${t}`})],rumors:[]})},{key:`choice`,get name(){return $(`lib.template_choice`)},get description(){return $(`lib.template_choice_description`)},get diagram(){return[M(`Offer`),[M(`Fight`),M(`Sneak`)],M(`Ending`)]},build:(e,t)=>{let n=O({name:`Fight`,journal:`Destroy the blockade.`,finishWhen:`NO_ENEMY`}),r=O({name:`Sneak`,journal:`Slip past to Ross 154.`,finishWhen:`ACTION_WARP_END_SYSTEM_Ross 154`}),i=O({name:`Ending`,journal:`Return to the station.`,finishWhen:`ACTION_CLICK_STATION_${t}`});n.dialogue=[zn({speaker:`Harry`,text:`Done. Head home.`,closeAfterSec:Xt,choices:[{id:D(`ch`),text:`Head home`,targetStepId:i.id}]})],r.dialogue=[zn({speaker:`Harry`,text:`You made it past. Head home.`,closeAfterSec:Xt,choices:[{id:D(`ch`),text:`Head home`,targetStepId:i.id}]})];let a=O({name:`The offer`,dialogue:[zn({speaker:`Harry`,text:`A blockade sits on the route. How do you want to do this?`,closeAfterSec:Xt,choices:[{id:D(`ch`),text:`Fight through`,targetStepId:n.id},{id:D(`ch`),text:`Sneak past`,targetStepId:r.id}]})]});return Un(e,{settings:{stationName:t,description:`A blockade has the Ross 154 lane shut. I need someone who can get through.`,...Gr},steps:[a,n,r,i],rumors:[]})}},{key:`space`,get name(){return $(`lib.template_space`)},get description(){return $(`lib.template_space_description`)},get diagram(){return[M(`Arrive`),M(`Encounter`)]},build:e=>Un(e,{settings:{startMode:`space`,trigger:`warp`,chance:.3,pointX:0,pointY:0,radius:60,charName:`Unknown signal`,charImage:`None`},steps:[O({name:`Signal`,journal:`Investigate the signal.`,dialogue:[zn({speaker:`Unknown signal`,portrait:`None`,text:`...help... anyone...`})]}),O({name:`Found them`,journal:`Stop near the drifting ship.`,finishWhen:`PLAYER_SHIP_STOP`,ships:[Bn({pilot:`Drifter`,model:`porter`,behaviour:`AllyAFK`})]})],rumors:[]})},{key:`job`,get name(){return $(`lib.template_job`)},get description(){return $(`lib.template_job_description`)},get diagram(){return[M(`Talk`),M(`Mission`),M(`Reward`)]},build:(e,t)=>Un(e,{settings:{stationName:t,description:`Word is you take hard jobs.`,...Gr},steps:[O({name:`Briefing`,journal:`Hear the job out.`,dialogue:[zn({speaker:`Harry`,portrait:`Tourist2`,text:`The job is on the missions board. Take it.`})]}),O({name:`The job`,journal:`Take the job at the missions board.`,mission:Hn({homeStation:t,targetShipName:`Vex`}),finishWhen:`CLICK_ACCEPT_STORY_MISSION`}),O({name:`Collect`,journal:`Collect the reward.`,finishWhen:`GET_STORY_REWARD`})],rumors:[]})}];function qr(e,t){return e.meta.id=t.id,e.meta.author=t.author,e.meta.credit={author:t.author,licence:t.licence},e}var Jr=e=>qr(Kr.find(t=>t.key===e.template).build(e.title,`Thunder Station`),e);function Yr(){let e=Jr(Wr);e.meta.updatedAt=Date.now()-936e5;let t=e.versions.en;t.steps[1].ships=[Bn({pilot:`Warden`,model:`barracuda`,behaviour:`Enemy`})],t.steps[1].finishWhen=`ACTION_SHIP_DESTROYED_Warden`,t.steps[3].checkpoint=!0,t.rumors=[{id:D(`rumor`),text:`A blockade has the Ross 154 lane locked down.`,scope:`local`}];let n=Sr(JSON.stringify(Ur.quest));if(n.kind!==`ok`)throw Error(`the-long-haul.json does not import`);return qr(n.mod,Ur),n.mod.meta.summary=`An example mod: a six-system cargo run for Mara Voss.`,n.mod.meta.updatedAt=Date.now()-1728e5,[e,n.mod]}var Xr=[[`Travel`,`compass`],[`Stations`,`landmark`],[`Planets`,`globe`],[`Ships`,`rocket`],[`Combat`,`crosshair`],[`Mining and cargo`,`pickaxe`],[`Dialogue and time`,`timer`],[`Your own station`,`home`],[`Screens and buttons`,`smartphone`],[`Game events`,`zap`]],Zr=e=>`conditions.category_${e.toLowerCase().replace(/\W+/g,`_`)}`,Qr=e=>$(Zr(e)),$r=Xr.map(([e,t])=>({name:e,icon:t,get label(){return Qr(e)},get hint(){return $(`${Zr(e)}_hint`)}})),N=(e,t,n,r)=>({action:e,category:t,param:n,keywords:r,get label(){return $(`conditions.${e}_label`)},get sentence(){return $(`conditions.${e}_sentence`)}}),ei=[`MissionTypeMining`,`MissionTypeFindGoods`,`MissionTypeCaravanHunt`,`MissionTypeIntimidate`,`MissionTypeBugHunt`,`MissionTypeContractMurder`,`MissionTypeTourist`,`MissionTypeCourier`,`MissionTypeMoneyHelp`,`MissionTypePirateHunt`,`MissionTypeTransferGoods`,`MissionRescue`],ti=`WarpAnalysis.ShieldsAnalysis.LegacyFirmware.AutomatonData.SecurityFirmware.Sulphur.Nickel.Iron.Manganese.Chromium.Phosphorus.Carbon.Vanadium.Selenium.Cadmium.Polonium.Germanium.Tellurium.WeaponParts.SensorFragment.ChemicalProcessors.MicroResistors.HeatExchanger.NanoCapacitors.ChemicalManipulators.ConductiveCeramics.FocusCrystals.MilitaryAlloys.ConductivePolymers.ShieldEmitters.HeatDispersionPlate.AutomatonComponent`.split(`.`),ni=[N(`ACTION_WARP_END_SYSTEM_`,`Travel`,`system`,`warp jump reach`),N(`ACTION_WARP_IN_SYSTEM_`,`Travel`,`system`),N(`ACTION_WARP_END`,`Travel`,`none`),N(`ACTION_WARP_BEGIN`,`Travel`,`none`),N(`SCREEN_ACTION_ROUTE_SYSTEM_`,`Travel`,`system`,`map`),N(`ACTION_PLAYER_DIST_`,`Travel`,`distance`),N(`PLAYER_SHIP_STOP`,`Travel`,`none`),N(`ACTION_NEBULA_`,`Travel`,`nebula`),N(`ACTION_GATES_REPAIR`,`Travel`,`none`),N(`ACTION_CLICK_STATION_`,`Stations`,`station`,`open station menu`),N(`SCREEN_PORT_BAR`,`Stations`,`none`),N(`CLICK_ACCEPT_STORY_MISSION`,`Stations`,`none`),N(`GET_STORY_REWARD`,`Stations`,`none`),...ei.flatMap(e=>[N(`ACTION_${e}Start`,`Stations`,`none`),N(`ACTION_${e}COMPLETE`,`Stations`,`none`)]),N(`ACTION_MissionTypeIllegal`,`Stations`,`none`),N(`SCREEN_PORT_SHIPYARD`,`Stations`,`none`),N(`SCREEN_PORT_MODULES`,`Stations`,`none`),N(`SCREEN_PORT_MARKET`,`Stations`,`none`),N(`SCREEN_PORT_MISSIONS`,`Stations`,`none`),N(`SCREEN_PORT_SERVICE`,`Stations`,`none`),N(`SCREEN_PORT_DISCOVERIES`,`Stations`,`none`),N(`ACTION_CLICK_PLANET_`,`Planets`,`planet`),N(`ACTION_SCAN_PLANET_`,`Planets`,`planet`),N(`ACTION_SCAN_PLANET_TYPE_`,`Planets`,`planetType`),N(`LAND_ON_PLANET_`,`Planets`,`planet`),N(`LEAVE_PLANET`,`Planets`,`none`,`take off`),N(`ACTION_SHIP_DESTROYED_`,`Ships`,`pilot`,`kill`),N(`ACTION_SELECT_SHIP_`,`Ships`,`pilot`),N(`ACTION_SHIP_WARPED_`,`Ships`,`pilot`),N(`SHIP_STOP_`,`Ships`,`shipStop`),N(`ACTION_WARP_TRACK_`,`Ships`,`pilot`),N(`NO_ENEMY`,`Combat`,`none`,`destroy all`),N(`ACTION_ATTACK`,`Combat`,`none`),N(`ACTION_CHAFF_LAUNCHER`,`Combat`,`none`),N(`ACTION_HEATSINK`,`Combat`,`none`),N(`ACTION_MISSILE_DEF`,`Combat`,`none`),N(`ACTION_SHIELD_CELL`,`Combat`,`none`),N(`ACTION_FIGHTERS`,`Combat`,`none`),N(`ACTION_SILENT_MODE`,`Combat`,`none`),N(`COLLECT_CARGO_`,`Mining and cargo`,`cargo`),N(`COLLECT_MATERIAL_`,`Mining and cargo`,`material`),N(`ACTION_MATERIAL_BELT_`,`Mining and cargo`,`material`),N(`PLANET_MINING_DONE_`,`Mining and cargo`,`material`),N(`PLANET_MINING_END`,`Mining and cargo`,`none`),N(`ACTION_SEISMIC_CHRG_`,`Mining and cargo`,`seismic`),N(`ACTION_SEISMIC_BOOM_S`,`Mining and cargo`,`none`),N(`ACTION_DIALOG_COMPLETE`,`Dialogue and time`,`none`),N(`TIME_TICK_`,`Dialogue and time`,`seconds`,`timer wait`),N(`OWNSTATION_UPGRADE_BAR`,`Your own station`,`none`),N(`OWNSTATION_UPGRADE_TRADE`,`Your own station`,`none`),N(`SCREEN_OWNSTATION`,`Your own station`,`none`),...`SCREEN_GALAXY_MAP.SCREEN_ACTION_MAP_ROUTE.SCREEN_GALAXY_MAP_FILTERS.SCREEN_MAP_BOOKMARKS.SCREEN_MAP_BOOKMARK_ADD.SCREEN_MODULES.SCREEN_SYSTEM_OBJECTS.SCREEN_SYSTEM_OBJECTS_MAP.SCREEN_CARGO.SCREEN_MISSIONS_SHIP.SCREEN_REPAIR_SHIP.SCREEN_SPECS.SCREEN_FLEET_SHIP.SCREEN_PLANET_INFO.SCREEN_ACTION_REPAIR_ALL.SCREEN_ACTION_REFUEL.SYS_OBJ_SELECT_SHIP.SYS_OBJ_SELECT_PLANET.SYS_OBJ_SELECT_STATION.SYS_OBJ_SELECT_CARGO.ACTION_AUTOPILOT.ACTION_FLIGHT_ASSIST.ACTION_WARP_JUMP.ACTION_PLANET_SCAN.ACTION_PLANET_LANDING.ACTION_SPECTRUM.ACTION_POWER_SYS.ACTION_POWER_WEP.ACTION_POWER_ENG.ACTION_BOOST.ACTION_BRAKE.ACTION_FIRE.ACTION_QUICKSAVE.ACTION_SETTINGS.ACTION_SHOW_SHIP_MENU.ACTION_SHOW_STATION_MENU.CLICK_BUY_GREEN_GOODS.CLICK_SELL_GOODS_WITH_PROFIT.CLICK_SELECT_ENEMY.CLICK_TURN_ON_MODULE.CLICK_CHANGE_MODULE_PRIORITY.PLANET_MINING.PLANET_TAKEOFF.SHIPSHOP.MODULESSHOP.ENGINEER_SCREEN.GARAGE_SCREEN.ENGINE_LEFT.ENGINE_RIGHT.ACTION_FN1.ACTION_FN2.ACTION_FN3.ACTION_ZOOMSWITCH.DRONE_COLLECTORS.SCREEN_ACTION_MAP_ADD_POINT.ACTION_SHOW_EXTERNAL.ACTION_BOTTOM_MENU.ACTION_HELP.ACTION_ACHIVES.ACTION_SELECT_PLANET_WITH_STATION.shipsObjects.planetsObjects.RESCUE_SCREEN.ACHIVs.LEADER_BOARD_PLANETS.LEADER_BOARD_SYSTEMS.LEADER_BOARD_BATTLES.PLANET_LEFT.PLANET_RIGHT.PLANET_ENGINES.PLANET_MOTOR_MODE.CLICK_GREEN_GOODS.CLICK_RED_GOODS.CLICK_SELL_GREEN_GOODS.CLICK_SHIPYARD_MODULES_SHIELDS.CLICK_SHIPYARD_MODULES_SHIELDS_2D.ACTION_SHIPYARD_MODULES_SHIELDS_2D_BUY`.split(`.`).map(e=>N(e,`Screens and buttons`,`none`)),...`ACTION_MISSION_HUNT_COMPLETE.ACTION_MISSION_RESCUE_COMPLETE.ACTION_MISSION_BUGHUNT_COMPLETE.ACTION_MISSION_ILLEGAL_COMPLETE.ACTION_PIRATE_SPAWN.ACTION_CARAVAN_SPAWN.MINING_PIRATE_SPAWN.SCANNED_ATTACKED_BY_PIRATE.EVENT_SPAWN_PIRATES.EVENT_END_PIRATES.EVENT_SPAWN_ZENTARKS.EVENT_END_ZENTARKS.EVENT_SPAWN_WRECK.EVENT_SPAWN_REPAIR.EVENT_SPAWN_REFUEL.EVENT_OWNSTATION_PIRATES.EVENT_END_OWNSTATION_PIRATES.EVENT_SPAWN_NPC_KILLTARGET.EVENT_SPAWN_PIRATE_MISSION.EVENT_SPAWN_PIRATEvsNPC.EVENT_SPAWN_PIRATEvsLAW.EVENT_SPAWN_ANGLERvsNPC.EVENT_SPAWN_BUGHUNT.EVENT_ACTIVATE_PIRATES.EVENT_ACTIVATE_PIRATE_MISSION.EVENT_ACTIVATE_REPAIR.EVENT_ACTIVATE_REFUEL.EVENT_ACTIVATE_WRECK.EVENT_ACTIVATE_PIRATEvsNPC.EVENT_ACTIVATE_ANGLERvsNPC.EVENT_ACTIVATE_PIRATEvsLAW.EVENT_ACTIVATE_MURDERCONTRACT.EVENT_ACTIVATE_INTIMIDATE.EVENT_ACTIVATE_ALIENBUGS.EVENT_END_PIRATEvsNPC.EVENT_END_ANGLERvsNPC.EVENT_END_PIRATEvsLAW.WARP_ALIEN_HOOK`.split(`.`).map(e=>N(e,`Game events`,`none`))];function ri(e){let t=e.startsWith(`BUTTON_`)?e.slice(7):e,n=null;for(let e of ni)(e.param===`none`?t===e.action:t.startsWith(e.action)&&t.length>e.action.length)&&(!n||e.action.length>n.action.length)&&(n=e);return{def:n,param:n&&n.param!==`none`?t.slice(n.action.length):``,raw:e}}function ii(e,t){return e.param===`none`?e.action:e.action+t}var ai=`SCREEN_ACTION_ROUTE_SYSTEM_None`;function oi(e){if(!e)return!1;let{def:t,param:n}=ri(e);return!!t&&[`system`,`station`,`planet`].includes(t.param)&&n===`None`}var si=e=>e.orders.some(e=>e.ship===`player`&&e.destroy);function ci(e){if(!e)return $(`conditions.notSet`);if(oi(e))return $(`conditions.never`);let{def:t,param:n}=ri(e);if(!t)return e;if(t.param===`shipStop`){let[e,t]=n.split(`_at_`);return $(`conditions.shipReaches`,{pilot:e||`?`,place:t===`player`?$(`conditions.thePlayer`):t||`?`})}let r=t.action===`ACTION_CLICK_STATION_`&&n===`OWN`?$(`conditions.ownStation`):n,i=t.sentence.replace(`{p}`,r);return i.charAt(0).toUpperCase()+i.slice(1)}var li=e=>!!(e.buttonsTask||e.buttonsTaskOrder===!1||e.buttonsTaskHold||e.moduleOnStation),ui=e=>e.charAt(0).toLowerCase()+e.slice(1);function di(e){let t=e=>e.replace(/^BUTTON_/,``),n=e.buttonsTaskHold?.map(e=>{let n=`conditions.control_${t(e)}`,r=$(n);return r===n?ui(ci(t(e))):r}),r=n?n.length>1?$(`conditions.holdTogether`,{controls:n.join($(`conditions.and`))}):$(`conditions.hold`,{control:n[0]}):e.buttonsTask&&e.buttonsTask.length>1?$(e.buttonsTaskOrder===!1?`conditions.allAnyOrder`:`conditions.allInOrder`,{list:e.buttonsTask.map(e=>ui(ci(t(e)))).join(e.buttonsTaskOrder===!1?`, `:$(`conditions.then`))}):ci(e.finishWhen);return e.moduleOnStation?`${r}. ${$(`conditions.shipyardOffers`,{modules:e.moduleOnStation.join(`, `)})}`:r}var fi=/^(.+) ([^ ][a-z])-([^ ][a-z]) ([B-E])(\d+)$/,pi=e=>t=>!!e?.has(t)||Zt.some(e=>e.name===t)||Qt.some(e=>e.system===t)||fi.test(t),mi=e=>Qt.some(t=>t.name===e),hi=(e,t)=>t?!!$t[t]?.some(t=>t.kind===`Planet`&&t.name===e):Object.values($t).some(t=>t.some(t=>t.kind===`Planet`&&t.name===e)),gi=e=>[...new Set(e)].sort(),_i=new WeakMap;function vi(e){let t=_i.get(e);if(t)return t;let n=e.stars,r={systems:gi(n?.stars.map(e=>e.name)??[]),stations:gi(n?.stations.map(e=>e.name)??[]),planets:gi(n?.planets.map(e=>e.name)??[]),quests:gi(e.quests.flatMap(e=>{let t=e.versions[e.primaryLang]?.settings.questId;return t===void 0?[]:[String(t)]}))};return _i.set(e,r),r}var yi=(e,t,n)=>{let r=vi(e);return t===`quest`?r.quests.includes(n):t===`system`?r.systems.includes(n):t===`station`?r.stations.includes(n):t===`planet`?r.planets.includes(n):r.systems.includes(n)||r.stations.includes(n)||r.planets.includes(n)},bi=e=>({modId:e.meta.id,title:e.meta.title,...e.meta.version?{version:e.meta.version}:{},...e.meta.community?{entryId:e.meta.community.entryId}:{}}),xi=(e,t)=>e.modId===t.meta.id||!!e.entryId&&t.meta.community?.entryId===e.entryId;function Si(e){let t=[],n=(e,n,r,i)=>{n&&n!==`OWN`&&n!==`player`&&t.push({kind:e,name:n,path:r,field:i})};e.settings.startMode===`bar`&&n(`station`,e.settings.stationName,`overview`,`stationName`);for(let t of e.settings.requiredQuestIds)t!==0&&(t<100002||t>100044)&&n(`quest`,String(t),`overview`,`requiredQuestIds`);for(let t of e.steps){let e=`steps/${t.id}`;for(let[r,i]of[[t.finishWhen,`finishWhen`],...t.failWhen.map(e=>[e,`failWhen`])]){if(!r)continue;let{def:t,param:a}=ri(r);(t?.param===`system`||t?.param===`station`||t?.param===`planet`)&&n(t.param,a,e,i),t?.param===`shipStop`&&n(`any`,a.split(`_at_`)[1],e,i)}let r=t.mission;r&&(n(`station`,r.homeStation,`${e}/mission`,`homeStation`),n(`station`,r.targetStation,`${e}/mission`,`targetStation`),n(`system`,r.targetSystem,`${e}/mission`,`targetSystem`));for(let r of t.orders)n(`any`,r.target,`${e}/orders/${r.id}`,`target`)}return t}function Ci(e,t,n=pi()){let r=t.filter(t=>t.meta.id!==e.meta.id),i=e.meta.requires??[],a=new Map;for(let t of e.quests){let o=t.versions[t.primaryLang];if(o)for(let t of Si(o)){if(yi(e,t.kind,t.name)||(t.kind===`system`||t.kind===`any`)&&n(t.name)||(t.kind===`station`||t.kind===`any`)&&mi(t.name)||(t.kind===`planet`||t.kind===`any`)&&hi(t.name))continue;let o=r.filter(e=>yi(e,t.kind,t.name)),s=o.find(e=>i.some(t=>xi(t,e)))??o.find(e=>e.meta.favorite)??o[0];if(!s)continue;let c=a.get(s.meta.id)??{requirement:i.find(e=>xi(e,s))??bi(s),source:s,uses:[]};c.uses.push(t),a.set(s.meta.id,c)}}return[...a.values()]}function wi(e,t,n,r={}){let i=r.system,a=e===`system`?r.catalogue??Zt.map(e=>({name:e.name,x:e.x,y:e.y,security:e.security})):e===`station`?Qt.filter(e=>!i||e.system===i).map(e=>({name:e.name,system:e.system,faction:e.faction})):i?($t[i]??[]).filter(e=>e.kind===`Planet`&&e.name).map(e=>({name:e.name,system:i,type:e.type})):[],o=t=>{let n=t.stars;return n?e===`system`?n.stars.map(e=>({name:e.name,x:e.x,y:e.y,security:e.security,mod:t})):e===`station`?n.stations.filter(e=>!i||e.system===i).map(e=>({name:e.name,system:e.system,faction:e.faction,mod:t})):n.planets.filter(e=>!i||e.system===i).map(e=>({name:e.name,system:e.system,type:e.type,mod:t})):[]},s=t?o(t):[],c=new Set([...a,...s].map(e=>e.name));return{game:a,own:s,others:n.filter(e=>e.meta.id!==t?.meta.id).map(e=>({mod:e,options:o(e).filter(e=>!c.has(e.name))})).filter(e=>e.options.length)}}function Ti(e,t){let n=new Set(e),r=[...e];for(;r.length;){let e=r.pop(),i=t.find(t=>t.meta.id===e);for(let e of i?.meta.requires??[]){let i=t.find(t=>t.meta.id===e.modId)??t.find(t=>xi(e,t));i&&!n.has(i.meta.id)&&(n.add(i.meta.id),r.push(i.meta.id))}}return[...n]}var Ei=[(e,t)=>{let n=e.meta;if(!n||!Array.isArray(e.quests)||n.requires)return e;let r=Ci(e,t.filter(e=>e.meta));return r.length?{...e,meta:{...n,requires:r.map(e=>e.requirement)}}:e}],Di=Ei.length+1;function Oi(e,t=Ei,n=[]){let r=e.schema??1,i=e.mod;for(let e=r;e<=t.length;e++)i=t[e-1](i,n);return{...e,mod:i,schema:Math.max(r,t.length+1)}}var ki=`gg-editor`,Ai=1,P=e=>new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error)});function ji(e=ki,t=globalThis.indexedDB){if(!t)return Promise.reject(Error(`IndexedDB is not available`));let n=t.open(e,Ai);return n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(`mods`)||e.createObjectStore(`mods`,{keyPath:`mod.meta.id`}),e.objectStoreNames.contains(`textures`)||e.createObjectStore(`textures`),e.objectStoreNames.contains(`history`)||e.createObjectStore(`history`,{keyPath:`id`}).createIndex(`modId`,`modId`),e.objectStoreNames.contains(`meta`)||e.createObjectStore(`meta`)},P(n)}function Mi(e,t,n,r){return new Promise((i,a)=>{let o=e.transaction(t,n),s,c;o.oncomplete=()=>i(s),o.onerror=()=>a(c??o.error),o.onabort=()=>a(c??o.error),Promise.resolve().then(()=>r(o)).then(e=>{s=e},e=>{c=e;try{o.abort()}catch{}})})}var F=(e,t,n)=>P(e.objectStore(t).get(n)),I=(e,t,n,r)=>P((r?e.objectStore(t).index(r):e.objectStore(t)).getAll(n)),L=(e,t,n,r)=>P(e.objectStore(t).put(n,r)),R=(e,t,n)=>P(e.objectStore(t).delete(n)),z=2048,B=43.74,Ni=(e,t)=>(t-e.cx)*e.scale+e.W/2,Pi=(e,t)=>(e.cz-t)*e.scale+e.H/2,Fi=(e,t)=>(t-e.W/2)/e.scale+e.cx,Ii=(e,t)=>e.cz-(t-e.H/2)/e.scale,Li=e=>e.W/e.scale,Ri=(e,t)=>e/t,zi=e=>e?75:150,Bi=2e5,Vi=(e,t)=>Math.max(e/Bi,Math.min(t,40)),Hi={x0:-1025*B,x1:1022*B,z0:-456*B,z1:1591*B};function Ui(e){return{...e,cx:Math.min(Hi.x1,Math.max(Hi.x0,e.cx)),cz:Math.min(Hi.z1,Math.max(Hi.z0,e.cz))}}function Wi(e){let t=120/e;return B*2**Math.ceil(Math.log2(t/B))}function Gi(e,t,n,r){let i=Fi(e,t),a=Ii(e,n),o=Vi(e.W,r);return Ui({...e,scale:o,cx:i-(t-e.W/2)/o,cz:a+(n-e.H/2)/o})}function Ki(e,t,n){return Ui({...e,cx:e.cx-t/e.scale,cz:e.cz+n/e.scale})}function qi(e,t,n,r,i){let a=Vi(e.W,t.scale*n/t.d);return Ui({...e,scale:a,cx:t.wx-(r-e.W/2)/a,cz:t.wz+(i-e.H/2)/a})}var Ji=.18,Yi=Ji*.6,Xi=Ji*3,Zi=(e,t,n,r=1)=>({to:[e,t,Math.log(n)],v:[0,0,0],speed:r});function Qi(e,t,n){n=Math.min(.05,n);let r=[e.cx,e.cz,Math.log(e.scale)],i=t.to[2]>r[2],a=0;for(let o=0;o<3;o++){let s=t.speed/(o<2?Ji:i?Xi:Yi),c=r[o]-t.to[o];t.v[o]=(t.v[o]-s*s*c*n)/(1+2*s*n+s*s*n*n),r[o]+=t.v[o]*n,a=Math.max(a,Math.abs(r[o]-t.to[o])/(o===2?5e-4:.5/e.scale))}return a<=1?{camera:Ui({...e,cx:t.to[0],cz:t.to[1],scale:Vi(e.W,Math.exp(t.to[2]))}),done:!0}:{camera:Ui({...e,cx:r[0],cz:r[1],scale:Math.exp(r[2])}),done:!1}}var $i=class{x;p=0;buf=[];constructor(e){this.x=(e<=0?-e+1:e)>>>0}byte(){return this.x=this.x*16807%2147483647,this.x%256}random(){for(this.p=(this.p+1)%2e5;this.buf.length<=this.p;){let e=this.byte(),t=this.byte(),n=this.byte(),r=this.byte();this.buf.push((r<<24|e<<16|t<<8|n)>>>0)}return(this.buf[this.p]*.999999999999998+1e-15)/4294967295}float(e,t){return this.random()*(t-e)+e}integer(e,t){return Math.floor(this.float(e,t))}},ea=1e4,ta=Math.PI/6,na=2e4;function ra(e){return e=Math.imul(e^e>>>15,2246822507),e=Math.imul(e^e>>>13,3266489909),(e^e>>>16)>>>0}function ia(e,t){let n=e/B+1025,r=1591-t/B,i=Math.floor(n),a=Math.floor(r);return`${i},${a},${Math.min(99,Math.round((n-i)*100))},${Math.min(99,Math.round((r-a)*100))}`}var aa=class{side=null;zones=null;cache=new Map;starTotal;real=new Map;starTable;anchors;constructor(e,t){this.starTable=e,this.anchors=t,this.starTotal=e.reduce((e,t)=>e+t[1],0)}setMaps(e,t){this.side=e,this.zones=t,this.cache.clear()}setReal(e){this.real=new Map;let t=new Set;for(let[n,r]of e){let e=ia(n,r);if(t.has(e))continue;t.add(e);let i=n/B+1025,a=1591-r/B,o=(a|0)*z+(i|0),s=this.real.get(o);s||this.real.set(o,s=[]),s.push([i,a])}this.cache.clear()}catalogueInCell(e,t){return this.real.get(t*2048+e)||[]}starGetType(e){let t=e.float(0,this.starTotal),n=0,r=0;for(let e of this.starTable){if(r+=e[1],t>=n&&t<=r)return e;n+=e[1]}return this.starTable[this.starTable.length-1]}starByZone(e,t,n,r){for(;;){let i=this.starGetType(e),a=i[2];if(a===`NoZone`)return i;let o=a===`Center`?t:a===`OuterArmSide`?n:a===`AnomalyZones`?r:-1;if(e.integer(0,255)<=o||e.integer(0,255)<25)return i}}sectorId(e,t){let n=Math.PI-Math.atan2(-(1591-t),1025-e);n<0&&(n+=Math.PI*2);let r=Math.trunc(n/ta),i=Math.trunc(Math.hypot(1025-e,1591-t));i=Math.trunc(i/(ea/B));let a=r*8+i;return a>=this.anchors.sectors.length?0:a}sectorName(e,t){let n=this.sectorId(e,t),r=this.anchors.x[n]-e,i=this.anchors.y[n]-t,a=r<0&&i>0?4:r>0&&i>0?1:r<0&&i<0?3:r>0&&i<0?2:1,o=Math.abs(r),s=Math.abs(i),c=e=>String.fromCharCode((e/26|0)+65)+String.fromCharCode(e%26+97);return{zone:this.anchors.sectors[n],sector:`${c(o)}-${c(s)} ${String.fromCharCode(a+65)}`}}cellStars(e,t,n=1){if(!this.side||!this.zones||e<0||t<0||e>=2048||t>=2048)return[];let r=t*z+e,i=n>=1?r*64:r*64+Math.min(63,Math.round(1/n)),a=this.cache.get(i);if(a)return a;let o=this.side[r];if(!o)return[];let s=new $i(e*1e4+t),c=this.zones[r*3],l=this.zones[r*3+1],u=this.zones[r*3+2],d=1/o,f=this.catalogueInCell(e,t),p=this.sectorName(e,t),m=n>=1?1/0:Math.max(1,Math.round(o*o*n)),h=e+d/2,g=t,_=[];for(let n=0;n<o*o&&_.length<m;n++){let r=h+s.float(0,d/1.3),i=g+s.float(0,d/1.3),a=!1;for(let[e,t]of f)if(d*d/2>(e-r)**2+(t-i)**2){a=!0;break}if(!a){let a=this.starByZone(s,c,l,u);_.push({x:(r-1025)*B,z:(1591-i)*B,type:a[4],colour:a[3],fuel:!!a[5],raw:a[0],name:`${p.zone} ${p.sector}${n}`,seed:((e&4095)<<20)+((t&4095)<<8)+(f.length+n&255)>>>0})}h+=d,h>e+1&&(h=e+d/2,g+=d)}if(this.cache.size>na){let e=this.cache.size>>1;for(let t of this.cache.keys())if(this.cache.delete(t),--e<=0)break}return this.cache.set(i,_),_}};async function oa(e){let t=async(e,t)=>{let n=new Image;n.src=e,await n.decode();let r=document.createElement(`canvas`);r.width=r.height=z;let i=r.getContext(`2d`,{willReadFrequently:!0});i.drawImage(n,0,0);let a=i.getImageData(0,0,z,z).data,o=new Uint8Array(z*z*t);for(let e=0;e<z*z;e++)for(let n=0;n<t;n++)o[e*t+n]=a[e*4+n];return o},[n,r]=await Promise.all([t(`${e}data/side.webp`,1),t(`${e}data/zones.webp`,3)]);return{side:n,zones:r}}var sa=e(n(),1);function ca(e){let t=e.systems.filter(e=>e[5]),n=new Map(e.types),r=new aa(e.starTable,e.sectorAnchors);return r.setReal(t.map(e=>[e[1],e[2]])),{data:e,reachable:t,byName:new Map(e.systems.map(e=>[e[0],e])),colourOf:e=>n.get(e)??n.get(`M-RedDwarf`)??`#cf3a38`,generator:r}}var la=null,ua=null,da=null,fa=null,pa=0,ma=new Set,ha=()=>{pa++,ma.forEach(e=>e())},ga=()=>la;function _a(){return ua??=fetch(`/mods/data/galaxy.json`).then(e=>{if(!e.ok)throw Error(`galaxy.json ${e.status}`);return e.json()}).then(e=>(la=ca(e),da&&la.generator.setMaps(da.side,da.zones),ha(),la)).catch(e=>{throw ua=null,e}),ua}function va(){return fa??=oa(`/mods/`).then(e=>{da=e,la?.generator.setMaps(e.side,e.zones),ha()}).catch(e=>{throw fa=null,e}),fa}function ya(){let e=sa.useSyncExternalStore(e=>(ma.add(e),()=>ma.delete(e)),()=>pa);return{galaxy:la,maps:da,version:e}}var ba=600,xa=e=>Math.max(.35,Math.min(2,2*ba/Li(e))),Sa=`rgba(188,219,230,.78)`;function Ca(e,t){let n=Wi(t.scale),r=Math.floor(Fi(t,0)/n)*n,i=Fi(t,t.W),a=Math.floor(Ii(t,t.H)/n)*n,o=Ii(t,0);e.lineWidth=1,e.font=`11px "JetBrains Mono", monospace`,e.fillStyle=`#3f6a78`;for(let a=r;a<=i;a+=n){let n=Math.round(Ni(t,a))+.5;e.strokeStyle=a===0?`rgba(30,147,166,.55)`:`rgba(23,113,128,.22)`,e.beginPath(),e.moveTo(n,0),e.lineTo(n,t.H),e.stroke(),e.fillText(String(Math.round(a)),n+4,t.H-8)}for(let r=a;r<=o;r+=n){let n=Math.round(Pi(t,r))+.5;e.strokeStyle=r===0?`rgba(30,147,166,.55)`:`rgba(23,113,128,.22)`,e.beginPath(),e.moveTo(0,n),e.lineTo(t.W,n),e.stroke(),e.fillText(String(Math.round(r)),6,n-5)}}function wa(e,t,n){e.save(),e.strokeStyle=`rgba(53,224,245,.18)`,e.lineWidth=1,e.beginPath();for(let[r,i]of n)e.lineTo(Ni(t,r),Pi(t,i));e.closePath(),e.stroke(),e.restore()}function Ta(e,t,n,r,i=1){let a=[],o=new Map;for(let e of n){let n=Ni(t,e.x),r=Pi(t,e.z);if(n<-40||n>t.W+40||r<-40||r>t.H+40)continue;a.push(e);let i=o.get(e.colour);i||o.set(e.colour,i=[]),i.push(n,r)}e.globalAlpha=i;for(let[t,n]of o){e.fillStyle=t,e.beginPath();for(let t=0;t<n.length;t+=2)e.moveTo(n[t]+r,n[t+1]),e.arc(n[t],n[t+1],r,0,6.283);e.fill()}return e.globalAlpha=1,a}var Ea=6,Da=10,Oa=.2,ka=60;function Aa(e,t,n){let r=e.measureText(t).width;if(r<=n)return{w:r,lines:1};let i=ja(e,t,n);return{w:Math.max(...i.map(t=>e.measureText(t).width)),lines:i.length}}function ja(e,t,n){let r=[];for(let i of t.split(/(?<=[:,] )/)){let t=r.length-1;t>=0&&e.measureText(r[t]+i).width<=n?r[t]+=i:r.push(i)}return r.map(e=>e.trimEnd())}var Ma=class{cells=new Set;list=[];drawn=new Set;settledAt=0;settledX=0;settledZ=0;clear(){this.cells.clear(),this.list=[]}resettle(){this.settledAt=0}add(e){this.list.push(e)}claim(e,t,n){let r=Math.floor((t-9)/Da)+4096,i=Math.floor((t+2)/Da)+4096,a=Math.floor(e/Ea)+4096,o=Math.floor((e+n)/Ea)+4096;for(let e=r;e<=i;e++)for(let t=a;t<=o;t++)if(this.cells.has(e*8192+t))return!1;for(let e=r;e<=i;e++)for(let t=a;t<=o;t++)this.cells.add(e*8192+t);return!0}draw(e,t){let n=[Fi(t,t.W/2),Ii(t,t.H/2)],r=!this.settledAt||Math.abs(t.scale-this.settledAt)>this.settledAt*Oa||Math.hypot(n[0]-this.settledX,n[1]-this.settledZ)>Li(t)*Oa;this.list.sort((e,t)=>e.rank-t.rank);let i=new Set;e.globalAlpha=1,e.font=`11px "JetBrains Mono", monospace`;for(let{px:n,py:a,rank:o,key:s,text:c,colour:l,always:u,leftOf:d,pill:f}of this.list){let p=e.measureText(c).width,m=d!==void 0&&n+10+p>t.W-ka,h=m&&d-p-10>=0,g=h?d-p-10:n,_=m&&!h?ja(e,c,t.W-n-ka):[c];if(!(!r&&o>1&&!this.drawn.has(s))){if(!this.claim(g-8,a+4,p+18)&&!u){this.claim(g-8,a+4,17);continue}if(i.add(s),f){let t=Math.max(..._.map(t=>e.measureText(t).width));e.fillStyle=`#04060e`,e.strokeStyle=`rgba(120,150,170,.35)`,e.lineWidth=1,e.beginPath(),e.roundRect(g+5,a-8,t+10,_.length*13+3,3),e.fill(),e.stroke()}e.fillStyle=l,_.forEach((t,n)=>e.fillText(t,g+10,a+4+n*13))}}r&&(this.drawn=i,this.settledAt=t.scale,[this.settledX,this.settledZ]=n),this.list=[]}};function Na(e,t,n){let r=!1;for(let i=0,a=e.length-1;i<e.length;a=i++){let[o,s]=e[i],[c,l]=e[a];s>n!=l>n&&t<(c-o)*(n-s)/(l-s)+o&&(r=!r)}return r}var Pa=e=>Math.abs(e.z)<7||Math.abs(e.x)>200||Math.abs(e.y)>200,Fa=new WeakMap,Ia=(e,t)=>{let n=new aa(e.data.starTable,e.data.sectorAnchors);return n.setMaps(e.generator.side,e.generator.zones),n.setReal(t),n};function La(e,t){let n=new Map(t.map(e=>[e.name,e])),r=[];for(let t of e.data.systems){let e=n.get(t[0]);e?Pa(e)&&r.push({name:t[0],x:e.x,y:e.y,mod:e}):t[5]&&r.push({name:t[0],x:t[1],y:t[2],mod:null})}for(let n of t)!e.byName.has(n.name)&&Pa(n)&&r.push({name:n.name,x:n.x,y:n.y,mod:n});let i=new Map,a=new Map,o=new Map;for(let e of r){let t=ia(e.x,e.y),n=i.get(t);n?e.mod?a.set(e.mod,n.name):n.mod&&o.set(n.mod,[...o.get(n.mod)??[],e.name]):i.set(t,e)}let s=t.map(e=>{let t=ia(e.x,e.y);return{cell:t.split(`,`,2).join(`,`),slot:t,hiddenBy:a.get(e)??null,tooHigh:!Pa(e),hiddenCatalogue:o.get(e)??[],deletedGenerated:[],renumberedGenerated:[]}});if(!e.generator.side||!e.generator.zones)return s;let c=Fa.get(e);(!c||c.side!==e.generator.side)&&Fa.set(e,c=Ia(e,e.reachable.map(e=>[e[1],e[2]])));let l=Ia(e,r.map(e=>[e.x,e.y])),u=new Map;s.forEach((e,t)=>{!e.hiddenBy&&!e.tooHigh&&u.set(e.cell,[...u.get(e.cell)??[],t])});for(let[n,r]of u){let[i,a]=n.split(`,`).map(Number),o=new Map(l.cellStars(i,a).map(e=>[e.name,e])),u=B/(e.generator.side[a*2048+i]*Math.SQRT2),d=[];for(let e of c.cellStars(i,a)){let n=o.get(e.name);if(n){Ra(e,n)&&d.push(e.name);continue}s[r.find(n=>Math.hypot(t[n].x-e.x,t[n].y-e.z)<u)??r[0]].deletedGenerated.push(e.name)}for(let e of r)s[e].renumberedGenerated=d}return s}var Ra=(e,t)=>e.x!==t.x||e.z!==t.z||e.raw!==t.raw,za=e=>Qt.some(t=>t.name===e),Ba=e=>Object.values($t).some(t=>t.some(t=>t.kind===`Planet`&&t.name===e)),Va=new WeakMap;function Ha(e,t){let n=t.galaxy,r=n?.generator.side??n,i=Va.get(e);if(i&&i.maps===r)return i.deps;let a=new Set(e.stars?.stars.map(e=>e.name)??[]),o=e=>a.has(e)||!!n?.byName.has(e)||!fi.test(e),s={systems:[],stations:[],planets:[],generated:[],quests:[]};for(let t of e.quests){let e=t.versions[t.primaryLang];if(e)for(let t of Si(e))t.kind===`quest`?s.quests.push(t.name):t.kind===`station`||t.kind===`any`&&za(t.name)?s.stations.push(t.name):t.kind===`planet`||t.kind===`any`&&Ba(t.name)?s.planets.push(t.name):(o(t.name)?s.systems:s.generated).push(t.name)}let c={cells:[],hiddenSlots:[],deletedGenerated:[],renumberedGenerated:[]};if(n&&e.stars?.stars.length)for(let t of La(n,e.stars.stars)){if(t.hiddenBy){c.hiddenSlots.push(t.slot);continue}t.tooHigh||(c.cells.push(t.cell),c.deletedGenerated.push(...t.deletedGenerated),c.renumberedGenerated.push(...t.renumberedGenerated))}let l=e=>Object.fromEntries(Object.entries(e).map(([e,t])=>[e,gi(t)])),u={uses:l(s),adds:vi(e),changes:l(c)};return Va.set(e,{maps:r,deps:u}),u}var Ua=2592e6,Wa=new WeakMap;async function Ga(e){let t=Wa.get(e);if(t)return t;let n=sr(e.png),r=new TextEncoder().encode(e.xml),i=new Uint8Array(n.length+r.length);i.set(n),i.set(r,n.length);let a=[...new Uint8Array(await crypto.subtle.digest(`SHA-256`,i))].map(e=>e.toString(16).padStart(2,`0`)).join(``);return Wa.set(e,a),a}async function Ka(e){return{...e,textures:await Promise.all(e.textures.map(async e=>({id:e.id,name:e.name,hash:await Ga(e)})))}}var qa=e=>e instanceof DOMException&&(e.name===`QuotaExceededError`||e.name===`NS_ERROR_DOM_QUOTA_REACHED`),Ja=class e{simulateQuota=!1;db;constructor(e){this.db=e}static async open(t,n){return new e(await ji(t,n))}close(){this.db.close()}tx(e,t,n){return t===`readwrite`&&this.simulateQuota?Promise.reject(new DOMException(`Simulated full storage`,`QuotaExceededError`)):Mi(this.db,e,t,n)}async loadAll(){let{records:e,history:t,byHash:n}=await this.tx([`mods`,`history`,`textures`],`readonly`,async e=>{let t=await I(e,`textures`),n=await P(e.objectStore(`textures`).getAllKeys());return{records:await I(e,`mods`),history:await I(e,`history`),byHash:new Map(n.map((e,n)=>[e,t[n]]))}}),r=[...e,...t].filter(e=>(e.schema??1)<Di),i=e.map(t=>Oi(t,void 0,e.map(e=>e.mod))),a=t.map(t=>Oi(t,void 0,e.map(e=>e.mod)));r.length&&await this.tx([`mods`,`history`,`meta`],`readwrite`,async n=>{for(let t of i)e.find(e=>e.mod.meta.id===t.mod.meta.id).schema<Di&&await L(n,`mods`,t);for(let e of a)t.find(t=>t.id===e.id).schema<Di&&await L(n,`history`,e)}).catch(()=>{});let o=Math.max(Di,...i.map(e=>e.schema),...a.map(e=>e.schema));o>(await this.getMeta(`schemaVersion`)??0)&&await this.setMeta(`schemaVersion`,o).catch(()=>{});let s=new Map;return{mods:await Promise.all(i.filter(e=>e.deletedAt==null).map(async e=>({record:e,mod:await Qa(e.mod,n,s)}))),deleted:i.filter(e=>e.deletedAt!=null).map(e=>({id:e.mod.meta.id,title:e.mod.meta.title,deletedAt:e.deletedAt})),history:a}}async loadIndex(){return this.tx([`mods`,`history`],`readonly`,async e=>({deleted:(await I(e,`mods`)).filter(e=>e.deletedAt!=null).map(e=>({id:e.mod.meta.id,title:e.mod.meta.title,deletedAt:e.deletedAt})),history:(await I(e,`history`)).map(e=>Oi(e))}))}async loadMod(e){let t=await this.tx([`mods`,`textures`],`readonly`,async t=>{let n=await F(t,`mods`,e);if(!n)return null;let r=new Map;for(let e of n.mod.textures){let n=await F(t,`textures`,e.hash);n&&r.set(e.hash,n)}return{record:n,byHash:r}});if(!t)return null;let n=Oi(t.record);return{record:n,mod:await Qa(n.mod,t.byHash)}}async saveMod(e,t=Date.now(),n=Di){let r=await Ka(e);return this.tx([`mods`,`textures`,`history`],`readwrite`,async i=>{let a=await F(i,`mods`,e.meta.id);await Ya(i,e,r);let o={mod:r,revision:(a?.revision??0)+1,updatedAt:t,deletedAt:null,schema:Math.max(n,a?.schema??0),deps:Ha(e,{galaxy:ga()})};return await L(i,`mods`,o),Xa(a,r)&&await Za(i),o})}async saveMods(e,t=Date.now()){let n=await Promise.all(e.map(Ka));return this.tx([`mods`,`textures`,`history`],`readwrite`,async r=>{let i=[];for(let a=0;a<e.length;a++){let o=await F(r,`mods`,e[a].meta.id);await Ya(r,e[a],n[a]);let s={mod:n[a],revision:(o?.revision??0)+1,updatedAt:t,deletedAt:null,schema:Di,deps:Ha(e[a],{galaxy:ga()})};await L(r,`mods`,s),i.push(s)}return await Za(r),i})}async deleteMod(e,t=Date.now()){return this.tx([`mods`],`readwrite`,async n=>{let r=await F(n,`mods`,e);if(!r)return null;let i={...r,deletedAt:t,revision:r.revision+1};return await L(n,`mods`,i),i})}async restoreMod(e){return await this.tx([`mods`],`readwrite`,async t=>{let n=await F(t,`mods`,e);if(!n)return null;let r={...n,deletedAt:null,revision:n.revision+1};return await L(t,`mods`,r),r})&&this.loadMod(e)}async removeMod(e){return this.tx([`mods`,`history`,`textures`],`readwrite`,async t=>{await R(t,`mods`,e);for(let n of await I(t,`history`,e,`modId`))await R(t,`history`,n.id);await Za(t)})}async purge(e=Date.now()){return this.tx([`mods`,`history`,`textures`],`readwrite`,async t=>{let n=(await I(t,`mods`)).filter(t=>t.deletedAt!=null&&e-t.deletedAt>2592e6);for(let e of n){await R(t,`mods`,e.mod.meta.id);for(let n of await I(t,`history`,e.mod.meta.id,`modId`))await R(t,`history`,n.id)}return n.length&&await Za(t),n.map(e=>e.mod.meta.id)})}async addHistory(e){return this.tx([`history`,`mods`,`textures`],`readwrite`,async t=>{await L(t,`history`,e);let n=(await I(t,`history`,e.modId,`modId`)).filter(e=>e.auto).sort((e,t)=>t.createdAt-e.createdAt).slice(20).map(e=>e.id);for(let e of n)await R(t,`history`,e);return n.length&&await Za(t),n})}async putHistory(e){return this.tx([`history`],`readwrite`,t=>L(t,`history`,e))}async deleteHistory(e){return this.tx([`history`,`mods`,`textures`],`readwrite`,async t=>{await R(t,`history`,e),await Za(t)})}async getMeta(e){return this.tx([`meta`],`readonly`,t=>F(t,`meta`,e))}async setMeta(e,t){return this.tx([`meta`],`readwrite`,n=>t===void 0?R(n,`meta`,e):L(n,`meta`,t,e))}async clear(e=[`mods`,`history`,`textures`]){return this.tx(e,`readwrite`,t=>Promise.all(e.map(e=>P(t.objectStore(e).clear()))))}};async function Ya(e,t,n){for(let r=0;r<t.textures.length;r++){let{hash:i}=n.textures[r];await F(e,`textures`,i)||await L(e,`textures`,{png:new Blob([sr(t.textures[r].png)],{type:`image/png`}),xml:t.textures[r].xml},i)}}var Xa=(e,t)=>!!e?.mod.textures.some(e=>!t.textures.some(t=>t.hash===e.hash));async function Za(e){let t=new Set;for(let n of await I(e,`mods`))n.mod.textures.forEach(e=>t.add(e.hash));for(let n of await I(e,`history`))n.mod.textures.forEach(e=>t.add(e.hash));for(let n of await P(e.objectStore(`textures`).getAllKeys()))t.has(n)||await R(e,`textures`,n)}async function Qa(e,t,n=new Map){let r=await Promise.all(e.textures.map(async e=>{let r=t.get(e.hash);if(!r)return null;let i=n.get(e.hash);i||(i=$a(r.png).then(t=>({id:e.id,name:e.name,png:`data:image/png;base64,${or(t)}`,xml:r.xml})),n.set(e.hash,i));let a=await i;if(!a)return null;let o={...a,id:e.id,name:e.name};return Wa.set(o,e.hash),o}));return{...e,textures:r.filter(e=>!!e)}}var $a=async e=>e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e,eo=`gg-editor`,to=class{timers=new Map;write;delay;constructor(e,t=400){this.write=e,this.delay=t}touch(e){clearTimeout(this.timers.get(e)),this.timers.set(e,setTimeout(()=>{this.timers.delete(e),this.write(e)},this.delay))}cancel(e){clearTimeout(this.timers.get(e)),this.timers.delete(e)}flush(e=[...this.timers.keys()]){for(let t of[...e])this.cancel(t),this.write(t)}};function no(e){if(typeof BroadcastChannel>`u`)return{post:e=>{},close:()=>{}};let t=new BroadcastChannel(eo);return t.onmessage=t=>e(t.data),t.unref?.(),{post:e=>t.postMessage(e),close:()=>t.close()}}var ro=t({addCommunityEntry:()=>Ts,addHistory:()=>Ds,addMod:()=>rs,addModFromPart:()=>is,addQuestPart:()=>as,addStarsPart:()=>os,addTextures:()=>cs,bootEditor:()=>Oo,canRedo:()=>Qo,canUndo:()=>Zo,clearAllData:()=>Vs,deleteHistory:()=>As,deleteMod:()=>ds,deleteMods:()=>us,discardDraft:()=>Rs,dismissTip:()=>Ns,duplicateMod:()=>ps,flushAll:()=>No,focusedField:()=>Bo,getRepository:()=>Us,getState:()=>vo,hasUnmodifiedCopy:()=>_s,isEntryAdded:()=>gs,loadSamples:()=>zs,local:()=>V,modById:()=>Q,openGameQuest:()=>Cs,questOf:()=>Ws,redo:()=>ns,refreshStaleCopies:()=>vs,reloadFromStorage:()=>Hs,removeCommunityEntry:()=>Es,removePart:()=>ls,renameHistory:()=>ks,requestPersist:()=>Fs,resetAll:()=>Bs,restoreDeletedMod:()=>fs,restoreDraft:()=>Ls,restoreHistory:()=>Os,setFavorite:()=>ms,setFocusedField:()=>Vo,setImportDraft:()=>js,setSettings:()=>Ms,simulateQuota:()=>Ps,startsUndoStep:()=>zo,undo:()=>ts,updateMod:()=>Wo,updatePart:()=>qo,updateQuest:()=>Jo,updateStars:()=>Yo,updateWithUndo:()=>Xo,useEditor:()=>_o,useMod:()=>xo,usePart:()=>bo,useSaveState:()=>So});Kt(),Yt(!1);var io=200,ao=6e5,oo=[`uiLang`,`tips`,`advanced`,`dismissedTips`,`installPromptDismissedAt`],so=[`downloadLang`,`downloadName`];function co(){let e=(globalThis.navigator?.language??`en`).slice(0,2).toLowerCase();return e===`zh`?`cn`:[`en`,`ru`,`es`,`pt`].find(t=>t===e)??`en`}var V={get(e){try{let t=globalThis.localStorage?.getItem(e);return t==null?null:JSON.parse(t)}catch{return null}},set(e,t){try{t==null?globalThis.localStorage?.removeItem(e):globalThis.localStorage?.setItem(e,JSON.stringify(t))}catch{}}},lo=e=>({...e,parts:[...e.mods,...e.gameMods].flatMap($n)});function uo(){return lo({mods:[],gameMods:[],history:[],deleted:[],gameQuests:!1,loading:!0,saves:{},storage:{available:!0,persisted:!1,quotaFull:!1,simulateQuota:!1},importDraft:null,recoveredDraft:null,settings:{uiLang:co(),tips:!0,advanced:!1,dismissedTips:[],installPromptDismissedAt:null,offline:globalThis.navigator?!navigator.onLine:!1,downloadLang:`en`,downloadName:`my-mods`,...V.get(`gg.prefs`)??{}}})}var H=uo(),U=null,W={post:()=>{},close:()=>{}},G=new Map,K=new Map,fo=new Map,po=new Set,q=new Set,J=new Map,mo=new Map,ho=new Map,Y=new Map,go=new to(e=>void Mo(e));typeof document<`u`&&(document.addEventListener(`focusout`,()=>fo.clear()),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&No()}),addEventListener(`pagehide`,No),addEventListener(`online`,()=>Ms({offline:!1})),addEventListener(`offline`,()=>Ms({offline:!0})));function X(e){H=e.mods===H.mods&&e.gameMods===H.gameMods&&e.parts?e:lo(e),po.forEach(e=>e())}var Z=e=>X({...H,...e});function _o(e){return(0,sa.useSyncExternalStore)(e=>(po.add(e),()=>po.delete(e)),()=>e(H))}var vo=()=>H,Q=e=>H.mods.find(t=>t.meta.id===e),yo=e=>Q(e)??H.gameMods.find(t=>t.meta.id===e);function bo(e){return _o(t=>t.parts.find(t=>t.meta.id===e))}function xo(e){let t=e?Xn(e).modId:void 0;return _o(e=>e.mods.find(e=>e.meta.id===t)??e.gameMods.find(e=>e.meta.id===t))}var So=e=>_o(t=>e?t.saves[Xn(e).modId]??`saved`:`saved`),Co=e=>Xn(e).modId,wo=e=>e.meta.origin===`game`;function To(e){i($(`lib.readOnly`),{description:$(`lib.readOnlyHelp`),action:{label:$(`lib.makeCopy`),onClick:()=>{let t=ps(e);t&&location.assign(`/mods/mod/${t}`)}}})}async function Eo(){return Promise.all(Mr.filter(e=>e.role!==`library`).map(async e=>Pr(e,await Fr(e).catch(()=>[]))))}var Do=()=>Yr().map(e=>rr([e],{id:e.meta.id}));async function Oo(e={}){W.close(),U?.close();for(let e of[G,K,fo,J,mo,ho,Y])e.clear();q.clear(),H={...uo(),loading:!0};let t=!0;try{U=await Ja.open(e.dbName,e.factory)}catch{t=!1;let{IDBFactory:n}=await r(async()=>{let{IDBFactory:e}=await import(`./esm-B123jtWu.js`);return{IDBFactory:e}},[]);U=await Ja.open(e.dbName,new n)}let n=U;W=no(e=>void Po(e));let i=new URLSearchParams(e.search??``);try{if(await n.purge(e.now),i.has(`fresh`)&&(await n.clear(),await n.setMeta(`seeded`,!0)),await n.getMeta(`seeded`)||(await n.saveMods(await(e.seed??Eo)()),await n.setMeta(`seeded`,!0)),i.has(`samples`)){let e=new Set((await n.loadAll()).mods.map(e=>e.mod.meta.id));await n.saveMods(Do().filter(t=>!e.has(t.meta.id)))}let{mods:r,deleted:a,history:o}=await n.loadAll(),s=await n.getMeta(`settings`)??{},c=await n.getMeta(`importDraft`)??null;for(let{record:e}of r)J.set(e.mod.meta.id,e.revision),mo.set(e.mod.meta.id,e.schema);let l=r.sort((e,t)=>t.record.updatedAt-e.record.updatedAt).map(e=>e.mod),u=V.get(`gg.draft`),d=null;if(u){let e=r.find(e=>e.mod.meta.id===u.modId);e&&u.at>e.record.updatedAt&&Is(e.mod,u.field)!==u.value?d={...u,title:e.mod.meta.title}:V.set(`gg.draft`,null)}let f=await globalThis.navigator?.storage?.persisted?.().catch(()=>!1)??!1;X({...H,mods:l,deleted:a,history:o.sort((e,t)=>t.createdAt-e.createdAt),importDraft:H.importDraft??c,recoveredDraft:d,loading:!1,storage:{...H.storage,available:t,persisted:f},settings:{...H.settings,...ko(s,so)}}),H.importDraft&&H.importDraft!==c&&await n.setMeta(`importDraft`,H.importDraft)}catch{Z({loading:!1,storage:{...H.storage,available:!1}})}await vs(),cn().then(e=>{e&&Z({gameQuests:an.length>0})}).catch(()=>{})}function ko(e,t){return Object.fromEntries(t.filter(t=>t in e).map(t=>[t,e[t]]))}function Ao(e,t){H.saves[e]!==t&&Z({saves:{...H.saves,[e]:t}})}function jo(e){q.add(e),Ao(e,`dirty`),go.touch(e)}function Mo(e){let t=Q(e);if(!t||!q.has(e)||!U)return Y.get(e)??Promise.resolve();q.delete(e),Ao(e,`saving`);let n=U,r=(Y.get(e)??Promise.resolve()).then(async()=>{try{let r=await n.saveMod(t,Date.now(),mo.get(e));if(J.set(e,r.revision),q.has(e))return;Ao(e,`saved`),H.storage.quotaFull&&Z({storage:{...H.storage,quotaFull:!1}}),V.get(`gg.draft`)?.modId===e&&V.set(`gg.draft`,null),W.post({type:`mod-changed`,id:e,revision:r.revision})}catch(t){Q(e)&&q.add(e),Ao(e,`error`),qa(t)&&Z({storage:{...H.storage,quotaFull:!0}})}});return Y.set(e,r),r}function No(){return go.flush([...q]),Promise.all(Y.values()).then(()=>{})}async function Po(e){if(U){if(e.type===`history-changed`)return Io();if(e.type===`mod-deleted`)Fo(e.id);else if(!q.has(e.id)&&(J.get(e.id)??0)<e.revision){let t=await U.loadMod(e.id).catch(()=>null);if(!t||q.has(e.id))return;if(J.set(e.id,t.record.revision),mo.set(e.id,t.record.schema),t.record.deletedAt!=null)Fo(e.id),await Io();else{G.delete(e.id),K.delete(e.id);let n=Q(e.id);Z({mods:n?H.mods.map(n=>n.meta.id===e.id?t.mod:n):[t.mod,...H.mods]}),n||await Io()}return}await Io()}}function Fo(e){Q(e)&&(go.cancel(e),q.delete(e),G.delete(e),K.delete(e),Z({mods:H.mods.filter(t=>t.meta.id!==e)}),typeof dispatchEvent<`u`&&dispatchEvent(new CustomEvent(`gg-mod-deleted`,{detail:e})))}async function Io(){if(!U)return;let{history:e,deleted:t}=await U.loadIndex().catch(()=>({history:H.history,deleted:H.deleted}));Z({history:e.sort((e,t)=>t.createdAt-e.createdAt),deleted:t})}var Lo=!1;function Ro(){Lo||H.storage.persisted||(Lo=!0,globalThis.navigator?.storage?.persist?.().then(e=>Z({storage:{...H.storage,persisted:e}})).catch(()=>{}))}var zo=(e,t)=>!t||e!==t,Bo=()=>{let e=typeof document>`u`?null:document.activeElement;return typeof HTMLInputElement<`u`&&(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)?e:null},Vo=e=>{Bo=e};function Ho(e,t,n=!0,r=[]){let i=Q(e);if(!i)return;let a=Bo();if(n){if(zo(fo.get(e),a)){let t=G.get(e)??[];t.push(i),t.length>io&&t.shift(),G.set(e,t)}a?fo.set(e,a):fo.delete(e),K.set(e,[])}let o=a?r.filter(e=>e.op===`replace`&&typeof e.value==`string`):[];if(o.length===1){let t=o[0].path,n=t[0]===`quests`&&t[2]===`versions`?t[3]:null;V.set(`gg.draft`,{modId:e,lang:n,field:t,value:o[0].value,at:Date.now()})}X({...H,mods:H.mods.map(n=>n.meta.id===e?t:n)}),jo(e)}function Uo(e){let t=e.meta.id,n=Date.now();n-(ho.get(t)??e.meta.updatedAt)>ao&&Ds(t,``,!0),ho.set(t,n)}function Wo(e,t){let n=yo(e);if(!n)return;if(wo(n))return To(e);let[r,i]=Jt(n,e=>{t(e),e.meta.updatedAt=Date.now(),e.meta.community&&(e.meta.modified=!0)});Uo(n),Ho(e,r,!0,i)}var Go=e=>S(e)?Wt(e):e,Ko=[`author`,`version`,`summary`,`licence`,`link`,`tags`,`requires`];function qo(e,t){let{modId:n,partId:r}=Xn(e),i=yo(n);if(!i||!r)return;if(wo(i))return To(n);if(!$n(i).some(t=>t.meta.id===e))return;let[a,o]=Jt(i,n=>{let i=Qn(n).find(t=>t.meta.id===e);t(i);let a=n.quests.find(e=>e.id===r);if(a){let e=i;a.versions!==e.versions&&(a.versions=e.versions),a.primaryLang!==e.primaryLang&&(a.primaryLang=e.primaryLang);let t=e.versions[e.primaryLang];if(t&&Object.keys(a.versions).length>1)for(let n of Object.keys(a.versions))n!==e.primaryLang&&a.versions[n]&&(a.versions[n]=qn(Go(t),Go(a.versions[n])))}else if(n.stars?.id===r){let e=i;for(let t of[`stars`,`planets`,`stations`])n.stars[t]!==e[t]&&(n.stars[t]=e[t]);n.meta.title!==e.meta.title&&(n.meta.title=e.meta.title)}for(let e of Ko)n.meta[e]!==i.meta[e]&&(n.meta[e]=i.meta[e]);n.meta.updatedAt=Date.now(),n.meta.community&&(n.meta.modified=!0)});Uo(i),Ho(n,a,!0,o)}function Jo(e,t,n){qo(e,e=>{let r=e;t(r.versions[n??r.primaryLang],r)})}function Yo(e,t){qo(e,e=>t(e))}function Xo(e,t,n){let r=Co(e),a=Q(r);n();let o=Q(r);a&&o&&o!==a&&i(t,{duration:1e4,action:{label:$(`common.undo`),onClick:()=>{if(Q(r)!==o)return void i($(`lib.cantUndo`));Ho(r,$o(a,o))}}})}var Zo=e=>(G.get(Co(e))?.length??0)>0,Qo=e=>(K.get(Co(e))?.length??0)>0,$o=(e,t)=>({...e,textures:t.textures,meta:t.meta.modified?{...e.meta,modified:!0}:e.meta});function es(e,t,n){let r=Co(e);fo.delete(r);let i=t.get(r)?.pop(),a=Q(r);i&&a&&(n.set(r,[...n.get(r)??[],a]),X({...H,mods:H.mods.map(e=>e.meta.id===r?$o(i,a):e)}),jo(r))}var ts=e=>es(e,G,K),ns=e=>es(e,K,G);function rs(e){return X({...H,mods:[e,...H.mods]}),q.add(e.meta.id),Mo(e.meta.id),e.meta.community||Ro(),e.meta.id}function is(e){let t=rr([e],{favorite:!0});return rs(t),$n(t)[0].meta.id}function as(e,t){let n={id:D(),primaryLang:t.primaryLang,versions:t.versions};return Wo(e,e=>{e.quests.push(n)}),Yn(e,n.id)}function os(e){let t={id:`stars`,stars:[],planets:[],stations:[]};return Wo(e,e=>{e.stars||=t}),Yn(e,`stars`)}function ss(e,t){let n=yo(e);if(!n)return;if(wo(n))return To(e);let r={...n.meta,updatedAt:Date.now(),modified:n.meta.community?!0:n.meta.modified};Ho(e,{...n,meta:r,textures:t(n.textures)},!1)}function cs(e,t){ss(e,e=>{let n=new Map(t.map(e=>[e.name,e]));return[...e.map(e=>n.get(e.name)??e),...t.filter(t=>!e.some(e=>e.name===t.name))]})}function ls(e,t,n){if(Q(e)?.textures.some(e=>e.id===t)){ss(e,e=>e.filter(e=>e.id!==t)),i($(`lib.removedPart`,{name:n}));return}Ds(e,$(`lib.beforeRemoving`,{name:n}),!0),Xo(e,$(`lib.removedPart`,{name:n}),()=>Wo(e,e=>{e.quests=e.quests.filter(e=>e.id!==t),e.stars?.id===t&&(e.stars=null)}))}function us(e){let t=new Set(e.map(Co)),n=H.mods.map((e,t)=>({b:e,i:t})).filter(({b:e})=>t.has(e.meta.id));if(!n.length)return;go.flush([...t].filter(e=>q.has(e))),X({...H,mods:H.mods.filter(e=>!t.has(e.meta.id))});let r=Date.now();for(let{b:e}of n){let t=e.meta.id;go.cancel(t),G.delete(t),K.delete(t);let n=U;if(!n)continue;let i=(Y.get(t)??Promise.resolve()).then(async()=>{let e=await n.deleteMod(t,r).catch(()=>null);e&&J.set(t,e.revision),W.post({type:`mod-deleted`,id:t}),await Io()});Y.set(t,i)}let a=n.length===1?$(`lib.deletedMod`,{name:n[0].b.meta.title}):$(`lib.deletedMods`,{count:n.length});i(a,{duration:1e4,action:{label:$(`common.undo`),onClick:()=>{n.forEach(({b:e,i:t})=>void fs(e.meta.id,t))}}})}var ds=e=>us([e]);async function fs(e,t=0){let n=U;if(!n)return;await Y.get(e);let r=await n.restoreMod(e).catch(()=>null);if(!r||Q(e))return;J.set(e,r.record.revision),mo.set(e,r.record.schema);let i=[...H.mods];i.splice(Math.min(t,i.length),0,r.mod),Z({mods:i,saves:{...H.saves,[e]:`saved`}}),W.post({type:`mod-changed`,id:e,revision:r.record.revision}),await Io()}function ps(e){let{modId:t,partId:n}=Xn(e),r=yo(t);if(!r)return;let a={...structuredClone({...r,textures:[]}),textures:r.textures};return a.meta.id=D(),a.meta.title=$(`lib.copyTitle`,{name:r.meta.title}),a.meta.createdAt=a.meta.updatedAt=Date.now(),a.meta.favorite=!0,(wo(r)||r.meta.community)&&(a.meta.origin=`local`,a.meta.community=void 0,a.meta.modified=void 0,r.meta.favorite&&Q(t)&&ms([t],!1)),rs(a),i($(`lib.madeCopy`,{name:r.meta.title})),n?Yn(a.meta.id,n):a.meta.id}function ms(e,t,n=!1){let r=e.map(Co),a=new Set(t?Ti(r,H.mods):r),o=new Map(H.mods.filter(e=>a.has(e.meta.id)).map(e=>[e.meta.id,e.meta.favorite])),s=Jn(H.mods.filter(e=>e.meta.favorite),H.settings.downloadLang);X({...H,mods:H.mods.map(e=>a.has(e.meta.id)?{...e,meta:{...e.meta,favorite:t}}:e)}),a.forEach(e=>{Q(e)&&jo(e)});let c=()=>hs(o);if(n||!t)return c;let l=H.mods.filter(e=>a.has(e.meta.id)&&!r.includes(e.meta.id)&&!o.get(e.meta.id));l.length&&i($(`lib.alsoFavorited`,{mods:l.map(e=>e.meta.title).join(`, `)}),{action:{label:$(`common.undo`),onClick:c}});let u=Jn(H.mods.filter(e=>e.meta.favorite),H.settings.downloadLang);return u>200&&s<=200&&i.warning($(`lib.overQuestLimit`,{count:u,max:200}),{action:{label:$(`common.undo`),onClick:c}}),c}function hs(e){X({...H,mods:H.mods.map(t=>e.has(t.meta.id)?{...t,meta:{...t.meta,favorite:e.get(t.meta.id)}}:t)}),e.forEach((e,t)=>{Q(t)&&jo(t)})}var gs=e=>H.mods.some(t=>t.meta.community?.entryId===e),_s=e=>H.mods.some(t=>t.meta.community?.entryId===e&&!t.meta.modified&&t.meta.version===Mr.find(t=>t.id===e)?.version);async function vs(e){for(let t of H.mods.filter(t=>!e||t.meta.community?.entryId===e)){let e=Hr(t,Mr);if(!e||ws.has(e.id))continue;ws.add(e.id);let n=await Fr(e).catch(()=>[]);if(ws.delete(e.id),!H.mods.includes(t))continue;let r=Pr(e,n),i=r.meta.id;for(let e=2;Q(r.meta.id);e++)r.meta.id=`${i}-${e}`;r.meta.favorite=t.meta.favorite,X({...H,mods:H.mods.map(e=>e===t?r:e)}),q.add(r.meta.id),Mo(r.meta.id);let a=t.meta.id;go.cancel(a),q.delete(a);let o=U;o&&Y.set(a,(Y.get(a)??Promise.resolve()).then(()=>o.removeMod(a)).then(()=>W.post({type:`mod-deleted`,id:a})).catch(()=>{}))}}var ys=null,bs=null,xs=e=>fetch(`/mods/data/${e}`).then(e=>e.ok&&e.headers.get(`content-type`)?.includes(`json`)?e.json():null).catch(()=>null);async function Ss(){bs??=xs(`game-story-full.json`);let e=await bs,[t,...n]=Object.values(e??{}).map(e=>Sr(e)).map(e=>e.kind===`ok`?e.mod:null);if(!t||n.includes(null))return null;let r=t.versions[t.primaryLang];r.settings.questId=0,r.settings.startSystem=`Sol`;for(let e of n)t.versions[e.primaryLang]=qn(r,e.versions[e.primaryLang]);return t}async function Cs(e){let t=`game-${e}`,n=H.gameMods.find(e=>e.meta.id===t);if(n)return n;let r;if(e===`100000`)r=await Ss();else{ys??=xs(`game-quests-full.json`);let t=(await ys)?.[e],n=t?Sr(t):null;r=n?.kind===`ok`?n.mod:null}if(!r)return null;let i=H.gameMods.find(e=>e.meta.id===t)??rr([r],{id:t,origin:`game`,favorite:!1});return H.gameMods.includes(i)||Z({gameMods:[...H.gameMods,i]}),i}var ws=new Set;async function Ts(e,t=!1){let n=Mr.find(t=>t.id===e);if(!n||(await vs(e),_s(e)||ws.has(e)))return;ws.add(e);let r=await Fr(n).catch(()=>[]);if(ws.delete(e),_s(e))return;let a=Pr(n,r),o=1,s=a.meta.id;for(;Q(a.meta.id);)a.meta.id=`${s}-${++o}`;a.meta.favorite=!1,rs(a),t&&ms([a.meta.id],!0),i($(`lib.addedEntry`,{name:n.title}),{action:{label:$(`common.undo`),onClick:()=>Es(e,!0)}})}function Es(e,t=!1){let n=t=>t.meta.community?.entryId===e&&!t.meta.modified,r=H.mods.filter(n);if(r.length){X({...H,mods:H.mods.filter(e=>!n(e))});for(let e of r){let t=e.meta.id;go.cancel(t),q.delete(t);let n=U;n&&Y.set(t,(Y.get(t)??Promise.resolve()).then(()=>n.removeMod(t)).then(()=>W.post({type:`mod-deleted`,id:t})).catch(()=>{}))}t||i($(`lib.removedEntry`,{name:r[0].meta.title}),{action:{label:$(`common.undo`),onClick:()=>r.forEach(e=>rs(e))}})}}async function Ds(e,t,n=!1){let r=Q(Co(e));if(!r)return;let i=await Ka(r),a={id:D(),modId:r.meta.id,name:t,auto:n,createdAt:Date.now(),bytes:JSON.stringify(i).length,mod:i,revision:J.get(r.meta.id)??0,schema:mo.get(r.meta.id)??Di},o=U?await U.addHistory(a).catch(()=>[]):[];return Z({history:[a,...H.history.filter(e=>!o.includes(e.id))]}),W.post({type:`history-changed`}),a}async function Os(e){let t=H.history.find(t=>t.id===e),n=t&&Q(t.modId);if(!t||!n)return;await Ds(t.modId,$(`lib.beforeRestore`),!0);let r=Q(t.modId)??n,a=$o({...structuredClone(t.mod),textures:r.textures},r);Ho(t.modId,{...a,meta:{...a.meta,updatedAt:Date.now()}}),i($(`lib.restored`,{name:t.name||$(`lib.autoEntry`)}))}async function ks(e,t){let n=H.history.find(t=>t.id===e);if(!n)return;let r={...n,name:t,auto:!1};Z({history:H.history.map(t=>t.id===e?r:t)}),await U?.putHistory(r).catch(()=>{}),W.post({type:`history-changed`})}async function As(e){Z({history:H.history.filter(t=>t.id!==e)}),await U?.deleteHistory(e).catch(()=>{}),W.post({type:`history-changed`})}function js(e){Z({importDraft:e}),U?.setMeta(`importDraft`,e??void 0).catch(()=>{})}function Ms(e){Z({settings:{...H.settings,...e}}),oo.some(t=>t in e)&&V.set(`gg.prefs`,ko(H.settings,oo)),so.some(t=>t in e)&&U?.setMeta(`settings`,ko(H.settings,so)).catch(()=>{})}function Ns(e){Ms({dismissedTips:[...H.settings.dismissedTips,e]})}function Ps(e){U&&(U.simulateQuota=e),Z({storage:{...H.storage,simulateQuota:e}})}async function Fs(){let e=await globalThis.navigator?.storage?.persist?.().catch(()=>!1)??!1;return Z({storage:{...H.storage,persisted:e}}),e}function Is(e,t){return t.reduce((e,t)=>e&&typeof e==`object`?e[t]:void 0,e)}function Ls(){let e=H.recoveredDraft;e&&(Z({recoveredDraft:null}),V.set(`gg.draft`,null),Wo(e.modId,t=>{let n=Is(t,e.field.slice(0,-1));n&&typeof n==`object`&&(n[e.field[e.field.length-1]]=e.value)}))}function Rs(){Z({recoveredDraft:null}),V.set(`gg.draft`,null)}function zs(){Do().filter(e=>!Q(e.meta.id)).forEach(rs)}async function Bs(){G.clear(),K.clear(),q.clear(),X({...H,mods:[],history:[],deleted:[],settings:{...H.settings,dismissedTips:[]}}),Ms({dismissedTips:[]});let e=[...J.keys()];await U?.clear().catch(()=>{}),e.forEach(e=>W.post({type:`mod-deleted`,id:e}))}async function Vs(){await U?.clear([`mods`,`history`,`textures`,`meta`]).catch(()=>{});for(let e of[`gg.prefs`,`gg.last`,`gg.draft`])V.set(e,null)}async function Hs(){if(!U)return;await No();let{mods:e,deleted:t,history:n}=await U.loadAll();G.clear(),K.clear();let r=new Set(H.mods.map(e=>e.meta.id));for(let{record:t}of e)J.set(t.mod.meta.id,t.revision),mo.set(t.mod.meta.id,t.schema);let i=await U.getMeta(`settings`)??{};X({...H,mods:e.sort((e,t)=>t.record.updatedAt-e.record.updatedAt).map(e=>e.mod),deleted:t,history:n.sort((e,t)=>t.createdAt-e.createdAt),settings:{...H.settings,...ko(i,so)}});for(let e of r)Q(e)||W.post({type:`mod-deleted`,id:e});for(let{record:t}of e)W.post({type:`mod-changed`,id:t.mod.meta.id,revision:t.revision})}var Us=()=>U,Ws=e=>e&&e.meta.type===`quest`?e.versions[e.primaryLang]:void 0,Gs,Ks;function qs(){if(Gs)return Gs;let e=Object.assign({"./en/common.ts":o,"./en/conditions.ts":c,"./en/install.ts":u,"./en/lib.ts":f,"./en/map.ts":m,"./en/output.ts":g,"./en/overview.ts":ee,"./en/pickers.ts":v,"./en/problems.ts":re,"./en/quickbuild.ts":ae,"./en/reference.ts":se,"./en/rules.ts":le,"./en/save.ts":de,"./en/shell.ts":pe,"./en/ships.ts":he,"./en/stars.ts":_e,"./en/start.ts":ye,"./en/startHelp.ts":xe,"./en/startLib.ts":Ce,"./en/steps.ts":Te,"./en/ui.ts":De}),t={};for(let[n,r]of Object.entries(e)){let[,e,i]=n.match(/^\.\/(\w+)\/([\w-]+)\.ts$/)??[];if(!e||!i)continue;let a=t[e]??={};for(let[e,t]of Object.entries(r.default))a[`${i}.${e}`]=t}return Gs=t}function Js(e){Ks=e,document.documentElement.lang=e===`cn`?`zh`:e}function Ys(e,t){let n=qs();return n[t]?.[e]??n.en?.[e]}function $(e,t){let n=Ks??`en`,r;return t&&typeof t.count==`number`&&(r=Ys(`${e}_${t.count===1?`one`:`other`}`,n)),r??=Ys(e,n),r===void 0?e:t?r.replace(/\{(\w+)\}/g,(e,n)=>n in t?String(t[n]):e):r}function Xs(){let e=_o(e=>e.settings.uiLang);return e!==Ks&&Js(e),$}export{Sa as $,pn as $n,si as $t,ls as A,Vn as An,R as At,ts as B,bn as Bn,wi as Bt,zs as C,$n as Cn,qi as Ct,ns as D,zn as Dn,Fi as Dt,Ws as E,Yn as En,Pi as Et,Ls as F,O as Fn,Di as Ft,Xo as G,on as Gn,ni as Gt,qo as H,an as Hn,bi as Ht,Os as I,In,Oi as It,bo as J,Nn as Jn,ii as Jt,_o as K,Dn as Kn,ti as Kt,ms as L,D as Ln,fi as Lt,Fs as M,Rn as Mn,I as Mt,Bs as N,Bn as Nn,L as Nt,Hs as O,Ln as On,Ii as Ot,fs as P,Wn as Pn,P as Pt,La as Q,mn as Qn,li as Qt,js as R,yn as Rn,pi as Rt,gs as S,er as Sn,Ki as St,Cs as T,Xn as Tn,Ni as Tt,Jo as U,un as Un,xi as Ut,Wo as V,nn as Vn,Si as Vt,Yo as W,ln as Wn,$r as Wt,Ua as X,Pn as Xn,ci as Xt,So as Y,Cn as Yn,Qr as Yt,Ha as Z,jn as Zn,di as Zt,ps as _,gr as _n,Xt as _r,Vi as _t,rs as a,Vr as an,hn as ar,ga as at,vo as b,tr as bn,Qi as bt,os as c,kr as cn,En as cr,_a as ct,Vs as d,yr as dn,sn as dr,aa as dt,oi as en,Tn as er,Ma as et,As as f,vr as fn,On as fr,$i as ft,Ns as g,hr as gn,tn as gr,Li as gt,Rs as h,mr as hn,gn as hr,z as ht,Ds as i,Nr as in,vn as ir,Ta as it,ks as j,Un as jn,F as jt,Es as k,Hn as kn,Gi as kt,Oo as l,Or as ln,Mn as lr,va as lt,us as m,_r as mn,_n as mr,B as mt,Xs as n,Kr as nn,kn as nr,Ca as nt,is as o,Pr as on,An as or,Na as ot,ds as p,fr as pn,Fn as pr,ra as pt,xo as q,fn as qn,ai as qt,Ts as r,Mr as rn,rn as rr,wa as rt,as as s,Br as sn,Qt as sr,Aa as st,$ as t,ri as tn,wn as tr,xa as tt,Zo as u,Sr as un,Zt as ur,ya as ut,ro as v,sr as vn,Ui as vt,V as w,Jn as wn,Ri as wt,_s as x,ar as xn,zi as xt,Us as y,rr as yn,Zi as yt,Ms as z,$t as zn,Ci as zt};