<template>
    <div class="list-product">
      <h1>List product</h1>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Tìm kiếm theo tên..."
        @input="filterProducts"
      />
      <div class="product-grid">
        <div
          class="product-card"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <img :src="product.image" alt="Product Image" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }} VNĐ</p>
          <router-link :to="`/product-detail/${product.id}`">
            <button>Xem chi tiết</button>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const products = ref([
    { id: 1, name: 'Điện thoại iPhone 15 Pro', price: '30.000.000', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Điện thoại OPPO Reno11 5G', price: '10.600.000', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Điện thoại Vivo Y17s', price: '3.300.000', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Điện thoại Nokia 8210 4G', price: '1.500.000', image: 'https://via.placeholder.com/150' },
  ]);
  
  const searchQuery = ref('');
  const filteredProducts = ref([]);
  
  onMounted(() => {
    localStorage.setItem('products', JSON.stringify(products.value));
    filteredProducts.value = products.value;
  });
  
  const filterProducts = () => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    filteredProducts.value = storedProducts.filter(product => 
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  };
  </script>
  
  <style scoped>
  .list-product {
    padding: 20px;
  }
  
  .product-grid {
    display: flex;
    flex-wrap: wrap;
  }
  
  .product-card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    text-align: center;
    width: 200px;
  }
  
  .product-card img {
    width: 100%;
  }
  </style>