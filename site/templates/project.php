<?php snippet('header') ?>

<header class="reduced">

	<?php snippet('menu') ?>

	<div class="projectslider royalSlider rsDefault">

			<?php foreach($page->medias()->toStructure() as $media): ?>
				<?php if($media->_fieldset() == 'video'):?>

					<?php if( !$media->placeholder()->empty() && !$media->url()->empty() ): ?>

						<a class="rsImg" href="<?php echo $media->placeholder()->toFile()->url() ?>" data-rsVideo="<?php echo $media->url() ?>">
						<img src="<?php echo resizeOnDemand($media->placeholder()->toFile(), 200) ?>" class="rsTmb" />
						</a>

					<?php endif ?>
				<?php endif ?>
				<?php if($media->_fieldset() == 'image'):?>
					<?php if($media->imagefile()->toFile() !== null):?>
						<?php 
						$image = $media->imagefile()->toFile();
						?>
						<a class="rsImg" href="<?php echo $image->url() ?>"><img src="<?php echo resizeOnDemand($image, 200) ?>" class="rsTmb" /></a>
					<?php endif ?>
				<?php endif ?>
				<?php $mediaindex++ ?>
			<?php endforeach ?>

		</div>

	<div class="wrap">



		<?php snippet('footer') ?>