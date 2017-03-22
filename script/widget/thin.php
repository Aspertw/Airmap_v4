<?php 
/**
 * thin widget
 * minimum view dimension: 120x160
 */
?>

<style>
	body{ overflow-x: hidden; overflow-y: hidden; cursor: default; }
	.header { 
			white-space: nowrap; 
			text-align: center; 
			border-radius: 5px;
			padding: 3px; 
			margin-bottom: 5px; 
			font-size: .9em; 
			font-weight: bold;
			background-color: #4F595D;
			color: #fff;
	}
	.content{ padding: 0 5px; }

	.label-border { border: 1px solid #888; color: #4F595D; }
	
	.item .label { display: inline-block; width: 100%; }
	.item .value-container { text-align: center; }
	.item .unit { font-size: 0.8em; }
	
	.item.pm25 .value{ font-size: 1.2em; }
	.pm25color{ border: 1px solid #4F595D; color: #000;  }

	.item-container > div { width: 50%; padding: 0 2px; display: inline-block; margin-right: -4px; }

	.footer{ text-align: center; padding: 5px 0; margin: 8px 5px 0px; border-top: 2px solid #DDDDDD; font-size: .9em; }
	.footer img{ height: 1.5em; }
</style>

<div class="header">
	<?=$site['SiteName']?>
</div>

<div class="content">
	<div class="item pm25">
		<div class="name">
			<span class="label pm25color">PM 2.5</span>
		</div>
		<div class="value-container">
			<span class="value"><?=$site['Data']['Dust2_5']?></span>
			<span class="unit">μg/m<sup>3</sup></span>
		</div>
	</div>

	<div class="item-container">
		<div>
			<?php if(isset($site['Data']['Temperature'])):?>
			<div class="item temp">
				<div class="name">
					<span class="label label-border">溫度</span>
				</div>
				<div class="value-container">
					<span class="value"><?=$site['Data']['Temperature']?></span>
					<span class="unit">℃</span>
				</div>
			</div>
			<?php endif;?>
		</div>
		<div>
			<?php if(isset($site['Data']['Humidity'])):?>
			<div class="item humi">
				<div class="name">
					<span class="label label-border">濕度</span>
				</div>
				<div class="value-container">
					<span class="value"><?=$site['Data']['Humidity']?></span>
					<span class="unit">%</span>
				</div>
			</div>
			<?php endif;?>
		</div>
	</div>
	

	
</div>

<div class="footer">
	<a href="/site#<?=$group."$".$id?>" title="site detail page" target="g0vDetail">
		<img src="https://i.imgur.com/Gro4juQ.png" alt="g0v icon">
	</a>
	<span class="humanTime"></span>
</div>