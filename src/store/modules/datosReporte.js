import axios from 'axios';

const state ={
    filasReporte: []
};

const getters = {
    allFilas: (state)=>state.filasReporte, 
};

const actions = {
    async fetchFilas( { commit }, id) {
        const response = await axios.get(`http://localhost:8000/api/orden/item/${id}/`);

        commit('setFilas', response.data);
    },

};

const mutations = {
    setFilas: (state, filasReporte) => (state.filasReporte = filasReporte),
};

export default {
    state,
    getters,
    actions,
    mutations
};