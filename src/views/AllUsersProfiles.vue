<template>
  <div>
    <v-list v-for="(userData, i) in users" :key="i">
      <v-list-item link :to="`/user/${userData.id-1}`">
        <v-row class="text-left">
          <v-col cols="2">
            <img
              :src="`https://randomuser.me/api/portraits/men/${userData.id}.jpg`"
              style="max-width: 100%"
            />
          </v-col>
          <v-col cols="10" class="text-left">
            <h3>
              {{ userData.name }}
            </h3>
            <p>
              Веб-сайт:
              <a :href="'http://' + userData.website" target="_blank">{{
                userData.website
              }}</a>
            </p>
            <p>
              E-mail:
              <a :href="'mailto:' + userData.email">{{ userData.email }}</a>
            </p>
            <p>Город: {{ userData.address.city }}</p>
            <p>Место работы: {{ userData.company.name }}</p>
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getUsers() {
      this.axios
        .get('https://api.jsonbin.io/b/602e44eb4177c81b39c7e0f7/3')
        .then((response) => {
          this.users = response.data;
        });
    },
  },
  mounted() {
    this.getUsers();
    this.$store.commit('navbarShow');
  },
  watch: {
    $route() {
      this.getUsers();
      this.$store.commit('navbarShow');
    },
  },
};
</script>