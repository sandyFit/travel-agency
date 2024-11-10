<script setup>
import { computed } from 'vue'
import sourceData from '@/data.json'
import { useRoute } from 'vue-router'

const route = useRoute()

const destinationId = computed(() => {
    const id = parseInt(route.params.id)
    console.log("Destination ID:", id)  // Add this line for debugging
    return id
})
const destination = computed(() => {
    const foundDestination = sourceData.destinations.find(destination => destination.id === destinationId.value)
    console.log("Found Destination:", foundDestination)  // Add this line for debugging
    return foundDestination
})

</script>

<template>
    <section v-if="destination" class="destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name" />
            <p>{{ destination.description }}</p>
        </div>
    </section>
    <p v-else>Destination not found.</p>
</template>

