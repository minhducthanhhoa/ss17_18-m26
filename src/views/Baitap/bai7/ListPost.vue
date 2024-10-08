<template>
    <div>
      <h1>Danh sách bài viết</h1>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [
          { id: 1, title: 'Bài viết 1' },
          { id: 2, title: 'Bài viết 2' },
        ],
      };
    },
  };
  </script>