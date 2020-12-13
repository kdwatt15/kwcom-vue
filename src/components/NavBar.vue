<template>
  <div class="nav">
    <router-link
      class="navbtn"
      :to="{
        name: 'Home'
      }"
    >
      Home
    </router-link>
    <div class="dropdown">
      <p class="navbtn">Analyses</p>
      <div class="dropdown-content">
        <li v-for="analysis in analyses" :key="analysis.id">
          <router-link
            :to="{
              name: 'analyses',
              params: { slug: analysis.slug }
            }"
          >
            {{ analysis.name }}
          </router-link>
        </li>
      </div>
    </div>
    <div class="dropdown">
      <p class="navbtn">Blog</p>
      <div class="dropdown-content">
        <li v-for="post in blogPosts" :key="post.id">
          <router-link
            :to="{
              name: 'blogPosts',
              params: { slug: post.slug }
            }"
          >
            {{ post.name }}
          </router-link>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  data() {
    return {
      analyses: store.content.analyses,
      blogPosts: store.content.blogPosts
    };
  }
};
</script>

<style scoped>
.nav {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-content: center;
  height: auto;
}
/* Navigation button */
.navbtn {
  color: #4caf50;
  padding: 10px;
  font-size: 16px;
  border: none;
  text-decoration: none;
  position: relative;
  align-self: center;
  width: 100px;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  list-style: none;
  text-decoration: none;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 10px;
  display: block;
  text-align: left;
  text-decoration: none;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .navbtn {
  color: #3e8e41;
}
</style>
