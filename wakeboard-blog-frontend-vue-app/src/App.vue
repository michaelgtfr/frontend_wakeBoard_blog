<template>
    <div id="app">
        <b-navbar  type="light" toggleable="lg" id="mainNav" class="fixed-top" >
            <b-container>
                <router-link class="navbar-brand js-scroll-trigger" to="#page-top">WakeTricks</router-link>
                <b-navbar-toggle target="navbar-toggle-collapse">
                    <template>
                        Menu
                        <i class="fas fa-bars"></i>
                    </template>
                </b-navbar-toggle>
                <b-collapse id="navbar-toggle-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <router-link class="nav-link js-scroll-trigger" to="/">Accueil/Tricks</router-link>
                        <div v-if="rolesUser === true">
                            <router-link class="nav-link js-scroll-trigger text-warning" to="#">Créer un article</router-link>
                            <router-link class="nav-link js-scroll-trigger text-warning" to="#">Déconnexion</router-link>
                        </div>
                            <router-link class="nav-link js-scroll-trigger" to="#">Connexion</router-link>
                            <router-link class="nav-link js-scroll-trigger" to="#">Inscription</router-link>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
        <header class="masthead">
            <div class="container d-flex h-100 align-items-center">
                <div class="header_sentence mx-auto text-center">
                    <h1 class="mx-auto my-0 text-uppercase">WakeTricks</h1>
                    <h2 class="text-white-50 mx-auto mt-2 mb-5">Collaborative wake figure site</h2>
                </div>
            </div>
            <div v-if="items !==[]">
                <div class="container-fluid text-right">
                    <div class="block_ancre">
                        <a href="#title_block" class="ancre_header far fa-arrow-alt-circle-down fa-2x"></a>
                    </div>
                </div>
            </div>
        </header>

        <router-view/>

        <footer class="bg-black small text-center text-white-50">
            <div class="container">
                <p class="text-right"><span>Contact:</span> michael.garret.france@gmail.com</p>
                <p>Copyright &copy; Your Website 2019</p>
            </div>
        </footer>
    </div>
</template>

<style lang="scss">
    @import url("https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i");
    @import url("https://fonts.googleapis.com/css?family=Varela+Round");

    #mainNav {
        min-height: 56px;
        background-color: #fff;
    }

    #mainNav .navbar-toggler {
        font-size: 80%;
        padding: 0.75rem;
        color: #64a19d;
        border: 1px solid #64a19d;
    }

    #mainNav .navbar-toggler:focus {
        outline: none;
    }

    #mainNav .navbar-brand {
        color: #161616;
        font-weight: 700;
        padding: .9rem 0;
    }

    #mainNav .navbar-nav .nav-item:hover {
        color: fade(white, 80%);
        outline: none;
        background-color: transparent;
    }

    #mainNav .navbar-nav .nav-item:active, #mainNav .navbar-nav .nav-item:focus {
        outline: none;
        background-color: transparent;
    }

    @media (min-width: 992px) {
        #mainNav {
            padding-top: 0;
            padding-bottom: 0;
            border-bottom: none;
            background-color: transparent;
            transition: background-color 0.3s ease-in-out;
        }
        #mainNav .navbar-brand {
            padding: .5rem 0;
            color: rgba(255, 255, 255, 0.5);
        }
        #mainNav .nav-link {
            transition: none;
            padding: 2rem 1.5rem;
            color: rgba(255, 255, 255, 0.5);
        }
        #mainNav .nav-link:hover {
            color: rgba(255, 255, 255, 0.75);
        }
        #mainNav .nav-link:active {
            color: white;
        }
        #mainNav.navbar-shrink {
            background-color: #fff;
        }
        #mainNav.navbar-shrink .navbar-brand {
            color: #161616;
        }
        #mainNav.navbar-shrink .nav-link {
            color: #161616;
            padding: 1.5rem 1.5rem 1.25rem;
            border-bottom: 0.25rem solid transparent;
        }
        #mainNav.navbar-shrink .nav-link:hover {
            color: #64a19d;
        }
        #mainNav.navbar-shrink .nav-link:active {
            color: #467370;
        }
        #mainNav.navbar-shrink .nav-link.active {
            color: #64a19d;
            outline: none;
            border-bottom: 0.25rem solid #64a19d;
        }
    }

    .masthead {
        position: relative;
        width: 100%;
        height: auto;
        min-height: 35rem;
        padding: 15rem 0;
        background: linear-gradient(to bottom, rgba(22, 22, 22, 0.3) 0%, rgba(22, 22, 22, 0.7) 75%, #161616 100%), url("assets/wakeboard-cable-park.jpg");
        background-position: bottomwakeboard-cable-park;
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-size: cover;
    }

    .masthead h1 {
        font-size: 2.5rem;
        line-height: 2.5rem;
        letter-spacing: 0.8rem;
        background: -webkit-linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }

    .masthead h2 {
        max-width: 20rem;
        font-size: 1rem;
    }

    @media (min-width: 768px) {
        .masthead h1 {
            font-size: 4rem;
            line-height: 4rem;
        }
    }

    @media (min-width: 992px) {
        .masthead {
            height: 100vh;
            padding: 0;
        }
        .masthead h1 {
            font-size: 6.5rem;
            line-height: 6.5rem;
            letter-spacing: 0.8rem;
        }
        .masthead h2 {
            max-width: 30rem;
            font-size: 1.25rem;
        }
    }

    .btn {
        box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1) !important;
        padding: 1.25rem 2rem;
        font-family: 'Varela Round', sans-serif;
        font-size: 80%;
        text-transform: uppercase;
        letter-spacing: .15rem;
        border: 0;
    }

    .btn-primary {
        background-color: #64a19d;
    }

    .btn-primary:hover {
        background-color: #4f837f;
    }

    .btn-primary:focus {
        background-color: #4f837f;
        color: white;
    }

    .btn-primary:active {
        background-color: #467370 !important;
    }

    .block_ancre
    {
        margin-top: -5%;
    }

    body
    {
        font-family: 'Nunito', sans-serif;
        letter-spacing: 0.0625em;
    }

    a
    {
        color: #64a19d;
    }

    a:focus, a:hover
    {
        text-decoration: none;
        color: #3c6360;
    }

    .bg-primary {
        background-color: #64a19d !important;
    }

    .bg-black {
        background-color: #161616 !important;
    }

    footer {
        padding: 5rem 0;
    }

    footer span
    {
        text-decoration: underline;
    }

    @media all and (max-width: 540px)
    {
        .header_sentence h1
        {
            font-size: 1.2em;
        }
    }
</style>
