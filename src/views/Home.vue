<template>
  <div class="home">
    <h1>Welcome!</h1>
    <p>
      I'm glad you got here. Unfortunately for you, you're a bit early.
    </p>
    <h3>
      kevin-watt.com is still under development.
    </h3>
    <p>
      If you'd like to see how the work is progressing, please take a look at the 
        <a href="https://github.com/kdwatt15/kwcom-vue" target="_blank" ref="noreferrer noopener">
          source code</a>.
    </p>
    <p>
      If you would like to connect before the site is ready, please feel to
      reach out to me on
      <a href="https://www.linkedin.com/in/kevin-watt/" target="_blank" ref="noreferrer noopener">
        LinkedIn</a>.
    </p>
    <p>
      In the meantime, please enjoy a photo of the sunrise over Lake Michigan.
    </p>
    <ChangingImage />
  </div>
</template>

<script>
import ChangingImage from "@/components/ChangingImage.vue";
export default {
  name: "home",
  components: {
    ChangingImage
  }
};
</script>

<style scoped>
p {
  color: rgb(80, 79, 79);
}
</style>
