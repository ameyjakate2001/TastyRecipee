<template>
  <div class="root">
    <!-- <navbar-item></navbar-item> -->
    <div class="grid-container">
      <div class="grid-image-container">
        <img :src="recipe.image" alt="" />
      </div>

      <div class="grid-content-container">
        <h1>{{ recipe.label }}</h1>

        <h4>Nutrition</h4>
        <hr />
        <div class="nutritions">
          <div class="cal">
            {{ this.calories }}
            <p>CAL/SER</p>
          </div>
          <div class="healthLabel">
            <b>HealthLabel</b>
            <ul>
              <li v-for="healthLabel in healthLabels" :key="healthLabel.id">
                {{ healthLabel }}
              </li>
            </ul>
          </div>
          <div class="servings">
            {{ this.servings }}
            <p>Servings</p>
          </div>
        </div>
      </div>
    </div>
    <div class="second-grid">
      <hr />
      <div class="indegredients">
        <h4>{{ Ingredients }} Ingredients</h4>
        <hr />
        <ul>
          <li v-for="inde in recipe.ingredients" :key="inde.id">
            {{ inde.text }}
          </li>
        </ul>
      </div>
      <hr />
    </div>

    <div class="third-grid">
      <a type="button" v-bind:href="instructionLink">
        Tap to see Step By Step Instructions</a
      >
    </div>
  </div>
</template>


<script>
import navbarItem from "./Navbar";
export default {
  components: {
    "navbar-item": navbarItem,
  },
  data() {
    return {
      recipe: {},
      Ingredients: 0,
      calories: 1,
      servings: 0,
      healthLabels: [],
      instructionLink: "",
    };
  },
  created() {
    this.$http
      .get(
        "https://api.edamam.com/search?q=" +
          this.$route.params.id +
          "&app_id=6bb887ce&app_key=61c96df123e172f3474841530e44f9b6"
      )
      .then((response) => {
        this.recipe = response.body.hits[0].recipe;
        console.log(this.recipe);
        this.Ingredients = this.recipe.ingredients.length;
        this.servings = this.recipe.yield;
        this.calories = Math.floor(this.recipe.calories / this.servings);
        this.instructionLink =
          "https://www.edamam.com/results/recipes/?search=" + this.recipe.label;
        console.log(this.instructionLink);
        this.healthLabels = this.recipe.healthLabels;
        console.log(this.recipe.source);
      })
      .catch((err) => console.log(err));
  },
};
</script>


<style scoped>
a[type="button"] {
  background: darkcyan;
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
}
.root {
  padding: 20px;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
hr {
  width: 30%;
  text-align: center;
  position: relative;
  left: 35%;
}
.healthLabel ul {
  margin-top: 10px;
}
.indegredients ul {
  list-style: none;
}
li {
  margin-bottom: 10px;
}
.nutritions {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 15px;
}
.grid-content-container {
  text-align: center;
}

.second-grid hr:nth-child(2n + 1) {
  color: fuchsia;
  height: 2px;
  width: 100%;
  left: 0;
}
.second-grid h4 {
  text-align: center;
}

@media screen and (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
  .grid-image-container {
    text-align: center;
  }
}
</style>