import React from 'react'
import PropTypes from 'prop-types'

function bookApi(prop) {
  return (
    <div>bookApi</div>
  )
}

// bookApi.propTypes = {}

export default bookApi


export async function postBookApi(user, formData, onSuccessCreate, onError){
     return fetch(`/api/users/${user.id}/books/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }).then(responce => {
            if (responce.ok) {
                responce.json().then(book => onSuccessCreate(book))
            } else {
                responce.json().then(error => onError(error))
            }
        })
   
}


export async function editBookApi(user, book_id, formData, onSuccessEdit,onError){
     return fetch(`/api/users/${user.id}/books/${book_id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }).then(responce => {
            if (responce.ok) {
                responce.json().then((book) => onSuccessEdit(book))
            } else {
                responce.json().then(error => onError(error))
            }
        })
   
}

export async function deleteBookApi(user, book_id, onSuccessDelete){
     return fetch(`/api/users/${user.id}/books/${book_id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify()
        }).then(responce => {
            if (responce.ok) {
                responce.json().then(() => onSuccessDelete(book_id))
            } else {
                responce.json().then(error => error)
            }
        })
   
}