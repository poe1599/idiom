<template>
  <div v-show="isOpen" id="confirmBox" ref="confirmBox" class="wrapper">
    <transition name="expand">
      <div v-if="isOpen" class="box" :style="{ width: width }">
        <div v-if="title" class="box__titleItem">{{ title }}</div>
        <div
          v-if="htmlContent"
          v-dompurify-html="htmlContent"
          class="box__content"
          :style="{ textAlign: textAlign }"
        ></div>
        <div v-else class="box__content" :style="{ textAlign: textAlign }">
          {{ content }}
        </div>
        <div v-if="allowToClose" class="box__buttonGroup">
          <button
            v-for="(item, index) in buttonText"
            :id="`confirmButton-${index + 1}`"
            :key="`confirmButton-${index + 1}`"
            :class="{
              'S-button--sub': buttonText.length > 1 && index === 0,
              'S-button--main': buttonText.length === 1 || index === 1,
            }"
            @click="btnClick(index + 1)"
          >
            {{ item }}
          </button>
        </div>
        <!-- <button v-if="hasCloseBtn" class="box__close" @click="isOpen = false">
          <icon icon-name="cross" w="24px" h="24px"></icon>
        </button> -->
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ConfirmBox',
  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    htmlContent: {
      type: String,
      default: '',
    },
    buttonText: {
      type: Array,
      default: () => ['取消', '確認'],
    },
    textAlign: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    // 第1顆按鈕事件
    fn1: {
      type: Function,
      default() {
        this.isOpen = false
      },
    },
    // 第2顆按鈕事件
    fn2: {
      type: Function,
      default() {
        this.isOpen = false
      },
    },
    // 是否有右上X按鈕
    hasCloseBtn: {
      type: Boolean,
      default: false,
    },
    // 允許關閉
    allowToClose: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isOpen: false,
      resolve: '',
      reject: '',
      promise: '', // 保存promise对象
    }
  },
  watch: {
    isOpen(newValue) {
      if (newValue) {
        document.body.classList.add('hideScroll')
      } else {
        document.body.classList.remove('hideScroll')
      }
    },
  },
  methods: {
    /**
     * 點擊彈窗按紐
     * @param {Number} index - 按鈕索引
     */
    btnClick(index) {
      this.isOpen = false
      const fnName = `fn${index}`
      this[fnName]()
    },
    /**
     * 開啟彈跳視窗
     * @returns {Promise}
     */
    openConfirmBox() {
      this.isOpen = true
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
      // 返回promise對象
      return this.promise
    },
    /**
     * 關閉視窗
     */
    forceClose() {
      this.isOpen = false
    },
    destroy() {
      this.$destroy()
      const confirmBox = document.getElementById('confirmBox')
      confirmBox.removeChild(this.$el)
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
  width: 100vw;
  height: 100vh;
  font-family: 'Mulish', 'Noto Sans TC', 'Chivo', '微軟正黑體', -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif;
  background-color: rgba(74, 74, 74, 0.5);
  z-index: 999;
}

/*  = 燈箱區塊
------------------------------ */
.box {
  position: relative;
  overflow: auto;
  padding: 40px 32px 0;
  width: 327px;
  max-height: 70vh;
  color: rgb(49, 49, 49);
  background-color: #fff;
  border-radius: 8px;
  line-height: 1.5;

  @include tablet {
    width: 480px;
  }

  &::after {
    display: block;
    height: 40px;
    content: '';
  }

  &__titleItem {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: bold;
    color: rgb(49, 49, 49);
  }

  &__titleItem::after {
    display: block;
    margin-top: 24px;
    width: 88px;
    height: 4px;
    background-color: rgb(209, 209, 209);
    content: '';
  }

  &__content {
    line-height: 24px;
  }

  &__buttonGroup {
    display: inline-block;
    justify-content: center;
    margin-top: 40px;
    width: 100%;

    @include tablet {
      display: flex;
      justify-content: center;
      margin-top: 40px;

      .S-button--sub {
        margin-right: 8px;
        padding: 12px 16px;
      }

      .S-button--main {
        padding: 12px 16px;
      }
    }

    .S-button--sub {
      margin-bottom: 24px;
      width: 100%;
    }

    .S-button--main {
      width: 100%;
    }
  }

  &__close {
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 0;
    color: rgb(49, 49, 49);
  }
}

.box::-webkit-scrollbar {
  width: 12px;
}

.box::-webkit-scrollbar-thumb {
  background-color: #bdbdbd;
  border-radius: 6px;
}

.expand {
  &-enter-active,
  &-leave-active {
    transition: all 400ms;
  }

  &-enter,
  &-leave-to {
    transform: scale(0);
  }
}
</style>
