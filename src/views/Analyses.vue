<template>
  <div class="analyses">
    <h1>This is an analysis</h1>
    <h2>{{ content.name }}</h2>
    <p>{{ content.content }}</p>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  data () {
    var split_path = this.$route.path.split("/");
    return {
      content: store.fetch_data(split_path[1], split_path[2])
    }
  },
  created() {
    console.log(typeof(this.content));
    console.log(this.content)
  }
};
</script>