<template>
  <div>
    <h2>Categories</h2>
    <ul>
      <li v-for="category in categories" :key="category">{{ category }}</li>
    </ul>
  </div>
</template>

<script>


export default {
  data() {
    return {
      categories: []
    };
  },
  async asyncData({ params }) {
    const documentId = params.id;
    const document = await client.fetch(
      `*[_id == $id][0]{
        categories[]
      }`,
      { id: documentId }
    );
    return {
      categories: document.categories
    };
  }
};
</script>