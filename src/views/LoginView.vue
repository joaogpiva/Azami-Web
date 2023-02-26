<template>
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center" style="background-color: cadetblue;">
      <LoginCard />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import LoginCard from '@/components/LoginCard.vue';
  
  export default defineComponent({
    name: 'LoginScreen',
    components: {
      LoginCard,
    }
  });
  </script>
  
  <style>
  .card-login{
    width: 18rem;
    padding: 1rem;
  }
  </style>
  