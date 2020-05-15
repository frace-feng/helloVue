<template>
  <div>
    <el-row>
      <el-input v-model="fooObj.foo" placeholder style="width:70%"></el-input>
      <el-input v-model="hello" placeholder style="width:70%"></el-input>
    </el-row>
    <el-row>
      <button @click="fooObj.foo='baz'">change foo</button>
      <button @click="hello=' i am fine'">change hello</button>
    </el-row>
    <el-row>
      <button v-bind:disabled="isBunttonDisabled">button</button>
      <button @click="changeFalse">false</button>
      <button @click="changeTrue">true</button>
    </el-row>
    <el-row>
      <div id="example">
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
      </div>
    </el-row>
    <el-row>
      <p>
        Ask a yes/no question:
        <input v-model="question" />
      </p>
      <p>{{ answer }}</p>
    </el-row>
    <el-row>
      <el-button type="text" @click="open">点击打开 Message Box</el-button>
    </el-row>
    <el-row>
      <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" disabled="true"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="deleteInfo">确 定</el-button>
        </div>
      </el-dialog>
    </el-row>
  </div>
</template>
<script>
var obj = { foo: "bar" };
Object.freeze(obj);
const axios = require("axios");
var _ = require("lodash");
export default {
  name: "HelloData",
  props: { msg: String },
  data() {
    return {
      fooObj: obj,
      hello: "how are you",
      isBunttonDisabled: false, //默认是非禁用状态
      question: "",
      answer: "I cannot give you an answer until you ask a question!",
      visible2: false,
      message: "hello",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "120px"
    };
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function() {
      // `this` 指向 vm 实例
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function() {
      this.answer = "Waiting for you to stop typing...";
      this.debouncedGetAnswer();
    },
    hello: {
      deep: true,
      handler: "change"
    }
  },
  created: function() {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    change() {
      this.hello = "And you?";
      console.log(this.hello);
    },
    changeFalse() {
      this.isBunttonDisabled = false;
    },
    changeTrue() {
      this.isBunttonDisabled = true;
    },
    getAnswer: function() {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Questions usually contain a question mark. ;-)";
        return;
      }
      this.answer = "Thinking...";
      var vm = this;
      axios
        .get("https://yesno.wtf/api")
        .then(function(response) {
          vm.answer = _.capitalize(response.data.answer);
        })
        .catch(function(error) {
          vm.answer = "Error! Could not reach the API. " + error;
        });
    },
    open() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    deleteInfo() {
      this.$message({
        type: "info",
        message: "删除成功"
      });
      this.dialogFormVisible = false;
    }
  }
};
</script>
<style scoped>
</style>