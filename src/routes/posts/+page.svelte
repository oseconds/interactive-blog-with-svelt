<script lang="ts">
	export let data;
	console.log(data);
</script>

<section>
	<!-- <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card"> -->
	<!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 p-4"> -->
	<!-- <h1 class="text-2xl font-semibold capitalize">Post Lists</h1> -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 p-10">
		{#each data.posts as post}
			<div class="rounded-2xl border bg-background text-card-foreground shadow-xl">
				<div class="flex flex-col space-y-1.5 p-6">
					<a href={post.slug} class="text-xl font-semibold hover:underline py-0">
						{post.title}
					</a>
					<span class="text-sm text-gray-600">On: {post.date}</span>
					<div class="p-0">
						<p class="py-0">{post.description}</p>

					</div>
				</div>
			</div>
		{/each}
	</div>
	<!-- </div> -->
</section>
