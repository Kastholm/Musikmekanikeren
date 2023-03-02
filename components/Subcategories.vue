<template>
  <div>
    <h1>Subcategories for {{ subcategory }}</h1>
    <!-- Display subcategories for the selected category here -->
  </div>
</template>

<script>
export default {
  props: {
    categoryId: {
      type: String,
      required: true
    }
  }
}
</script>