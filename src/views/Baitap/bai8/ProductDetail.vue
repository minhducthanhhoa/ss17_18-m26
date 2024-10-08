<template>
    <div class="product-detail">
      <div v-if="product">
        <h1>{{ product.name }}</h1>
        <img :src="product.image" alt="Product Image" />
        <p>Giá: {{ product.price }} VNĐ</p>
      </div>
      <div v-else>
        <h2>Sản phẩm không tồn tại</h2>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const product = ref(null);
  
  const products = JSON.parse(localStorage.getItem('products')) || [];
  
  onMounted(() => {
    product.value = products.find(p => p.id === parseInt(route.params.id)) || null;
  });
  </script>
  
  <style scoped>
  .product-detail {
    padding: 20px;
    text-align: center;
  }
  
  .product-detail img {
    width: 100%;
  }
  </style>