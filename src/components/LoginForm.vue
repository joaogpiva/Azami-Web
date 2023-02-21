<template>
    <div class="mb-3">
        <input type="email" class="form-control" id="email" placeholder="Email address">
    </div>
    <div class="mb-3">
        <input type="email" class="form-control" id="password" placeholder="Master password">
    </div>
    <div class="mb-4">
        <button class="btn btn-primary">Login</button>
        <button type="button" class="btn btn-link">Don't have an account?</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "LoginForm",
})
</script>