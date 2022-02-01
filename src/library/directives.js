/* eslint-disable */
import Vue from 'vue'
import throttle from 'lodash.throttle'

const scroll = Vue.directive('scroll', {
  inserted(el, binding) {
    const f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', throttle(f, 100))
  },
})

const clickOutside = Vue.directive('clickOutside', {
  bind(el, binding) {
    function documentHandler(e) {
      // 判斷點擊的區域是否是指令所在的元素內部，如果是，就跳出函數，不往下執行。
      if (el.contains(e.target)) {
        return false
      }
      // 判斷當前的指令v-clickOutside有沒有寫表達式
      if (binding.expression) {
        // binding.value()就是用來執行當前上下文methods中指定的函數的
        binding.value(e)
      }
    }

    // 用於在unbind鉤子函數中移除對document的click事件監聽。
    el.__vueClickOutside__ = documentHandler
    document.addEventListener('click', documentHandler)
  },
  unbind(el) {
    document.removeEventListener('click', el.__vueClickOutside__)
    // 如果不移除，當組件或元素銷燬時，它仍存在於內存中
    delete el.__vueClickOutside__
  },
})

export { scroll, clickOutside }
