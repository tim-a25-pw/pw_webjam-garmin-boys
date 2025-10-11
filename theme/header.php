<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php wp_title('|', true, 'right')?><?php bloginfo(('name'));?></title>
    <?php wp_head(); ?>

    <link rel="stylesheet" href="<?php bloginfo('template_url') ?>/dist/styles/main.css" />

    <script>
            iconsPath = '<?php bloginfo('template_url') ?>/dist/';
    </script>
    <script src="<?php bloginfo('template_url') ?>/dist/scripts/main.js" defer></script>
</head>

<body>

    <header data-component="Header" class="header">

        <a href="<?php bloginfo('url'); ?>" class="header__brand">
              <?php bloginfo('name'); ?>
        </a>
      
   <?php wp_nav_menu(array(
                'theme_location' => 'menu_principal',
                'container' => 'nav',
                'container_class' => 'nav-primary',
            )); ?>
        <button class="header__toggle js-toggle">
            <span></span>
            <span></span>
            <span></span>
        </button>





    </header>

