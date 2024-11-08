<script setup>
import { reactive } from 'vue';
import sourceData from '@/data.json';

const destinations = reactive(sourceData.destinations);
</script>

<template> 

    <RouterLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="destination.slug"
    >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name">
    </RouterLink>
</template>
