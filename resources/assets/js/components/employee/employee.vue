<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Employee Component</div>

                    <div class="panel-body">
                        <div>

                          <!-- Nav tabs -->
                          <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Add employee</a></li>
                            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Employee List</a></li>
                          </ul>

                          <!-- Tab panes -->
                          <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="home">
                                <add-employee></add-employee>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="profile">...</div>
                          </div>

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import addEmployeeComponent from './add_employee.vue'
    export default {
        mounted() {

        },
        components: {
            'add-employee': addEmployeeComponent
        }
    }
</script>
