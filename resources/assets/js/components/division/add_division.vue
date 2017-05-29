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
                self.$store.commit({
                    type: 'CREATE_DIVISION',
                    form: self.form
                });
            }
        }
    }
</script>
