import React from 'react'

export function getRequestedApi(user, onSuccessGetRequests, type = "sent") {
  return  fetch(`/api/users/${user.id}/requests/?type=${type}`)
  .then(responce => {
      if (responce.ok) {
          responce.json()
              .then(data => {
                onSuccessGetRequests(data)
              })
      }
      else {
          responce.json().then(error => console.error(error))
      }
  })
}

export function sendRequestApi(user, book, owner, onSuccessRequest) {
    const request_param = {
        "sender_id": user.id,
        "receiver_id": owner.id,
        "book_id": book.id
    }
    return fetch(`/api/users/${user.id}/requests/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request_param)
    }).then(responce => {
        if (responce.ok) {
            responce.json().then(req => onSuccessRequest(req))
        } else {
            responce.json().then(error => error)
        }
    })
}

export function checkRequestApi(user, book, onSuccessCheck){
    return fetch(`/api/users/${user.id}/requests/1`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({"book_id" : book.id})
    }).then(responce => {
        if (responce.ok) {
            responce.json().then(data => onSuccessCheck(data))
        } else {
            responce.json().then(error => error)
        }
    })
  }