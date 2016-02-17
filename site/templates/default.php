<?php snippet('header') ?>

<header class="reduced">

<?php snippet('menu') ?>

<div class="wrap">

<h1><?php echo $page->title()->html() ?></h1>

<p><?php echo $page->text()->kirbytext() ?></p>

<?php snippet('footer') ?>