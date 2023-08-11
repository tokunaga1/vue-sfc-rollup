export default {
  list: firestoreAction(function (ctx) {
    const list_ref = ctx.getters['LIST_REF']

    try {
      return ctx.bindFirestoreRef('list', list_ref)
    } catch (e) {
      return this.add_error(e)
    }
  }),
  
  get: firestoreAction(function (ctx, id) {
    const item_ref = ctx.getters['LIST_REF'].doc(id)
  
    try {
      return ctx.bindFirestoreRef('item', item_ref)
    } catch (e) {
      return this.add_error(e)
    }
  }),
  
  add (ctx, item) {
    const list_ref = ctx.getters['LIST_REF']
    item.created_at = ctx.rootGetters['firebase/FNS'].Timestamp.server()
  
    try {
      return list_ref.add(item)
    } catch (e) {
      return this.add_error(e)
    }
  },
  
  remove (ctx, id) {
    const item_ref = ctx.getters['LIST_REF'].doc(id)
  
    try {
      return item_ref.delete()
    } catch (e) {
      return this.add_error(e)
    }
  },
  
  update (ctx, { id, ...rest }) {
    id = id || ctx.state.item.id
    const list_ref = ctx.getters['LIST_REF']

    let err
    if (! id)
      err = 'No id to update'
    else if (! list_ref)   
      err = 'No reference to update data'
    else if (! rest)  
      err = 'No data to update'
    else if (typeof rest != 'object') 
      err = 'Invalid data type'
  
    if (err) {
      return Promise.reject(err)
    } else {
      try {
        return list_ref.doc(id).update(rest)
      } catch (e) {
        return this.add_error(e)
      }
    }
  }
}
