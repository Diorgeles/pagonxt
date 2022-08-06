# PAGONXT

## Frameworks e Bibliotecas

- [NestJS](https://nestjs.com)
- [NestCrud](https://github.com/nestjsx/crud)
- [Docker](https://www.docker.com)
- [PostgreSQL](https://www.postgresql.org)

### Desenvolvimento

- O projeto foi desenvolvido sobre o framework NestJS + NestCrud e roda em um container Docker


- Ao baixar o projeto basta instalar os pacotes com o comando 

```bash 
yarn i
```

- Para executar o sistema basta rodar o comando abaixo

```bash 
docker-compose up
```
- Dentro da pasta `/doc` tem um arquivo do insomnia com as rotas utilizadas

### Observações

- NestCrud faz uma grande abstração das rotas iniciais de um controller, por isso não existe rotas no arquivo `Customers.controller`, eu configurei tudo dentro do decorator @Crud()
- Caso tivesse a necessidade de novas rotas daria pra criar normalmente.

### Rotas disponiveis

```bash 
GET /customers
POST /customers
PUT /customers/:id
DELETE /customers/:id
```

### Usabilidades

- Ao executar a rota de `/customers` o sistema vai buscar as pessoas que fazem aniversario se baseando na data atual + timezone do request
- Tem como filtrar por `birth_date` caso queira e isso deve retornar todas as pessoas independente do timezone, tambem é possivel filtrar com a junção de todas as colunas do banco

### Exemplo Filtro

- Para filtrar basta passar os dados seguindo o padrão abaixo

```bash 
GET /customers?s={"birth_date": "2022-08-05"}  
GET /customers?s={"birth_date": "2022-08-05", "timezone":"America/Sao_Paulo"}  
```

## Exemplo de inserção

- Para inserir basta passar os dados seguindo o padrão abaixo

```bash 
POST /customers

{
	"name": "Raquel",
	"birth_date": "2022-08-05"
}
```

