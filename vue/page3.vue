<template>
  <div>
    <Hero></Hero>
    <Jumper :activator="3"></Jumper>
    <div class="div2">技術について書くよ</div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      title: 'page1.vue'
    }
  },
  components: {
    'Hero': httpVueLoader('./hero.vue'),
    'Jumper': httpVueLoader('./jumper.vue')
  }
}
</script>

<style scoped>
.div2 {
  padding: 8px;
}
</style>