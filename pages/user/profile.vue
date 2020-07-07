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
  setup() {
    const userId = ref('')
    const displayName = ref('')
    const pictureUrl = ref('https://bulma.io/images/placeholders/128x128.png')
    const statusMessage = ref('')

    // MEMO: created が廃止されて setup()
    liff
      .init({
        liffId: '1640064557-P25n2Nd9',
      })
      .then(() => {
        console.log('LIFF is Ready!')
        liff
          .getProfile()
          .then((profile) => {
            console.log(profile)
            userId.value = profile.userId
            displayName.value = profile.displayName
            pictureUrl.value = profile.pictureUrl
            statusMessage.value = profile.statusMessage
          })
          .catch((e) => {
            console.error(e)
          })
      })
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
