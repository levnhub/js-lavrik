<?php

	const SECRET_KEY = 'th654uy7u76u_)$HJiuyo98o87ol87lkyu5678658tj';

	function readToken(){
		$headers = apache_request_headers();

		if(isset($headers['Authorization'])){
			$token = $headers['Authorization'];
		}
		else if(isset($headers['authorization'])){
			$token = $headers['authorization'];
		}
		else{
			$token = null;
		}

		return $token;
	}

	/* base64data|sign */

	function getData($token){
		$parts = explode('|', $token);

		if(count($parts) !== 2 || trim($parts[0]) === ''){
			throw new Exception('incorrect token format');
		}

		$data = json_decode(base64_decode($parts[0]), true);

		if($parts[1] !== sign($data)){
			throw new Exception('incorrect sign');
		}

		return $data;
	}

	function packData($data){
		$text = base64_encode(json_encode($data));
		return $text . '|' . sign($data);
	}

	function sign($data){
		return hash('sha256', serialize($data) . SECRET_KEY);
	}