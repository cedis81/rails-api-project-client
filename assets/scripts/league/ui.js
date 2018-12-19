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
  if (data.leagues.length === 0) {
    zeroLeagues()
  } else {
    $('#message').removeClass('error-message')
    $('#message').addClass('success-message')
    const showLeaguesHtml = showLeaguesTemplate({ leagues: data.leagues })
    $('#content').html(showLeaguesHtml)
    $('#message').empty()
  }
}

const viewLeagueSuccess = (data) => {
  const viewLeagueHtml = viewLeagueTemplate({ league: data.league })
  $('#content').html(viewLeagueHtml)
}

const updateLeagueSuccess = (data) => {
  $('#message').html('League successfully updated.')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#update-league-form').trigger('reset')
  viewLeagueSuccess(data)
  $('#updateLeagueModal').modal('hide')
  // following two lines needed to make backdrop clear on modal hide
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

const updateLeagueFailure = (updateLeagueFailureResponse) => {
  $('#update-league-form').trigger('reset')
  $('#updateLeagueModal').modal('hide')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
  $('#message').html('Something went wrong, please try again.')
}

const failure = (failureResponse) => {
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
  $('#message').html('Something went wrong, please try again.')
}

const clearLeagues = () => {
  $('#content').empty()
  $('#message').empty()
  $('#create-league-form').trigger('reset')
}

const zeroLeagues = () => {
  $('#content').empty()
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
  $('#message').html('You currently have zero leagues, please create one to get started.')
}

const onDeleteSuccess = () => {
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').empty()
}

module.exports = {
  createLeagueSuccess,
  getLeaguesSuccess,
  viewLeagueSuccess,
  updateLeagueSuccess,
  clearLeagues,
  updateLeagueFailure,
  onDeleteSuccess,
  failure
}
