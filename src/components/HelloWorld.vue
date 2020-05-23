<template>
  <div>
    <el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-input v-model="content" placeholder="请输入内容" style="width:70%"></el-input>
          <el-button style="float: right; padding: 3px 0" type="text" @click="add">添加数据</el-button>
        </div>
        <div v-for="(item,index) in vuelist" :key="item.id" class="text item">
          {{item.text }}
          <el-button type="danger" icon="el-icon-delete" circle @click="remove(index)"></el-button>
        </div>
        <div class="bottom clearfix">
          <time class="time" style="float:left" v-show="vuelist.length!=0">{{ vuelist.length }} 条数据</time>
          <el-button
            type="text"
            style="float:right"
            class="button"
            v-show="vuelist.length!=0"
            @click="clear"
          >clear</el-button>
        </div>
      </el-card>
    </el-row>
    <el-row>
      <el-radio-group v-model="radio">
        <el-radio
          v-for="item in organizationSel"
          :key="item.value"
          :label="item.value"
        >{{item.label}}</el-radio>
      </el-radio-group>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-row>
    <el-row>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="province" label="省份" width="120"></el-table-column>
        <el-table-column prop="city" label="市区" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" width="300"></el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.$index)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: function() {
    return {
      vuelist: [{ text: "好漂亮" }, { text: "好帅气" }],
      content: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      radio: [
        { value: "2", label: "分公司" },
        { value: "3", label: "中心支公司" },
        { value: "4", label: "支公司" }
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ]
    };
  },
  methods: {
    add: function() {
      this.vuelist.push({ text: this.content });
    },
    remove: function(id) {
      this.vuelist.splice(id, 1);
    },
    clear: function() {
      this.vuelist = [];
    },
    handleClick(row) {
      console.log(row);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  margin: auto;
}
</style>
