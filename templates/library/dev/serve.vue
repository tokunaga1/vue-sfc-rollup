<template>
  <div id="app">
    <<% if (router) { %>router-view<% } else { %><%-componentName%><% } %> />
  </div>
</template>

<script<% if (ts) { %> lang="ts"<% } %> src="./App.<% if (ts) { %>ts<% } else { %>js<% } %>"></script>

<style lang="css">
</style>
