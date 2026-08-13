<script lang="ts">
  let theme = $state<'dark' | 'light'>('dark');

  function toggle() {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('resume-theme', theme);
  }
</script>

<button class="theme-toggle" type="button" aria-label="切換深色與淺色模式" onclick={toggle}>
  {theme === 'dark' ? '切換淺色' : '切換深色'}
</button>
