<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>ВКУССИТИ</title>
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@100;300;400;500;600;700;900&display=swap" rel="stylesheet">
    <script src="https://widget.cloudpayments.ru/bundles/cloudpayments.js"></script>

    <style>
        body{
            font-family: 'Fira Sans Condensed', sans-serif;
        }
    </style>
</head>
<body class="antialiased">
<div id="app">
    <app/>
</div>
<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
