const app = Vue.createApp({
  data() {
    return {
      quote: "I am Batman",
      author: "Bruce Wayne",
    };
  },
  methods: {
    changeQuote() {
      this.author = "Tony Stark";
      this.capitalize();
    },
    capitalize() {
      this.quote = this.quote.toUpperCase();
    },
  },
});

app.mount("#app");
