<template>
  <div id="app">
    <h1>在线翻译</h1>
    <translateForm v-on:wordSubmit="getWord($event)" />
    <translateOut v-bind:translatedWord="translatedWord"/>


  </div>
</template>

<script>
import translateForm from './components/translateForm'
import translateOut from './components/translateOut'


export default {
  name: 'App',
  data:  function(){
      return {
        translatedWord: ''
      }
  },
  methods: {
    getWord: function(msg) {
      console.log(msg.word, msg.language);
      this.$http.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180815T033014Z.3961ada7b84c24fb.2ce86d1d355c6b7c55c2238e49bf81544b8066b6&text=${msg.word}&lang=${msg.language}`).then((response)=>{
        console.log(response);  
        this.translatedWord = response.body.text[0];
      },(fail)=>{
          console.log(fail);
      })
    }
  },
  components: {
    translateForm,
    translateOut
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
