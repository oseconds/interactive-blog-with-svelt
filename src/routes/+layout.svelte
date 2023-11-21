<!--
This file defines the layout of the application using the Skeleton UI library. It imports the app.postcss file and the necessary components from the Skeleton UI library. It also imports the floating UI for popups and sets the storePopup object with the necessary properties. The layout includes an app shell with a sidebar on the left and a header with a title and links to Discord, Twitter, and GitHub. The sidebar includes links to the home page and the about page. The content of the page route is inserted using a slot.
-->

<script lang="ts">
	import '../app.postcss';
	import "./prism.css";
	import { onMount } from 'svelte';

	import {
		AppShell,
		AppBar,
		LightSwitch,
		modeOsPrefers,
		modeUserPrefers,
		modeCurrent
	} from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let isDarkMode = false;

	onMount(() => {
		isDarkMode = $modeCurrent;
	});

	function toggleTheme() {
		isDarkMode = !isDarkMode;
		modeUserPrefers.set(isDarkMode);
	}
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl">0seconds</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch on:click={toggleTheme} {isDarkMode} />
				
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://www.instagram.com/secondary_production/"
					target="_blank"
					rel="noreferrer"
				>
					Instagram
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://soundcloud.com/0seconds"
					target="_blank"
					rel="noreferrer"
				>
					SoundCloud
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://www.mixcloud.com/0seconds/"
					target="_blank"
					rel="noreferrer"
				>
					MixCloud
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/oseconds"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<!-- Insert the list: -->
		<nav class="list-nav">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="posts">posts</a></li>
				<li><a href="about">about</a></li>
				
				<!-- <li><a href="/about">About</a></li> -->
			</ul>
		</nav>
		<!-- --- -->
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	
	
</AppShell>