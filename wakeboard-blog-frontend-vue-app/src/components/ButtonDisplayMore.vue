<template>
    <div class="more_item">
        <div class="container">

            <!--button to display more articles via ajax-->
            <div v-if="numberItems >= numberArticleLoad ">
                <div class="block_btn_more text-center col-xs-12">
                    <button id="btn-more" class="btn btn-warning"><i class="fa fa-angle-down"></i>Afficher plus</button>
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