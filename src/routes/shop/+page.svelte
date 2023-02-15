<script>
    export let data;
    const items = data.productShopItems;

</script>

{#each items as item}
    <a href="/shop/{item.id}">
        <h1>{item.title}</h1>
    </a>
        <h2>{item.description}</h2>
{/each}

