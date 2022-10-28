<template>
  <div class="wrapper-background">
    <b-form class="page-home container">
      <h1 class="login-page-title">Entrar</h1>
      <div class="card-home">
        <b-row>
          <b-form-input class="form-login-name" id="input-1" type="email" placeholder="email" required></b-form-input>

        </b-row>
        <b-row>


          <b-form-input class="form-login-password" id="input-2" type="password" placeholder="senha" required>
          </b-form-input>
        </b-row>
        <button class="login-page-botton">Entrar</button>
        <p class="register-account">Não tem uma conta ainda? 
          
            <router-link class="link-register-account" to="/about">Cadastre-se</router-link>
          
        </p>
      </div>
    </b-form>
  </div>
</template>



<style scoped>
.wrapper-background{
  background-image: url("../assets/black.jpg");
  height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-position-y: -20px;

}
.login-page-title {
  color: white;
  padding: 50px 0 50px 0;

}

.page-home {
  background-color: rgba(0, 0, 0, .75);
  border-radius: 4px;
  padding: 20px 10px 20px 10px;
  position: relative;
    top: 300px;

}

.login-page-botton {
  border: none;
  height: 40px;
  width: 120px;
  border-radius: 3px;
  margin: 20px 0 50px 0 ;
}

.form-login-name,
.form-login-password {
  margin-bottom: 10px;
  margin-bottom: 30px;

}

@media (min-width:320px) and (max-width: 481px) {
.page-home{
  padding: 50px 20px 50px 20px;
}

}


@media (min-width: 481px) and (max-width:768px) {
  #app > div > form > div > div:nth-child(1),
  #app > div > form > div > div:nth-child(2){
  justify-content: center;
}
.form-login-name,.form-login-password {
  width: 50%;
}
.page-login{
    width: 80%;
  }

}
@media (min-width: 769px) and (max-width: 1024px) {
  #app > div > form > div > div:nth-child(1),
  #app > div > form > div > div:nth-child(2){
  justify-content: center;
}
.form-login-name,.form-login-password {
  width: 50%;
}
.page-login{
    width: 60%;
  }

}
@media (min-width: 1025px) and (max-width: 1200px) {
  #app > div > form > div > div:nth-child(1),
  #app > div > form > div > div:nth-child(2){
  justify-content: center;
}
.form-login-name,.form-login-password {
  width: 50%;
}
.page-login{
    width: 60%;
  }

}
@media (min-width: 1201px)  {
  #app > div > form > div > div:nth-child(1),
  #app > div > form > div > div:nth-child(2){
  justify-content: center;
}
.form-login-name,.form-login-password {
  width: 50%;
}
.page-login{
    width: 60%;
  }

}
.register-account{
color: white;
}
.link-register-account{
  color: rgb(157 157 157);
font-weight: bold;
}
</style>


<script>

export default {
  name: 'HomeView',
  components: {

  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  }
}
</script>
