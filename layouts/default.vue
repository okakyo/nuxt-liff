<template>
  <v-app>
    <headers :is-login="isLogin" />
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col xs="12" sm="10" md="9" lg="8" xl="6">
            <v-card>
              <nuxt />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import liff from '@line/liff'

import Headers from '@/components/templates/header/Header.vue'

export default defineComponent({
  name: 'layouts',
  components: {
    Headers,
  },
  setup() {
    const isLogin = ref(false)
    liff
      .init({
        liffId: '1640064557-P25n2Nd9',
      })
      .then(() => {
        // ここで認証機能を実装したい
        console.log('LIFF is Ready!')
        isLogin.value = liff.isLoggedIn()
      })
      .catch((e) => {
        console.error(e)
      })
  },
})
</script>
