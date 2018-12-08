// const store = require('../store.js')

const createLeagueSuccess = (newLeague) => {
  console.log('newLeague')
  console.log(newLeague)
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html('heyo! new league success')
  $('#sign-up-form').addClass('hidden')
}

const getLeaguesSuccess = (data) => {
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html('heyo! get leagues success')
  // $('#sign-up-form').addClass('hidden')
  // $('#sign-in-form').addClass('hidden')
  // $('#change-password-form').removeClass('hidden')
  // $('#sign-out-button').removeClass('hidden')
}

// const changePasswordSuccess = (changePasswordResponse) => {
//   $('#message').removeClass('error-message')
//   $('#message').addClass('success-message')
//   $('#message').html('You changed your password successfully.')
//   $('#sign-up-form').addClass('hidden')
//   $('#sign-in-form').addClass('hidden')
//   $('#change-password-form').removeClass('hidden')
//   $('#sign-out-button').removeClass('hidden')
// }
//
// const signOutSuccess = () => {
//   $('#change-password-form').trigger('reset')
//   $('#message').removeClass('error-message')
//   $('#message').addClass('success-message')
//   $('#message').html('You signed out successfully.')
//   $('#sign-up-form').removeClass('hidden')
//   $('#sign-in-form').removeClass('hidden')
//   $('#change-password-form').addClass('hidden')
//   $('#sign-out-button').addClass('hidden')
// }
//
const failure = (failureResponse) => {
  console.log(failureResponse)
  $('#change-password-form').trigger('reset')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
  $('#message').html('Something went wrong, please try again.')
  // $('#sign-up-form').removeClass('hidden')
  // $('#sign-in-form').removeClass('hidden')
}
//
// const changePasswordFailure = (failureResponse) => {
//   $('#change-password-form').trigger('reset')
//   $('#message').removeClass('success-message')
//   $('#message').addClass('error-message')
//   $('#message').html('Something went wrong, please try again.')
// }

module.exports = {
  createLeagueSuccess,
  getLeaguesSuccess,
  failure
}
