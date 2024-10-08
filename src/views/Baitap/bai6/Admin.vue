<template>
  <div>
    <h1>Dashboard page</h1>
    <nav>
        <router-link exact-active-class="active" to="/admin">Dashboard</router-link>
        <router-link active-class="active" to="/admin/manager-user">User</router-link>
        <router-link active-class="active" to="/admin/manager-product">Product</router-link>
        <router-link active-class="active" to="/admin/settings">Setting</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>

</script>

<style scoped>
    .active{
        background-color: red;
        color: white;   
    }
</style>