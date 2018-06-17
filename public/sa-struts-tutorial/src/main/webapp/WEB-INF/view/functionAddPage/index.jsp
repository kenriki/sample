<%@page pageEncoding="UTF-8"%>
<html>
<head>
<title>Tutorial: 練習</title>
<link rel="stylesheet" type="text/css" href="${f:url('/css/sa.css')}" />
<script src="${f:url('/js/jquery.js')}"></script>
</head>
<body>

	<h1>練習用追加ページ</h1>
	<span id="message"></span>
	<br />
	<input type="button" value="hello" onclick="$('#message').load('${f:url('hello')}');" />
	<p>インプットフォーム</p>

	<p>値を入力してください</p>



	<%-- GETメソッドでテキストを送信 --%>

	<form action="./FormServlet">

		<p>
			ここに値を入れてください：<input type="text" name="text1">
		</p>

		<p>
			ここに値を入れてください：<input type="text" name="text2">
		</p>

		<input type="submit" value="GETで送信">

	</form>



	<%-- POSTメソッドでテキストを送信 --%>

	<form method="post" action="./FormServlet">

		<p>
			ここに値を入れてください：<input type="text" name="text1">
		</p>

		<p>
			ここに値を入れてください：<input type="text" name="text2">
		</p>

		<input type="submit" value="POSTで送信">

	</form>
</body>
</html>