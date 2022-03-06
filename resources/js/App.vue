<template>
    <body class="flex flex-col h-screen">
        <header>
            <Navbar/>
        </header>
        <main class="flex-grow">
            <router-view></router-view>
        </main>
        <footer>
            <Footer/>
        </footer>
    </body>

</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/FooterSection";
export default {
    name: "App",
    components: {Footer, Navbar}
}
</script>
