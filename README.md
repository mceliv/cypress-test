# cypress-test
Projeto voltado para testes de Cypress

- Instale as dependências com 
```
    yarn install
```

## **_Tecnologias utilizadas_**

- Cypress ^7.4.0
- Cypress-multi-reporters: ^1.5.0
- Mochawesome: ^6.2.2
- Mochawesome-merge: ^4.2.0,
- Mochawesome-report-generator: ^5.2.0
- Rimraf: ^3.0.2

<br>

## **_Cypress_** 

O arquivo de configuração do cypress `cypress.json`pode ser encontrado na raiz do projeto e com a seguinte configuração. 
Na configuração abaixo e possível verificar os seguintes dados:

```
{
    "$schema": "https://on.cypress.io/cypress.schema.json",
    "experimentalStudio": true,
    "baseUrl": "https://react-redux.realworld.io",
    "env": {
        "apiUrl": "https://conduit.productionready.io/api",
        "user": {
            "email": "harrypotter@ministeriodamagia.com.br", 
            "password": "harrypotter"
        }
    },
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
        "configFile": "reporter-config.json"
    }
}

```

### **_Arquitetura de teste_**
- fixtures: 
- integration: cenários de teste ficam dentro desta pasta
- plugins: se for necessário utilizar plugin, eles deve estar instaciados aqui 
- support: aqui dentro desta pasta possui o core da automação
    - commands: todas as funcionalidades que são utilizadas em mais de um lugar nos testes estão escritas aqui.

```
    ├── Cypress
        ├── fixtures 
        ├── integration
        ├── plugins
            ├── index.js
        ├── support
            ├── commands
            ├── index.js
        ├── README.md  
```
<br>

## **_Branchs_** 

Até o momento a estrutura para a construção deste projeto está assim 

```
├── cypress
    ├── main 
    ├── nome do cenário  
```

onde a cada novo cenário gerado você cria a branch ``cypress/nome-do-cenario`` 

e a ``cypress/main`` fica o repositório como se fosse a **master** 


## **_Rodar os testes_**

Para executar os testes basta usar um dos comando abaixo

* Para abrir o cypress: Ele irá abrir o cypress com a configuração do ambiente de teste 

```
yarn run cypress:open
```

* Para rodar todos os testes basta seguir o exemplo. Lembrando que para rodar em outro ambiente basta ir no arquivo `package.json` e ver os já existentes

```
yarn run cypress:run
```


Projeto mantido por [Mônica Cristina Eli](https://www.linkedin.com/in/monica-eli/)