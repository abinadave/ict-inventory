import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		divisions: [],
		ict_item_names: [],
		ict_specifications: []
	},
	mutations: {
		FETCH_ICT_ITEMS(state){
			let self = this;
			Vue.http.get('/ict_items').then((resp) => {
				if (resp.status === 200) {
					let json = resp.body;
					for (var i = json.ict_specifications.length - 1; i >= 0; i--) {
						state.ict_specifications.push(json.ict_specifications[i]);
					};
					for (var i = json.ict_item_names.length - 1; i >= 0; i--) {
						state.ict_item_names.push(json.ict_item_names[i]);
					};
				};
			}, (resp) => {
				if (resp.status === 422) {
					let json = resp.body;
					console.log(json);
				};
			});
		},
		PUSH_ICT_ITEMS(state, payload){
			let specs = payload.specs;
			state.ict_item_names.push(payload.json.ict_item_name);
			for (var i = payload.json.specs.length - 1; i >= 0; i--) {
				state.ict_specifications.push(payload.json.specs[i]);
			};
		},
		FETCH_DIVISIONS(state){
			let self = this;
			state.divisions = [];
			Vue.http.get('/division').then((resp) => {
				if (resp.status === 200) {
					let json = resp.body;
					for (var i = json.length - 1; i >= 0; i--) {
						state.divisions.unshift(json[i]);
					};
				};
			}, (resp) => {
				if (resp.status === 422) {
					let json = resp.body;
					console.log(json);
				};
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
		},
		ictItemNames(state){
			return state.ict_item_names;
		},
		ictSpecs(state){
			return state.ict_specifications;
		}
	}
});