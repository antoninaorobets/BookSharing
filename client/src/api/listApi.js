import React from 'react'

export function getMyListApi( user, onSuccessGetList) {
  return  fetch(`/api/users/${user.id}/lists`)
  .then(responce => {
      if (responce.ok) {
          responce.json()
              .then(data => {
                onSuccessGetList(data)
              })
      }
      else {
          responce.json().then(error => console.error(error))
      }
  })
}

export function showSharedListApi( hash, onSuccessGetList) {
    return  fetch(`/api/lists/${hash}`)
    .then(responce => {
        if (responce.ok) {
            responce.json()
                .then(data => {
                  onSuccessGetList(data)
                })
        }
        else {
            responce.json().then(error => console.error(error))
        }
    })
  }
  