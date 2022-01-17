<template>
  <div id="app">
    <<%-componentName%> />
  </div>
</template>

<script<% if (ts) { %> lang="ts"<% } %> src="./serve.App.<% if (ts) { %>ts<% } else { %>js<% } %>"></script>

<style lang="css">
</style>
