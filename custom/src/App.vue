<template>
    <div id="app">
        <customMain @view_changed="change_view($event)"></customMain>
        <iframe src="http://localhost:8000/#/custom/theme" :class="[current_view+'-view']" frameborder="0"></iframe>
    </div>
</template>

<script>
    import Main from './component/main.vue'

    export default{
        data(){
            return{
                current_view: 'desktop'
            }
        },
        components:{
            'customMain':Main
        },
        methods:{
            change_view:function(val){
                this.current_view = val;
            }
        }
    }
</script>

<style>
    .desktop-view{
        width:78%;
        float:right;
        height:100vh;
        border: 0px
    }
    .tablet-view{
        width:768px;
        height:1024px;
        float:right;
        border: 10px grey;
    }
    .mobile-view{
        width:375px;
        height:667px;
        float:right;
        border: 0px;
    }

</style>
