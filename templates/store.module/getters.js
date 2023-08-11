const TARGET = 'bs';

export default {
  LIST_REF (state, getters, rootState, rootGetters) {
    if (_.has(rootGetters, 'firebase/ROOT_REF')) {
      return rootGetters['firebase/ROOT_REF'].collection(TARGET)
    }
  },
  
  ITEM_REF (state, getters) {
    const list_ref = getters['LIST_REF']
    const id = state.item.id
  
    if (list_ref && id) {
      return list_ref.doc(id)
    }
  },
  
  ORDERED_LIST (state) {
    return _.orderBy(state.list, [ 'created_at.seconds' ], [ 'asc' ])
  }
}
