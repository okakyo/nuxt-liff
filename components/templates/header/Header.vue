<template>
  <v-app-bar app>
    <v-btn text to="/">Top</v-btn>
    <v-spacer />
    <v-btn v-if="!isLogin" text to="/login">ログイン</v-btn>
    <v-btn v-else text>ログアウト</v-btn>
  </v-app-bar>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'Headers',
  props: {
    isLogin: {
      type: Boolean,
      required: true,
    },
  },
})
</script>
