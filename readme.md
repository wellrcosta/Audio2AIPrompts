# video2ai

## Sobre o Projeto

O **video2ai** é um projeto desenvolvido durante o evento NLW IA da Rocketseat. Ele consiste em duas partes: uma API (localizada no diretório `api`) e uma interface web (localizada no diretório `web`) que permitem converter vídeos em texto usando a tecnologia da OpenAI. A API lida com a interação com a OpenAI e também recebe áudio da interface web, enquanto a interface web fornece uma maneira fácil de usar a funcionalidade e converte vídeo em áudio antes de enviar para a API.

## Tecnologias Utilizadas

### API

![Node.js](https://img.shields.io/badge/Node.js-green)
![Typescript](https://img.shields.io/badge/Typescript-blue)
![Prisma](https://img.shields.io/badge/Prisma-orange)
![OpenAI](https://img.shields.io/badge/OpenAI-yellow)

### Web

![React](https://img.shields.io/badge/React-blue)
![Typescript](https://img.shields.io/badge/Typescript-blue)
![Vite](https://img.shields.io/badge/Vite-orange)
![FFmpeg](https://img.shields.io/badge/FFmpeg-red)

## Como Executar o Projeto Localmente

A seguir, estão as instruções detalhadas e simples para executar o projeto em sua máquina local.

### API

1. Navegue até a pasta `api` no seu terminal:

```bash
cd api
```

2. Instale as dependências usando o seguinte comando:

```bash
npm install
```

3. Crie um arquivo `.env` na pasta `api` e inclua as seguintes variáveis de ambiente:

```env
OPENAI_API_KEY=SuaChaveAPIOpenAI
DATABASE_URL=URLDoSeuBancoDeDados
```

4. Crie uma pasta chamada `tmp` dentro da pasta `api`. 
- Obs.: ``Caso contrário, a API vai falhar ao tentar salvar o caminho do vídeo no banco de dados``

5. Execute o comando abaixo para aplicar as migrações do banco de dados:

```bash
npx prisma migrate dev
```

6. Agora você pode iniciar o servidor da API:

```bash
npm run dev
```

A API estará disponível em [http://localhost:3333](http://localhost:3333).

### Web

1. Navegue até a pasta `web` no seu terminal:

```bash
cd web
```

2. Instale as dependências usando o seguinte comando:

```bash
npm install
```

3. Inicie a aplicação da web:

```bash
npm run dev
```

A interface web estará disponível em [http://localhost:5173](http://localhost:5173).

## Instruções de uso

- Selecione o vídeo a ser utilizado.
- Preencha o ``Prompt de transcrição`` com palavras chave separadas por vírgula.
- Clique em carregar.
- Após carregar, selecione algum dos dois prompts que foram gerados ou faça um você mesmo.
- Selecione a ``temperatura`` desejada.
- Clique em ``Executar``.
- Após finalizar a operação, você deverá ver no campo ``Resultado gerado pela IA`` o retorno da OpenAI.

## Contribuição

Se você deseja contribuir para este projeto, fique à vontade para abrir problemas (issues) e enviar pull requests.

## Créditos

Este projeto foi desenvolvido como parte do evento NLW IA da Rocketseat.