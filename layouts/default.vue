<template>
  <v-app>
    <headers />
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
import { defineComponent } from '@vue/composition-api'
import Headers from '@/components/templates/header/Header.vue'
export default defineComponent({
  name: 'layouts',
  components: {
    Headers,
  },
})
</script>
