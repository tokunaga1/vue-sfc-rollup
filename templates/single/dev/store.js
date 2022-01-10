import Vue from 'vue'
import Vuex from 'vuex'
<% if (storeModuleName) { -%>
import <%- storeModuleName %> from '@/<%- storeModuleName %>'
<% } -%>

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
<% if (storeModuleName) { -%>
    <%- storeModuleName %>,
<% } -%>
  }
})
