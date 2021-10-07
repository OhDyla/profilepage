<template>
<div>
  <Hero></Hero>
  <div class="jumper">
    <div class="jumper__boxes-wrapper">
      <div @click="currentComponent = 'Page1'" class="jumper__box box-1"
       :class="[currentComponent === 'Page1' ? 'is-active' : 'is-deactive']">
        <i class="fas fa-border-all icon"></i>
      </div>
      <div @click="currentComponent = 'Page2'" class="jumper__box box-2"
       :class="[currentComponent === 'Page2' ? 'is-active' : 'is-deactive']">
        <i class="fas fa-user-check icon"></i>
      </div>
      <div @click="currentComponent = 'Page3'" class="jumper__box box-3"
       :class="[currentComponent === 'Page3' ? 'is-active' : 'is-deactive']">
        <i class="fas fa-laptop icon"></i>
      </div>
      <div @click="currentComponent = 'Page4'" class="jumper__box box-4"
       :class="[currentComponent === 'Page4' ? 'is-active' : 'is-deactive']">
        <i class="fas fa-beer icon"></i>
      </div>
    </div>
    <div class="jumper__marker-wrapper">
      <div class="jumper__marker"
       :class="[{'is-1' : currentComponent === 'Page1'},
                {'is-2' : currentComponent === 'Page2'},
                {'is-3' : currentComponent === 'Page3'},
                {'is-4' : currentComponent === 'Page4'},]">
      </div>
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
    padding-bottom: 3px;
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
  transition: 0.1s;
  font-size: 20px;
  color: #AAAAAA;
}

.jumper__box.is-active .icon {
  transition: 0.2s;
  color: #333333;
}

.jumper__marker {
  position: absolute;
  width: 25%;
  height: 2px;
  background-color: #333333;
}

.jumper__marker.is-1 {
  transition: 0.2s;
  left: 0;
}
.jumper__marker.is-2 {
  transition: 0.2s;
  left: 25%;
}
.jumper__marker.is-3 {
  transition: 0.2s;
  left: 50%;
}
.jumper__marker.is-4 {
  transition: 0.2s;
  left: 75%;
}

</style>