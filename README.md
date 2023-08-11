<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" width="100%"/>

<div align="center">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
</div>

### API RESTful

Este repositório contém uma API RESTful simples construída usando o Express.js que oferece operações básicas de CRUD para gerenciar dados de usuários. A API permite criar, ler, atualizar e excluir registros de usuários de um banco de dados em memória.

### Índice

1. [Instalação](#instalação)
2. [Uso](#uso)
3. [Endpoints](#endpoints)
4. [Tratamento de Erros](#tratamento-de-erros)

### Instalação

Para começar a usar a API RESTful, siga estas etapas:

1. Clone este repositório para a sua máquina local.

        git clone < repositorio >

        cd ./ < name project >

2. Instale as dependências necessárias usando o seguinte comando:

        npm install


3. Execute a API usando o seguinte comando:
        
        npm start

O servidor da API começará a ser executado em http://localhost:3333

### Uso

Esta API fornece endpoints para gerenciar dados de usuário. Você pode interagir com a API usando ferramentas como curl, Postman ou qualquer outra ferramenta de teste de API.

### Endpoints

Os seguintes endpoints estão disponíveis:

#### GET /

Retorna uma lista de todos os usuários no banco de dados.

Exemplo de resposta:

```json

[
    {
        "id": "1a2b3c4d",
        "nome": "Fulano de Tal",
        "email": "fulano@example.com",
        "senha": "senha123"
    },
    // ...outros usuários
]

```

#### POST /

Cria um novo usuário. O corpo da requisição deve conter: nome, email e senha.

Exemplo de requisição:

```json

{
    "nome": "Beltrano da Silva",
    "email": "beltrano@example.com",
    "senha": "senhasegura"
}

```

Exemplo de resposta:

```json

{
    "feedback": "Usuário criado com sucesso!",
    "status": 201
}

```

#### PUT /

Atualiza um usuário existente. O corpo da requisição deve conter: id, nome, email e senha.

Exemplo de requisição:

```json

{
    "id": "1a2b3c4d",
    "nome": "Nome Atualizado",
    "email": "atualizado@example.com",
    "senha": "novasenha"
}


```

Exemplo de resposta:

```json

{
    "feedback": "Usuário editado com sucesso!",
    "status": 200
}


```

#### DELETE /

Exclui um usuário existente. O corpo da requisição deve conter: id.

Exemplo de requisição:

```json
{
    "id": "1a2b3c4d"
}
```

Exemplo de resposta:

```json
{
    "feedback": "Usuário deletado com sucesso!",
    "status": 200
}
```

#### DELETE /delete-all-users

Exclui todos os usuários do banco de dados.

Exemplo de resposta:

```json
{
    "feedback": "Todos os usuários foram deletados com sucesso!",
    "status": 200
}
```


### Tratamento de Erros

A API fornece respostas de erro apropriadas em caso de dados inválidos ou ausentes. Aqui estão algumas das respostas de erro que você pode encontrar:

    400 Bad Request: 
        Dados inválidos fornecidos para criação ou atualização de usuário.

    404 Not Found: 
        Usuário não encontrado para atualização ou exclusão.

Sinta-se à vontade para explorar e aprimorar esta API de acordo com suas necessidades! Se tiver alguma dúvida ou precisar de mais assistência, não hesite em entrar em contato com o proprietário do repositório cezardev07.