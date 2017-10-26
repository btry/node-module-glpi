const GlpiRestClient = require('../lib/restclient')
const config = require('../config.json')

const client = new GlpiRestClient(config.apirest)

client.initSessionByCredentials(config.user.name, config.user.passwords, config.appToken)
	.then((res) => {
		console.log(res)
	})
	.catch((err) => {
		console.log(err)
	})