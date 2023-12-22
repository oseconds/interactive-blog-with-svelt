<script lang="ts">
	import type { Category } from '../../lib/categoryColors';
	import { categoryColors } from '../../lib/categoryColors';
	export let data;
	console.log(data);

	function getCategoryColor(category: string): string {
		return categoryColors[category as Category] || 'bg-primary';
	}

	console.log(getCategoryColor('svelte'));
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article
	class="w-full md:w-3/4 space-y-8 prose prose-sm sm:prose lg:prose-lg xl:prose-xl 2xl:prose-2xl mx-auto dark:prose-dark"
>
	<div>
		<h1 id="title" class="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
			{data.meta.title}
		</h1>
		<p class="text-gray-500 dark:text-gray-400">Posted on {data.meta.date}</p>

	</div>

	<div class="space-x-4">
		{#each data.meta.categories as category (category)}
			<span class={`border rounded-xl py-2 px-4 ${getCategoryColor(category)}-500`}
				>&num;{category}</span
			>
		{/each}
	</div>

	<div class="text-lg border">
		<svelte:component this={data.content} />
	</div>

</article>
