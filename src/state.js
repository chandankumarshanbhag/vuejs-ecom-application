
import { createStore } from 'vuex';


export default createStore({
    state() {
        return {
            cartItems: []
        }
    },
    mutations: {
        addItems(state, product) {
            state.cartItems.push(product);
        }
    }
});