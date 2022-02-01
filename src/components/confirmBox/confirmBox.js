import boxComponents from './ConfirmBox.vue'

// 定義插件對象
const confirmBox = {}

// 定義插件install
confirmBox.install = Vue => {
  const MessageBoxInstance = Vue.extend(boxComponents)
  let currentMsg
  const initInstance = () => {
    // vue實例化
    currentMsg = new MessageBoxInstance()
    const msgBoxEl = currentMsg.$mount().$el
    document.body.appendChild(msgBoxEl)
  }

  Vue.prototype.$confirmBox = {
    show(options) {
      const reset = {
        title: '',
        content: '訊息內容',
        htmlContent: '',
        buttonText: ['取消', '確認'],
        textAlign: '',
        width: '',
        hasCloseBtn: false,
        fn1() {
          this.isOpen = false
        },
        fn2() {
          this.isOpen = false
        },
      }
      if (!currentMsg) {
        initInstance()
      }
      Object.assign(currentMsg, reset)
      if (typeof options === 'string') {
        currentMsg.content = options
      } else if (typeof options === 'object') {
        Object.assign(currentMsg, options)
      }
      return currentMsg
        .openConfirmBox()
        .then(val => {
          currentMsg = null
          return Promise.resolve(val)
        })
        .catch(err => {
          currentMsg = null
          return Promise.reject(err)
        })
    },
    hide() {
      currentMsg.forceClose()
    },
  }
}
export default confirmBox
