<template>
    <div>
      <h1>Tìm kiếm</h1>
      <input v-model="keyword" placeholder="Nhập từ khóa" />
      <button @click="search">Tìm kiếm</button>
      <div v-if="query">
        <p>Value: {{ query }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const keyword = ref('');
  const route = useRoute();
  const router = useRouter();
  
  const query = ref(route.query.q || '');
  
  const search = () => {
    router.push({ path: '/search', query: { q: keyword.value } });
  };
  
  onMounted(() => {
    if (route.query.q) {
      query.value = route.query.q;
      keyword.value = query.value; 
    }
  });
  </script>
  
  <style scoped>
  input {
    margin-right: 10px;
  }
  </style>