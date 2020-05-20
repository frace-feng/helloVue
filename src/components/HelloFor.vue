<template>
  <div v-on:scroll.passive="onScroll">
    <el-row type="flex" class="row-bg">
      <el-col :span="6">
        <div class="grid-content">
          <ul>
            <li v-for="(n,index) in even(sets)" :key="index">{{n}}</li>
          </ul>
        </div>
      </el-col>
      <el-col :span="6">
        <button v-on:click.once="counter += 1">Add 1</button>
        <p>The button above has been clicked {{ counter }} times.</p>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <button v-on:click.self.prevent="greet">Greet</button>
          <button v-on:click.exact="onClick">没有系统修饰符</button>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg">
      <el-col :span="6">
        <div class="grid-content">
          <div class="grid-content">
            <ul>
              <li v-for="(n,index) in evenNumbers" :key="index">{{ n }}</li>
            </ul>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <span v-for="n in 10" :key="n">{{ n }}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <!-- 提交事件不再重载页面 -->
          <form v-on:submit.prevent="onSubmit">
            <el-input v-model="name" placeholder="请输入内容"></el-input>
            <button type="submit">提交</button>
            <button type="submit">提交2</button>
          </form>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <div>
            因为快乐地工作，我感到日子充实而丰盈，本学期便在这不知不觉中接近尾声。我到信息中心工作整整两年多了
            因为快乐地工作，我感到日子充实而丰盈，本学期便在这不知不觉中接近尾声。我到信息中心工作整整两年多了
            因为快乐地工作，我感到日子充实而丰盈，本学期便在这不知不觉中接近尾声。我到信息中心工作整整两年多了
            因为快乐地工作，我感到日子充实而丰盈，本学期便在这不知不觉中接近尾声。我到信息中心工作整整两年多了
            因为快乐地工作，我感到日子充实而丰盈，本学期便在这不知不觉中接近尾声。我到信息中心工作整整两年多了
            因为快乐地工作，我感到日子充实而丰盈，本学期便在这不知不觉中接近尾声。我到信息中心工作整整两年多了
            因为快乐地工作，我感到日子充实而丰盈，本学期便在这不知不觉中接近尾声。我到信息中心工作整整两年多了
            因为快乐地工作，我感到日子充实而丰盈，本学期便在这不知不觉中接近尾声。我到信息中心工作整整两年多了因为快乐地工作，我感到日子充实而丰盈，本学期便在这不知不觉中接近尾声。我到信息中心工作整整两年多了
            因为快乐地工作，我感到日子充实而丰盈，本学期便在这不知不觉中接近尾声。我到信息中心工作整整两年多了
            因为快乐地工作，我感到日子充实而丰盈，本学期便在这不知不觉中接近尾声。我到信息中心工作整整两年多了
            因为快乐地工作，我感到日子充实而丰盈，本学期便在这不知不觉中接近尾声。我到信息中心工作整整两年多了
            因为快乐地工作，我感到日子充实而丰盈，本学期便在这不知不觉中接近尾声。我到信息中心工作整整两年多了
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "HelloFor",
  props: { msg: String },
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      sets: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      counter: 0,
      name: "Vue.js"
    };
  },
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0;
      });
    }
  },
  methods: {
    even: function(numbers) {
      return numbers.filter(function(number) {
        return number % 2 === 0;
      });
    },
    greet: function(event) {
      // `this` 在方法里指向当前 Vue 实例
      alert("Hello " + this.name + "!");
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName);
      }
    },
    onSubmit: function() {
      console.log("我已经提交了" + this.name);
    },
    onScroll: function() {
      this.$message("这是一条消息提示");
    },
    onClick: function() {
      this.$message("这是一条消息提示没有任何系统修饰符被按下的时候才触发");
    }
  }
};
</script>
<style lang="less">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>