<template>
  <div class="home">
    <h1>Welcome!</h1>
    <p>
      I'm glad you got here. Unfortunately, kevin-watt.com is still under
      development.
    </p>
    <p>
      If you would like to connect before the site is ready, please feel to
      reach out to me on
      <a href="https://www.linkedin.com/in/kevin-watt/" target="_blank"
        >LinkedIn</a
      >.
    </p>
    <p>
      In the meantime, please enjoy a photo of the sunrise over Lake Michigan.
    </p>
    <ChangingImage />
  </div>
</template>

<script>
import ChangingImage from '@/components/ChangingImage';
export default {
  name: "home",
  components: {
    ChangingImage
  }
}
</script>

<style scoped>
p {
  color: rgb(80, 79, 79);
}
img {
  max-height: 40em;
  width: auto;
}
</style>
