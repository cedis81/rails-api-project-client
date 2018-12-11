// const store = require('../store.js')
const showLeaguesTemplate = require('../templates/league-listing.handlebars')
const viewLeagueTemplate = require('../templates/view-league.handlebars')

const createLeagueSuccess = (newLeague) => {
  $('#create-league-form').trigger('reset')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html('heyo! New league created')
}

const getLeaguesSuccess = (data) => {
  // console.log(data)
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  const showLeaguesHtml = showLeaguesTemplate({ leagues: data.leagues })
  $('#content').html(showLeaguesHtml)
}

const viewLeagueSuccess = (data) => {
  const viewLeagueHtml = viewLeagueTemplate({ league: data.league })
  $('#content').html(viewLeagueHtml)
}

const updateLeagueSuccess = (data) => {
  $('#update-league-form').trigger('reset')
  viewLeagueSuccess(data)
  $('#updateLeagueModal').modal('hide')
  // following two lines needed to make backdrop clear on modal hide
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

const failure = (failureResponse) => {
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
  updateLeagueSuccess,
  clearLeagues,
  failure
}
