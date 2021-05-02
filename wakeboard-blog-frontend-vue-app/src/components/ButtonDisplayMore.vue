<template>
    <div class="more_item">
        <div class="container">

        <!--button to display more articles via ajax-->
        <div v-if="numberItems >= numberArticleLoad ">
            <div class="block_btn_more text-center col-xs-12">
                <button id="btn-more" class="btn btn-warning"><i class="fa fa-angle-down"></i>Afficher plus</button>
            </div>
        </div>

        <!--button to go back to the top of the page if there are more than 15 articles-->
        <div v-if="numberItems >= 15">
            <div class="block_ancre_bottom text-right">
                <a href="#title_block" class="ancre_bottom far fa-arrow-alt-circle-up fa-2x"></a>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        name: 'ButtonDisplayMore',
        computed: {
            ...mapState(['numberItems'])
        },
        data() {
            return {
                numberArticleLoad: 10
            }
        },
    }
</script>

<style lang="scss">
    #btn-more
    {
        margin-bottom: 20px;
    }
</style>