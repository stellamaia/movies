<template>
  <div class="wrapper-background ">
    <div class="page-login-center page-card-login">
      <b-form>

        <div class="container">
          <b-row>
            <h1 class="login-page-title">Login</h1>
          </b-row>
          <b-row>
            <b-form-input v-model="email" class="form-login-name" type="email" autocomplete="off" placeholder="E-mail"
              required>
            </b-form-input>
          </b-row>
          <b-row>
            <b-form-input v-model="password" class="form-login-password" type="password" autocomplete="off"
              placeholder="Password">
            </b-form-input>
          </b-row>
          <button @click.prevent="login" class="login-page-botton"> Sign in</button>
          <p class="register-account">Don't have an account?<router-link class="link-register-account" to="/register">
              <span class="register-link"> Sign Up</span>
            </router-link>
          </p>
        </div>
      </b-form>


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
          (err) => {
            
            this.$swal(
              "Oops...",
              err.message,
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
  background-image: url("../assets/black.jpg");
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.page-login-center {
  position: relative !important;
  top: 20%;
}

.page-card-login {
  background-color: rgba(0, 0, 0, .75);
  border-radius: 4px;
  padding: 20px 10px 20px 10px;

  justify-content: center;
  display: inline-flex;
}

.login-page-title {
  color: rgb(255, 255, 255);
  font-weight: 700;
  padding-bottom: 10px;
  padding-bottom: 50px;
}

.form-login-name,
.form-login-password {
  margin-bottom: 30px;
  border: 1px solid rgb(255, 255, 255);

}

.login-page-botton {
  border: none;
  height: 40px;
  width: 120px;
  border-radius: 3px;
  margin: 50px 0 30px 0;
  color: white;
  background-color: black;

}

.register-account {
  color: rgb(255, 255, 255);
  font-size: 12px;
}

.link-register-account {
  color: rgb(92, 92, 92);
  font-weight: bold;
  text-decoration: none;
}

.link-register-account:hover {
  color: rgb(92, 92, 92);
}

.register-link {
  font-size: 12px;
}


@media screen and (min-width: 320px) and (max-width: 481px) {
  .page-card-login {
    width: 90%;
  }

  .form-control {

    width: 16rem !important;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .page-card-login {
    width: 60%;
  }

  .form-control {

    width: 19rem !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .page-card-login {
    width: 50%;
  }

  .form-control {

    width: 19rem !important;
  }
}

@media screen and (min-width:1025px) and (max-width: 1200px) {
  .page-card-login {
    width: 50%;
  }

  .form-control {

    width: 16rem !important;
  }
}

@media screen and (min-width: 1201px) {
  .page-card-login {
    width: 30%;
  }

  .form-control {

    width: 16rem !important;
  }
}
</style>

