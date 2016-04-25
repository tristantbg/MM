<?php 
$menuTop = $pages->find('infos')->children()->visible()->filter(function($child) {
	return $child->menu() == 'top';
});
$menuBottom = $pages->find('infos')->children()->visible()->filter(function($child) {
	return $child->menu() == 'bottom';
});
?>

<nav class="primary">
	<div id="m-production" <?php e(strpos(page()->url(), 'work/production'), ' class="active"') ?> >
		<a class='link' href="<?php echo $pages->find('work/production')->url() ?>"><?php echo $pages->find('work/production')->title()->html() ?></a>
	</div>
	<div id="logo">
		<a class='link logo' href="<?php echo $pages->home()->url() ?>">
			<img src="<?php echo url('assets/images/CMM_logo.svg') ?>" onerror="this.src='<?php echo url('assets/images/CMM_logo.png') ?>'; this.onerror=null;" alt="Code MM">
		</a>
	</div>
	<div id="m-creative" <?php e(strpos(page()->url(), 'work/creative-direction'), ' class="active"') ?> >
		<a class='link' href="<?php echo $pages->find('work/creative-direction')->url() ?>"><?php echo $pages->find('work/creative-direction')->title()->html() ?></a></div>
	</nav>

	<ul class="secondary">
		<?php foreach($menuTop as $p): ?>
			<li id="m-<?php echo $p->uid() ?>" <?php e($p->isOpen(), ' class="active"') ?> ><a class='link' href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a></li>
		<?php endforeach ?>
	</ul>
	
	<div class="credits">
		<span class="dot"></span>
		<ul>
			<?php foreach($menuBottom as $p): ?>
				<li id="m-<?php echo $p->uid() ?>" <?php e($p->isOpen(), ' class="active"') ?> ><a class='link' href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a></li>
			<?php endforeach ?>
		</ul>

	</div>
</header>

<nav class="mobile">

	<ul>
		<li id="m-production" <?php e(strpos(page()->url(), 'work/production'), ' class="active"') ?> >
			<a class='link' href="<?php echo $pages->find('work/production')->url() ?>"><?php echo $pages->find('work/production')->title()->html() ?></a>
		</li>
		<li id="m-creative" <?php e(strpos(page()->url(), 'work/creative-direction'), ' class="active"') ?> >
			<a class='link' href="<?php echo $pages->find('work/creative-direction')->url() ?>"><?php echo $pages->find('work/creative-direction')->title()->html() ?></a></li>
			<?php foreach($menuTop as $p): ?>
				<li id="m-<?php echo $p->uid() ?>" <?php e($p->isOpen(), ' class="active"') ?> ><a class='link' href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a></li>
			<?php endforeach ?>
			<?php foreach($menuBottom as $p): ?>
				<li id="m-<?php echo $p->uid() ?>" <?php e($p->isOpen(), ' class="active"') ?> ><a class='link' href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a></li>
			<?php endforeach ?>
		</ul>
	</nav>

