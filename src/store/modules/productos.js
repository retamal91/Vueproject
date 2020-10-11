import axios from 'axios';

const state ={
    productos: []
};

const getters = {
    allProductos: (state)=>state.productos 
};

const actions = {
    async fetchProductos( { commit }) {
        const response = await axios.get('http://localhost:8000/api/orden/orden/product/all/');

        commit('setProductos', response.data);
    }
};

const mutations = {
    setProductos: (state, productos) => (state.productos = productos)
};

export default {
    state,
    getters,
    actions,
    mutations
};