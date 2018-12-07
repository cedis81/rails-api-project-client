const store = require('../store.js')

const signUpSuccess = function (signUpResponse) {
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html('You signed up successfully')
  $('#sign-up-form').addClass('hidden')
}

const signInSuccess = function (signInResponse) {
  store.user = signInResponse.user
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html('You signed in successfully')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html('You changed your password successfully.')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
}

const signOutSuccess = function () {
  $('#change-password-form').trigger('reset')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html('You signed out successfully.')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
}

const failure = function (failureResponse) {
  $('#change-password-form').trigger('reset')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
  $('#message').html('Something went wrong, please try again.')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
}

const changePasswordFailure = function (failureResponse) {
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
