function run() {
    var socket;
    new Vue({
        el: '#app',
        data: {
            clientId: null,
            entries: [],
            message: ""
        },
        created() {
            try {
                socket = io.connect('localhost:8000');
                socket.on('connect', () => {
                    this.clientId = socket.id;
                });
                socket.on('message-from-server', (entry) => {
                    this.entries.push(entry);
                });
            } catch (err) {
                alert('ERROR: socket.io encountered a problem:\n\n' + err);
            }
        },
        methods: {
            sendMessage: function() {
                socket.emit('chat', this.message);
                this.message = ""
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    run();
});
