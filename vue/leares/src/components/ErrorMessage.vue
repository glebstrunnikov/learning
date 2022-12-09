<template>
  <dialog open>
    <h1>Input invalid!</h1>
    <h2>Enter something first</h2>
  </dialog>
</template>

<style scoped>
dialog {
  position: absolute;
  width: 50%;
  height: 30%;
  border-color: red;
}
h1 {
  display: flex;
  justify-content: center;
}
h2 {
  display: flex;
  justify-content: center;
}
</style>
