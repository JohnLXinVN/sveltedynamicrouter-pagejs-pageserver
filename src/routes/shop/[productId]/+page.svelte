<script>
    export let data;
    const {product} = data;
</script>

<h1>{product.title}</h1>
<h2>{product.description}</h2>
<h3>{product.price.toFixed(2)}</h3>