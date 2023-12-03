<template>
  <h1>{{ date }}</h1>
</template>

<script>

export default {
  name: "home-page",
  data() {
    return {
      date: new Date().toLocaleString(),
    }
  },
  mounted() {
    setInterval(() => { this.date = new Date().toLocaleString() }, 1000);
  }

};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
