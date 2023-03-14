<template>
    <div>
        <p>Title: {{ title }}</p>
        <p>Username: {{ username }}</p>
        <p>Password: {{ password }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "EntryItem",
    props: {
        title: String,
        username: String,
        password: String
    }
})
</script>