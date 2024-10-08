<template>
    <div>
      <h1>Chi tiết bài viết</h1>
      <div v-if="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
      </div>
      <div v-else>
        <h2>Bài viết không tồn tại</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        posts: [
          { id: 1, title: 'Bài viết 1', content: 'Nội dung bài viết 1' },
          { id: 2, title: 'Bài viết 2', content: 'Nội dung bài viết 2' },
        ],
      };
    },
    computed: {
      post() {
        return this.posts.find(post => post.id === parseInt(this.id)) || null;
      },
    },
  };
  </script>