<template>

    <div class="wrapper">
   
    <div class="parallax__layer nav-text">
        <img src="images/logo.png">
          <ul>
            <li><a href="/" style="text-decoration:none">HOME</a></li>
            <li><a class ='active' href="/members" style="text-decoration:none">MEMBERS</a></li>
            <li><a href="/news" style="text-decoration:none">NEWS</a></li>
            <li><a href="/events" style="text-decoration:none">EVENTS</a></li>
          </ul>

          <div class="search__container">
            <input class="search__input" type="text" placeholder="Search">
          </div>
          
          <div class="profile">
            <a href="/signup" style="text-decoration:none">SIGN UP</a> 
            <span> / </span>
            <a href="/signin" style="text-decoration:none"> SIGN IN</a>
          </div>

    </div>
  
      <div class="xop-section">
     <div class="wrapper1">
          <div class="team">
            <div class="team_member">
              <div class="team_img">
                <img src="images/james.jpg" alt="Team_image">
              </div>
              <h3>James Dulinayan</h3>
              <p class="role">ジェームズデュリナヤン</p>
              <p>jamesdulinayan@gmail.com</p>
              <center><input type="submit" value="VIEW PROFILE" class="button" onclick="registration()" /></center>
              <center><input type="submit" value="ADD FRIEND" class="button" onclick="registration()" /></center>
              </div>
            <div class="team_member">
              <div class="team_img">
                <img src="images/jones.jpg" alt="Team_image">
              </div>
              <h3>Jones Fundar</h3>
              <p class="role">ジョーンズファンダー</p>
              <p>fundarjones@gmail.com</p>
              <center><input type="submit" value="VIEW PROFILE" class="button" onclick="registration()" /></center>
              <center><input type="submit" value="ADD FRIEND" class="button" onclick="registration()" /></center></div>
            <div class="team_member">
              <div class="team_img">
                <img src="images/melvin.jpg" alt="Team_image">
              </div>
              <h3>Melvin Canlas</h3>
              <p class="role">メルビン・カンラス</p>
              <p>melvincanlas@gmail.com</p>
              <center><input type="submit" value="VIEW PROFILE" class="button" onclick="registration()" /></center>
              <center><input type="submit" value="ADD FRIEND" class="button" onclick="registration()" /></center>
            </div>
          </div>
        </div>	
      </div>


      <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About Us</h6>
            <p>Sakura is your ultimate Japan guide with tourist
              information for Tokyo, Kyoto, Osaka, Hiroshima, Hokkaido, and other top Japan holiday destinations. What to do, where to go, where to stay, restaurants, hotels, and maps, plan your trip here, to travel with confidence and ease when you visit Japan.</p></div>

          <div class="col-xs-6 col-md-3">
            <h6>Menu</h6>
            <ul class="footer-links">
            <li><a href="/" style="text-decoration:none">HOME</a></li>
            <li><a class ='active' href="/members" style="text-decoration:none">MEMBERS</a></li>
            <li><a href="/news" style="text-decoration:none">NEWS</a></li>
            <li><a href="/events" style="text-decoration:none">EVENTS</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Social Media</h6>
            <ul class="footer-links">
              <li><a>FACEBOOK</a></li>
              <li><a>TWITTER</a></li>
              <li><a>INSTAGRAM</a></li>
              <li><a>YOUTUBE</a></li>
            </ul>
          </div>
        </div>
        <hr>
      </div>
      <div class="container">
        <div class="row">
        <center><p class="copyright-text">ALL RIGHTS RESERVED &copy; 2020 SAKURA JAPAN</p></center>
          

          
        </div>
      </div>
    </footer>

    </div>
    
        

</template>

<style scoped src="@/assets/styles/memberstyle.css">
</style>
