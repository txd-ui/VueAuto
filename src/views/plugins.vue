<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <i class="el-icon-edit"></i>&nbsp;&nbsp;
        <span>前端开发常用组件</span>
      </div>
      <div class="text item">
        <ol>
          <li v-for="(str,index) in notes" :key="index">{{str}}</li>
        </ol>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "projectinfo",
  data() {
    return {
      notes: [
        "[JS自动打字机插件]酷炫的自动打字机效果: Typed.js",
        "[JS轻量级时间插件]：day.js"
      ]
    };
  }
};
</script>
<style scoped lang="scss">
ol {
  margin-top: 0;
  li {
    line-height: 30px;
  }
}
</style>
