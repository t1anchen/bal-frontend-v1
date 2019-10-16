<template>
  <el-row type="flex" justify="space-between">
    <h1>Blue Angel Lab</h1>
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <el-tooltip class="item" effect="dark" content="Home" placement="bottom">
          <i class="el-icon-s-home"></i>
        </el-tooltip>
      </el-menu-item>
      <el-menu-item index="2">
        <el-tooltip class="item" effect="dark" content="Explore" placement="bottom">
          <i class="el-icon-discover"></i>
        </el-tooltip>
      </el-menu-item>
      <el-menu-item index="3">
        <el-tooltip class="item" effect="dark" content="About Us" placement="bottom">
          <i class="el-icon-info"></i>
        </el-tooltip>
      </el-menu-item>
      <el-menu-item index="4">
        <el-tooltip class="item" effect="dark" content="How to Donate" placement="bottom">
          <i class="el-icon-s-finance"></i>
        </el-tooltip>
      </el-menu-item>
      <el-menu-item index="5">
        <el-tooltip class="item" effect="dark" content="New Project" placement="bottom">
          <i class="el-icon-plus"></i>
        </el-tooltip>
      </el-menu-item>

      <el-menu-item index="6">
        <el-tooltip class="item" effect="dark" content="Sign Up/Sign In" placement="bottom">
          <i class="el-icon-user"></i>
        </el-tooltip>
      </el-menu-item>

      <!-- <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4">
      <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>-->
    </el-menu>
  </el-row>
</template>

<script>
export default {
  //   data() {
  //     return {
  //       activeIndex: "1",
  //       activeIndex2: "1"
  //     };
  //   }
  //   methods: {
  //     handleSelect(key, keyPath) {
  //       // console.log(key, keyPath);
  //     }
  //   }
};
</script>

<style scoped>
i {
  font-size: 20px;
}
h1 {
  font-size: 20px;
}
</style>
