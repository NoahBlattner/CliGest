<template>
    <q-page padding>
      <h3>Liste des clients</h3>

      <!-- List of clients -->
      <q-list
        v-if="clientsLoaded"
        class="rounded-borders"
        bordered
        separator
      >
        <!-- Client -->
        <q-item v-if="clientListAZ.length === 0">No clients could be loaded. Please check your internet connection.</q-item>
        <ClientComponent v-else v-for="client in clientListAZ" :key="client.id" :client="client"/>
      </q-list>
      <q-skeleton v-else/>
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
    ...mapGetters('clients', ['clientListAZ', 'clientsLoaded'])
  },
  methods: {
    ...mapActions('clients', ['AC_GetClientApi'])
  },
  mounted () {
    // Load clients from API
    this.AC_GetClientApi()
  }
}
</script>

<style scoped>

</style>
