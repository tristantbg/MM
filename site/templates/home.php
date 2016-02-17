<?php snippet('header') ?>

<header>

<?php snippet('menu') ?>

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

<script type="text/javascript">

function newpage() {
        window.location = newLocation;
    }

	$('.link').click(function() {
        event.preventDefault();
        newLocation = this.href;
        $('header').addClass('reduced');
        setTimeout(function(){
        	$('.homeslider').fadeOut(300, newpage);
        },600);
        
    });
</script>