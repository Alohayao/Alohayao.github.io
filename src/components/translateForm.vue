<template>
  <div>
    <input placeholder="请输入要翻译的词条" v-model="word"/>
    <select v-model="language">
        <option value='en'>英</option>
        <option value='ko'>韩</option>
    </select>
    <button v-on:click="wordSubmit">翻译</button>
  </div>
</template>

<script>
export default {
  name: 'translateForm',
  data () {
    return {
      word: '',
      language: 'en'
    }
  },
  methods: {
    wordSubmit: function(){
      this.$emit('wordSubmit',{word:this.word, language:this.language});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
