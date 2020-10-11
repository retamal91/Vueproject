import axios from 'axios';

const state ={
    ordenes: [],
    items: ['1']
};

const getters = {
    allOrdenes: (state)=>state.ordenes, 
    allItems: (state)=>state.items 
};

const actions = {
    async fetchOrdenes( { commit }) {
        const response = await axios.get('http://localhost:8000/api/orden/orden/all/');

        commit('setOrdenes', response.data);
    },
    async fetchItems( { commit }) {
        const response = await axios.get('http://localhost:8000/api/orden/orden/item/all/');

        commit('setItems', response.data);
    },    
};

const mutations = {
    setOrdenes: (state, ordenes) => (state.ordenes = ordenes),
    setItems: (state, items) => (state.items = items),
};

export default {
    state,
    getters,
    actions,
    mutations
};