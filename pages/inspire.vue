<template>
  <div class="container has-text-centered">
    <div>
      <p class="subtitle has-text-grey">
        LINEプロフィールAPI
      </p>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="pictureUrl" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ displayName }}</p>
            <p class="subtitle is-6">@{{ userId }}</p>
          </div>
        </div>

        <div class="content">
          {{ statusMessage }}
        </div>
      </div>
    </div>

    <div class="column is-4 is-offset-4">
      <div>
        <button
          class="button is-info is-block is-large is-fullwidth"
          @click="getProfile()"
        >
          取得
        </button>
      </div>
    </div>
  </div>
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
        console.log('Liff is Ready!')
      })
      .catch((e) => {
        console.error(e)
      })
  },

  methods: {
    getProfile() {
      liff
        .getProfile()
        .then((profile) => {
          this.userId = profile.userId
          this.displayName = profile.displayName
          this.pictureUrl = profile.pictureUrl
          this.statusMessage = profile.statusMessage
        })
        .catch(function (error) {
          alert('Error getting profile: ' + error)
        })
    },
  },
}
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
