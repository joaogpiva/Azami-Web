<template>
    <h1>{{ user.name }}</h1>
    <button class="btn btn-primary" @click="logout">Log out</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            user: {
                id: -1,
                name: null
            }
        }
    },
    mounted(){
        this.user.id = localStorage.id;
        this.user.name = localStorage.name;
    },
    methods: {
        logout(){
            localStorage.clear();
            this.$router.replace("login");
            return true;
        }
    }
})
</script>