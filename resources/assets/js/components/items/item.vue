<template>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">ICT ITEM Component</div>

                    <div class="panel-body">
                        <div>

                          <!-- Nav tabs -->
                          <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">List of Items</a></li>
                            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Add Item</a></li>
                          </ul>

                          <!-- Tab panes -->
                          <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="home">...</div>
                            <div role="tabpanel" class="tab-pane" id="profile">
                                <div style="padding: 20px">
                                    <add-item></add-item>
                                </div>
                            </div>
                          </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import addItemComponent from './add_item.vue'
    export default {
        mounted() {
            this.$store.commit('FETCH_DIVISIONS');
        },
        components: {
            'add-item': addItemComponent
        }
    }
</script>
