<script>
    export let extraClass = "";
</script>

<div class="flex flex-col md:flex-row relative bg-slate-100 p-10 my-24 border-y-4 rounded-xl border-orange-800 border-opacity-20 shadow-2xl {extraClass}">
    <slot/>
</div>