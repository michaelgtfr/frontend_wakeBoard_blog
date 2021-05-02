<template>
    <section class="item">
        <b-container>
            <div class="row">
                <div id="title_block" class="title_block col-lg-12">
                    <h3 class="title_page">Les articles du sites:</h3>
                </div>
            </div>
            <ListOfItem></ListOfItem>
            <ButtonDisplayMore></ButtonDisplayMore>
            <AncreBottomHomepage></AncreBottomHomepage>
        </b-container>
    </section>
</template>

<script>
    import ListOfItem from '@/components/ListOfItem.vue'
    import ButtonDisplayMore from '@/components/ButtonDisplayMore.vue'
    import AncreBottomHomepage from '@/components/AncreBottom.vue'

    export default {
        name: 'Homepage',
        components: {
            ListOfItem,
            ButtonDisplayMore,
            AncreBottomHomepage
        },
    }
</script>

<style lang="scss">
    .item
    {
        margin-bottom: 20px;
    }

    .title_page
    {
        text-align: center;
        text-decoration: underline;
        margin: 20px;
    }
</style>