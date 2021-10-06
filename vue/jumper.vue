<template>
  <div class="jumper">
    <router-link tag="div" to="/" class="jumper__box" :class='{"is-active": activator === 1}'>
      <i class="fas fa-border-all icon"></i>
    </router-link>
    <router-link tag="div" to="/page2" class="jumper__box" :class='{"is-active": activator === 2}'>
      <i class="fas fa-user-check icon"></i>
    </router-link>
    <router-link tag="div" to="/page3" class="jumper__box" :class='{"is-active": activator === 3}'>
      <i class="fas fa-laptop icon"></i>
    </router-link>
    <router-link tag="div" to="/page4" class="jumper__box" :class='{"is-active": activator === 4}'>
      <i class="fas fa-beer icon"></i>
    </router-link>
  </div>
</template>

<script>
module.exports = {
  props : ['activator'],
  data: function() {
    console.log(typeof(this.activator));
    return {

    }
  }
}
</script>

<style scoped>
.jumper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px 0 1px 0;
    height: 40px;
    border-bottom: 1px solid #DDDDDD;
}

.jumper__box {
    flex: 0 0 25%;
    text-align: center;
}

.jumper__box .icon {
  font-size: 20px;
  color: #AAAAAA;
}

.jumper__box.is-active .icon {
  color: #333333;
}

</style>