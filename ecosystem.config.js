module.exports = {
	apps: [{
		name                  : 'kremowka',
		script                : './index.js',

		log_date_format       : 'HH:mm:ss.SSS DD.MM.YYYY',
		merge_logs            : true,
		log_file		      : '/home/sefinek/logs/www/kremowka.sefinek.net/combined.log',
		out_file              : '/home/sefinek/logs/www/kremowka.sefinek.net/out.log',
		error_file            : '/home/sefinek/logs/www/kremowka.sefinek.net/error.log',

		max_restarts          : 7,
		restart_delay         : 5000,
		wait_ready            : true,
	}],
};