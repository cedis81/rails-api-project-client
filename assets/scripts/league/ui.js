// const store = require('../store.js')
const showLeaguesTemplate = require('../templates/league-listing.handlebars')
const viewLeagueTemplate = require('../templates/view-league.handlebars')

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
  const showLeaguesHtml = showLeaguesTemplate({ leagues: data.leagues })
  console.log(data)
  $('.content').html(showLeaguesHtml)
}

const viewLeagueSuccess = (data) => {
  console.log('this was view league success, meng')
  console.log(data)
  const viewLeagueHtml = viewLeagueTemplate({ league: data.league })
  $('.content').html(viewLeagueHtml)
}

const failure = (failureResponse) => {
  console.log(failureResponse)
  $('#change-password-form').trigger('reset')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
  $('#message').html('Something went wrong, please try again.')
}

const clearLeagues = () => {
  $('.content').empty()
}

module.exports = {
  createLeagueSuccess,
  getLeaguesSuccess,
  viewLeagueSuccess,
  clearLeagues,
  failure
}
