<template>
  <v-app>
       <v-navigation-drawer
      app
      color="blue accent-1"
      dark
      expand-on-hover
      permanent
      right
      :class="`d-${this.$store.state.navbarPos}`"
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              size="100"
              :src="userData.photo"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link >
          <v-list-item-content>
            <v-list-item-title class="title"> {{userData.name}} </v-list-item-title>
            <v-list-item-subtitle>{{userData.email}}</v-list-item-subtitle>
          </v-list-item-content> 
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense shaped>
        <v-list-item link :to="`/user/${userData.id-1}`" exact>
          <v-list-item-icon>
            <v-icon>mdi-account-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Мой профиль</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/users">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple-plus-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Найти друзей</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="px-12 py-3" app>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    userData:"",
  }),
  components: {},
  methods: {
    getUserData() {
      this.axios
        .get(
          `https://api.jsonbin.io/b/602e44eb4177c81b39c7e0f7/3`
        )
        .then((response) => {
          this.userData = response.data[this.$store.state.id];
        });
    }
  },
  mounted() {
    this.getUserData();
  },
  watch: {
    $route() {
      this.getUserData();
    },
  }
};
</script>
