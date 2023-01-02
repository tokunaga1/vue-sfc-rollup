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
  }
});
