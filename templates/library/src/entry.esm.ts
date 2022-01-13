<% if (ts) {
if (version === 3) { -%>
import { App, Plugin } from 'vue';
<% } else { -%>
import _Vue, { PluginFunction } from 'vue';
<% }
} -%>

// Import vue components
import * as components from '@/lib-components/index';
<% if (storeModuleName) { -%>
import <%-storeModuleName%> from '@/store/<%-storeModuleName%>';
<% } -%>

// install function executed by Vue.use()
<% if (ts) { -%>
const install: <% if (version === 3) { %>Exclude<Plugin['install'], undefined><% } else { %>PluginFunction<any><% } %> = function install<%-componentNamePascal%> (<% if (version === 3) { %>app: App<% } else { %>Vue: typeof _Vue<% } %>) {
<% } else { -%>
const install = function install<%-componentNamePascal%> (<% if (version === 3) { %>app<% } else if (storeModuleName) { %>Vue, options = {}<% }  else { %>Vue<% } %>) {
<% } -%>
  Object.entries(components).forEach(([componentName, component]) => {
    <% if (version === 3) { %>app<% } else { %>Vue<% } %>.component(componentName, component);
  });
<% if (storeModuleName) { %>
  if (options.store) {
    options.store.registerModule('<%- storeModuleName %>', <%- storeModuleName %>);
  } else {
    console.log('Please provide a store for <%- storeModuleName %>!!');
  }
<% } -%>
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/lib-components/index';
