<script lang="ts">
  import { onMount } from 'svelte';

  let theme = $state<'dark' | 'light'>('dark');

  onMount(() => {
    const savedTheme = localStorage.getItem('resume-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') theme = savedTheme;
  });

  function toggle() {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('resume-theme', theme);
  }
</script>

<button class="theme-toggle" type="button" aria-label={theme === 'dark' ? '切換淺色模式' : '切換深色模式'} title={theme === 'dark' ? '切換淺色模式' : '切換深色模式'} onclick={toggle}>
  {#if theme === 'dark'}
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>
  {:else}
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.7A8.5 8.5 0 0 1 9.3 3.5 8.5 8.5 0 1 0 20.5 14.7Z" /></svg>
  {/if}
</button>
