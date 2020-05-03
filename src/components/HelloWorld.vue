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
      vuelist: [{ text: "好生气" }, { text: "好吵架" }],
      content: ""
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
