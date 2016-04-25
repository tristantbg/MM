<?php snippet('header') ?>

<div class="opening">
	<img src="<?php echo url('assets/images/CMM_logo.svg') ?>" onerror="this.src='<?php echo url('assets/images/CMM_logo.png') ?>'; this.onerror=null;" alt="Code MM">
</div>

<header class="desktop home">

<?php snippet('menu') ?>

<div id="container">

<div class="homeslider royalSlider rsDefault">

<?php foreach($page->featuredimages()->toStructure() as $media): ?>
	<?php if($media->_fieldset() == 'image'):?>
		<?php if($media->imagefile()->toFile() !== null):?>
			<?php 
			$image = $media->imagefile()->toFile()->url();
			?>
			<a class="rsImg" href="<?php echo $image ?>"></a>
		<?php endif ?>
	<?php endif ?>
<?php endforeach ?>

</div>

<div class="wrap" id="home">


<?php snippet('footer') ?>