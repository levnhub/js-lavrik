<?php 

	$response = [
		[
			"id" => 1,
			"title" => "Post 1",
			"dt" => "2021-10-28",
			"content" => "Post content",
		],
		[
			"id" => 2,
			"title" => "Post 2",
			"dt" => "2021-10-28",
			"content" => "Post content",
		],
		[
			"id" => 3,
			"title" => "Post 3",
			"dt" => "2021-10-28",
			"content" => "Post content",
		],
	];

	if ( !empty($_GET['id']) ) {
		$result = $response[$_GET['id']];
	} else {
		$result = $response;
	}

	echo json_encode($result);

?>