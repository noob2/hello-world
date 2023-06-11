<template>
  <table class="my-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Data</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.data }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.my-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.my-table th,
.my-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.my-table th {
  background-color: #f2f2f2;
}

.my-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.my-table tbody tr:hover {
  background-color: #e6e6e6;
}
</style>
