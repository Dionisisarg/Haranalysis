<html>


<head>

<link rel="stylesheet" href="mystyle.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script src ="login_check.js"> </script>


</head>




<body>

<?php


session_start();

?>




Welcome. Please login
<br>
<br>




    <div id="div_login">
        <div id="message"></div>
        <div>
		Username:
            <input type="text"  id="log_username" name="log_username" />
			<br>
        </div>
        <div>
		Password:
            <input type="password" id="log_password" name="log_password"/>
			<br>
        </div>
        <div>
            <input type="button" value="Login" name="login_button" id="login_button" />
			<br>
        </div>
    </div>



<br>


<br>

<a href ="register.php">Don't have account? Register!! </a>





</body>

</html>