

const psExclusives = `<i class='fa-brands fa-playstation'></i>`
const xboxExclusives = `<i class='fa-brands fa-xbox'></i><i class='fa-solid fa-desktop'></i>`
const all = `<i class='fa-brands fa-playstation'></i><i class='fa-brands fa-xbox'></i><i class='fa-solid fa-desktop'></i><i class='fa-solid fa-mobile'></i>`
const allnotmobile = `<i class='fa-brands fa-playstation'></i><i class='fa-brands fa-xbox'></i><i class='fa-solid fa-desktop'></i>`
const mobile = `<i class='fa-solid fa-mobile'></i>`

var games = [{name: "Assasins Creed Valhalla", rating: '9.3', price: '$35', platforms: xboxExclusives, src:'images/female_eivor_assassins_creed_valhalla_hd-1920x1080-1.jpg'},
	{name: "Forza Horizon 4", rating: '8.9', price: '$25', platforms: xboxExclusives, src:'images/forza_horizon_4_e3_2018_5k-3840x2160.jpg'},
	{name: "Fortnite", rating: '8.5', price: '$15', platforms: all, src:'images/orsrc60869-1.jpg'},
	{name: "Fifa 22", rating: '9.0', price: '$15', platforms: all, src:'images/liverpool_f_c__4k_hd_fifa_22-2560x1440.jpg'},
	{name: "Genshin Impact", rating: '7.8', price: '$10', platforms: all, src:'images/amber_bennett_eula_timmie_snowman_hd_genshin_impact-1920x1080.jpg'},
	{name: "Watchdogs 2", rating: '8.4', price: '$10', platforms: allnotmobile, src:'images/watch_dogs_2_game-2560x1440.jpg'},
	{name: "League of Legends", rating: '8.9', price: '$10', platforms: allnotmobile, src:'images/akshan_akali_alistar_amumu_annie_4k_hd_league_of_legends_wild_rift-2560x1440.jpg'},
	{name: "Injustice 2", rating: '7.9', price: '$20', platforms: all, src:'images/1_harley_quinn_in_injustice_2-1280x720.jpg'},
	{name: "Rocket League", rating: '8.0', price: '$10', platforms: all, src:'images/green_soccer_ball_with_lights_hd_rocket_league-1280x720.jpg'},
	{name: "Minecraft", rating: '8.5', price: '$5', platforms: all, src:'images/nova_skin_minecraft_hd_minecraft-1280x720.jpg'},
	{name: "Efootball", rating: '4.2', price: '$5', platforms: all, src:'images/linoel_messi_hd_efootball_2022-1280x720.jpg'},
	{name: "WWE 2k22", rating: '9.2', price: '$35', platforms: all, src:'images/rey_mysterio_hd_wwe_2k22-1280x720.jpg'},
	{name: "Cyberpunk 2077", rating: '9.5', price: '$50', platforms: allnotmobile, src:'images/johnny_silverhand_v_judy_alvarez_altiera_cunningham_hd_cyberpunk_2077-1280x720.jpg'},
	{name: "COD Warzone", rating: '9.5', price: '$35', platforms: allnotmobile, src:'images/call_of_duty_warzone_4k_5k-1280x720.jpg'},
	{name: "CODmobile", rating: '8.5', price: '$0', platforms: mobile, src:'images/wp5191039-call-of-duty-mobile-pc-wallpapers.jpg'},
	{name: "GTA V", rating: '9.4', price: '$35', platforms: allnotmobile, src:'images/grand_theft_auto_gta_5-1280x720.jpg'},
	{name: "Uncharted 4", rating: '8.4', price: '$25', platforms: psExclusives, src:'images/uncharted_4_a_thiefs_end_2016-1280x720.jpg'},
	{name: "GODFALL", rating: '8.0', price: '$40', platforms: psExclusives, src:'images/1_4k_godfall_2021_4k_hd_games-1280x720.jpg'},
	{name: "Tekken 7", rating: '6.9', price: '$10', platforms: allnotmobile, src:'images/1_terry_bogard_hd_the_king_of_fighters_xv-1280x720.jpg'},
	{name: "Ratchet and Clank", rating: '9.1', price: '$50', platforms: psExclusives, src:'images/ratchet_and_clank_2015_movie-1280x720.jpg'},
	{name: "MK11", rating: '8.9', price: '$30', platforms: allnotmobile, src:'images/scorpion_4k_hd_mortal_kombat-1280x720.jpg'},
	{name: "Battlefield 2042", rating: '8.6', price: '$30', platforms: allnotmobile, src:'images/solider_battlefield_background_4k_hd_battlefield_2042-1280x720.jpg'},
	{name: "FarCry6", rating: '9.0', price: '$50', platforms: xboxExclusives, src:'images/dani_rojas_4k_8k_hd_far_cry_6-1280x720.jpg'},
	{name: "Spiderman - Miles Morales", rating: '9.5', price: '$50', platforms: psExclusives, src:'images/black_red_suit_spiderman_in_buildings_background_hd_spiderman-1280x720.jpg'},
	{name: "RDR2", rating: '9.3', price: '$40', platforms: allnotmobile, src:'images/legends_of_the_west_hd_red_dead_redemption_2-1280x720.jpg'}
]


