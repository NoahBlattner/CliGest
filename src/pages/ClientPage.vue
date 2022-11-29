<template>
  <template>
    <q-page padding>
      <h3>Liste des clients</h3>
      <q-list
        class="rounded-borders"
        bordered
        separator
      >
        <ClientComponent v-for="client in clientsList" :key="client.id" :client="client"/>
      </q-list>
    </q-page>
  </template>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ClientComponent from 'components/Client'

export default {
  name: 'ClientPage',
  components: {
    ClientComponent
  },
  computed: {
    ...mapGetters('clients', ['clientList'])
  },
  methods: {
    ...mapActions('clients', ['AC_GetClientApi'])
  },
  mounted () {
    this.AC_GetClientApi()
  }
}
</script>

<style scoped>

</style>
