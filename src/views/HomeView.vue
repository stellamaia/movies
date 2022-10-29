<template>
  <div>
    <div class="wrapper-background">
      <b-nav class="conteudo-nav">
        <div class="container-logo">
          <img class="img-logo" src="../assets/logo.png" alt="logo">
        </div>
        <p class="logout"> sair</p>
      </b-nav>
    </div>

    <div >

      <b-card  img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
        <h2 class="title-movie"> {{ user.Title }}</h2>
            <img  class="img-teste" src="../assets/black-2.jpg" alt="">
       
        <b-card-text class="title-genre"><span class="title-genre-color">Gêneros:</span> {{ user.Genre }} </b-card-text>
        <b-card-text class="text-note"><span class="text-note-color"> Nota:</span> {{ user.imdbRating }} </b-card-text>


        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'HomeView',
  data() {
    return {
      user: {},

    };
  },
  created() {
    this.getUser();

  },
  methods: {
    getUser() {
      axios
        .get("http://www.omdbapi.com/?i=tt3896198&apikey=6e511a4a")
        .then((res) => {
          this.user = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
  
<style>
.img-teste{
  height:200px;
}
.wrapper-background {
  background-color: rgba(32, 32, 32, 0.952);
}

.container-logo {
  padding: 10px 20px;
}

.img-logo {
  width: 40px;
}

.conteudo-nav {
  display: flex;
  justify-content: space-between;
}

.logout {
  padding: 10px 20px;
  color: white;
  cursor: pointer;
}
.title-movie{
  font-weight: bold;
  font-size: 25px;

}
.title-genre{
font-size: 17px;
text-align: start;
}
.title-genre-color{
font-weight: bold
}
.text-note{
font-size: 17px;
text-align: start;
}
.text-note-color{
  font-weight: bold;

}
</style>