<template>
  <div>
    <h1>List Product</h1>
    <input type="text" v-model="keySearch">
    <button @click="handleSearch">Search</button>
    <input type="number" v-model="priceValue">
  </div>
</template>

<script setup>
    import { computed, reactive, ref } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    const router = useRouter();// chuyển trang
    const route = useRoute();// lấy dữ liệu trên url
    const queryParam = reactive({
        productName: "",
        price: 0
    })
    // lấy giá trị từ url
    computed(()=>{
        queryParam.productName = route.query.productName;
        queryParam.price = route.query.price;
    })
    const keySearch = ref("");
    const priceValue = ref(0);
    const handleSearch = ()=>{
        // router.push(`/list-product?search=${keySearch.value}`);
        router.push({
            path: "list-product",
            query: {productName: keySearch.value, price: priceValue.value}
        })
    }
    const result = computed(()=>{
        return {
            productName: route.query.productName,
            price: route.query.price
        }
    })
</script>

<style>

</style>