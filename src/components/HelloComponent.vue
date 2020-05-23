<template>
  <div class="demo">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <button
            v-for="tab in tabs"
            :key="tab"
            :class="['tab-button',{active:currentTab==tab}]"
            :click="currentTab==tab"
          >{{tab}}</button>
          <component :is="currentTabComponent" class="tab"></component>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <template>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    :disabled="scope.$index===0"
                    @click="moveUp(scope.$index,scope.row)"
                  >
                    <i class="el-icon-arrow-up"></i>
                  </el-button>
                  <el-button
                    size="mini"
                    :disabled="scope.$index===5"
                    @click="moveDown(scope.$index,scope.row)"
                  >
                    <i class="el-icon-arrow-down"></i>
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Vue from "vue";
Vue.component("tab-home", {
  template: "<div>Home Component</div>"
});

Vue.component("tab-posts", {
  template: "<div>Posts Component</div>"
});

Vue.component("tab-archive", {
  template: "<div>Archive Component</div>"
});
export default {
  name: "HelloComponent",
  props: { msg: String },
  data() {
    return {
      currentTab: "Home",
      tabs: ["Home", "Posts", "Archive"],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  computed: {
    currentTabComponent: function() {
      return "tab-" + this.currentTab.toLowerCase();
    }
  }
};
</script>
<style scoped>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>