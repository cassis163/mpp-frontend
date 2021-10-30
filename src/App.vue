<template>
  <router-view />
</template>

<style lang="scss">
body {
  background-color: beige;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.container {
  background-color: white;
  margin: 2rem;
  padding: 0.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 2rem black;
}
</style>
