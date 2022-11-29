<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list dark>
        <q-item-label
          header
          class="text-black"
        >
          Menu de navigation
        </q-item-label>
        <q-item v-for="link in linksList" clickable :key="link.id" :to="link.path" exact class="text-grey-14">
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ link.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-tabs>
        <q-route-tab v-for="link in linksList" :key="link.id"
                     :to="link.path"
                     :icon="link.icon"
                     :label="link.text"
                     exact
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
export default ({
  name: 'MainLayout',

  data () {
    return {
      linksList: [
        {
          title: 'Home',
          caption: 'Home',
          icon: 'school',
          path: '/'
        },
        {
          title: 'Clients',
          caption: 'Clients',
          icon: 'people',
          path: '/clients'
        }
      ],
      leftDrawerOpen: true
    }
  },
  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
})
</script>
