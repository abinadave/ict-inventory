<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Item names component Component</div>

                    <div class="panel-body">
                        <form @submit.prevent="submitForm">
                            <div class="form-group col-md-4">
                              <label class="control-label" for="inputError1">Item names</label>
                              <input type="text" class="form-control" v-model="ictItemName"><hr>
                              <label>Specification</label>
                              <input id="tags" v-model="tagsArray" type="tags">
                            </div>
                            <button class="btn btn-info">Save</button>
                        </form>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.');
            var tagsInput = require('tags-input');
            tagsInput(document.querySelector('input[type="tags"]'));
            $("#tags").submit(function(event) {
                /* Act on the event */
                console.log(1)
            });
        },
        data(){
            return {
                tagsArray: [],
                ictItemName: ''
            }
        },
        methods: {
            submitForm(){
                let self = this;
                console.log('ICT ITEM NAME: ' + self.ictItemName);
                self.tagsArray = [];
                $('.tag').each(function(index, el) {
                    self.tagsArray.push($(this).text());
                });
                console.log('ICT ITEM specifications: ' + self.tagsArray);
                self.$http.post('/ict_item', {
                    ict_item_name: self.ictItemName,
                    specifications: self.tagsArray
                }).then((resp) => {
                    console.info(resp);
                }, (resp) => {
                    console.info(resp);
                })
            }
        }
    }
</script>
