// const store = require('../store.js')
const showLeaguesTemplate = require('../templates/league-listing.handlebars')
const viewLeagueTemplate = require('../templates/view-league.handlebars')

const createLeagueSuccess = (newLeague) => {
  $('#create-league-form').trigger('reset')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html('heyo! new league success')
  $('#sign-up-form').addClass('hidden')
}

const getLeaguesSuccess = (data) => {
  console.log(data)
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html('heyo! get leagues success')
  const showLeaguesHtml = showLeaguesTemplate({ leagues: data.leagues })
  $('#content').html(showLeaguesHtml)
}

const viewLeagueSuccess = (data) => {
  console.log(data)
  const viewLeagueHtml = viewLeagueTemplate({ league: data.league })
  $('#content').html(viewLeagueHtml)
}

const failure = (failureResponse) => {
  console.log(failureResponse)
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
  $('#message').html('Something went wrong, please try again.')
}

const clearLeagues = () => {
  $('#content').empty()
  $('#create-league-form').trigger('reset')
}

module.exports = {
  createLeagueSuccess,
  getLeaguesSuccess,
  viewLeagueSuccess,
  clearLeagues,
  failure
}
