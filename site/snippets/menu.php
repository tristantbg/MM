<?php 
$menu = $pages->find('infos/menu')->children();
?>

<nav class="primary">
	<div id="m-production">
		<a class='link' href="<?php echo $pages->find('work/production')->url() ?>"><?php echo $pages->find('work/production')->title()->html() ?></a>
	</div>
	<div id="logo">
	<a href="<?php echo $pages->home()->url() ?>">Code MM</a>
	</div>
	<div id="m-creative">
		<a class='link' href="<?php echo $pages->find('work/creative-direction')->url() ?>"><?php echo $pages->find('work/creative-direction')->title()->html() ?></a></div>
	</nav>

	<ul class="secondary">
		<?php foreach($menu->visible() as $p): ?>
			<li id="m-<?php echo $p->uid() ?>" <?php e($p->isOpen(), ' class="active"') ?> ><a href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a></li>
		<?php endforeach ?>
	</ul>
	
	<div class="credits">
	<ul>
		<li class="m-legal">Legal</li>
		<li class="m-credits">Credits</li>
	</ul>
	<span class="dot"></span>
	</div>
</header>