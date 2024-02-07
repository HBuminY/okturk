<script>
    import Navbtn from "./Navbtn.svelte";
</script>

<footer class="w-full h-full md:h-1/2 p-0 left-0 bottom-0 relative">
    <div class="h-full w-full top-0 left-0 flex flex-col md:flex-row p-4 justify-around bg-slate-500">

        <div class="h-[47%] md:h-full p-6 w-full md:w-[47%] bg-slate-700 rounded-md flex flex-col justify-start text-white">
            <div><p>
                webmen, İstanbul merkezli kurumsal web hizmetleri sunan bir tasarım merkezi ve ajanstır.
            </p></div>

            <div class="w-full">
                
                <ul class="w-full md:max-w-min text-center border-2 border-white rounded-md bg-slate-500">
                    <li><h1 class="underline">Menu</h1></li>
                    <Navbtn title={"Anasayfa"} page={"/"}/>
                    <Navbtn title={"Kurumsal"} page={"/kurumsal"}/>
                    <Navbtn title={"Hizmetler"} page={"/hizmetler"}/>
                    <Navbtn title={"İletişim"} page={"/iletisim"}/>
                </ul>
            </div>

            <div class="mt-auto">
                <p class="font-rb text-sm">
                    Bu Websitesi H. Bumin Y. Tarafından webmen Web Şirketi için tasarlanmış ve üretilmiştir.
                </p>
            </div>
        </div>

        <div class="h-[47%] md:h-full p-6 w-full  md:w-[47%] bg-slate-700 rounded-md flex flex-col justify-start">
            
        </div>

    </div>
</footer>