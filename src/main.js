/* eslint-disable no-console, sort-imports */

import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import VueDOMPurifyHTML from 'vue-dompurify-html'

import App from './App.vue'
import router from './router'
import store from './store'

import Icon from './components/SvgIcon.vue'
import confirmBox from './components/confirmBox/confirmBox'

// import './library/filters'
// import './library/vuePrototype'
// import Environment from './library/environment'
// import QRCode from './library/QRCode'
import { clickOutside } from './library/directives'
// import signalr from './library/signalr'

Vue.config.productionTip = false
Vue.component('Icon', Icon) // eslint-disable-line

Vue.use(clickOutside)
Vue.use(confirmBox)
// Vue.use(QRCode)
Vue.use(VueDOMPurifyHTML, {
  hooks: {
    afterSanitizeAttributes: currentNode => {
      if ('target' in currentNode) {
        currentNode.setAttribute('target', '_blank')
      }
    },
  },
})

const { NODE_ENV, VUE_APP_URL_ENV } = process.env

// SignalR plugin
// const websocketUrl = `${window.__env__[`${VUE_APP_URL_ENV}`].UF_WEBSOCKET}/messageHub`
// Vue.use(signalr, websocketUrl)

// const parser = Environment.checkUa()
// if (parser.browser.name !== 'IE') {
//   // eslint-disable-next-line import/no-relative-packages
//   import('../node_modules/vue-signature-pad').then(module => {
//     Vue.use(module.default)
//   })
// }

export default new Vue({
  router,
  store,
  // signalr,
  render: h => h(App),
}).$mount('#app')

function setTimeStamp() {
  const newDate = new Date()
  const YYYY = newDate.getFullYear()
  const month = String(newDate.getMonth() + 1)
  const MM = month.padStart(2, '0')
  const date = String(newDate.getDate())
  const DD = date.padStart(2, '0')
  const hour = String(newDate.getHours())
  const HH = hour.padStart(2, '0')
  const minutes = String(newDate.getMinutes())
  const mm = minutes.padStart(2, '0')
  // uuid
  let d = Date.now()
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now() // use high-precision timer if available
  }
  const uid = 'xxxx'.replace(/[x]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
  return `${YYYY}${MM}${DD}-${uid}${HH}${mm}`
}

const { version } = require('../package.json')

const timeStamp = setTimeStamp()

if (NODE_ENV === 'production' && VUE_APP_URL_ENV !== 'SIT') {
  console.log(`%cBUILD_VERSION: ${VUE_APP_URL_ENV} v${version}`, 'color:DodgerBlue')

  console.log(`%cBUILD_TIME_STAMP: ${timeStamp}`, 'color:DodgerBlue')
} else {
  console.log('%cThe app info shows only in non-production environment.', 'color:DodgerBlue')

  const appTimeVersion = `%c    TIME_STAMP_VERSION: ${timeStamp}`

  console.log(appTimeVersion, 'color:DodgerBlue')
  for (const key in process.env) {
    if (Object.prototype.hasOwnProperty.call(process.env, key)) {
      const value = process.env[key]

      console.log(`%c    ${key}: ${value}`, 'color:DodgerBlue')
    }
  }

  console.log('%cThe app info ends.', 'color:DodgerBlue')
}
