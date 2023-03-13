<template>
    <h1>Logged in as: {{ name }}</h1>
    <button class="btn btn-primary" @click="logout">Log out</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "SideBar",
    data(){
        return {
            name: String
        }
    },
    mounted(){
        this.name = localStorage.name;
    },
    methods: {
        logout() : void{
            localStorage.clear();
            this.$router.replace("login");
        }
    },
})
</script>