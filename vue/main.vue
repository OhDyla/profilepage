<template>
<div>
  <Hero></Hero>
  <Jumper :activator="1"></Jumper>
  <div class="main-vue">
    <div v-for="n in 16" class="tile">
      <img src="">
    </div>
    <div class="tile">bbb
      <img src="">
    </div>
    <div class="tile">ccc
      <img src="">
    </div>
  </div>
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
.main-vue {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.tile {
  flex: 0 0 32.5%;
  margin: 1px;
  width: 100%;
  height: 33vw;
  max-height: 130px;
  background-color: #CCC;
}
</style>