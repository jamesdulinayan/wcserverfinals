function registration()
  {

	var fname= document.getElementById("t1").value;
	var lname= document.getElementById("t6").value;
	var email= document.getElementById("t3").value;
	var uname= document.getElementById("t2").value;
	var pwd= document.getElementById("t4").value;			
	var cpwd= document.getElementById("t5").value;
 
	  
	  //email id expression code
	  var pwd_expression = /^[A-Za-z0-9]+$/;
	  var letters = /^[A-Za-z0-9]+$/;
	  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	  if(fname=='')
	  {		
		  error = '<h3>Fill in first name</>'
		  document.getElementById('error').innerHTML = error
	  }
	  else if(lname=='')
	  {		
		  error = '<h3>Fill in last name</>'
		  document.getElementById('error').innerHTML = error
	  }
	  else if(email=='')
	  {
		error = '<h3>Fill in email address</>'
		document.getElementById('error').innerHTML = error
	  }
	  else if (!filter.test(email))
	  {
		error = '<h3>Invalid email address</>'
		document.getElementById('error').innerHTML = error
	  }
	  else if(uname=='')
	  {
		error = '<h3>Fill in username</>'
		document.getElementById('error').innerHTML = error
	  }
	  else if(pwd=='')
	  {
		error = '<h3>Fill in password</>'
		document.getElementById('error').innerHTML = error
	  }
	  else if(cpwd=='')
	  {	
		error = '<h3>Fill in confirm password</>'
		document.getElementById('error').innerHTML = error
	  }
	  else if(pwd != cpwd)
	  {
		error = '<h3>Password does not matched</>'
		document.getElementById('error').innerHTML = error
	  }
	  else if(document.getElementById("t5").value.length < 6)
	  {
		error = '<h3>Password minimum length is 6</>'
		document.getElementById('error').innerHTML = error
	  }
	  else
	  {				                          
			window.location = "/home";
	  }


  }

  function login(){
	var uname= document.getElementById("t2").value;
	var pwd= document.getElementById("t4").value;	
	if(uname=='')
	{
		error = '<h3>Fill in username</>'
		document.getElementById('error').innerHTML = error
	}
	else if(pwd=='')
	{
		error = '<h3>Fill in password</>'
		document.getElementById('error').innerHTML = error
	}
	else if(uname == 'jonesfundar' && pwd == 'password1'){
		window.location = "/home";
	}
	else if(uname == 'jamesdulinayan' && pwd == 'password2'){
		window.location = "/home";
	}
	else if(uname == 'melvincanlas' && pwd == 'password3'){
		window.location = "/home";
	}
	else{
		alert('Invalid Username');
	}
  }