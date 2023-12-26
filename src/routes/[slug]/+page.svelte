<script lang="ts">
	import type { Category } from '../../lib/categoryColors';
	import { categoryColors } from '../../lib/categoryColors';
	export let data;
	//console.log(data);

	function getCategoryColor(category: string): string {
		return categoryColors[category as Category] || 'bg-primary';
	}

</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article
	class="w-full md:w-3/4 space-y-8 prose prose-sm sm:prose lg:prose-lg xl:prose-xl 2xl:prose-2xl mx-auto dark:prose-dark mt-10"
>
	<hgroup>
		<h1 id="title" class="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[4.5rem]">
			{data.meta.title}
		</h1>
		<p class="text-gray-500 dark:text-gray-400">Posted on {data.meta.date}</p>

	</hgroup>

	
	<div class="prose">
		<svelte:component this={data.content} />
	</div>

	<div class="tags">
		{#each data.meta.categories as category (category)}
			<a href={`/category/${category}`} class={`border rounded-xl py-2 px-4 mr-2 ${getCategoryColor(category)}-500`}>
				&num;{category}
			</a>
		{/each}
	</div>
</article>


