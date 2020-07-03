<template>
  <v-app dark>
    <v-content>
      <v-container>
        <v-row justify="center">
          <v-col xs="12" sm="10" md="9" lg="8" xl="6">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {}
</script>
