<template>
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center" style="background-color: cadetblue;">
        <div class="spinner-border" role="status">
            <span class="sr-only">.</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SessionRedirector',
    mounted(){
        if(localStorage.loggedIn){
            this.$router.push('/azami-app')
        }else{
            this.$router.push('/login')
        }
    }
});
</script>