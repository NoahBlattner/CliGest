<template>
  <q-item v-ripple bordered>
    <q-item-section side>
      <q-img :src="client.img"/>
    </q-item-section>
    <q-item-section side>
      <div class="column">
        <q-item-label class="text-left" caption>{{ client.name }}</q-item-label>
        <q-item-label class="text-left" caption>{{ client.email }}</q-item-label>
      </div>
    </q-item-section>
    <q-item-section side>
      <q-icon icon="email"/>
    </q-item-section>
  </q-item>
  <q-separator/>
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
