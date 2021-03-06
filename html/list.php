<?php require("bootstrap.php"); ?>
<!DOCTYPE html>
<html lang="">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<meta property="og:title" content="g0v零時空汙觀測網站點清單">
		<meta property="og:description" content="Taiwan Air Quality Site List">
		<meta property="og:type" content="website">
		<meta property="og:url" content="https://airmap.g0v.asper.tw/list">
		<meta property="og:image" content="https://i.imgur.com/jcxK6Pj.jpg">

		<title>g0v零時空汙觀測網站點清單</title>
		<link rel='shortcut icon' type='image/x-icon' href='https://i.imgur.com/Gro4juQ.png' />
		<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css">
		<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.10.1/bootstrap-table.min.css">
		<link rel="stylesheet" href="<?=asset('css', 'list.css')?>">
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
			<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->
	</head>
	<body>
		<div id="navbar" class="container-fluid">
			<div class="row">
				<div class="col-sm-6 g0v-logo">
					<img src="https://i.imgur.com/IWqy7yh.png" alt="Image">
				</div>
				<div class="col-sm-6 link">
					<a href='/' class="btn btn-success">Map</a>
				</div>
			</div>
		</div>

		<div class="container-fluid" id="filter">
			<div class="well well-sm">
				<div class="title">
					狀態過濾
				</div>
				<div class="btn-container">
					<button type="button" class="btn btn-primary" data-type="valid" title="最後更新時間在30分內">有效站點</button>
					<button type="button" class="btn btn-default" data-type="expire" title="最後更新時間超過30分">過期站點</button>
				</div>
			

				<div class="title">
					群組過濾
				</div>
				<div class="btn-container">
					<button type="button" class="btn btn-default" data-group="lass">LASS</button>
					<button type="button" class="btn btn-default" data-group="lass-4u">LASS 4U</button>
					<button type="button" class="btn btn-default" data-group="lass-maps">LASS MAPS</button>
					<button type="button" class="btn btn-default" data-group="asus-airbox">Asus Airbox</button>
					<button type="button" class="btn btn-default" data-group="edimax-airbox">Edimax Airbox</button>
					<!--<button type="button" class="btn btn-default" data-group="epa">EPA</button>-->
					<button type="button" class="btn btn-default" data-group="independent">g0v Independent</button>
					<button type="button" class="btn btn-default" data-group="probecube">g0v Probecube</button>
				</div>
			</div>

			<p class="filterMsg bg-info">
				※因站點數過多，請先選擇過濾條件後才會顯示站點
			</p>
		</div>

		<div class="container-fluid">
			<div id="loading" class="loading">
				<div class="spinner">
					<div class="rect1"></div>
					<div class="rect2"></div>
					<div class="rect3"></div>
					<div class="rect4"></div>
					<div class="rect5"></div>
				</div>
			</div>

			<table id="bsTable" class="bsTable table table-striped" 
				   data-search="true" 
				   data-toggle="table" data-detail-view="true" 
				   data-detail-formatter="bsTable.formatter.detail" 
				   >
				<thead>
					<tr>
						<th data-formatter="bsTable.formatter.sn">#</th>
						<th data-field="SiteName" data-class="SiteName" data-sortable="true" data-searchable="true" data-formatter="bsTable.formatter.siteName">Name</th>
						<th data-field="Maker" data-class="Maker" data-sortable="true" data-searchable="true">Maker</th>
						<th data-field="Data.Dust2_5" data-class="Dust2_5" data-sortable="true">PM 2.5</th>
						<th data-field="Data.Temperature" data-class="Temperature" data-sortable="true">Temp</th>
						<th data-field="Data.Humidity" data-class="Humidity" data-sortable="true">RH</th>
						<th data-field="LatLng" data-class="LatLng" data-formatter="bsTable.formatter.location">Location</th>
						<th data-class="widget" data-formatter="bsTable.formatter.widget">Widget</th>
						<th data-field="reliableRanking" data-class="ranking" data-sortable="true" data-formatter="bsTable.formatter.ranking">Ranking</th>
						<th data-field="supposeStatus" data-class="supposeStatus" data-sortable="true" data-formatter="bsTable.formatter.status">Analysis</th>
						<th data-field="Data.Create_at" data-class="Create_at" data-sortable="true" data-formatter="bsTable.formatter.updateTime">Updated At</th>
					</tr>
				</thead>
			</table>
		</div>
		
		<hr>

		<div class="container-fluid">
			<h4>Tips</h4>
			<div class="bg-info">
				<ul>
					<li>點選 <span class='glyphicon glyphicon-bookmark'></span> 可連結至站點詳細資料頁面</li>
					<li>
						點選 <span class='glyphicon glyphicon-map-marker'></span> 可連結至地圖顯示站點;
						滑鼠停留於上會顯示大約地址 (Powered by Google)
					</li>
				</ul>
			</div>
		</div>

		<div class="container-fluid" id="footer">
			<p>Asper &copy; 2017 <a href='/about'>About</a></p>
			<p>
				<a href="https://g0vairmap.blogspot.tw/" target="_blank">g0v空汙網的攻城獅日記</a> |
				<a href="https://www.facebook.com/g0vairmap/" target="_blank">Facebook Page</a> 
			</p>
		</div>

		<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.10.1/bootstrap-table.min.js"></script>
		<script src="//maps.googleapis.com/maps/api/js?key=AIzaSyCDRRT8it4AZpwbORhHeqoi2qrWDmQqD48"></script>
		
		<script src="<?=asset('js', 'vendor-common.js')?>"></script>
		<script src="<?=asset('js', 'list.js')?>"></script>

		<?=showGACode();?>
	</body>
</html>