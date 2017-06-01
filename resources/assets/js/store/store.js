import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		divisions: []
	},
	mutations: {
		FETCH_DIVISIONS(state){
			let self = this;
			Vue.http.get('/division').then((resp) => {
				if (resp.status === 200) {
					let json = resp.body;
					for (var i = json.length - 1; i >= 0; i--) {
						state.divisions.unshift(json[i]);
					};
				}
			}, (resp) => {
				if (resp.status === 422) {
					let json = resp.body;
					console.log(json);
				}
			});
		},
		PUSH_DIVISION(state, payload){
			let self = this;
			state.divisions.unshift(payload.division);
		}
	},
	getters: {
		divisions(state){
			return state.divisions;
		}
	}
});