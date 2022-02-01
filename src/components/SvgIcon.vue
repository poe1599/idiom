<template>
  <div
    ref="svgIcon"
    v-dompurify-html="icon"
    class="svgIcon"
    :style="{ height: `${height}`, width: `${width}` }"
    @click="clickIcon"
  ></div>
</template>
<script>
export default {
  name: 'SvgIcon',
  props: {
    disable: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    type: {
      type: Number,
      default: 1,
    },
    item: {
      type: Object,
      default: () => ({}),
    },
    iconName: {
      type: String,
      default: 'cross',
    },
    w: {
      type: String,
      default: '16px',
    },
    h: {
      type: String,
      default: '16px',
    },
    color: {
      type: String,
      default: '#000000',
    },
  },
  data() {
    return {
      icon: '',
      height: {
        type: String,
        default: '',
      },
      width: {
        type: String,
        default: '',
      },
    }
  },
  computed: {
    iconSrc() {
      // eslint-disable-next-line
      const iconSrc = require(`@/assets/icon/${this.iconName}.svg`)
      return iconSrc
    },
  },
  watch: {
    iconSrc: {
      immediate: true,
      handler() {
        this.init()
      },
      deep: true,
    },
    w: {
      immediate: true,
      handler() {
        this.init()
      },
      deep: true,
    },
    h: {
      immediate: true,
      handler() {
        this.init()
      },
      deep: true,
    },
  },
  mounted() {
    this.init()
  },
  methods: {
    clickIcon() {
      this.$emit('click', this.item)
    },
    /**
     * 頁面初始化
     * 找不到檔案就終止，有找到就設定寬高
     */
    init() {
      if (!this.iconSrc) return

      this.height = this.h
      this.width = this.w

      if (this.height.match(/^[0-9]+$/)) {
        this.height += 'px'
      }
      if (this.width.match(/^[0-9]+$/)) {
        this.width += 'px'
      }

      this.icon = this.iconSrc.default.content.replace('symbol', 'svg')
      this.$nextTick(() => {
        if (this.$refs.svgIcon) {
          this.$refs.svgIcon.querySelector('svg').removeAttribute('fill')
          this.$refs.svgIcon.querySelector('svg').setAttribute('width', `${this.width}`)
          this.$refs.svgIcon.querySelector('svg').setAttribute('height', `${this.height}`)
        }
      })
    },
  },
}
</script>
<style scoped>
svg {
  fill: #fff;
}

.svgIcon {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
