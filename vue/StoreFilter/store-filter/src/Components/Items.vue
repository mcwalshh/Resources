<template>
  <div class="notes">
    <h1>
      <span class="search">Search</span> <el-input placeholder="Start typing your search" v-model="input"></el-input>
      
    </h1>
<el-row>
  
  <el-col :span="8" v-for="(key, index) in tabledData" :key="index">
    <el-card :body-style="{ padding: '0px', margin: '10px' }">
      <img v-lazy="'https://loremflickr.com/320/240/' + key.category + ',' + key.gender +'?' + index" class="image">
      <div style="margin: 14px;">
        <span> {{ key.name }}</span>
        <div class="bottom clearfix">
          <time class="time">{{key.gender}}'s {{ key.category }}</time>
          <el-button type="text" class="button">{{ key.price }}</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
  </div>
</template>

<script>
import ShopList from '@/Api/ShopList'
import JsonList from '../Assets/shopList.json'

export default {
  name: 'Items',
  data() {
    return {
      input: '',
      tableData: JsonList.data
    };
  },
  //this.filter1 < 1 ? this.inputted.toLowerCase() : this.filter1
computed: {
   tabledData() {
                return this.tableData.filter(list => {
                return list.name.toLowerCase().includes(this.inputted.toLowerCase());
            })
  },

  inputted() {
    return this.input
  }
},
watch: {
}
}
</script>

<style>
h1 { margin-top: 0; display: flex; align-items: center; width: 100%; }
.search { font-size: 16px; color: #4d4d4d; padding-right:10px}
.el-button { margin-left: auto; }
.el-collapse-item__header { font-size: 16px; }
.el-table { font-size: 14px; font-weight: 700; }
.el-table__expanded-cell p { font-size: 16px; font-weight: 400; }
.el-table th { background: #fafafa; }
.el-table th > .cell { color: #333; }

 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
    background-color: #409EFF;
    color: white;
    padding:7px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>