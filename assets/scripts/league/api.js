const config = require('../config.js')
const store = require('../store.js')

const createLeague = (inputData) => {
  return $.ajax({
    url: config.apiUrl + '/leagues',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const getLeagues = () => {
  return $.ajax({
    url: config.apiUrl + '/leagues',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json'
  })
}

const viewLeague = (leagueId) => {
  return $.ajax({
    url: config.apiUrl + `/leagues/${leagueId}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateLeague = (id, leagueData) => {
  return $.ajax({
    url: config.apiUrl + `/leagues/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(leagueData)
  })
}

const deleteLeague = (leagueId) => {
  return $.ajax({
    url: config.apiUrl + `/leagues/${leagueId}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  createLeague,
  getLeagues,
  viewLeague,
  updateLeague,
  deleteLeague
  // signOut
}
