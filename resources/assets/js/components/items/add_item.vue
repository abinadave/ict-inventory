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
              <select class="form-control">
                  <option>Choose Ict Item</option>
                  <option v-for="ict in ict_item_names">
                      {{ ict.name }}
                  </option>
              </select>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>-</th>
                            <th>SPECIFICATION- {{ ict_specifications.length }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="">
                            <!-- <td>{{}}</td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$store.commit('FETCH_ICT_ITEMS');
            this.$store.commit('FETCH_DIVISIONS');
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
            }
        }
    }
</script>
