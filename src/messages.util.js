import messageList from "./messages.json";

const commandParser = (command) => {
  const commands = messageList.filter((message) => message.data === command);
  if (commands.length > 0) {
    return {
      id: commands[0].id,
      response: commands[0].response.split("\\n"),
    };
  } else {
    return {
      response: `Command "${command}" not found.`,
    };
  }
};

export default commandParser;
