<script>
    import menuicon from '../assets/menu.svg'
    import Navbtn from './Navbtn.svelte';
    import { slide } from 'svelte/transition';

    const windowWidth = window.innerWidth;
    const isMobile = (windowWidth<768);
    let mobilemenu = false; //false:closed
    
    function menubtn(){
        mobilemenu=!mobilemenu;
    }
</script>

{#if !isMobile}
<div class="m-0 p-0 sticky transition top-0 z-50 flex flex-row shadow-xl bg-slate-50 border-b-4 border-orange-600">
    <div class="flex flex-col basis-1/4 justify-center px-4">
        <h1 class="text-xl text-center font-bold">Sakulta</h1>
    </div>

    <ul
        class="list-none m-0 p-0 py-1 overflow-hidden w-full flex flex-row basis-3/4 justify-center space-x-5 max-h-min relative"
    >
        <slot/>
    </ul>
</div>
{:else}
<div class="m-0 p-0 fixed top-0 right-0 z-50 w-1/6 rounded-l-lg aspect-square bg-orange-600" on:click={menubtn}>
    <img src="{menuicon}" alt="menu icon">
</div>
{/if}

{#if mobilemenu}
    <div 
    class="fixed top-0 right-0 h-screen w-[75vw] bg-orange-300 z-20"
    transition:slide={{axis:'x'}}
    >
        <div>
            <ul class="max-w-min text-center m-auto">
                <li><h1 class="underline">Menu</h1></li>
                <Navbtn title={"Anasayfa"} page={"/"}/>
                <Navbtn title={"Kurumsal"} page={"/kurumsal"}/>
                <Navbtn title={"Hizmetler"} page={"/hizmetler"}/>
                <Navbtn title={"İletişim"} page={"/iletisim"}/>
            </ul>
        </div>
    </div>
{/if}