const GlpiRestClient = require('../lib/restclient')
const config = require('../config.json')

const client = new GlpiRestClient(config.apirest)

client.initSessionByUserToken(config.user.userToken)
	.then((res) => {
		console.log(res)
	})
	.catch((err) => {
		console.log(err)
	})