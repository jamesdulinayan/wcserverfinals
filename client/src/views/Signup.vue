<template>

    <div class="wrapper">
   
    <div class="parallax__layer signin"></div>
    <div class="parallax__layer nav-text">
        <img src="images/logo.png">
          <ul>
            <li><a  href="/" style="text-decoration:none">HOME</a></li>
            <li><a href="/members" style="text-decoration:none">MEMBERS</a></li>
            <li><a href="/news" style="text-decoration:none">NEWS</a></li>
            <li><a href="/events" style="text-decoration:none">EVENTS</a></li>
          </ul>

          <div class="search__container">
            <input class="search__input" type="text" placeholder="Search">
          </div>
          
          <div class="profile">
            <a class="active" href="/signup" style="text-decoration:none">SIGN UP</a> 
            <span> / </span>
            <a href="/signin" style="text-decoration:none"> SIGN IN</a>
          </div>

        <center>
        <div class='contact'>
        <div class="containercontact">
        <div class="login">
            <div id='error'></div>
            <br>
            <br>
            <input type="text" placeholder="First Name *" id="t1" class="p1">
            <input type="text" placeholder="Middle Initial" id="t6" class="p2">
            <input type="text" placeholder="Last Name *" id="t6" class="p3">
            <input type="text" placeholder="Username *" id="t2" class="p4">
            <input type="text" placeholder="Contact Number" id="t7" class="p5">
            <input type="text" placeholder="Birthdate (MM / DD / YY)" id="t7" class="p6">
            <input type="text" placeholder="Email *" id="t3" class="p7">
            <input type="text" placeholder="Home Address" id="t3" class="p8">
            <input type="password" placeholder="Password *" id="t4" class="p9">
            <input type="password" placeholder="Confirm Password *" id="t5" class="p10">
        </div>
            <center><input type="submit" value="Create Account ➤" class="button" onclick="registration()" /></center>
        </div>
        </div>
        </center>

    </div>



    
    </div> 

    

</template>


<style scoped src="@/assets/styles/registerstyle.css">
</style>
<style scoped src="@/assets/styles/homestyle.css">
</style>

