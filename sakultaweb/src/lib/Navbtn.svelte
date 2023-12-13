<script>
    import {link} from 'svelte-spa-router'

    export let title = "button";
    export let page;
    export let onclick = ()=>{}; 
</script>

<li class="inline-block m-0 p-0">
    <a href="{page}"
        class="block text-center p-3 no-underline hover:shadow-2xl transition-shadow duration-300 font-roboto font-bold"
        on:click={onclick}
        use:link
    >
        {title}
    </a>
</li>