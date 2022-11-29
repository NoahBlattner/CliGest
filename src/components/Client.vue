<template>
  <q-item clickable v-ripple>
    <!-- Picture of the client -->
    <q-item-section avatar>
      <q-avatar>
        <img :src="client.picture.large">
      </q-avatar>
    </q-item-section>

    <!-- Firstname, lastname and email of the client -->
    <q-item-section>
      <q-item-label lines="1">
        {{ client.name.first + ' ' + client.name.last }}
      </q-item-label>
      <q-item-label caption lines="2">
        {{ client.email }}
      </q-item-label>
    </q-item-section>

    <!-- Email icon -->
    <q-item-section side>
      <q-icon name="email" color="primary"/>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'ClientComponent',
  props: {
    client: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
