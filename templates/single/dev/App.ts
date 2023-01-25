<% if (version === 3) { -%>
import { defineComponent } from 'vue';
<% } else { -%>
import Vue from 'vue';
<% } -%>
import <%-componentNamePascal%> from '@/<%-componentName%>.vue';

export default <% if (version === 3) {%>defineComponent<% } else { %>Vue.extend<% } %>({
  name: 'ServeDev',
  components: {
    <%-componentNamePascal%>
  },

  metaInfo: {
    link: [
      { href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css', rel: 'stylesheet' },
      { href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css', rel: 'stylesheet' },
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js' },
    ]
  },
});
