<template>
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center" style="background-color: cadetblue;">
        <div class="card card-main">
            <div class="row" style="height: 100%">
                <div class="col-2">
                    <SideBar />
                </div>
                <div class="vr"></div>
                <div class="col-4">
                    <EntryList />
                </div>
                <div class="vr"></div>
                <div class="col-5">
                    <SelectedEntry />
                </div>
            </div>   
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from '@/components/SideBar.vue';
import EntryList from '@/components/EntryList.vue';
import SelectedEntry from '@/components/SelectedEntry.vue';

export default defineComponent({
    name: "AzamiAppView",
    components: {
        SideBar,
        EntryList,
        SelectedEntry
    }
})
</script>

<style>
.card-main{
    width: 90%;
    height: 30rem;
}

.vr{
    color: white;
    border-right: 3px solid cadetblue;
}
</style>