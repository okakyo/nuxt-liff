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
export default {
  data() {
    return {
      userId: '',
      displayName: '',
      pictureUrl: 'https://bulma.io/images/placeholders/128x128.png',
      statusMessage: '',
    }
  },
  created() {
    liff
      .init({
        liffId: '1640064557-P25n2Nd9',
      })
      .then(() => {
        // ここで認証機能を実装したい
        if (!liff.isLoggedIn()) {
          liff.login()
        }
        console.log(`LIFF is Ready!:${liff.isLoggedIn()}`)

        liff.getProfile().then((profile) => {
          this.userId = profile.userId
          this.displayName = profile.displayName
          this.pictureUrl = profile.pictureUrl
          this.statusMessage = profile.statusMessage
        })
      })
      .catch((e) => {
        console.error(e)
      })
  },
}
</script>
