<template>
  <v-form>
    <v-textarea />
    <v-btn @click="sendMessage">Push</v-btn>
  </v-form>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'LoginForm',

  components: {},
  setup() {
    const sendMessage = () => {}
    return {
      sendMessage,
    }
  },
})
</script>
