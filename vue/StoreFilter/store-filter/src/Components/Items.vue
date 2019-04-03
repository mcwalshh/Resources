<template>
  <div class="notes">
    <h1>
      <span class="search">Search</span> <el-input placeholder="Start typing your search" v-model="input"></el-input>
    </h1>
    <el-table
      :data="tableData"
      border>
      <el-table-column type="expand">
        <template slot-scope="props">
          <p>{{ props.row.name }}</p>
        </template>
      </el-table-column>
      <el-table-column
        label="Category">
        <template slot-scope="props">
          {{ props.row.category }}
        </template>
      </el-table-column>
      <el-table-column
        label="Colour"
        prop="colour">
      </el-table-column>
      <el-table-column
        fixed="right"
        label=""
        width="90">
        <template slot-scope="scope">
          <el-button type="info" size="small" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" size="small" icon="el-icon-delete" circle style="margin-left: 5px;"></el-button>
        </template>
      </el-table-column>
    </el-table>
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
  // created() {
  //   ShopList.getShoppingList()
  //       .then((response) => {
  //         this.status = response.status      
  //       })
  //       .catch(function (error) {
  //         if (error.response){
  //         this.status = error.response.status
  //         this.statusText = error.response.data.data.form[0].message
  //      }
  //       })
  //       .finally((response) => {
  //        
  //         }
  //       })
  // }
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
</style>