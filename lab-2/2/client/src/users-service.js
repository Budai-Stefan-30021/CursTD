function users() {
    get = function () {
        return axios.get('http://localhost:3000/users');
    };

    deleteUser = function (index) {
        return axios.delete('http://localhost:3000/users/' + index);
    };

    addUser = function (user) {
        return axios.put('http://localhost:3000/users/', user)
    }

    changeUser = function (index, user) {
        return axios.put('http://localhost:3000/users/' + index, user)
    }

    return {
        get: get,
        deleteUser: deleteUser,
        addUser: addUser,
        changeUser: changeUser
    };
}
