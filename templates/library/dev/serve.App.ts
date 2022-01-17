<% if (version === 3) { -%>
import { defineComponent } from 'vue';
<% } else { -%>
import Vue from 'vue';
<% } -%>
// Uncomment import and local "components" registration if library is not registered globally.
// import { <%-componentNamePascal%> } from '@/entry.esm';

export default <% if (version === 3) {%>defineComponent<% } else { %>Vue.extend<% } %>({
  name: 'ServeDev',
  // components: {
  //  <%-componentNamePascal%>,
  // }
});
