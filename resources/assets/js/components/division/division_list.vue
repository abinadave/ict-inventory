<template>
    <div class="">
        Regional Divisions {{ divisions.length }}
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Division Name</th>
                    <th>Items</th>
                    <th>Created by</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="division in divisions">
                    <td>{{ division.division_name.toUpperCase() }}</td>
                    <td>0</td>
                    <td>{{ division.created_by }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        mounted() {
            
        },
        computed: {
            divisions(){
                return this.$store.getters.divisions;
            }
        }
    }
</script>
