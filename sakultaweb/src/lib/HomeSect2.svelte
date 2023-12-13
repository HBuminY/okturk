<script>
    import Section from "./Section.svelte";
    import smilingMan from "../assets/smilingMan.webp"
    import PriceTable from "./PriceTable.svelte";
</script>



<Section extraClass="h-full px-0">
    <div class="flex flex-col w-3/4 z-10 justify-start font-rb h-full">

        <div class="flex flex-row justify-center w-full z-10">

            <div class=" w-1/2"><p class="text-xl text-opacity-90 text-center">
                <b>İşletmenizin bütün ihtiyaçlarını karşılayacak ve sektörünüze uygun</b>
                web çözümlerimiz ile işinizi bir adım daha öteye taşımak için <b class="text-2xl opacity-100">beklemeyin!</b>
            </p></div>
        </div>

        <div class="mx-auto -translate-x-10">
            <PriceTable/>
        </div>
    </div>

    <div class="h-full w-1/4 z-10">

    </div>

    <div class="h-full w-full absolute left-0 top-0">
        <img class="h-full ml-auto opacity-90"
        src="{smilingMan}" alt="a smiling Man">
    </div>
</Section>