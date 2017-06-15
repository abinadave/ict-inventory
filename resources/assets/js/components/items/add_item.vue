<template>
    <div>
        <form class="col-md-10">
            <div class="form-group col-md-4">
              <label class="control-label">Name of User</label>
              <input type="text" class="form-control">
            </div>
            <div class="form-group col-md-4">
              <label class="control-label">Division</label>
              <select class="form-control">
                  <option>Choose Division</option>
                  <option v-for="division in divisions">
                      {{ division.division_name.toUpperCase() }}
                  </option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label class="control-label">ICT ITEM (NAME)</label>
              <select v-model="ictItemName" class="form-control">
                  <option>Choose Ict Item</option>
                  <option :value="ict.id" v-for="ict in ict_item_names">
                      {{ ict.name }}
                  </option>
              </select>
            </div>
            <div>
                <table class="table table-hover table-condensed">
                    <thead>
                        <tr>
                            <th>-</th>
                            <th>SPECIFICATION [{{ current_specs.length }}]</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="specs in current_specs">
                            <td style="font-weight: bolder">{{ specs.specification }}</td>
                            <td><input type="" class="input-sm form-control"></td>
                        </tr>
                    </tbody>

                </table>
                <label>
                    Serviceable
                    <select class="form-control">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label>
                    Inventory Date
                    <input type="date" class="form-control">
                </label>
                <hr>
                <button @click="addIctITem" type="button" class="btn btn-primary btn-sm">ADD ICT ITEM</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        mounted() {
            
        },
        data(){
            return {
                ictItemName: ''
            }
        },
        methods: {
            addIctITem(){
                let self = this;
                alert(1)
            }
        },
        computed: {
            ict_item_names(){
                return this.$store.getters.ictItemNames;
            },
            divisions(){
                return this.$store.getters.divisions;
            },
            ict_specifications(){
                return this.$store.getters.ictSpecs;
            },
            current_specs(){
                return this.$store.getters.currentSpecs;
            }
        },
        watch: {
            'ictItemName': function(newVal){
                let self = this;
                self.$store.commit({
                    type: 'GET_SPECIFICATIONS',
                    ict_item_id: newVal
                });
            }
        }
    }
</script>