const gamegrid = document.querySelector('.gamegrid');



 for (let i = 0; i <= games.length - 1; i++) {
 	gamegrid.innerHTML += `
 	<div class="item">
				<div class="imgbox"><img src="${games[i].src}">
				</div>
				<div class="info">
					<h6>${games[i].name}</h6>
					<span class="rating"><i class="fa-solid fa-star"></i> ${games[i].rating}</span>
					<span class="platforms">${games[i].platforms}</span>
					<span class="price">${games[i].price}</span>
					<div class="buy">
					<button>Buy <i class="fa-solid fa-plus"></i></button>
					</div>
				</div> `

	
 				}
console.log(games.length);


const game1 = [
		"images/orsrc60869-1.jpg",
		'images/embrace_the_chaos_moon_knight_hd_fortnite-1280x720.jpg',
		'images/fortnite_save_the_world_hd_fortnite-1280x720.jpg',
		'images/rave_cave_fortnite_hd_fortnite-1280x720.jpg',
		'images/sunbird_moon_hawk_the_temple_northeast_of_daily_bugle_kyle_logjam_lumberyard_the_visitor___launchpad_hd_fortnite-1280x720.jpg'
]

const game2 = [
		'images/8067189.jpg',
		'images/aston_martin_vulcan_amr_pro_hd_forza_horizon_4-1280x720.jpg',
		'images/senkoe_hd_forza_horizon_5-1280x720.jpg',
		'images/ktm_lamborghini_land_rover_lola_lotus_maserati_mercedes_amg_mercedes_benz_meyers_mitsubishi_morgan_4k_hd_forza_horizon_5-1280x720.jpg',
		'images/ford_transit_supervan_3_lamborghini_aventador_lp700_4_mclaren_720s_spider_4k_hd_forza_horizon_5-2560x1440.jpg'
]

const displayGame = [ game1, game2]
//console.log(mainImgs)

const mainImg = document.querySelector('.main-img img');
const altImgs = document.querySelectorAll('.alt-imgs img');

const altImg = [...altImgs];

altImg.forEach((el, i) => {
		el.onclick = () =>{
			changeInfo(i);
			mainImgs = displayGame[i]
			mainImg.src = mainImgs[0]
		}
});
var x = 0
//console.log(mainImgs[x])

const displayInfo = [
	{name: "Fortnite", rating: '8.5', price: '$15.00', platforms: all, genre: ['Shooter', 'Action']},
	{name: "Forza Horizon 5", rating: '8.9', price: '$25.00', platforms: xboxExclusives, genre: ['Racing', 'Arcade']}
]

function changeInfo(i){
 const name = document.querySelector('#name h1');
 const genre = document.querySelectorAll('#genre span');
 const price = document.getElementById('price');
 const rating = document.querySelector('#rating span');
 const platform = document.getElementById('platform');

 name.innerHTML = displayInfo[i].name;
 price.innerHTML = displayInfo[i].price;
 rating.innerHTML = displayInfo[i].rating;
 platform.innerHTML = displayInfo[i].platforms;

 for (let g = 0; g < genre.length; g++){
 	genre[g].innerHTML = displayInfo[i].genre[g];
 } 
}

var mainImgs = displayGame[0];
setInterval(function () {
	mainImg.src = mainImgs[x]
	if (x >= mainImgs.length - 1) {
		x = 0
	}
	else {
		x++
	}
}, 7000);

const themebtn = document.querySelector('#theme');


const theme = localStorage.getItem('theme');
const body = document.body;
if (theme) {
	body.classList.add(theme);
}


themebtn.onclick = () => {
	const themeIcon = document.querySelector('#theme .svg-inline--fa');
	if (body.classList.contains('light')) {
		body.classList.replace('light', 'dark');
		themeIcon.classList.replace('fa-sun', 'fa-moon');
		localStorage.setItem('theme', 'dark');
	}
	else {
		body.classList.replace('dark', 'light');
		themeIcon.classList.replace('fa-moon', 'fa-sun');
		localStorage.setItem('theme', 'light');
	}
}

