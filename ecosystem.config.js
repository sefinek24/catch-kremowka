module.exports = {
	apps: [{
		name            : 'kremowka.sefinek.net',
		script          : './index.js',

		log_date_format : 'HH:mm:ss, DD.MM.YYYY',
		error_file      : '/home/ubuntu/logs/www/kremowka.sefinek.net/error.log',
		out_file        : '/home/ubuntu/logs/www/kremowka.sefinek.net/out.log',

		max_restarts          : 7,
		restart_delay         : 5000,
		wait_ready            : true,
	}],
};