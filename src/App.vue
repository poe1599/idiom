<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="css" src="./scss/normalize.css"></style>
<style lang="scss" src="@/scss/components/_button.scss"></style>
<style lang="scss">
#app {
  position: relative;
  min-height: 100vh;
  font-family: 'Mulish', 'Noto Sans TC', 'Chivo', '微軟正黑體', -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif;
  text-align: center;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
