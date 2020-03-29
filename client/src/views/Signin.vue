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
            <a href="/signup" style="text-decoration:none">SIGN UP</a> 
            <span> / </span>
            <a class="active" href="/signin" style="text-decoration:none"> SIGN IN</a>
          </div>

        <center>
        <div class='contact'>
        <div class="containercontact">
        <div class="login">
            <div id='error'></div>
            <br>
            <br>
            <input type="text" placeholder="Username *" id="t2" class="r1">
            <input type="password" placeholder="Password *" id="t4" class="r2">
        </div>
            <center><input type="submit" value="Create Account ➤" class="button" onclick="registration()" /></center>
        </div>
        </div>
        </center>

    </div>

    
    </div> 

    

</template>

<!---- <script>
import axios from 'axios'
import router from '../router'
export default {
    data () {
        return {
            fname:'',
            mname:'',
            lname:'',
            no:'',
            address:'',
            bdate:'',
            sex:'',
            email:'',
            user:'',
            pass:'',
            con:''
        }
    },
    method: {
        register () {
            axios.post('app/signup', { 
                fname:this.fname,
                mname:this.mname,
                lname:this.lname,
                no:this.no,
                address:this.address,
                bdate:this.bdate,
                sex:this.sex,
                email:this.email,
                user:this.user,
                pass:this.pass
                }).then(res => {
                    if (res.data)
                    alert('You have succesfully registered...')
                    router.push({name: 'Home'})
                }).catch(err => {  
                    console.log(err)
            })
        }
    }
}

</script>

---->

<style scoped src="@/assets/styles/registerstyle.css">
</style>
<style scoped src="@/assets/styles/homestyle.css">
</style>
