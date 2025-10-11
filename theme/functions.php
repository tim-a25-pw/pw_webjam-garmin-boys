<?php

// Ajoute le support pour les images à la une au thème personnalisé
add_theme_support('post-thumbnails');

// Menu
function pw_creer_menu() {
	register_nav_menu('menu_principal', 'Menu principal');
}
add_action('init', 'pw_creer_menu');


if(function_exists('acf_add_options_page')) {

    // Options générales
acf_add_options_page(array(


		'page_title' => 'Options generales',
		'menu_title' => 'Options generales',
		'menu_slug' => 'formatif-them-options-generales',
		'capability' => 'edit_posts',
		'redirect' => false
));

}

