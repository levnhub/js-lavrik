<?php

	include_once('functions.php');

	$response = [];

	if($_SERVER['REQUEST_METHOD'] === 'POST'){
		$login = trim($_POST['login'] ?? '');
		$password = trim($_POST['password'] ?? '');

		if($login === '' || $password === ''){
			$response = ['res' => false, 'errors' => ['Введите логин и пароль']];
		}
		else{
			$users = json_decode(file_get_contents('db/users.my'), true);

			if(isset($users[$login]) && $users[$login]['password'] === $password){
				$response = [
					'res' => true,
					'token' => packData([
						'userId' => $users[$login]['id_user'],
						'expire' => time() + 3600
					]),
					'name' => $users[$login]['name'],
					'expire' => time() + 3600
				];
			}
			else{
				$response = ['res' => false, 'errors' => ['Неправильный логин или пароль']];
			}
		}
	}
	else{
		$response = ['res' => false, 'errors' => ['Некорректный метод обращения к серверу']];
	}

	echo json_encode($response);