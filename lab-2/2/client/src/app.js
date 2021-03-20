function run() {
  new Vue({
    el: '#app',
    data: {
      users: [],
      showNewUser: false,
      currentUserIndex: null,
      newUser: {},
      usersService: null
    },
    created: function () {
      this.usersService = users();
      this.usersService.get().then(response => (this.users = response.data));
    },
    methods: {
        deleteUser: function(index) {
            this.usersService.deleteUser(index).then(response => (
                this.users = response.data
            ));
        },
        addUser: function() {
            this.usersService.addUser(this.newUser).then(response => (
                 this.users = response.data
            ));
        },
        changeUser: function(index) {
            this.usersService.changeUser(index, this.users[index]).then(response => (
                 this.users = response.data
            ));
        }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
