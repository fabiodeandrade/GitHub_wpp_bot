import { create } from "venom-bot";
import axios from "axios";

// Instancia os elementos que serão usados no bot.
// Create utilizando direto da biblioteca do Venom
// Axios para fazer chamadas HTTP, mas você pode utilizar o método fetch nativo do javascript

create({
  session: "GitHub Bot",
  multidevice: true,
})
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

// Cria uma nova sessão do bot

async function start(client) {
  client.onMessage(async (msg) => {
    const command = msg.body.split(" ")[0];
    const user = msg.body.split(" ")[1];

    //Ao receber uma mensagem você vai separar de dentro dela as informações para iniciar o bot /github e o usuario para buscar na API do github

    if (command === "/github") {
      // a condicional para o chat no whatsapp

      try {
        const { data } = await axios.get(
          `https://api.github.com/users/${user}`
        );

        //chamando a api do GitHub com o usuario passando na mensagem

        await client.sendText(msg.from, `*Nome do usuário*: ${data.login}`);
        await client.sendText(msg.from, `*Cidade*: ${data.location}`);
        await client.sendText(msg.from, `*Biografia*: ${data.bio}`);
        await client.sendText(msg.from, `*Repositórios*: ${data.public_repos}`);
        await client.sendText(msg.from, `*Seguidores*: ${data.followers}`);
        await client.sendImage(msg.from, `${data.avatar_url}`);
        await client.sendLinkPreview(msg.from, `${data.html_url}`, "Github");
      } catch (e) {
        console.log(e);
      }
    }
  });
}
