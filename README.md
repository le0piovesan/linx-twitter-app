# Twitter App

Como a API do Twitter não suporta CORS e não pode ser usada a partir de um navegador, precisei criar um servidor (server.js). No fim, esse projeto precisa de **2 terminais** rodando no fundo, um deles para o servidor e o outro para o React.  <br/>


### Project Setup:
No diretório do projeto você pode executar:
```
npm install
```


### -- (OPCIONAL) -- Server Setup:
Não é necessário, mas caso queira utilizar um servidor local para a API ao invés do servidor do Heroku, é necessário dentro do código em Server.js trocar a porta em app.listen(process.env.PORT) para uma porta local, e também em App.js trocar as duas url's do fetch() para a url local. Ambos os valores que precisam ser trocados estão comentados no código para facilitar. Depois abra um terminal e execute:
```
node server.js
```
Isso irá manter o servidor local rodando no fundo para fazer a API do twitter funcionar.<br/>



### Start React App: 
Com o terminal do servidor **ainda** rodando, abra um **novo** terminal e execute:
```
npm run react
```
Isso irá executar a aplicação.<br />
Caso o react não abra a aba do navegador automaticamente, você pode acessar a URL: [http://localhost:3000](http://localhost:3000).


<!---
<br/>
<br/>
<hr/>
<br/>
<br/>

## This app was developed for a Junior Dev interview.
Since the twitter api does not support CORS and can't be used from a browser, I've had to create a new Server (server.js). In conclusion, this project needs **2 terminals** running on the background, one for the server and the other for react itself.<br/>


### Available Scripts:
In the project directory, you can run:
```
npm install
```


### Project Setup:
Open one terminal and run:
```
npm run server
```
Keeps the server running in the background covering the twitter api.


### Start React App: 
With a terminal **still running** the server, open a **new one** and run:
```
npm run react
```
Runs the app in the development mode.<br />
If React doesn't open the browser automatically, you can enter the following URL: [http://localhost:3000](http://localhost:3000). --->
