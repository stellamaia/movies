<template>
  <div class="wrapper-background">
    <div class="page-login-center">
    <b-card img-top style="max-width: 20rem; " class="mb-2 page-card-home ">
      <b-form class="container">
        <h1 class="login-page-title">Login</h1>
        <div>
          <b-row>
            <b-form-input v-model="email" class="form-login-name" type="email" autocomplete="off" placeholder="Email" required>
            </b-form-input>
          </b-row>
          <b-row>
            <b-form-input v-model="password" class="form-login-password" type="password"   autocomplete="off" placeholder="Password" >
            </b-form-input>
          </b-row>
          <button @click.prevent="login" class="login-page-botton"> Sign in</button>

          <p class="register-account">Don't have an account?<router-link class="link-register-account" to="/register"> <span class="register-link"> Sign Up</span> </router-link>
          </p>
        </div>
      </b-form>

    </b-card>
  </div>

  </div>
</template>


<script>
import firebase from "firebase"

export default {
  name: 'LoginView',
  data: () => {
    return {
      email: '',
      password: '',
      initials: ""

    };
  },
  methods: {
    login() {
      firebase
      .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (result) => {
            localStorage.setItem("token", result.user.uid);
            this.$router.push("/home");
          },
          () => {
            this.$swal(
              "Oops...",
              "Você ainda não criou uma conta ou senha incorreta",
              "error"
            )
          }
        )
    }
  }
}
</script>


<style scoped>
.wrapper-background {
  background-image:  url("../assets/black.jpg");
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

}
.page-login-center{
  position: relative!important;
  top: 25%;
}
.page-card-home {
  background-color: rgba(0, 0, 0, .75);
  border-radius: 4px;
  padding: 20px 10px 20px 10px;
  position: relative;
    display: inline-flex;
}
.login-page-title {
  color: white;
  padding-bottom: 10px;
}
.form-login-name,
.form-login-password {
  margin-bottom: 30px;
}

.login-page-botton {
  border: none;
  height: 40px;
  width: 120px;
  border-radius: 3px;
  margin: 20px 0 30px 0;
}
.register-account {
  color: white;
  font-size: 12px;
}

.link-register-account {
  color: rgb(157 157 157);
  font-weight: bold;
}

.link-register-account:hover {
  color: rgb(92, 92, 92);
}
.register-link{
  font-size: 10px;
}
@media screen and (min-width: 768px)   {
.page-card-home{
  width:400px;
}
}
</style>

