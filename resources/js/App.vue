<template>
    <body class="flex flex-col h-screen">
        <header>
            <Navbar/>
        </header>
        <main class="flex-grow mt-20 md:mt-24">
            <div class="max-w-6xl mx-auto p-4">
                <router-view></router-view>
            </div>
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
