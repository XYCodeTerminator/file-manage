<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-mask">
      <div class="modal-wrapper" :style="wrapperStyle">
        <div class="modal-content" :style="contentStyle">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XModal',
  props: {
    position: {
      type: Object,
      function () {
        return {
          left: 0,
          top: 0
        }
      }
    },
    size: Object,
    isVisible: false,
    contentStyle: Object
  },
  computed: {
    wrapperStyle () {
      return {
        ...this.position,
        ...this.size
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .modal {
    .modal-mask {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 1000;
      .modal-wrapper {
        position: absolute;
        left: 0;
        top: 0;
        animation: zoom .5s;
        .modal-buttons {
          position: absolute;
        }
      }
    }
  }
  @keyframes zoom {
    from {
      transform: scale(0)
    }
    to {
      transform: scale(1)
    }
  }
</style>
