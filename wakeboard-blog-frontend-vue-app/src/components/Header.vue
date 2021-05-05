<template>
    <header class="masthead">
        <div class="container d-flex h-100 align-items-center">
            <div class="header_sentence mx-auto text-center">
                <h1 class="mx-auto my-0 text-uppercase">WakeTricks</h1>
                <h2 class="text-white-50 mx-auto mt-2 mb-5">Collaborative wake figure site</h2>
            </div>
        </div>
        <div class="container-fluid text-right">
            <div class="block_ancre">
                <a href="#title_block" class="ancre_header">
                    <font-awesome-icon :icon="['far', 'arrow-alt-circle-down']" class="fa-2x" />
                </a>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>