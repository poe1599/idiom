<template>
  <div v-if="answer.length > 0" class="idiom">
    <header class="nav">
      <icon
        class="nav__help"
        icon-name="question"
        w="24px"
        h="24px"
        @click="control.boxIsOpen = true"
      ></icon>
      <div class="nav__title">成語猜謎</div>
      <div class="nav__set"></div>
    </header>
    <SlotMsgBox v-if="control.boxIsOpen" width="343px" :is-open.sync="control.boxIsOpen">
      <div class="msg">
        <div class="game">
          <div class="game__hint">語意說明:<br />形容身心安適，無憂無慮。</div>
          <div v-for="(i, j) in sample" :key="j" class="game__row" :class="i.class">
            <div v-for="(k, l) in i.list" :key="l + 't'" class="game__inpGroup">
              <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
              <input
                id=""
                v-model="k.val"
                class="game__inp"
                :class="{
                  'game__inp--1': k.type === '1',
                  'game__inp--2': k.type === '2',
                  'game__inp--3': k.type === '3',
                  flipInX: ['1', '2', '3'].includes(k.type),
                }"
                type="text"
                name=""
                maxlength="1"
                :disabled="true"
              />
            </div>
          </div>
        </div>
      </div>
    </SlotMsgBox>
    <div class="container">
      <div class="game">
        <div class="game__hint">語意說明:<br />{{ solution['用法-語意說明'] }}</div>
        <div v-for="(i, j) in answer" :key="j" class="game__row" :class="i.class">
          <div v-for="(k, l) in i.list" :key="l + 't'" class="game__inpGroup">
            <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
            <input
              id=""
              v-model="k.val"
              class="game__inp"
              :class="{
                'game__inp--1': k.type === '1',
                'game__inp--2': k.type === '2',
                'game__inp--3': k.type === '3',
                flipInX: ['1', '2', '3'].includes(k.type),
              }"
              type="text"
              name=""
              maxlength="1"
              :disabled="control.index !== j"
              @keyup.enter="submitAnswer(i)"
            />
          </div>
        </div>
        <div class="game__ref">
          <a
            href="https://language.moe.gov.tw/001/Upload/Files/site_content/M0001/respub/dict_idiomsdict_download.html"
            >教育部國語辭典公眾授權網
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlotMsgBox from '@/components/SlotMsgBox.vue'
import idiom from '@/library/idiom.json'

export default {
  name: 'IndexPage',
  components: {
    SlotMsgBox,
  },
  data() {
    return {
      doc: [],
      solution: {},
      answer: [],
      control: {
        index: 0,
        max: 6,
        boxIsOpen: false,
      },
      sample: [
        {
          class: { shake: false },
          list: [
            { val: '高', type: '1' },
            { val: '臥', type: '3' },
            { val: '安', type: '3' },
            { val: '枕', type: '2' },
          ],
        },
        {
          class: { shake: false },
          list: [
            { val: '高', type: '1' },
            { val: '枕', type: '1' },
            { val: '無', type: '1' },
            { val: '憂', type: '1' },
          ],
        },
        {
          class: { shake: false },
          list: [
            { val: '', type: '' },
            { val: '', type: '' },
            { val: '', type: '' },
            { val: '', type: '' },
          ],
        },
      ],
    }
  },
  mounted() {
    this.doc = idiom.doc
    this.reset()
  },
  methods: {
    getSolution() {
      this.solution = this.doc[Math.floor(Math.random() * this.doc.length)]
      const checkList = [this.solution.成語.length === 4, this.solution['用法-語意說明'] !== '']
      if (checkList.every(i => i === true)) return
      this.getSolution()
    },
    submitAnswer(anObj) {
      const { list } = anObj

      if (list.some(i => i.val === '')) {
        this.errorShake(anObj)
        return
      }

      const val = list[0].val + list[1].val + list[2].val + list[3].val
      // const isOK = this.doc.some(i => i.成語 === val)
      // if (!isOK) {
      //   this.errorShake(anObj)
      //   return
      // }

      const idiomText = this.solution.成語
      list.forEach((i, index) => {
        if (i.val === idiomText[index]) {
          i.type = '1'
          return
        }

        if (idiomText.includes(i.val)) {
          i.type = '2'
          return
        }

        i.type = '3'
      })

      const isDone = val === idiomText
      if (isDone) {
        setTimeout(() => {
          this.$confirmBox.show({
            title: '太棒了',
            content: '',
            width: '343px',
            textAlign: 'center',
            buttonText: ['重新開始'],
            fn1: () => {
              this.reset()
            },
          })
        }, 2000)
      }

      this.control.index += 1
      if (this.control.index === this.control.max) {
        setTimeout(() => {
          this.$confirmBox.show({
            title: '再接再厲',
            content: '',
            width: '343px',
            textAlign: 'center',
            buttonText: ['重新開始'],
            fn1: () => {
              this.reset()
            },
          })
        }, 2000)
      }
    },
    errorShake(anObj) {
      anObj.class.shake = true
      this.$nextTick(() => {
        setTimeout(() => {
          anObj.class.shake = false
        }, 1000)
      })
    },
    reset() {
      this.control.index = 0
      this.answer = []
      for (let i = 1; i <= this.control.max; i += 1) {
        const obj = {
          class: { shake: false },
          list: [],
        }
        for (let j = 1; j <= 4; j += 1) {
          obj.list.push({ val: '', type: '' })
        }
        this.answer.push(obj)
      }
      this.getSolution()
    },
  },
}
</script>
<style lang="scss" scoped>
.idiom {
  margin: auto;
  max-width: 375px;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  height: 64px;
  text-align: center;
  border-bottom: 1px solid #d3d6da;

  &__help {
    cursor: pointer;
  }

  &__title {
    font-size: 32px;
    // line-height: 64px;
    font-weight: bold;
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
  width: 100%;
  min-height: calc(100vh - 64px);
}

@keyframes shake-x {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}
@keyframes flip-in-x {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

.shake {
  animation-duration: 1s;
  animation-name: shake-x;
}

.flipInX {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flip-in-x;
  animation-name: flip-in-x;
  animation-duration: 2s;
}

.game {
  width: 100%;

  &__hint {
    margin-bottom: 16px;
    text-align: left;
  }

  &__row {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__inpGroup {
    margin: 4px;
    width: 64px;
    height: 64px;
  }

  &__inp {
    overflow: hidden;
    width: 100%;
    height: 100%;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    background: transparent;
    border: 1px solid rgb(197, 195, 195);
    border-radius: 8px;
    transition: 1s;

    &--1 {
      color: #fff;
      background: rgb(17, 141, 6);
    }

    &--2 {
      color: #fff;
      background: rgb(216, 108, 6);
    }

    &--3 {
      color: #fff;
      background: rgb(180, 180, 180);
    }
  }

  &__ref {
    margin-top: 32px;
  }
}

.msg {
  text-align: left;
}
</style>
