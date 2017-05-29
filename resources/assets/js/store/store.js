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
		CREATE_DIVISION(state, payload){
			let self = this;
			Vue.http.post('/division', {
				division_name: payload.form.division_name
			}).then((resp) => {
				if (resp.status === 200) {
					let json = resp.body;
					if (json.id > 0) {
						state.divisions.unshift(json);
					}
				}
			}, (resp) => {
				console.log(resp);
			})
		}
	}
});