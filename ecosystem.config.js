module.exports = {
	apps: [{
		name            : 'papiez-tanczy',
		script          : './index.js',

		log_date_format : 'HH:mm:ss, DD.MM.YYYY',
		error_file      : '/home/ubuntu/logs/bots/papiez/error.log',
		out_file        : '/home/ubuntu/logs/bots/papiez/out.log',

		max_restarts          : 7,
		restart_delay         : 5000,
		wait_ready            : true,
	}],
};