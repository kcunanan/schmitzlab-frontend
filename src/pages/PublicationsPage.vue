<template>
  <div>
    <hero :hero="page.featured_image"></hero>
    <section class="section">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="content" v-html="page.content"></div>
          <div class="has-text-centered">
            <h1 class="title">Publications</h1>
            <hr>
          </div>
          <publications></publications>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import Hero from '@/components/Hero.vue'
import Publications from '@/components/Publications.vue'

import { butter } from '@/buttercms'

export default {
  name: 'PublicationsPage',
  components: {
    'publications': Publications,
    'hero': Hero
  },
  data () {
    return {
      page: {
        title: '',
        content: '',
        featured_image: []
      },
      slug: 'publications'
    }
  },
  methods: {
    getPage () {
      butter.page.retrieve('primary_page', this.slug)
        .then((res) => {
          this.page = res.data.data.fields
        })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getPage()
    })
  }
}
</script>
