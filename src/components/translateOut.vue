<template>
  <div>
    <p>{{translatedWord}}</p>
  </div>
</template>

<script>
export default {
  name: 'translateOut',
  props: {
    translatedWord: {
      type: String
    }
  },
  data () {
    return {
      msg: 'Welcome to Your translateOut'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
