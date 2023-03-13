<template>
    <div class="mb-3">
        <input type="email" class="form-control" v-model="email" placeholder="Email address">
    </div>
    <div class="mb-3">
        <input type="email" class="form-control" v-model="password" placeholder="Master password">
    </div>
    <div class="mb-4">
        <button v-if="!isLoading" class="btn btn-primary" @click="login(email, password)">Login</button>
        <button v-else class="btn btn-disabled" disabled>Loading...</button>
        <button type="button" class="btn btn-link">Don't have an account?</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    name: "LoginForm",
    data(){
        return {
            email: "",
            password: "",
            isLoading: false,
            apiUrl: this.$apiUrl
        }
    },
    methods: {
        async login(email : string, password : string) : Promise<boolean>{
            this.isLoading = true;

            await axios.get(this.apiUrl + "/user/login", {
                params: {
                    email: this.email,
                    password: this.password
                }
            }).then((response) => {
                this.isLoading = false;
                localStorage.id = response.data.id;
                localStorage.name = response.data.name;
                localStorage.loggedIn = "true";
                this.$router.push('/azami-app');
            }).catch((exception) => {
                this.isLoading = false;
                console.log(exception.response.data);
            })
            return true;
        }
    }
})
</script>