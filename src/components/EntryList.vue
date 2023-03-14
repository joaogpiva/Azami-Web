<template>
    <div v-if="entries.length > 0">
        <div v-for="entry in entries" :key="entry['id']" style="padding: 5px">
            <EntryItem :title=entry.title :username=entry.username :password=entry.password />
            <div class="divider-horizontal" v-if="!(entry == entries[entries.length - 1])"></div>
        </div>
    </div>
    <div v-else>
        Looks like you haven't added anything yet...
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EntryItem from './EntryItem.vue';
import axios from 'axios';

export default defineComponent({
    name: "EntryList",
    components: {
        EntryItem
    },
    data() {
        type dataType = {
            apiUrl: any,
            entries: any[]
        }
        let dataObj: dataType = {
            apiUrl: this.$apiUrl,
            entries: []
        };
        return dataObj;
    },
    async mounted() : Promise<void>{
        axios.get(this.apiUrl + "/Entry/user/" + localStorage.id)
            .then((response) => {
                this.entries = response.data;
            }).catch((exception) => {
                console.log(exception.response.data);
            });
    }
})
</script>

<style scoped>
.divider-horizontal{
    border-top: 2px solid gray;
}
</style>