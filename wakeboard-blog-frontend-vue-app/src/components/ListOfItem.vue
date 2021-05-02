<template>
        <div class="items row">
                <b-card-group deck class="col-lg-12 col-xs-12">
                    <div v-for="item in items" :key="item.id" class="col-lg-3">

                        <b-card  class="mb-4" :img-src="LinkPicture(item)" :img-alt="item.description" img-top>
                            <div class="col-xs-12 text-center">
                                <a class="title_item col-lg-6" href="#">
                                    {{ item.title }}
                                </a>
                                <div v-if="user.role_user === true">
                                    <a class="modify_item fa fa-pen-fancy"
                                       href="#">
                                    </a>
                                    <a class="delete_item fa fa-trash-alt"
                                       href="#">
                                    </a>
                                </div>
                            </div>
                        </b-card>

                    </div>
                </b-card-group>
        </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'ListOfItem',
        computed: {
            ...mapState(['items', 'user'])
        },
        methods: {
            LinkPicture(item) {
                if (item.name != null) {
                    return require('@/assets/imgPost/' + item.name + '.' + item.extension);
                }
                return require('@/assets/imgPost/picture_by_default.jpeg');
            },
        }
    }
</script>

<style lang="scss">

    .modify_item
    {
        color: white;
        padding: 5px;
        background-color: black;
        box-shadow: 0 1px 1px gray;
        border-radius: 5px;
    }

    .delete_item
    {
        color: white;
        padding: 5px;
        background-color: #B0413E;
        box-shadow: 0 1px 1px gray;
        border-radius: 5px;
    }

    .card-img-top
    {
        object-fit: cover;
        height: 150px;
    }

    @media all and (max-width: 540px)
    {
        .items
        {
            margin-right: 0;
            margin-left: 0;
        }

        .card-img-top
        {
            height: 100%;
        }
    }
</style>