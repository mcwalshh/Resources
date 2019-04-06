<template>
  <div class="notes">
    <h1>
      <span class="search">Search</span>
      <el-input placeholder="Start typing your search" v-model="input"></el-input>

    </h1>
    <el-row class="extra-padding">
      <div class="titleWrap">
        <span class="title">Products</span>
      </div>
      <el-radio v-model="filterSelect" label="">All</el-radio>
      <el-radio v-model="filterSelect" label="Men">Mens</el-radio>
      <el-radio v-model="filterSelect" label="Women">Womens</el-radio>
    </el-row>
    <el-row class="extra-padding">
      <div class="titleWrap">
        <span class="title">Colours</span>
      </div>
      <el-radio v-model="filterOptions" label="">All</el-radio>
      <el-radio v-model="filterOptions" label="Red">Red</el-radio>
      <el-radio v-model="filterOptions" label="Green">Green</el-radio>
      <el-radio v-model="filterOptions" label="Blue">Blue</el-radio>
    </el-row>

    <el-row v-if="!inputted" class="extra-padding">
      Displaying {{ this.filteredData.length }} product items
    </el-row>
    <el-row v-if="inputted" class="extra-padding">
      {{ this.filteredData.length }} Results for "{{ this.inputted }}" <span v-if="filterOptions || filterSelect">with
        {{this.filterOptions}}<span v-if="filterOptions && filterSelect">, </span>{{this.filterSelect}} filters.</span>
    </el-row>
    <el-row>
      <el-alert v-if="getListStatErr" :title="getListResErr" type="error">
      </el-alert>
      <el-col :span="6" v-for="(key, index) in filteredData" :key="index" v-else>
        <el-card :body-style="{ padding: '0px', margin: '10px' }">
          <img v-lazy="'https://loremflickr.com/320/240/' + key.category + ',' + key.gender +'?' + index" class="image">
          <div style="margin: 14px;">
            <span> {{ key.name }}</span>
            <div class="bottom clearfix">
              <time class="time">{{key.gender}}'s {{ key.category }}</time>
              <el-button type="text" class="button" @click="emitToCart(key)">{{ key.price }}</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ShopList from '@/Api/ShopList'

  export default {
    name: 'Items',
    data() {
      return {
        filterSelect: '',
        filterOptions: '',
        input: '',
        tableData: [],
        errorHandle: {
          getListStatus: '',
          getListResponse: ''
        }
      };
    },

    created() {
      ShopList.getShoppingList()
        .then((response) => {
          this.tableData = response.data.data
        })
        .catch((error) => {
          if (error.response) {
            this.errorHandle.getListStatus = error.response.status
            this.errorHandle.getListResponse = error.response.data
          }
        })
    },
    methods: {
      emitToCart(items) {
        console.log("clicked")
        this.$emit('clickToCart', items)
      }
    },
    computed: {
      getListResErr() {
        return this.errorHandle.getListResponse
      },
      getListStatErr() {
        return this.errorHandle.getListResponse
      },
      inputted() {
        return this.input
      },
      filteredData() {
        return this.tableData.filter(list => {
          return list.gender.includes(this.filterSelect) && list.colour.includes(this.filterOptions) && list.name
            .toLowerCase().includes(this.inputted.toLowerCase());
        })
      }


    }
  }
</script>

<style>
  h1 {
    margin-top: 0;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .extra-padding {
    padding: 10px;
    padding-bottom: 20px
  }

  .search {
    font-size: 16px;
    color: #4d4d4d;
    padding-right: 10px
  }

  .el-button {
    margin-left: auto;
  }

  .el-collapse-item__header {
    font-size: 16px;
  }

  .el-table {
    font-size: 14px;
    font-weight: 700;
  }

  .el-table__expanded-cell p {
    font-size: 16px;
    font-weight: 400;
  }

  .el-table th {
    background: #fafafa;
  }

  .el-table th>.cell {
    color: #333;
  }

  .titleWrap {
    padding-bottom: 5px
  }

  .title {
    color: #4d4d4d;
    font-size: 14px
  }

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
    padding: 7px;
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