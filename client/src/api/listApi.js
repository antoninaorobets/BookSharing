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

  export function getAllSharedListsApi(user, onSuccessGetList) {
    return  fetch(`/api/users/${user.id}/shared_lists/`)
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
  
  export function createSharedListApi(user,list, onSuccessCreate)  {
    return fetch(`/api/users/${user.id}/shared_lists/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({list_id : list.id})
  }).then(responce => {
      if (responce.ok) {
          responce.json().then(data => onSuccessCreate(data))
      } else {
          responce.json().then(error => error)
      }
  })
  }

  export function checkIfSavedApi(user, hash, setSavedList) {
    return  fetch(`/api/users/${user.id}/shared_lists/${hash}`)
    .then(responce => {
        if (responce.ok) {
            responce.json()
                .then(data => {
                  setSavedList(data.saved)
                })
        }
        else {
            responce.json().then(error => {
              setSavedList(false)
              console.error(error)})
        }
    })
  }