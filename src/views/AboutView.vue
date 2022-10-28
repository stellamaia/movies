<template>
  <div class="wrapper-background-register">
    <b-form class="page-register container">



      <h1 class="login-register-title">Cadastre-se</h1>
      <b-row>
        <b-form-input class="form-register-name" id="input-1" type="text" placeholder="Nome" required></b-form-input>
      </b-row>
      <b-row>
        <b-form-input class="form-register-email" id="input-2" type="email" placeholder="email" required></b-form-input>
      </b-row>
      <b-row>
        <b-form-input class="form-register-password" id="input-3" type="password" placeholder="password" required>
        </b-form-input>
      </b-row>
      <button class="register-page-botton">Cadastrar</button>
      <p class="login-account">Já tem uma conta?
        <router-link class="link-login-account" to="/">Entrar</router-link>
      </p>
    </b-form>


  </div>
</template>

<style>
.wrapper-background-register {
  background-image: url("../assets/black.jpg");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-position-y: -20px;
}

.page-register {
  background-color: rgba(0, 0, 0, .75);
  border-radius: 4px;
  padding: 20px 10px 20px 10px;
  position: relative;
  top: 200px;

}

.register-page-botton {
  border: none;
  height: 40px;
  width: 120px;
  border-radius: 3px;
  margin: 20px 0 50px 0;
}

.login-register-title {
  color: white;
  padding: 50px 0 50px 0;
}

.form-register-name,
.form-register-email,
.form-register-password {
  margin-bottom: 10px;
  margin-bottom: 30px;
}

@media (min-width:320px) and (max-width: 481px) {
  .page-register {
    padding: 50px 20px 50px 20px;
  }

}

@media (min-width: 481px) and (max-width:768px) {
  #app > div > form > div:nth-child(2),
  #app > div > form > div:nth-child(3),
  #app > div > form > div:nth-child(4)
   {
    justify-content: center;
  }

  .form-register-name,
  .form-register-email,
  .form-register-password {
    width: 50%;
  }
  .page-register{
    width: 80%;
  }

}

@media (min-width: 769px) and (max-width: 1024px) {
  #app > div > form > div:nth-child(2),
  #app > div > form > div:nth-child(3),
  #app > div > form > div:nth-child(4)
  {
  justify-content: center;
}
.form-register-name,
  .form-register-email,
  .form-register-password {
    width: 50%;
  }
  .page-register{
    width: 60%;
  }

}
@media (min-width: 1025px) and (max-width: 1200px) {
  #app > div > form > div:nth-child(2),
  #app > div > form > div:nth-child(3),
  #app > div > form > div:nth-child(4)
  {
  justify-content: center;
}
.form-register-name,
  .form-register-email,
  .form-register-password {
    width: 50%;
  }
  .page-register{
    width: 60%;
  }

}
@media (min-width: 1201px)  {
  #app > div > form > div:nth-child(2),
  #app > div > form > div:nth-child(3),
  #app > div > form > div:nth-child(4){
  justify-content: center;
}
.form-register-name,
  .form-register-email,
  .form-register-password {
    width: 50%;
  }
  .page-register{
    width: 60%;
  }

}

.login-account {
  color: white;
}

.link-login-account {
  color: rgb(157 157 157);
  font-weight: bold;
}
.link-login-account:hover{
  color: rgb(92, 92, 92);
}
</style>