<template>
  <div id="slotMsgBox" class="wrapper" @click.self="shutOff">
    <div class="box" :style="{ width: width, maxWidth: maxWidth }">
      <div v-if="title" class="box__titleItem">
        <span class="box__title">{{ title }}</span>
      </div>
      <slot></slot>
      <button v-if="hasCloseBtn" class="box__close" @click="_isOpen = false">
        <icon icon-name="cross" w="24px" h="24px"></icon>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SlotMsgBox',
  components: {},
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    maxWidth: {
      type: String,
      default: '',
    },
    // 是否點擊外部自動關閉
    externalClosed: {
      type: Boolean,
      default: true,
    },
    // 是否有右上X按鈕
    hasCloseBtn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  computed: {
    _isOpen: {
      get() {
        return this.isOpen
      },
      set(newVal) {
        this.$emit('update:isOpen', newVal)
      },
    },
  },
  mounted() {
    document.body.classList.add('hideScroll')
  },
  beforeDestroy() {
    document.body.classList.remove('hideScroll')
  },
  methods: {
    shutOff() {
      if (this.externalClosed) this._isOpen = false
    },
  },
}
</script>
<style lang="scss" scoped>
/*  = 背景區塊
------------------------------ */
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(74, 74, 74, 0.5);
  z-index: 99;
  cursor: default;
}

/*  = 燈箱區塊
------------------------------ */
.box {
  position: relative;
  overflow: auto;
  padding: 40px 24px 0;
  width: 327px;
  max-height: 70vh;
  background-color: #fff;
  border-radius: 8px;

  @include tablet {
    width: 640px;
  }
  @include laptop {
    width: 960px;
  }

  &::after {
    display: block;
    content: '';
    height: 40px;
  }

  &__titleItem {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }

  &__close {
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 0;
    color: #000;
  }
}

.box::-webkit-scrollbar {
  width: 12px;
}

.box::-webkit-scrollbar-thumb {
  background-color: #333;
  border-radius: 6px;
}
</style>
