<?php

	$headers = apache_request_headers();
	
	if(isset($headers['Autorization'])){
		$token = $headers['Autorization'];
	}
	else if(isset($headers['autorization'])){
		$token = $headers['autorization'];
	}
	else{
		header('HTTP/1.1 403 Forbidden');
		echo 'we didn`t get auth key';
		exit();
	}
	
	$tokens = json_decode(file_get_contents('keys.my'), true);
	
	if(!isset($tokens[$token])){
		header('HTTP/1.1 403 Forbidden');
		echo 'auth key is wrong';
		exit();
	}
	
	$pathArtciles = "articles/$token/articles.my";
	$pathAi = "articles/$token/ai.my";
	$pathCounter = "articles/$token/counter.my";
	
	try{
		$articles = json_decode(file_get_contents($pathArtciles), true);
		$articlesAI = (int)file_get_contents($pathAi);
		$cnt = (int)file_get_contents($pathCounter);
	}
	catch(Exception $e){
		$articles = [];
		$articlesAI = 0;
		$cnt = 0;
	}
	
	if(!is_array($articles)){
		$articles = [];
	}
	
	switch($_SERVER['REQUEST_METHOD']){
		case 'GET':
			if(isset($_GET['id'])){
				if(isset($articles[$_GET['id']])){
					$res = $articles[$_GET['id']];
				}
				else{
					$res = 'article not found';
				}
			}
			else{
				$res = array_values($articles);
			}
			break;
		case 'POST':
			$title = cs($_POST['title']);
			$content = cs($_POST['content']);
			$errors = validation($title, $content);
			
			if(empty($errors)){
				$articles[++$articlesAI] = [
					'id' => $articlesAI,
					'title' => $title,
					'content' => $content,
					'dt' => date('Y-m-d H:i:s')
				];
				
				file_put_contents($pathAi, $articlesAI);
				$res = [
					'res' => true,
					'id' => $articlesAI
				];
			}
			else{
				$res = [
					'res' => false,
					'errors' => $errors
				];
			}
			break;
		case 'PUT':
			$str = file_get_contents('php://input');
			$res = $str;

			$put = json_decode($str, true);
			$res = $put['id'];
			
			if(isset($articles[$put['id']])){
				$title = cs($put['title']);
				$content = cs($put['content']);
				$errors = validation($title, $content);
				
				if(empty($errors)){
					$articles[$put['id']]['title'] = $title;
					$articles[$put['id']]['content'] = $content;
					$res = [
						'res' => true
					];
				}
				else{
					$res = [
						'res' => false,
						'errors' => $errors
					];
				}
			}
			else{
				$res = [
					'res' => false,
					'errors' => ['article not found']
				];
			}
			
			break;
		case 'DELETE':
			if(isset($_GET['id']) && isset($articles[$_GET['id']])){
				unset($articles[$_GET['id']]);
				$res = true;
			}
			else{
				$res = 'can`t remove article';
			}
			break;
		default:
			$res = 'incorrect HTTP-method';
	}

	file_put_contents($pathArtciles, json_encode($articles));
	file_put_contents($pathCounter, ++$cnt);
	
	echo json_encode($res);
	
	function cs($str){
		return strip_tags(trim($str));
	}
	
	function validation($title, $content){
		$t = $title;
		$c = $content;
		$errors = [];
		
		if($t == ''){
			$errors[] = 'Заголовок не может быть пустым';
		}
		
		if($c == ''){
			$errors[] = 'Контент не может быть пустым';
		}
		
		return $errors;
	}