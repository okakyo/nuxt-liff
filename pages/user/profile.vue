<template>
  <v-card>
    <v-row justify="center">
      <v-col cols="8">
        <v-img :src="pictureUrl" />
      </v-col>
      <v-col cols="8">
        <v-card-title>{{ displayName }}</v-card-title>
        <v-card-subtitle>{{ userId }}</v-card-subtitle>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import liff from '@line/liff'
import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  async setup() {
    // MEMO: created が廃止されて setup()
    await liff.init({
      liffId: '1640064557-P25n2Nd9',
    })
    const profile = await liff.getProfile()
    const userId = ref()
    const displayName = ref('')
    const pictureUrl = ref('https://bulma.io/images/placeholders/128x128.png')
    const statusMessage = ref('')
    userId.value = profile.userId
    displayName.value = profile.displayName
    return {
      userId,
      displayName,
      pictureUrl,
      statusMessage,
    }
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
}

.line-id {
  margin-bottom: 30px;
}

.form > * {
  margin-bottom: 10px;
}
</style>
