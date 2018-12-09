const store = require('../store.js')

const signUpSuccess = (signUpResponse) => {
  $('#sign-up-form').trigger('reset')
  $('#signUpModal').modal('hide')
  console.log('still need to clear field on cancel')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html('You signed up successfully')
}

const signInSuccess = (signInResponse) => {
  store.user = signInResponse.user
  $('#sign-in-form').trigger('reset')
  $('#signInModal').modal('hide')
  console.log('still need to clear field on cancel')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html('You signed in successfully')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#create-league-form').removeClass('hidden')
}

const changePasswordSuccess = (changePasswordResponse) => {
  $('#changePasswordModal').modal('hide')
  console.log('still need to clear field on cancel')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html('You changed your password successfully.')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
}

const signOutSuccess = () => {
  $('#change-password-form').trigger('reset')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html('You signed out successfully.')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  // $('#sign-out-button').addClass('hidden')
}

const failure = (failureResponse) => {
  $('#change-password-form').trigger('reset')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
  $('#message').html('Something went wrong, please try again.')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
}

const changePasswordFailure = (failureResponse) => {
  $('#change-password-form').trigger('reset')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
  $('#message').html('Something went wrong, please try again.')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure,
  changePasswordFailure
}
