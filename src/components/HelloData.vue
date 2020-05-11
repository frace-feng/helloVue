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
  </div>
</template>
<script>
var obj = { foo: "bar" };
Object.freeze(obj);
export default {
  name: "HelloData",
  props: { msg: String },
  data() {
    return {
      fooObj: obj,
      hello: "how are you"
    };
  },
  methods: {
    change() {
      this.hello = "And you?";
      console.log(this.hello);
    }
  },
  watch: {
    hello: {
      deep: true,
      handler: "change"
    }
  }
};
</script>
<style scoped>
</style>