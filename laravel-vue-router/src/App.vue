<script >
import AppHeader from './components/AppHeader.vue'
import { store } from './store.js'
import axios from 'axios'

export default{
  components:{
    AppHeader,
  },
  data(){
    return{
      store,
    }
  },
  mounted(){
    this.call()
  },
  methods:{
     call(){
      axios.get("http://127.0.0.1:8000/api/prova").then(risultato=>{
        store.dati=risultato.data;
        console.log(store.dati);
    })
    },
    
  },
}

</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
