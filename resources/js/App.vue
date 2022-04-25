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
    components: {Footer, Navbar},
    data: () => ({
        is_visible: true
    })
}
</script>
<style>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>
