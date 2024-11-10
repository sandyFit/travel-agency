<script setup>
import { reactive } from 'vue';
import sourceData from '@/data.json';

const destinations = reactive(sourceData.destinations);
</script>

<template>
    <div id="nav">
        <RouterLink id="logo" to="/">Travel App</RouterLink>
        <RouterLink
            v-for="destination in destinations"
            :key="destination.id"
            :to="{name: 'destination.show', params: {id: destination.id}}"
        >
            {{ destination.name }}
        </RouterLink>
    </div>
</template>

<style lang="css">
    #nav .nav-active-link {
        color: #fef9c3;
        border-bottom: 2px solid #fef9c3;
    }
</style>