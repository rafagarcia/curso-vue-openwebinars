<template lang='pug'>
  .codit
    .container
      nav.menu
        co-search(
          v-on:search='onSearch'
        )
        co-bookmarks
      main.content
        header.content__header
          co-logo
        router-view
      footer
</template>

<script>
  import { mapActions } from 'vuex'

  import CoLogo from '@/components/CoLogo/CoLogo'
  import CoSearch from '@/components/CoSearch'
  import CoBookmarks from '@/components/CoBookmarks'

  export default {
    name: 'app',
    components: {
      CoLogo,
      CoSearch,
      CoBookmarks
    },
    created () {
      this.bookmarks()
    },
    methods: {
      onSearch (criteria) {
        this.$router.push({ name: 'profile', params: { userId: criteria } })
      },
      ...mapActions([
        'bookmarks'
      ])
    }
  }
</script>

<style lang='css'>
  @import 'assets/css/reset';
  @import 'assets/css/global';
</style>

<style lang='css' scoped>
  @import './assets/css/colors.css';
  @import './assets/css/mixins.css';

  .codit {
    @apply --flex-col;

    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    padding: 1px;

    word-break: break-word;

    & .container {
      @apply --flex-row;

      background-color: var(--color-lighter-grey);

      width: 100%;
      height: 100%;

      max-width: 80vh;
      min-width: 400px;
      max-height: 90vh;
      min-height: 300px;
    }

    & .menu {
      @apply --flex-col;

      max-width: 15rem;

      background-color: var(--color-blue);
    }

    & .content {
      @apply --flex-col;

      flex: 1;
    }

    & .content__header {
      padding: 1rem;

      text-align: center;
      background-color: var(--color-blue);
    }

  }
</style>
