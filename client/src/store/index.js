import Vue from 'vue';
import Vuex from 'vuex';
import io from 'socket.io-client';

Vue.use(Vuex);

const serverUrl = 'http://localhost:3000';
const socket = io(serverUrl);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    game(context, payload) {
      socket.emit('change', payload);
    },
    listenBoard(context, cb) {
      socket.on('change', cb);
    },
    passName(context, dataName) {
      socket.emit('passName', dataName);
    },
    boardName(context, cb) {
      socket.on('passName', cb);
    },
  },
  modules: {
  },
});
