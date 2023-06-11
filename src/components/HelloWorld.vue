<template>
  <div>
    <h1>{{ greeting }}</h1>

    <input type="text" v-model="newGreeting" />
    <button @click="updateGreeting">Update</button>

    <data-table :data="tableData" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DataTable from './DataTable.vue'
import dataService from '../services/dataService'

const newGreeting = ref('')
const greeting = ref('hello world')
const tableData = ref([])

function updateGreeting() {
  greeting.value = newGreeting.value
}

async function fetchData() {
  tableData.value = await dataService.fetchData()
}

onMounted(fetchData)
</script>
