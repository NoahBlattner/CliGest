<template>
  <q-page padding>
    <h2>Clients</h2>
    <q-list>
      <ClientComponent bordered v-for="client in clients" :key="client.id" :client="client"/>
    </q-list>
  </q-page>
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
