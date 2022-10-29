<template>
  <div class="wrapper-background-register">
    <div class="page-register-center">
      <b-card img-top style="max-width: 20rem;" class="mb-2 page-card-register">
        <b-form class="container">
          <h1 class="register-page-title">Cadastre-se</h1>
          <div>
            <b-row>
              <b-form-input class="form-register-name" type="text" placeholder="Nome" required></b-form-input>
            </b-row>
            <b-row>
              <b-form-input class="form-register-email" type="email" placeholder="E-mail" required></b-form-input>
            </b-row>
            <b-row>
              <b-form-input class="form-register-password" type="password" placeholder="Senha" required></b-form-input>
            </b-row>
            <button class="register-page-botton"> Cadastrar</button>

          <p class="login-account">Não tem uma conta ainda?
          <router-link class="link-login-account" to="/"> <span> Entrar</span></router-link>
        </p>
          </div>
        </b-form>

      </b-card>
    </div>

  </div>
</template>

<style scoped>
.wrapper-background-register {
  background-image:  url("../assets/black.jpg");
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;


}

.page-register-center{
  position: relative !important;
  top: 100px;
}
.page-card-register {
  background-color: rgba(0, 0, 0, .75);
  border-radius: 4px;
  padding: 20px 10px 20px 10px;
  position: relative;
  display: inline-flex;

}
.register-page-title {
  color: white;
  padding-bottom: 10px;
}
.form-register-name,
.form-register-email,
.form-register-password {
  margin-bottom: 30px;
}
.register-page-botton {
  border: none;
  height: 40px;
  width: 120px;
  border-radius: 3px;
  margin: 20px 0 30px 0;

}
#app > div > div > div > div > form > div > button > a{
  text-decoration: none;
  color: black;
}

.login-account {
  color: white;
  font-size: 12px;
}

.link-login-account {
  color: rgb(157 157 157);
  font-weight: bold;
}

.link-login-account:hover {
  color: rgb(92, 92, 92);
}
</style>