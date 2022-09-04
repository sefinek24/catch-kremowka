module.exports = {
	apps: [{
		name            : 'catch-kremowka',
		script          : './index.js',

		log_date_format : 'HH:mm:ss, DD.MM.YYYY',
		error_file      : '/home/ubuntu/logs/www/catch-kremowka/error.log',
		out_file        : '/home/ubuntu/logs/www/catch-kremowka/out.log',

		max_restarts          : 7,
		restart_delay         : 5000,
		wait_ready            : true,
	}],
};