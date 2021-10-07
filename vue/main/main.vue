<template>
<div>
  <Hero></Hero>
  <div class="jumper">
    <div class="jumper__boxes-wrapper">
      <div @click="currentComponent = 'page1'" class="jumper__box is-active">
        <i class="fas fa-border-all icon"></i>
      </div>
      <div @click="currentComponent = 'page2'" class="jumper__box">
        <i class="fas fa-user-check icon"></i>
      </div>
      <div @click="currentComponent = 'page3'" class="jumper__box">
        <i class="fas fa-laptop icon"></i>
      </div>
      <div @click="currentComponent = 'page4'" class="jumper__box">
        <i class="fas fa-beer icon"></i>
      </div>
    </div>
    <div class="jumper__marker-wrapper">
      <div class="jumper__marker"></div>
    </div>
  </div>
  <component :is="currentComponent"></component>
</div>
</template>

<script>
module.exports = {
  data() {
    return {
      currentComponent: "Page1",
    }
  },
  components: {
    'Hero': httpVueLoader('./hero.vue'),
    'Page1': httpVueLoader('./page1.vue'),
    'Page2': httpVueLoader('./page2.vue'),
    'Page3': httpVueLoader('./page3.vue'),
    'Page4': httpVueLoader('./page4.vue'),
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

.jumper {
    margin: 8px 0 2px 0;
    padding-bottom: 1px;
    border-bottom: 1px solid #DDDDDD;
}

.jumper__boxes-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
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

.jumper__marker {
  width: 25%;
  height: 2px;
  background-color: #333333;
}

</style>