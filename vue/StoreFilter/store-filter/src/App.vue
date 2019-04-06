<template>
  <div id="app">
    <el-container>
      <el-header>
        <h5>Shopping Filter</h5>
  <el-button size="small">Login</el-button>
      </el-header>
      
      <el-container>
        <el-aside width="300px">
          <el-menu 
          default-active="home" 
          :router="true" 
          class="el-menu-vertical-demo">
            <el-menu-item 
            index="home">
              <i class="el-icon-menu"></i>
              <span>All Products</span>
            </el-menu-item>
            
            <el-menu-item 
            index="shop"
            style="border:0px;">
              <i class="el-icon-menu"></i>
              <span>Shopping List</span>
              <el-badge :value="shoppingCart.length" class="item" style="top:-10px;left:3px;"></el-badge>
            </el-menu-item>
              
          </el-menu>
            <el-timeline
            style="padding:20px;padding-left:30px;">
    <el-timeline-item
      v-for="(item, index) in shoppingCart"
      :key="index"
      :color="item.colour"
      size="large"
      :timestamp="item.price">
      {{item.name}}
    </el-timeline-item>
    <el-timeline-item
    icon="el-icon-success"
    color="green"
    >
Total {{ getCartCost() }}
    </el-timeline-item>
  </el-timeline>
        </el-aside>
        <el-main>
          <router-view @clickToCart="addToCart($event)" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        shoppingCart: []
      }
    },
    methods: {
      getCartCost() {
this.shoppingCart.forEach((a) => {
return 'Total iss:' + a.price.replace(/\$/g,'')
})
      },
      addToCart(item) {
        console.log(item)
        this.shoppingCart.unshift(item)
      }
    }
  }
</script>

<style>
  html,
  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .el-header {
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .el-header button {
    float: right;
  }

  .el-menu-item {
    border-bottom: 1px solid #e6e6e6;
  }

  .logo {
    max-width: 50%;
    max-height: 50%;
    margin-right: auto;
  }
</style>