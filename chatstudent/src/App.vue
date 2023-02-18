<template>
  <div>

    <h1>hola desde el componente principal</h1>

    <ModalComponent></ModalComponent>

  </div>
</template>

<script>

import ModalComponent from './components/ModalComponent.vue';

export default {
  name: 'App',
  components: {
    ModalComponent



  }
}
</script>

<style>


@import './../public/styles.css';


</style>



