<template>
    <div class="container">

        <!--button to go back to the top of the page if there are more than 15 articles-->
             <div v-if="numberItems >= numberBeforeDisplay">
                  <div class="block_ancre_bottom text-right">
                        <a href="#title_block" class="ancre_bottom">
                            <font-awesome-icon :icon="['far', 'arrow-alt-circle-up']" class="fa-2x" />
                        </a>
                   </div>
             </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'AncreBottomHomepage',
        computed: {
            ...mapState(['numberItems'])
        },
        data () {
            return {
                numberBeforeDisplay: 15
            }
        }
    }
</script>