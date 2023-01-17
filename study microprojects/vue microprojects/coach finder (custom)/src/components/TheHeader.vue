<template>
  <div class="header">
    <div class="container">
      <div class="row row-collapse">
        <h1 class="mar-1">Coach Finder</h1>
        <div class="control-panel">
          <router-link to="/">
            <button class="btn btn-success mar-2">
              All coaches
            </button></router-link
          >
          <router-link to="/requests"
            ><button class="btn btn-success mar-2">
              Requests
            </button></router-link
          >
        </div>

        <!-- <div class="col col-vmid">
          <nav class="nav nav-horizontal d-block">
            <ul>
              <li><a href="#">Item</a></li>
              <li><a href="#">Item</a></li>
              <li><a href="#">Item</a></li>
            </ul>
          </nav>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: blue;
  margin: 0;
  padding: 0;
}
h1 {
  color: white;
}
container {
  margin-left: 5rem;
  margin-right: 5rem;
}
.control-panel {
  margin-left: auto;
  margin-right: 1rem;
}
a {
  text-decoration: none;
}
</style>

<style lang="less">
html:root {
  --container-max-width: 90%;
}
</style>
