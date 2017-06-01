<template>
    <div>
        <form @submit.prevent="submitForm" class="col-md-10">
            <div class="form-group col-md-4">
              <label class="control-label">Division name</label>
              <input v-model="form.division_name" type="text" class="form-control">
            </div>
            <button class="btn btn-primary" style="margin-top: 26px">SUBMIT</button>
        </form>
    </div>
</template>

<script>
    import alertify from 'alertify.js'
    export default {
        mounted() {

        },
        data(){
            return {
                form: {
                    division_name: ''
                }
            }
        },
        methods: {
            submitForm(){
                let self = this;
                
                self.$http.post('/division', {
                    division_name: self.form.division_name
                  }).then((resp) => {
                    if (resp.status === 200) {
                      let json = resp.body;
                      if (json.id > 0) {
                          console.log(json);
                          self.form.division_name = '';
                          alertify.success(json.division_name + ' Division Created!');
                          self.$store.commit({
                              type: 'PUSH_DIVISION',
                              division: json
                          });
                      }
                    }
                  }, (resp) => {
                    console.log(resp);
                  });
            }
        }
    }
</script>
