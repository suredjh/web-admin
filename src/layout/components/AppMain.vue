<template>
  <section class="app-main">
    <div class="breadcrumb-container">
      <breadcrumb />
    </div>
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  },
  components: {
    Breadcrumb
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  padding: 0 20px;
  position: relative;
  overflow: hidden;
  background: $conBgColor;
  color: $commonTxtColor;
}
.breadcrumb-container {
  width: 100%;
  border-bottom: 1px solid $lineColor;
}
.fixed-header+.app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
