<script lang="ts">
	export let data;
	console.log(data);
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="container flex flex-col pt-10 space-y-10 items-center">
	<div>
		<h1>{data.meta.title}</h1>
		<p>Published at {data.meta.date}</p>
	</div>

	<div class="space-x-4">
		{#each data.meta.categories as category}
<span class="border rounded-xl py-2 px-4 bg-{['primary', 'secondary', 'tertiary', 'success'][Math.floor(Math.random() * 4)]}-500">&num;{category}</span>
		{/each}
	</div>

	<div class="text-lg border">
		<svelte:component this={data.content} />
	</div>
</article>
