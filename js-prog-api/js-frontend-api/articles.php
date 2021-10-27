<?php

	include_once('functions.php');

	$response = [];
	$token = readToken();
	
	$pathArtciles = "db/articles.my";
	
	try{
		$articles = json_decode(file_get_contents($pathArtciles), true);
	}
	catch(Exception $e){
		$articles = [];
	}
	finally{
		if(!is_array($articles)){
			$articles = [];
		}
	}
	
	switch($_SERVER['REQUEST_METHOD']){
		case 'GET':
			$response = array_values($articles);
			break;
		case 'DELETE':
			if($token === null){
				$response = ['res' => false, 'errors' => ['you did not auth']];
			}
			else if(isset($_GET['id']) && isset($articles[$_GET['id']])){
				$article = $articles[$_GET['id']];

				try{
					$tokenData = getData($token);
					
					if($tokenData['userId'] != $article['id_user']){
						$response = ['res' => false, 'errors' => ['It is not your article']];
					}
					else{
						unset($articles[$_GET['id']]);
						$response = ['res' => true];
					}
				}
				catch(Exception $e){
					$response = ['res' => false, 'errors' => ['Bad token']];
				}
			}
			else{
				$response = ['res' => false, 'errors' => ['can`t find article']];
			}
			break;
		default:
			$response = ['res' => false, 'errors' => ['incorrect HTTP-method']];
	}

	file_put_contents($pathArtciles, json_encode($articles));
	echo json_encode($response);