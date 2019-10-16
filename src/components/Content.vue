<template>
  <el-container direction="vertical">
    <Pic />
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <ControlPanel />
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import Pic from "./Pic.vue";
import ControlPanel from "./ControlPanel.vue";
export default {
    components: {
        Pic,
        ControlPanel
    }
};
</script>

<style>
</style>
