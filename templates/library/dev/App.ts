<% if (version === 3) { -%>
import { defineComponent } from 'vue';
<% } else { -%>
import Vue from 'vue';
<% } -%>
// Uncomment import and local "components" registration if library is not registered globally.
// import { <%-componentNamePascal%> } from '@/entry.esm';

export default <% if (version === 3) {%>defineComponent<% } else { %>Vue.extend<% } %>({
  name: 'ServeDev',

  metaInfo: {
    link: [
      { href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css', rel: 'stylesheet' },
      { href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css', rel: 'stylesheet' },
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js' },
    ]
  },

  // components: {
  //  <%-componentNamePascal%>,
  // }
});
