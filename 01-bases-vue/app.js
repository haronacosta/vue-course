const app = Vue.createApp({
  data() {
    return {
      quote: "I am Batman",
      author: "Bruce Wayne",
    };
  },
  methods: {
    changeQuote: () => {
      console.log(this);
    },
  },
});

app.mount("#app");
