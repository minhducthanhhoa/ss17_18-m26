<template>
  <div>
    <h1>app page</h1>
    <router-view v-slot="{Component}">
      <Suspense>
        <template #default>
          <div>
            <component :is="Component"></component>
          </div>
        </template>
        <!-- Sử dụng hiệu ứng loading -->
         <template #fallback>
          <div>Loading...</div>
         </template>
      </Suspense>
    </router-view>
  </div>
  
</template>

<script setup>

</script>

<style>

</style>