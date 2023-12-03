<template>
  <div class="sideBar">
    <button @click="$router.push('/')">Home Page</button>
    <br>
    <hr>
    <button @click="$router.push('/report')">Report</button>
    <br>
    <hr>
    <button @click="$router.push('/workOrders')">Statistics on Work Orders</button>
  </div>

  <div class="display">
    <router-view />
  </div>
</template>

<script>
</script>



<style>
* {
  box-sizing: border-box;
  margin: 0;
}

#app {
  width: 80%;
  margin: auto;
  border: 1px solid black;
}

.sideBar {
  display: inline-block;
  width: 20%;
  height: 100%;
  border: 1px solid black;
  background: bisque;
}

.display {
  display: inline-block;
  width: 80%;
  height: 100%;
  border: 1px solid black;
  background: white;
  vertical-align: top;
}

button {
  display: block;
  width: 100%;
}
</style>
