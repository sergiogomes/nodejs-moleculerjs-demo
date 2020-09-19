module.exports = {
	name: "events",

	actions: {
		random() {
			return Math.round(Math.random() * 10);
		},
	},

	events: {
		"hello.called"(payload) {
			this.logger.info("Helper Service Caught an Event");
			this.logger.info(payload);
		},
	},
};
