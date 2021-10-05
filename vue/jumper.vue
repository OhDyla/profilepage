<template>
  <div class="jumper">
    <router-link tag="div" to="/" class="jumper__box box-1">
      <i class="fas fa-border-all icon"></i>
    </router-link>
    <router-link tag="div" to="/page2" class="jumper__box box-2">
      <i class="fas fa-user-check icon"></i>
    </router-link>
    <router-link tag="div" to="/page3" class="jumper__box box-3">
      <i class="fas fa-laptop icon"></i>
    </router-link>
    <router-link tag="div" to="/page4" class="jumper__box box-4">
      <i class="fas fa-beer icon"></i>
    </router-link>
  </div>
</template>

<script>
module.exports = {
  props : ["activater"],
  data: function() {
    console.log(activater);
    return {

    }
  }
}
</script>

<style scoped>

</style>