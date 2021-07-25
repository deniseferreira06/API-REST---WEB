# API REST de Alunos
## Descrição e objetivos
* O projeto se trata de uma API REST que interage com o arquivo data.json, que é o arquivo onde ficam armazenados os dados do projeto. Foi testado no [Postman](https://www.postman.com/) e tem o objetivo de consumir a API criada utilizando verbos HTTP onde o usuário tem as opções de receber, enviar, atualizar e deletar dados inseridos.
## Como replicar o projeto
* Para a réplica, é necessario fazer um clone do projeto através da linha de comando "git clone https://github.com/deniseferreira06/API-REST---WEB.git".
## Detalhamento de como utilizar a sua API
* Acesse a [API](https://apirest-web.herokuapp.com/alunos).
* Para efetuar as requisições, insira o link da [API](https://apirest-web.herokuapp.com/alunos) no campo de URL no [Postman](https://www.postman.com/) e escolha qual consulta deseja realizar (GET, POST, PUT, DELETE). 
> GET: Utilize a URL https://apirest-web.herokuapp.com/alunos/ para listar os dados da API ou https://apirest-web.herokuapp.com/alunos/ + id para fazer uma consulta em especifico atraves do ID do aluno.\
> POST: Utilize a URL https://apirest-web.herokuapp.com/alunos para inserir uma nova requisição, selecionando o formato JSON na ferramenta escolhida.\
> PUT: Utilize a URL https://apirest-web.herokuapp.com/alunos/ + id para editar e atualizar os dados atraves do id do aluno, selecionando o formato JSON.\
> DELETE: Utilize a URL https://apirest-web.herokuapp.com/alunos/ + id para deletar um aluno atraves do seu id.
## Requisições disponíveis e como utilizá-las
* As requisições disponiveis são os metodos GET, PUT, POST e DELETE e você pode utiliza-las apenas alterando-as no corpo da requisição do Postman.
