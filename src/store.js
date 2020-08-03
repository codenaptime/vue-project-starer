import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    foundPieces: [],
  },
  mutations: {
    addFoundPiece(state, piece) {
      const pieces = state.foundPieces.find(el => el === piece);
      if (!pieces) {
        state.foundPieces.push(piece);
      }
    },
  },
});

export default store;
