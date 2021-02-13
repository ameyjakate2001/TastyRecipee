import addRecipee from '../components/Add-Receipe.vue'
import HomeRecipeView from '../components/Home-Receipee-view.vue';
import DetailRecipe from '../components/Detail-Recipe.vue';


 export default[
     {path:'/',component:HomeRecipeView},
     {path:'/add',component:addRecipee},
     {path:'/details/:id', component:DetailRecipe}
 ]