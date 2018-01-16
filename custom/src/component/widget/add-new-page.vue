<template>
    <!--Div for Add New Page -->
    <div v-if="showWidgetPanel === 'add-new-page'" class="add_new_page_div">
        <div class="section_header_div bg-light lter b-b">
            <div class="header_title_text">
                <span class="m-l" >Select Page to add</span>
            </div>
        </div>
        <!--/ Section header div-->

        <div class="section_scrolling_div">

            <div class="new_page_main_div">

                <div class="new_page_section">
                    <div class="new_page_div">
                        <div class="new_page_text_div">
                            <span class="m-l-sm">New Page</span>
                        </div>
                        <div class="add_btn_div">
                            <span>Add</span>
                        </div>
                    </div>
                    <div class="new_page_div m-t-sm">
                        <div class="new_page_text_div">
                            <span class="m-l-sm">Custom Menu Item</span>
                        </div>
                        <div class="add_btn_div">
                            <span>Add</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/ scrolling div-->
    </div>
    <!--/ Div for Add New Page-->
</template>

<script>
    export default{
        data(){
            return this.$store.state.data
        }
    }
</script>

<style>

</style>