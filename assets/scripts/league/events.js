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

const onGetLeagues = (event) => {
  event.preventDefault()
  $(event.target).trigger('reset')
  api.getLeagues()
    .then(ui.getLeaguesSuccess)
    .catch(ui.failure)
}

const onViewLeague = (event) => {
  console.log(event)
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  console.log(id)
  api.viewLeague(id)
    .then(ui.viewLeagueSuccess)
    .catch(ui.failure)
}

const onUpdateLeague = (event) => {
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  const leagueData = getFormFields(event.target)
  // $(event.target).trigger('reset')
  api.updateLeague(id, leagueData)
    .then(ui.updateLeagueSuccess)
    .catch(ui.failure)
}

const onDeleteLeague = (event) => {
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  api.deleteLeague(id)
    .then(() => onGetLeagues(event))
    .catch(ui.failure)
}

const onClearLeagues = (event) => {
  event.preventDefault()
  ui.clearLeagues()
}

// to clear forms on modal cancel
const onCancel = () => {
  $('#create-league-form').trigger('reset')
  $('#update-league-form').trigger('reset')
}

const addLeagueHandlers = () => {
  $('#create-league-form').on('submit', onCreateLeague)
  $('#get-league-button').on('click', onGetLeagues)
  $('.content').on('click', '.view-league', onViewLeague)
  $('.content').on('submit', '#update-league-form', onUpdateLeague)
  $('.content').on('click', '.delete-league', onDeleteLeague)
  $('#clear-leagues-button').on('click', onClearLeagues)
  $('.modal').on('hidden.bs.modal', onCancel)
  $('.content').on('hidden.bs.modal', onCancel)
}

module.exports = {
  addLeagueHandlers
}
