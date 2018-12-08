const config = require('../config.js')
const store = require('../store.js')

const createLeague = (inputData) => {
  return $.ajax({
    url: config.apiUrl + '/leagues',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const getLeagues = () => {
  return $.ajax({
    url: config.apiUrl + '/leagues',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json'
  })
}

// const changePassword = (inputData) => {
//   return $.ajax({
//     url: config.apiUrl + '/change-password',
//     method: 'PATCH',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     contentType: 'application/json',
//     data: JSON.stringify(inputData)
//   })
// }

// const signOut = () => {
//   return $.ajax({
//     url: config.apiUrl + '/sign-out',
//     method: 'DELETE',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     }
//   })
// }

module.exports = {
  createLeague,
  getLeagues
  // changePassword,
  // signOut
}
