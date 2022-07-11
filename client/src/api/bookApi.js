import React from 'react'
import PropTypes from 'prop-types'

function bookApi(prop) {
  return (
    <div>bookApi</div>
  )
}

// bookApi.propTypes = {}

export default bookApi


export async function postBook(user, formData, onSuccess){
    console.log('bookAPI')
     return fetch(`/api/users/${user.id}/books/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }).then(responce => {
            if (responce.ok) {
                responce.json().then(book => onSuccess(book))
            } else {
                responce.json().then(error => error)
            }
        })
   
}


export async function deleteBook(user, book_id){
    console.log('bookAPI')
     return fetch(`/api/users/${user.id}/books/${book_id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify()
        }).then(responce => {
            if (responce.ok) {
                responce.json().then(book => console.log(book))
            } else {
                responce.json().then(error => error)
            }
        })
   
}