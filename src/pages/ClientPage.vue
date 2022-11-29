<template>
    <q-page padding>
      <h3>Liste des clients</h3>

      <!-- List of clients -->
      <!-- TODO Si liste vide affiche un message à la place de la liste -->
      <q-list
        class="rounded-borders"
        bordered
        separator
      >
        <!-- Client -->
        <ClientComponent v-for="client in clientList" :key="client.id" :client="client"/>
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
    // Load clients from API
    this.AC_GetClientApi()
  }
}
</script>

<style scoped>

</style>
