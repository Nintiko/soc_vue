<template>
  <div>
    <v-row class="text-left">
      <v-col cols="10">
        <h1 class="blue--text text--darken-2 accent-1">
          <v-icon large color="blue accent-1 darken-2">mdi-account-outline</v-icon>
          {{ userData.name }}
        </h1>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="2">
        <img
          v-bind:src="userData.photo"
          style="max-width: 100%"
        />
      </v-col>
      <v-col cols="10" class="text-left">
        <p>
          Веб-сайт:
          <a :href="'http://' + userData.website" target="_blank">{{
            userData.website
          }}</a>
        </p>
        <p>
          E-mail: <a :href="'mailto:' + userData.email">{{ userData.email }}</a>
        </p>
        <p>Город: {{ userData.address.city }}</p>
        <p>Место работы: {{ userData.company.name }}</p>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <h2 class="my-8">Публикации</h2>

    <v-row v-for="(post, i) in posts" :key="i">
      <v-col sm="8">
        <v-card>
          <v-card-title>
            <v-icon large left> mdi-format-quote-open </v-icon>
            <span class="title font-weight-bold headline">{{
              post.title
            }}</span>
          </v-card-title>

          <v-card-text> "{{ post.body }}" </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  :src="userData.photo"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ userData.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data() {
    return {
      userData: "",
      posts: [],
    };
  },
  methods: {
    getUserData() {
      this.axios
        .get(
          `https://api.jsonbin.io/b/602e44eb4177c81b39c7e0f7/3`
        )
        .then((response) => {
          console.log(response.data[this.$route.params.id].photo);
          this.userData = response.data[this.$route.params.id];
        });
    },
    getUserPosts() {
      this.axios
        .get(
          `http://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.id}`
        )
        .then((response) => {
          this.posts = response.data;
        });
    },
  },
  mounted() {
    this.getUserData();
    this.getUserPosts();
    this.$store.commit('navbarShow');
  },
  watch: {
    $route() {
      this.getUserData();
      this.getUserPosts();
      this.$store.commit('navbarShow');
    },
  },
};
</script>