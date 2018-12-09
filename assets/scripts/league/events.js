const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateLeague = (event) => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  api.createLeague(userData)
    .then(ui.createLeagueSuccess)
    .catch(ui.failure)
}

const getLeagues = (event) => {
  event.preventDefault()
  $(event.target).trigger('reset')
  api.getLeagues()
    .then(ui.getLeaguesSuccess)
    .catch(ui.failure)
}

// const onChangePassword = (event) => {
//   event.preventDefault()
//   const userData = getFormFields(event.target)
//   $(event.target).trigger('reset')
//   api.changePassword(userData)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
// }
//
// const onSignOut = () => {
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.failure)
// }

const addLeagueHandlers = () => {
  $('#create-league-form').on('submit', onCreateLeague)
  $('#get-league-button').on('click', getLeagues)
  // $('#change-password-form').on('submit', onChangePassword)
  // $('#sign-out-button').on('click', onSignOut)
}

module.exports = {
  addLeagueHandlers
}
