# projis2.0

 ## typescript:
~~~shell
yarn init -y
yarn add typescript -D # Faz com que o editor consiga aixuliar com o autocomplete
yarn add @types/express -D # @types/nomeDoPacote
# Cria as configurações padrão do TS
yarn tsc --init # Para mudar o locar do arquivo transpilado, deve-se descomentar a linha "outDir" e alterar o caminho do arquivo, como "./dist"
yarn tsc # Transpila TS para JS
~~~

## Express
~~~shell
yarn add express

~~~

## TsNodeDev
~~~shell
yarn add ts-node-dev -D #transpila e reinicia o server automaticamente

~~~

## TypeOrm https://typeorm.io/#/
~~~shell
yarn add typeorm

yarn add pg

yarn typeorm migration:create -n nome_da_tabela # Create Migration

yarn typeorm migration:run # Run Migration

yarn typeorm migration:revert # Revert Migration
~~~

# Faz o node ler as variáveis de ambiente
~~~shell
yarn add dotenv
~~~
## DATABASE
### Conexão com banco:


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

