<script >
import {store} from '../store.js';

export default{
  data(){
    return{
      store
    }
  },
  mounted(){
  }
}
</script>

<template>
  <h1>
    il mio sito vue
  </h1>
  <div>
    <ul >

      <li v-for="$dato in store.dati">{{$dato}}</li>
    </ul>
  </div>


</template>

<style scoped>

</style>
