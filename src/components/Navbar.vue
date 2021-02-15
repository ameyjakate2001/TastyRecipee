<template>
<keep-alive>
  <div id="navbar">
    <h1 class="logo"><a href="/">TastyRecipe</a></h1>
    <form id="srch">
      <input type="text"  v-model="myInput" placeholder="Search The Recipe"/>
      <button class="btn" type="submit" @click.prevent="SearchRecipe"><i class="fa fa-search"></i></button>
    </form>

    <div class="links">
      <router-link to="/" exact>Home</router-link>
    </div>
  </div>
  </keep-alive>
</template>

<script>
import {bus} from '../main';

export default {
  data() {
    return {
      myInput: '',
    };
  },
  methods: {
    SearchRecipe:function(){
        bus.$emit('GetTheData', this.myInput);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  line-height: 60px;
  height: 80px;
  color: white;
  background: turquoise;
}
.logo a {
  font-size: 1.2em;
}
.router-link-active{
  border-bottom: 3px solid black;
  color: #fff;
}
a {
  text-decoration: none;
}
button {
  margin: 0;
  height: 40px;
}
input[type="search"] {
  height: 40px;
  width: 30%;
  padding: 7px 12px;
  font-size: 1.07em;
}
input[type="search"]:focus {
  outline: 0;
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 5%;
  margin: 0 0 0 -10%;
}
.links a {
  font-size: 1.3em;
  margin: 10px;
}
input[type="text"] {
  height: 40px;
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
  border: none;
}
.btn {
   height: 40px;
  float: left;
  width: 20%;
  padding: 10px;
  background: #2196f3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
  border: none;
}
input[type="text"]:focus {
  outline: none;
}
.btn:focus {
  outline: none;
}
#srch {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
}
@media screen and (max-width: 650px) {
  .logo a {
    font-size: 0.8em;
  }
  #srch{
    width: 50%;
  }
  input[type="text"] {
    height: 30px;
    width: 70%;
    padding: 7px 10px;
    font-size: 0.76em;
  }
  .btn {
    height: 30px;
    float: left;
    width: 15%;
    padding: 7px;
    color: white;
    font-size: 14px;
}
  .links a {
    font-size: 1.3em;
     margin: 4px;
  }
}
</style>
