# Whatsapp Bot - GITHUB Infos

![gif](./gitbot.gif)

![](https://img.shields.io/badge/Venom-bot-blue) ![](https://img.shields.io/badge/Github-Whatsapp-green)


### 🎛️ Dependências
 
- [Venom bot](https://github.com/orkestral/venom/) - Lib para instanciação e gerenciamento do whatsapp Web
- [Axios](https://axios-http.com/ptbr/docs/intro) - Lib para chamadas HTTP

 
### 🎯 Objetivo
O intuito do projeto foi entender os limites da Venom Bot e sua flexibilidade com outras funções que não são nativas da biblioteca e para o exemplo, foi feita uma chamada à API do Github para buscar as informações do usuário enviadas na mensagem.
 
 
### ⌨️ Como foi feito?

A ideia foi habilitar através de uma mensagem de whatsapp o bot e passar na mesma mensagem o usuário a ser pesquisado no GitHub.

ex: `/github fabiodeandrade`

Com isso o bot interceptaria esse texto e utilizaria uma parte dele para fazer uma chamada get a API do Github retornando alguns dados solicitados.

### 🔎 Como utilizar - Ambiente de desenvolvimento

- Dê um `git clone` no link do repositório.
- Instale as dependências através do `npm i`.
- rode o script `npm start`
- Escaneie o QR Code
- Aguarde a confirmação que está conectado e pronto.

 
### 🔧 Próximos passos
 
- Ajustar saídas de erros.
- Prevenção de erros em mensagens
- Teste unitários


### 🎨 Autor

[LinkedIn](https://www.linkedin.com/in/fabiodeandrad/) 
[Medium](https://medium.com/@fabioscript)
[E-mail](fabiodeandradecontato@gmail.com)
