const store = require('../store.js')

const signUpSuccess = (signUpResponse) => {
  $('#sign-up-form').trigger('reset')
  $('#signUpModal').modal('hide')
  $('#message').fadeIn('fast')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html('You signed up successfully')
  $('#message').fadeOut(2000)
}

const signInSuccess = (signInResponse) => {
  store.user = signInResponse.user
  $('#sign-in-form').trigger('reset')
  $('#signInModal').modal('hide')
  $('#sign-up-button').addClass('ghost')
  $('#sign-in-button').addClass('ghost')
  $('#change-password-button').removeClass('ghost')
  $('#sign-out-button').removeClass('ghost')
  $('#create-league-form').removeClass('hidden')
  $('#get-league-button').removeClass('hidden')
  $('#clear-leagues-button').removeClass('hidden')
  $('#message').fadeIn('fast')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html('You signed in successfully')
  $('#message').fadeOut(2000)
}

const changePasswordSuccess = (changePasswordResponse) => {
  $('#change-password-form').trigger('reset')
  $('#changePasswordModal').modal('hide')
  $('#sign-up-button').addClass('ghost')
  $('#sign-in-button').addClass('ghost')
  $('#change-password-button').removeClass('ghost')
  $('#sign-out-button').removeClass('ghost')
  $('#message').fadeIn('fast')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html('You changed your password successfully.')
  $('#message').fadeOut(2000)
}

const changePasswordFailure = (failureResponse) => {
  $('#change-password-form').trigger('reset')
  $('#changePasswordModal').modal('hide')
  $('#message').fadeIn('fast')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
  $('#message').html('Something went wrong, please try again.')
  $('#message').fadeOut(2000)
}

const signOutSuccess = () => {
  $('#change-password-form').trigger('reset')
  $('#create-league-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#sign-up-button').removeClass('ghost')
  $('#sign-in-button').removeClass('ghost')
  $('#change-password-button').addClass('ghost')
  $('#sign-out-button').addClass('ghost')
  $('#create-league-form').addClass('hidden')
  $('#get-league-button').addClass('hidden')
  $('#clear-leagues-button').addClass('hidden')
  $('#content').empty()
  $('#message').fadeIn('fast')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html('You signed out successfully.')
  $('#message').fadeOut(2000)
}

const failure = (failureResponse) => {
  $('#change-password-form').trigger('reset')
  $('#create-league-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#signUpModal').modal('hide')
  $('#signInModal').modal('hide')
  $('#changePasswordModal').modal('hide')
  $('#message').fadeIn('fast')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
  $('#message').html('Something went wrong, please try again.')
  $('#message').fadeOut(2000)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure,
  changePasswordFailure
}
