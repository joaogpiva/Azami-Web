<template>
    <div class="card text-center card-login">
        <div class="mb-3">
            <img src="../assets/logo_temp.png" />
            <hr/>
        </div>
        <LoginForm />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from './LoginForm.vue';

export default defineComponent({
    name: "LoginCard",
    components: {
        LoginForm
    }
})
</script>