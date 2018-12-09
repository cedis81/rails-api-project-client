const store = require('../store.js')

const signUpSuccess = (signUpResponse) => {
  $('#sign-up-form').trigger('reset')
  $('#signUpModal').modal('hide')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html('You signed up successfully')
}

const signInSuccess = (signInResponse) => {
  store.user = signInResponse.user
  $('#sign-in-form').trigger('reset')
  $('#signInModal').modal('hide')
  $('#sign-up-button').addClass('hidden')
  $('#sign-in-button').addClass('hidden')
  $('#change-password-button').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#create-league-form').removeClass('hidden')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html('You signed in successfully')
}

const changePasswordSuccess = (changePasswordResponse) => {
  $('#change-password-form').trigger('reset')
  $('#changePasswordModal').modal('hide')
  $('#sign-up-button').addClass('hidden')
  $('#sign-in-button').addClass('hidden')
  $('#change-password-button').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html('You changed your password successfully.')
}

const signOutSuccess = () => {
  $('#change-password-form').trigger('reset')
  $('#sign-up-button').removeClass('hidden')
  $('#sign-in-button').removeClass('hidden')
  $('#change-password-button').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html('You signed out successfully.')
}

const failure = (failureResponse) => {
  $('#change-password-form').trigger('reset')
  $('#signUpModal').modal('hide')
  $('#signInModal').modal('hide')
  $('#changePasswordModal').modal('hide')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
  $('#message').html('Something went wrong, please try again.')
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
