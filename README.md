# projis2.0

~~~shell
yarn add express
yarn add nodemon -D

# Faz com que o nodemon e o node consigam interpretar o import e o export
[] yarn add sucrase -D
# Faz o node ler as variáveis de ambiente
[] yarn add dotenv
~~~
## DATABASE
### Conexão com banco:
**Documentação: do sequelize:** 
*https://sequelize.org/v5/*

**bibliotecas necessárias usar o Postgres com Sequelize:**
~~~shell
yarn add sequelize
yarn add pg
yarn add pg-hstore
yarn add sequelize-cli -D
~~~

https://sequelize.org/v5/manual/migrations.html#advance-topics

module.exports = {
  'config': path.resolve('config', 'database.json'),
  'models-path': path.resolve('db', 'models'),
  'seeders-path': path.resolve('db', 'seeders'),
  'migrations-path': path.resolve('db', 'migrations')
}
 ### Migrantions and Seeds
~~~shell
# Create-Migration
yarn sequelize migration:create --name=create-'nome-da-tabela'

# Create-Seed
yarn sequelize seed:generate --name 'create-nome-da-seed'

# Run-Migration
yarn sequelize db:migrate

# Run-Seed
yarn sequelize db:seed:all

# Back-Migration
yarn sequelize db:migrate:undo:all

# Back-Seed
yarn sequelize db:seed:undo:all
~~~

### Criação das tabelas:
**Tabelas sem chaves extrangeiras:**
1. estado_civil
2. endereco
3. telefone
4. orcamento-familiar
5. habitacao
6. saude
7. membro-familia
8. tipo_bens-imobeis
9. tipo_bens-moveis
10. tipo-de-acoes

