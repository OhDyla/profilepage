<template>
<div>
  <header class="heading">
    <div class="heading__box box-1"></div>
    <router-link tag="div" to="/" class="heading__box box-2">
      Jidylas
    </router-link>
    <div class="heading__box box-3">
      <router-link tag="div" to="/history"><i class="far fa-clock"></i></router-link>
      <router-link tag="div" to="/detail"><i class="fas fa-ellipsis-h icon"></i></router-link>
    </div>
  </header>
  <router-view></router-view>
</div>
</template>