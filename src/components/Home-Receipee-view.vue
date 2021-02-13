<template>
  <div class="myHome">
    <navbar-myview></navbar-myview>
    <div class="grid-display">
      <div class="single" v-for="(Receipe) in allRecipe" :key="Receipe.id">
        <img v-bind:src="Receipe.image"  alt="not found" /> 
        <div class="text">
            <h6>{{Receipe.label}}</h6>
             <router-link v-bind:to="'/details/'+ Receipe.label "><button>See Details</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import navbarView from "./Navbar";
import { bus } from "../main";

export default {
  components: {
    "navbar-myview": navbarView,
  },
  data() {
    return {
      name: "amey",
      allRecipe: [],
    };
  },
  created(){
      this.$http.get('https://api.edamam.com/search?q=burger&app_id=6bb887ce&app_key=61c96df123e172f3474841530e44f9b6')
      .then((response)=>{
         this.allRecipe = response.body.hits.map((currentRecipe) => {
          //  console.log(currentRecipe.recipe);
            return currentRecipe.recipe;
          });
      })
 },
  mounted() {
    bus.$on("GetTheData", (data) => {
      console.log(data);
      this.$http
        .get(
          'https://api.edamam.com/search?q='+data+'&app_id=6bb887ce&app_key=61c96df123e172f3474841530e44f9b6'
        )
        .then((response) => {
            this.allRecipe = response.body.hits.map((currentRecipe) => {
           console.log(currentRecipe.recipe);
            return currentRecipe.recipe;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.grid-display {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  /* grid-auto-rows: 300px; */
  grid-gap: 20px;
}
img {
  width: 100%;
  height: 250px;
}
button{
  padding: 3px;
  margin-top: 4px;
}
</style>