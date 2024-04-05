module.exports = {
	async deploy(rawCommands) {
		const { SlashCommandBuilder } = require("@discordjs/builders");
		const { REST } = require("@discordjs/rest");
		const { Routes } = require("discord-api-types/v9");
		const {
			settings: { clientId, guildId },
		} = require("./configs/config.js");
		const rest = new REST({ version: "9" }).setToken("MTIyNTE4NTAwNDExMjU4MDY0MQ.GUTr0Q.z7DF2riQVBKpb-G0n7987pd6tVc_yVMUNBy2us");

		const slashCommands = rawCommands
			.map((rawCommand) => {
				let { name, description, options } = rawCommand.info;
				let command = new SlashCommandBuilder()
					.setName(name)
					.setDescription(description);

				if (options.length > 0) {
					options.map((option) => {
						let { name, description, type, required } = option;
						switch (type) {
							case "STRING":
								command.addStringOption((input) =>
									input
										.setName(name)
										.setDescription(description)
										.setRequired(required),
								);
								break;
							case "INTEGER":
								command.addIntegerOption((input) =>
									input
										.setName(name)
										.setDescription(description)
										.setRequired(required),
								);
								break;
							case "CHANNEL":
								command.addChannelOption((input) =>
									input
										.setName(name)
										.setDescription(description)
										.setRequired(required),
								);
								break;
							case "BOOLEAN":
								command.addBooleanOption((input) =>
									input
										.setName(name)
										.setDescription(description)
										.setRequired(required),
								);
								break;
						}
					});
				}
				return command;
			})
			.map((command) => command?.toJSON());

		rest.put(Routes.applicationCommands(clientId), {
			body: slashCommands,
		})
			.then(() =>
				console.log("Successfully registered application commands."),
			)
			.catch(console.error);
	},
};

// { The Project Was Programmed And Devolped By Rqo } //