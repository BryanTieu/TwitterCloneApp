<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black ">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <!-- Qwitter Title on top header -->
        <q-toolbar-title class="text-weight-bold"> 
          <span class="gt-sm">{{$route.name}}</span> 
          <q-icon
              class="absolute-center q-pa-md lt-md"
              name="fa-solid fa-dove"
              size="xl"
              color="primary"
            />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Left Drawer Start -->
    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      :width="283"
      side="left"
      bordered
    >
      <q-icon
        class="q-pa-md"
        name="fa-solid fa-dove"
        size="xl"
        color="primary"
      />

      <q-list>
        <!-- Home Page Layout -->
        <q-item to="/" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="home" size="md" />
          </q-item-section>

          <!-- Home Text on the left bar -->
          <q-item-section class="text-h6 text-weight-bold">
            Home
          </q-item-section>
        </q-item>

        <!-- About Page Layout -->
        <q-item to="/about" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="help" size="md" />
          </q-item-section>

          <!-- About Text on the left bar -->
          <q-item-section class="text-h6 text-weight-bold">
            About
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Right side drawer -->
    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- Search Bar -->
      <q-input
        placeholder="Search Qwitter"
        outlined
        rounded
        class="q-ma-md"
        dense
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <!-- List of News -->
      <q-list separator padding>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold"
              >Something Amazing Happened!</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold"
              >Something Amazing Happened!</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold"
              >Something Amazing Happened!</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>

<!-- style for the bird at the top for mobile devices
     the bird is off in space when using this style. -->
<style lang="sass">
  .header-icon
    position: absolute
    bottom: 0
    left: 50%
    transform: translateX(-50%)
</style>