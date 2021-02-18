<template>
  <div class="d-flex justify-center">
    <v-card width="600px" class="mt-12 pa-10">
      <v-card-title> Войдите в аккаунт </v-card-title>

      <v-text-field
        label="Введите логин"
        v-model="login"
        outlined
      ></v-text-field>

      <v-text-field
        label="Введите пароль"
        v-model="password"
        outlined
      ></v-text-field>

      <v-btn @click="authenticate"> Войти </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  data() {
    return {
      password: "",
      login: "",
    };
  },
  methods: {
    authenticate() {
      this.axios
        .get(`https://api.jsonbin.io/b/602e44eb4177c81b39c7e0f7/3`)
        .then((response) => {
          console.log(response.data);
          let users = response.data;
          let found = false;
          for (let i in users){
              if(this.login == users[i].login && this.password == users[i].password){
                  this.$router.push('/user/'+ users[i-1].id);
                  this.$store.commit('rememberId',users[i-1].id);
                  found = true;
                  break;
              }
          }
          if (!found){
              window.alert('Неверный логин или пароль!')
          }
        });
    }
  },
  mounted() {
    this.$store.commit('navbarHide');
    console.log(this.$store.navbarPos);
  },
  watch: {
    $route() {
      this.authenticate();
      this.$store.commit('navbarHide');
    },
  },
};
</script>