<script setup>
import TheCalculator from './components/TheCalculator.vue';
import IconGithub from './components/IconGithub.vue';
</script>

<template>
  <div>
    <TheCalculator />
  </div>
  <div class="github">
    <a href="https://github.com/karoltomaszewski/bmi" target="_blank">
      <IconGithub /> <span>karoltomaszewski</span>
    </a>
  </div>
</template>

<style scoped>
  .github {
    margin-top: 15px;
  }

  .github a {
    display: flex;
    align-items: center;
  }

  .github svg {
    fill: #555;
    margin-right: 5px;
    transition: 0.5s;
  }

  .github:hover svg {
    fill: #888;
  }
</style>
