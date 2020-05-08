<template>
  <div class="parent">
    <el-row class="header">
      <el-input
        v-model="content"
        placeholder="请输入歌手"
        @keyup.enter.native="search"
        style="margin:auto;width:50%"
      >
        <el-button slot="append" icon="el-icon-search" @click="search">搜索</el-button>
      </el-input>
    </el-row>
    <el-row class="middle">
      <el-col :span="12" class="middle_list">
        <div style="height:100%;overflow:auto;border:1px solid rgba(0,0,0,0.1)">
          <div
            v-for="item in musicList"
            :key="item.id"
            style="text-align:left;margin:5px;border-bottom:1px solid rgba(0,0,0,0.1)"
          >
            <el-button
              size="mini"
              type="danger"
              @click="play(item.id)"
              icon="el-icon-video-play"
              circle
            ></el-button>
            {{item.name}}
            <el-button type="warning" icon="el-icon-video-play" v-show="item.status!=0" circle></el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="12" class="middle_rotate">
        <div style="height:200px;" class="demo-image">
          <div class="rotateImg" :class="{ active: playing }">
            <img :src="picUrl" style="min-width:100%;max-height:100%;" />
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="footer">
      <el-col :span="24">
        <div class="grid-content">
          <audio
            :src="musicUrl"
            controls="controls"
            style="width:100%"
            autoplay
            @pause="pause"
            @play="handlePlay"
          ></audio>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
/**歌曲搜索：https://autumnfish.cn/search，get方式，参数：keywords */
/**歌曲url获取：https://autumnfish.cn/song/url；get方式；参数：id(歌曲id);响应：歌曲的url地址 */
/**歌曲封面： https://autumnfish.cn/song/detail；get方式；参数：ids（歌曲id）；响应：歌曲详情*/
/**歌曲评论：https://autumnfish.cn/comment/hot?type=0；get方式；参数：id（歌曲id，type固定为0）；响应：评论 */
/**mv地址获取：https://autumnfish.cn/mv/url；get方式；参数：id，响应：url地址 */
<script>
const axios = require("axios");
export default {
  data: function() {
    return {
      musicList: [],
      content: "梁静茹",
      musicUrl: "",
      picUrl:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      commontList: [],
      playing: false
    };
  },
  methods: {
    search: function() {
      var that = this;
      axios
        .get("https://autumnfish.cn/search?keywords=" + this.content)
        .then(function(response) {
          //   console.log(response);
          that.musicList = response.data.result.songs;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    play: function(id) {
      var that = this;
      axios
        .get("https://autumnfish.cn/song/url?id=" + id)
        .then(function(response) {
          //   console.log(response.data.data[0].url);
          that.musicUrl = response.data.data[0].url;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
      axios
        .get("https://autumnfish.cn/song/detail?ids=" + id)
        .then(function(response) {
          //   console.log(response);
          that.picUrl = response.data.songs[0].al.picUrl;
          that.playing = true;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    pause: function() {
      this.playing = false;
    },
    handlePlay: function() {
      this.playing = true;
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
.rotateImg {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
  animation: spin 10s linear infinite;
  animation-play-state: paused;
}
.active {
  animation-play-state: running;
}
@keyframes spin {
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(360deg);
  }
}
//伸缩
.parent {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 73px);
}
.middle {
  flex: 1;
  overflow: hidden;
}
.middle_list,
.middle_rotate {
  overflow: hidden;
  height: 100%;
}
.demo_image {
  display: flex;
}
</style>