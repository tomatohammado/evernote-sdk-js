const evernote = require('evernote')

const config = require('../config.json')
const callbackUrl = 'http://localhost:3000/oauth_callback'

exports.jsonAllNotebooks = function (req, res) {
  if (req.session.oauthAccessToken) {
    var token = req.session.oauthAccessToken
    var client = new evernote.Client({
      token: token,
      sandbox: config.SANDBOX,
      china: config.CHINA
    })
    client.getNoteStore().listNotebooks().then(function (notebooks) {
      req.session.notebooks = notebooks
      res.json(req.session)
    }, function (error) {
      req.session.error = JSON.stringify(error)
      res.json(req.session)
    })
  } else {
    res.render('index', {session: req.session})
  }
}

exports.jsonAllNotes = function (req, res) {
  if (req.session.oauthAccessToken) {
    var token = req.session.oauthAccessToken
    var client = new evernote.Client({
      token: token,
      sandbox: config.SANDBOX,
      china: config.CHINA
    })
    client.getNoteStore().listNotebooks().then(function (notebooks) {
      req.session.notebooks = notebooks
      res.json(req.session)
    }, function (error) {
      req.session.error = JSON.stringify(error)
      res.json(req.session)
    })
  } else {
    res.render('index', {session: req.session})
  }
}
