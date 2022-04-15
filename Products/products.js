var games = [ "Assasins Creed Valhalla", "Forza Horizon 4", "Fortnite", "Fifa 22", "Genshin Impact", "Watchdogs 2", "League of Legends", "Injustice 2",
			   "Rocket League", "Minecraft", "Efootball", "WWE 2k22", "Cyberpunk 2077", "COD Warzone", "CODmobile", "GTA V", "Uncharted 4", "GODFALL", "Tekken 7",
			   "Ratchet and Clank", "MK11", "Battlefield 2042", "FarCry6","Spiderman-Miles Morales", "RDR2"];
var imglinks = [ "images/female_eivor_assassins_creed_valhalla_hd-1920x1080-1.jpg", 
				"images/forza_horizon_4_e3_2018_5k-3840x2160.jpg",
				"images/orsrc60869-1.jpg",
				"images/liverpool_f_c__4k_hd_fifa_22-2560x1440.jpg",
				"images/amber_bennett_eula_timmie_snowman_hd_genshin_impact-1920x1080.jpg",
				"images/watch_dogs_2_game-2560x1440.jpg",
				"images/akshan_akali_alistar_amumu_annie_4k_hd_league_of_legends_wild_rift-2560x1440.jpg",
				"images/1_harley_quinn_in_injustice_2-1280x720.jpg",
				"images/green_soccer_ball_with_lights_hd_rocket_league-1280x720.jpg",
				"images/nova_skin_minecraft_hd_minecraft-1280x720.jpg",
				"images/linoel_messi_hd_efootball_2022-1280x720.jpg",
				"images/rey_mysterio_hd_wwe_2k22-1280x720.jpg",
				"images/johnny_silverhand_v_judy_alvarez_altiera_cunningham_hd_cyberpunk_2077-1280x720.jpg",
				"images/call_of_duty_warzone_4k_5k-1280x720.jpg",
				"images/wp5191039-call-of-duty-mobile-pc-wallpapers.jpg",
				"images/grand_theft_auto_gta_5-1280x720.jpg",
				"images/uncharted_4_a_thiefs_end_2016-1280x720.jpg",
				"images/1_4k_godfall_2021_4k_hd_games-1280x720.jpg",
				"images/1_terry_bogard_hd_the_king_of_fighters_xv-1280x720.jpg",
				"images/ratchet_and_clank_2015_movie-1280x720.jpg",
				"images/scorpion_4k_hd_mortal_kombat-1280x720.jpg",
				"images/solider_battlefield_background_4k_hd_battlefield_2042-1280x720.jpg",
				"images/dani_rojas_4k_8k_hd_far_cry_6-1280x720.jpg",
				"images/black_red_suit_spiderman_in_buildings_background_hd_spiderman-1280x720.jpg",
				"images/legends_of_the_west_hd_red_dead_redemption_2-1280x720.jpg",];


var gamegrid = document.querySelector('.gamegrid');



 for (var i = 0; i <= games.length - 1; i++) {
 	gamegrid.innerHTML += `
 	<div class="item">
				<div class="buy">
					<button>Purchase <i class=" fa-solid fa-plus"></i></button>
				</div>
				<div class="imgbox"><img src="images/female_eivor_assassins_creed_valhalla_hd-1920x1080-1.jpg"></div>
				<div class="info">
					<h6>Assasins Creed Valhalla</h6>
					<span> Xbox, Playstation, Pc.</span> 
				</div> `

	
 				}
console.log(games.length);
console.log(imglinks.length);
var image = document.querySelectorAll('.imgbox img');
console.log(image[0].src);
var names = document.querySelectorAll('.info h6');
console.log(names[0]);
for (var k = 0; k <= image.length; k++) {
	image[k].src = imglinks[k];
	names[k].innerHTML = games[k];
	
}
console.log(names)
console.log(games[0])
console.log(image)


console.log(gamegrid)				