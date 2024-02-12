<script>
import {store} from '../store.js';

export default{
  data(){
    return{
      name: "AppHome",
      store,
      menuItems:[
        {
            routeName:"About",
            label:"About",
        },
        {
            routeName:"Credits",
            label:"I miei Meriti",
        },

      ],
    }
  },
  mounted(){
  }
}
</script>
<template>
  <h1>il mio sito vue</h1>
  <div class="cruent">


    <li v-for="(item, index) in menuItems" :key="index">
        <router-link :to="{ name: item.routeName }" class="nav-link">
            {{ item.label }}
        </router-link>
    </li>

  </div>
  <ul >
    <li v-for="$dato in store.dati">{{$dato.name}}</li>
  </ul>

</template>
<style scoped>
.cruent{
    background-color: white;
    display: flex;
}
</style>