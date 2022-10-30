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


    <b-row class="container-search">
      <b-col lg="6" sm="6" md="6">
        <b-form-input class="input-search" id="input-2" v-model="search" placeholder="Pesquisar..." required>
        </b-form-input>
        <b-button class="pesquisa-botao">search </b-button>
      </b-col>

    </b-row>


    <b-row>
      <!--v-for="movie in movies" :key="movie.id"-->
      <b-col lg="4" sm="12" md="6">
        <b-card v-b-modal.modal-1 :img-src="movie.Poster" img-alt="Image" img-top tag="article"
          style="max-width: 20rem;" class="mb-2">


          <h2 class="title-movie"> {{ movie.id }}{{ movie.Title }}</h2>
          <b-card-text class="title-genre"><span class="text-color">Gêneros:</span> {{ movie.Genre }} </b-card-text>
          <b-card-text class="text-note"><span class="text-color"> Nota:</span> {{ movie.imdbRating }} </b-card-text>
        </b-card>
      </b-col>

    </b-row>


    <div>
      <b-modal id="modal-1">
        <b-row>
        <b-col cols="12" sm="12" md="6" lg="6">
        <h1>{{ movie.Title }} </h1>
        <p>{{ movie.Year }}</p>
        <b-card class="image-modal" :img-src="movie.Poster"></b-card>
      </b-col>
        <b-col cols="12" sm="12" md="6" lg="6">
        <p class=" text-color my-4"> {{ movie.Released }} / {{ movie.Runtime }} / {{ movie.Genre }}</p>
        <p><span class="text-color">Language:</span> {{ movie.Language }}</p>
        <p><span class="text-color">Rated:</span> {{ movie.Rated }} </p>
        <p><span class="text-color">Director:</span> {{ movie.Director }} </p>
        <p><span class="text-color">Writer:</span> {{ movie.Writer }}</p>
        <p><span class="text-color">Actors:</span> {{ movie.Actors }}</p>
        <p><span class="text-color">Plot:</span> {{ movie.Plot }}</p>
        <p><span class="text-color">Country:</span> {{ movie.Country }}</p>
        <p><span class="text-color">Awards:</span> {{ movie.Awards }}</p>
        <!--  <p><span class="text-color">Ratings:</span> {{ movie.Ratings }}</p>-->
        <p><span class="text-color">Metascore:</span> {{ movie.Metascore }}</p>
        <p><span class="text-color">imdbRating:</span> {{ movie.imdbRating }}</p>
        <p><span class="text-color">imdbVotes:</span> {{ movie.imdbVotes }}</p>
        <p><span class="text-color">imdbID:</span> {{ movie.imdbID }}</p>
        <p><span class="text-color">Type:</span> {{ movie.Type }}</p>
        <p><span class="text-color">DVD:</span> {{ movie.DVD }}</p>
        <p><span class="text-color">BoxOffice:</span> {{ movie.BoxOffice }}</p>
        <p><span class="text-color">Production:</span> {{ movie.Production }}</p>
        <p><span class="text-color">Website:</span> {{ movie.Website }}</p>
        <p><span class="text-color">Response:</span> {{ movie.Response }}</p>


      </b-col>
    </b-row>
      </b-modal>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'HomeView',
  data() {
    return {
      movie: {},
      search: ""

    };
  },
  created() {
    this.getMovie();

  },
  methods: {
    getMovie() {
      axios
        .get("http://www.omdbapi.com/?i=tt3896198&apikey=edeaa103")
        .then((res) => {
          this.movie = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    movies() {
      return this.users?.filter((movie) => {
        return movie.name
          .toLowerCase()
          .includes(this.search.toLowerCase());
      })
    }
  }

};
</script>
  
<style>
.img-teste {
  height: 200px;
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

.title-movie {
  font-weight: bold;
  font-size: 25px;

}

.title-genre {
  font-size: 17px;
  text-align: start;
}

.text-color {
  font-weight: bold
}

.text-note {
  font-size: 17px;
  text-align: start;
}

#modal-1___BV_modal_header_ {
  border: none;
  padding-bottom: 0;
  padding-top: 0;
}

#modal-1___BV_modal_body_ {
  padding-top: 0;
}

#modal-1___BV_modal_header_>button {
  border: none;

}

button.close {
  font-size: 35px;
  background-color: transparent;
}

#modal-1___BV_modal_footer_ {
  display: none;
}

.container-search {
  justify-content: center;
  padding: 50px 0 50px 0;
}

.input-search {}

.pesquisa-botao {
  background-color: black !important;
  width: 150px;
  margin-top: 20px;
}
</style>