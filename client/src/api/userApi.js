import React from "react";

export function signUpApi(formData, onSuccessSignUp, onFailedSignUp) {
   return  fetch('/api/signup', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    }).then(responce => {
        if (responce.ok) {
            responce.json().then(user => onSuccessSignUp(user))
        } else {
            responce.json().then(error => onFailedSignUp(error))
        }
    })
}

export function logInApi (formData, onSuccessLogIn, setErrorMessage) {
    return fetch('/api/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      }).then(responce => {
        if (responce.ok) {
          responce.json().then(user => {
            onSuccessLogIn(user)
          })
        } else {
          responce.json().then(error => setErrorMessage(error))
        }
      })
}

export function getUserApi(setUser){
    return fetch('/api/me')
      .then(responce => {
        if (responce.ok) {
          responce.json().then(user => {
            setUser(user)
          })
        } else {
          responce.json().then(error => console.error(error))
        }
      })
}

export function logoutApi(user, onSuccessLogout) {
    return fetch('/api/logout',{
        method: "DELETE",
        header: {"Content-Type": "application/json"},
        body: JSON.stringify({user_id: user.id})
      }).then(responce => {
        if (responce.ok){
          responce.json().then(data =>  onSuccessLogout())
         
        }
        else {
          responce.json().then(error => console.error(error))
        }
      })
}