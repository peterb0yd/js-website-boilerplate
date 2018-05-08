
new Vue({
  el: "#contact",
  data: {
    name: '',
    email: '',
    message: '',
    submitted: false,
    nameError: false,
    emailError: false,
    messageError: false,
    serverError: false,
    isLoading: false,
    scanning: false
  },
  methods: {
    submit() {
      if (this.formHasErrors || this.isLoading) return;
      let body = {
        contact: {
          name: this.name,
          email: this.email,
          message: this.message
        }
      };
      this.serverError = false;
      this.isLoading = true;
      axios.post('/contact', body).then(res => {
        this.submitted = true;
      }, (err) => {
        console.log(err);
        this.serverError = true;
        this.isLoading = false;
      })
    },
    entered() {
      this.scanning = true;
    },
    exited() {
      this.scanning = false;
    }
  },
  computed: {
    formHasErrors() {
      return (this.nameError || this.emailError || this.messageError);
    },
    nameErrored() {
      this.nameError = !this.name;
      return (this.scanning && this.nameError);
    },
    emailErrored() {
      this.emailError = !this.email;
      return ((this.scanning && this.emailError) || this.serverError);
    },
    messageErrored() {
      this.messageError = !this.message;
      return (this.scanning && this.messageError);
    }
  }
})
