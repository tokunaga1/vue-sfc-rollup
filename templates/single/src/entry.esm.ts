<% if (ts && version === 3) { -%>
import { App, Plugin } from 'vue';
<% } else if (ts && version === 2) { -%>
import _Vue, { PluginObject } from 'vue';
<% } -%>

// Import vue component
import component from '@/<%-componentName%>.vue';
<% if (storeModuleName) { -%>
import <%- storeModuleName %> from './<%- storeModuleName %>';
<% } -%>

<% if (ts) { -%>
// Define typescript interfaces for installable component
<% if (version === 3) { -%>
type InstallableComponent = typeof component & { install: Exclude<Plugin['install'], undefined> };
<% } else { -%>
type InstallableComponent = typeof component & PluginObject<any>;
<% } -%>

<% } -%>
// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
export default /*#__PURE__*/(()<% if (ts) { %>: InstallableComponent<% } %> => {
  <% if (ts) { %>// Assign InstallableComponent type<% } else { %>// Get component instance<% } %>
  const installable = component<% if (ts) { %> as unknown as InstallableComponent<% } %>;

  // Attach install function executed by Vue.use()
<% if (ts) { -%>
  installable.install = (<% if (version === 3) { %>app: App<% } else { %>Vue: typeof _Vue<% } %>) => {
<% } else { -%>
  installable.install = (<% if (version === 3) { %>app<% } else if (storeModuleName) { %>Vue, options = {}<% } else { %>Vue<% } %>) => {
<% } -%>
    <% if (version === 3) { %>app<% } else { %>Vue<% } %>.component('<%-componentNamePascal%>', installable);
  };
<% if (storeModuleName) { %>
  if (options.store) {
    options.store.registerModule('<%- storeModuleName %>', <%- storeModuleName %>);
  } else {
    console.log('Please provide a store for <%- storeModuleName %>!!');
  }
<% } %>
  return installable;
})();

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
