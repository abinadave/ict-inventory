<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">ICT Item names</div>
                    <div class="panel-body">
                        <form @submit.prevent="submitForm">
                            <div class="form-group col-md-4">
                              <label class="control-label" for="inputError1">Item names</label>
                              <input type="text" class="form-control ict-name" v-model="ictItemName"><hr>
                              <label>Specification</label>
                              <input id="tags" v-model="tagsArray" type="tags">
                            </div>
                            <div class="form-group col-md-8">
                                <button class="btn btn-info">Save</button>
                            </div>
                        </form>
                        <br>
                        <!-- ict_item_names: {{ ict_item_names.length }} -->
                        <!-- ict_specifications: {{ ict_specifications.length }} -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import alertify from 'alertify.js'
    export default {
        mounted() {
            this.$store.commit('FETCH_ICT_ITEMS');
            var tagsInput = require('tags-input');
            tagsInput(document.querySelector('input[type="tags"]'));
        },
        data(){
            return {
                tagsArray: [],
                ictItemName: ''
            }
        },
        computed: {
            ict_item_names(){
                return this.$store.getters.ictItemNames;
            },
            ict_specifications(){
                return this.$store.getters.ictSpecs;
            }
        },
        methods: {
            submitForm(){
                let self = this;
                self.tagsArray = [];
                $('.tag').each(function(index, el) {
                    self.tagsArray.push($(this).text());
                });
                self.$http.post('/ict_item', {
                    ict_item_name: self.ictItemName,
                    specifications: self.tagsArray
                }).then((resp) => {
                    if (resp.status === 200) {
                        let json = resp.body;
                        self.$store.commit({
                            type: 'PUSH_ICT_ITEMS',
                            json: json
                        });
                        alertify.alert('ICT ITEM SPECIFICATIONS successfully created!');
                        self.ictItemName = '';
                        self.tagsArray = [];
                        $('.tag').remove();
                        $('input.ict-name').focus();
                    };
                }, (resp) => {
                    if (resp.status === 422) {
                        let json = resp.body;
                        $.each(json, function(index, val) {
                            alertify.log(val);
                        });
                    };
                });
            }
        }
    }
</script>
