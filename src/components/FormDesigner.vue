<template>
  <div>
    <form-create :rule="rule" :option="option"></form-create>
    <fc-designer ref="designer" height="100vh">
      <template v-slot:handle>
        <el-button size="mini" round @click="getRule">生成Rule</el-button>
      </template>
    </fc-designer>
  </div>
</template>

<script>
export default {
  name: 'FormDesigner',
  data () {
    return {
      rule: [],
      option: {}
    }
  },
  methods: {
    getRule () {
      console.log(JSON.stringify(this.$refs.designer.getRule()))
    }
  }
}
</script>

<style scoped>

</style>
