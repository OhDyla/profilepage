<template>
<div>
  <Heading></Heading>
  <router-view></router-view>
  <Footing></Footing>

</div>
</template>

<script>
module.exports = {
  data: function() {
    return {
    }
  },
  components: {
    'Heading': httpVueLoader('./general/heading.vue'),
    'Footing': httpVueLoader('./general/footing.vue'),
  }
}
</script>
