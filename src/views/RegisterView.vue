<template>
  <div class="wrapper-background-register">
    <div class="page-register-center">
      <b-card img-top style="max-width: 20rem;" class="mb-2 page-card-register">
        <b-form class="container">
          <h1 class="register-page-title">Sign Up</h1>
          <div>
            <b-row>
              <b-form-input v-model="name" class="form-register-name" type="text" placeholder="Name"  autocomplete="off"  required></b-form-input>
            </b-row>
            <b-row>
              <b-form-input v-model="email" class="form-register-email" type="email" placeholder="Email"  autocomplete="off"  required></b-form-input>
            </b-row>
            <b-row>
              <b-form-input v-model="password" class="form-register-password" type="password"   autocomplete="off"  placeholder="Password" ></b-form-input>
            </b-row>
            <button @click.prevent="register"  class="register-page-botton">  Sign Up</button>

          <p class="login-account">Already have an account?
          <router-link class="link-login-account" to="/"> <span> Sign In</span></router-link>
        </p>
          </div>
        </b-form>

      </b-card>
    </div>

  </div>
</template>


<script>

import { firebaseDb, firebaseAuth } from "../firebaseConfig";

export default {
  name: "RegisterView",
  data(){
    return{
      name:'',
      email: '',
      password: '',
      initials: ""
    };
  },
  methods:{
    register(){
      firebaseAuth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(
          (result) => {
            firebaseDb
          .collection("users")
          .doc(result.user.uid)
          .set({
            id: result.user.uid,
            name: this.name,
            email: this.email,
        
          })
          .then(() =>{
            this.$swal(
              "Sucesso",
              "Conta criado com sucesso!",
              "success"
            ).then(() => this.$router.push("/"));
               
          });

        },
        (err) => {
            console.log(err);
            this.$swal("Oops...", "Preencha todos os campos!", "error");
          }

      )
    }
  }
}

</script>

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
  top: 25%;
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
@media screen and (min-width: 768px)   {
.page-card-register{
  width:400px;
}
}
</style>