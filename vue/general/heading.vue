<template>
  <header class="heading">
    <div class="heading__box box-1"></div>
    <router-link to="/" class="heading__box box-2">
      Jidylas
    </router-link>
    <div class="heading__box box-3">
      <router-link to="/history"><i class="far fa-clock"></i></router-link>
      <router-link to="/detail"><i class="fas fa-ellipsis-h icon"></i></router-link>
    </div>
  </header>
</template>

<script>
module.exports = {
    data: function() {
        return {

        }
    }
}
</script>