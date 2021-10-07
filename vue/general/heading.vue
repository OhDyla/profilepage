<template>
<div>
  <header class="heading">
    <div class="heading__box box-1"></div>
    <router-link to="/" class="heading__box box-2">
      Jidylas
    </router-link>
    <div class="heading__box box-3">
      <router-link to="/history"><i class="far fa-clock"></i></router-link>
      <div @click="is_show = !is_show"><i class="fas fa-ellipsis-h icon"></i></div>
    </div>

  </header>
  <transition name="mordalback">
    <div v-if="is_show">
      <div @click="is_show = !is_show" class="mordal__back"></div>
    </div>
  </transition>
  <transition name="mordal">
    <div v-if="is_show">
      <Addition></Addition>
    </div>
  </transition>
</div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      is_show: false,
    }
  },
  components: {
    'Addition': httpVueLoader('./additon.vue'),
  }
}
</script>


<style scoped>
.mordalback-enter-active {
  animation: mordalback-in 0.4s;
}
.mordalback-leave-active {
  animation: mordalback-in 0.3s reverse;
}

@keyframes mordalback-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.mordal-enter-active {
  animation: mordal-in 0.3s;
}
.mordal-leave-active {
  animation: mordal-in 0.2s reverse;
}

@keyframes mordal-in {
  from {
    opacity: 0;
    transform: translateY(200vh);
  }
  to {
    opacity: 1;
    transform: translateY(95vh);
  }
}

.mordal__back {
  position: fixed;
  top: 0;
  height: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background-color: rgba(33, 33, 33, 70%);
}
</style>