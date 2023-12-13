<script>
    import ibokebap from "../assets/ibokebap.webp";
    import menu1 from "../assets/menu1.webp"
    import Section from "./Section.svelte";

    const imagesize = "h-4/5"
</script>

<Section extraClass={"h-96"}>
    
    <div class="flex flex-col w-2/5 justify-center font-rb h-full text-center">
        <div><p class="text-xl font-bold text-opacity-90">
            İşletmeniz için en iyi
        </p></div>

        <div><h1 class="text-7xl my-3">
            Web Çözümleri
        </h1></div>

        <div><p class="text-xl text-opacity-90 text-end">
            İşletmenizin ihtiyaçlarına göre özelleştirilmiş profesyonel web çözümlerini <b>2.500₺'den başlayan fiyatlarla</b> edinin!
        </p></div>

        <div class="w-fit px-8 py-1 my-4 ml-7 rounded-3xl border-4 border-black hover:bg-white transition-colors duration-150">
            <a class="no-underline h-full w-full align-middle font-rb font-bold text-lg"
                href="#" 
            >
                Fiyatlar
            </a>
        </div>
    </div>


    <div id="thediv" class="w-3/5 flex flex-row justify-center align-middle items-center h-full">

        <div class="{imagesize} z-10 shadow-2xl waveAnim">

            <img class="h-full border-y-4 border-slate-400 rounded-lg"
            src="{ibokebap}" alt="ibokebap">
        </div>

        <div class="{imagesize} waveAnim " style="animation-delay: 1s;">

            <img class="h-full border-y-4 border-slate-400 rounded-lg -translate-x-6 translate-y-6"
             src="{menu1}" alt="menu1">
        </div>
    </div>

</Section>