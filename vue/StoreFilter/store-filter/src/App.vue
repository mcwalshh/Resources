<template>
  <div id="app">
    <el-container>
      <el-header>
        <h5>Shopping Filter</h5>
      </el-header>
      <el-container>
        <el-aside width="300px">
          <el-menu
            default-active="home"
            :router="true"
            class="el-menu-vertical-demo">
            <el-menu-item index="home">
              <i class="el-icon-menu"></i>
              <span>All Products</span>
            </el-menu-item>

          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
 
<script>
export default {
  name: 'App'
}
</script>
 
<style>
  html, body { margin: 0; }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .el-header { border-bottom: 1px solid #e6e6e6; display: flex; align-items: center; width: 100%; }
  .el-header button { float: right; }
  .el-menu-item { border-bottom: 1px solid #e6e6e6; }
  .logo { max-width: 50%; max-height: 50%; margin-right: auto; }
</style>