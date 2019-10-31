import * as type from '../constants/index'
export const apiGet = (url) => () => fetch(url).then(response => response.json())

export const apiPut = (url, id, obj) => () =>
  fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(obj),
    headers: new Headers({ 'Content-type': 'application/json' })
  }).then(resp => resp.json())
/* .then( r => {
  if(r.error) {
    return Promise.reject(r.validation)
  }
  return r
}) */

export const apiLogin = (url, obj) => 
  fetch(`${url}`,{
    method: 'GET',
    headers: new Headers({'Content-type': 'application/json'})
  }).then( 
    resp => resp.json()
  ).then(usrs  => {
    const active = usrs.filter( usr => obj.username === usr.username && obj.password === usr.password ).map(
      actv => ({
        user: actv.username, 
        permissions: actv.role === 'admin' ? [type.CUSTOMER_VIEW, type.CUSTOMER_EDIT, type.CUSTOMER_LIST] : actv.role === "user" ? [type.CUSTOMER_LIST, type.CUSTOMER_VIEW] : null
      })
    )
    return active
  })


export const apiPost = (url, obj) => () =>
  fetch(`${url}/`, {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: new Headers({ 'Content-type': 'application/json' })
  }).then(resp => resp.json())
/* .then( r => {
  if(r.error) {
    return Promise.reject(r.validation)
  }
  return r
}) */

export const apiDelete = (url, id) => () =>
  fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: new Headers({ 'Content-type': 'application/json' })
  }).then(resp => resp.json())
  .then( r => {
  // if(r.error) {
  //   return Promise.reject(r.validation)
  // }
  return id
})