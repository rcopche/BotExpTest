Itens que devemos implementar para o chatbot sugerido:
1-Gerenciar tempo
Com a inclusão do chatbot no processo, o controle do tempo da sessão deverá ser feito por ele, aumentando o foco do testador no processo de teste.

2-Facilitar o registro de bugs e issues
Nos momentos que o testador achar oportuno ele  pode solicitar ao chatbot a abertura de uma caixa de relatório onde poderá escrever sobre o ocorrido e reportar diversas situações que serão armazenadas.

3-Sugerir oportunidades de teste
Espera-se que a resposta do chatbot crie oportunidades de testes mais assertivas na busca de falhas, superando os métodos tradicionais.

4-Rastrear a sessão
Enquanto o TE é aplicado o chatbot poderá receber o print das das telas onde os bugs foram encontrados.

5-Questionário
O chatbot proverá uma série de questões ao usuário no final do teste TE que ajudará a entender a satisfação do seu uso.


6-Monitorar a execução do SUT e fornecer feedback 
Essa será a habilidade mais desafiadora que provavelmente será implementada em um segundo momento. A ideia é que o chatbot realmente possa monitorar o comportamento do SUT enquanto o TE está em andamento, dessa forma ele poderá indicar ao testador fatores importantes na busca de inconsistências.  	



var manual = 'Como proceder?\n\n'+
			 'Após saber que app deverá ser testada, siga os passos abaixo:\n'+
			 '1. Entender sua aplicação: Entenda sua aplicação, o que ela faz, sobre o que ela'+
			 'é, entenda suas opções, seus domínios, etc.\n'+
			 '2. Entender o Charter: Entenda qual é o seu objetivo naquele charter, o que ele'+
			 'deseja que você explore nessa sessão? No que você deve colocar sua atenção?\n'+
			 '3. Aplicar o Teste Exploratório segundo o charter: não fuja do seu objetivo, não'+
			 'fuja do Charter, é necessário que você passe a maior parte do tempo testando o'+
			 'que o charter sugere.\n'+
			 '4. Obedecer o tempo determinado por sessão: coloque todos os esforços para'+
			 'explorar as funcionalidades que abrangem o charter.\n'+
			 '5. Gravar todos os testes: todos os charter devem ser gravados inteiramente, sem'+
			 'cortes e também devem ser narrados. Narrando as suas interações, o que está'+
			 'sendo testado/explorado. E caso haja bugs você também deve narrar isso.\n'+
			 '6. Preencher adequadamente o template do Charter: Neste relatório há o'+
			 'template que você deverá usar, e preencher com os dados obtidos com o seu TE.\n'+
			 '7. Registrar os Bugs: Tirar um ScreenShot dos Bugs que ocorrerem e anexar no discord.\n'

              console.log(manual)
			 var charter = '**BOOK CATALOGUE**\n'+
			 '**CHARTER 1**\n'+
			 '- Explorar "Adicionar - Livro Manualmente"\n'+
			 '- Funcionalidades: explorar as abas "details e notas"\n\n'+
			 '**CHARTER 2**\n'+
			 '- Explorar "My Books"\n'+
			 '- Funcionalidades: Funcionalidades: explorar “ a>z”; explorar as opções (três'+
			 ' pontinhos (Menu)) sendo: opção Search Books, e Gerenciar estante \n\n' +
			 '**REMINDERS**\n'+
			 '**CHARTER 1**\n'+
			 '- Explorar "Lembretes"\n'+
			 '- Funcionalidades: informações, compartilhamento, editar, listar"\n\n'+
			 '**CHARTER 2**\n'+
			 '- Explorar "Lista de Compras" e "Lixo"\n'+
			 '- Funcionalidades: informações, compartilhamento, editar, listar e testar tudo no lixo.' 

Alterando git de Master para main

rm -rf .git //utilizo caso queira limpar o git do projeto

git init

git remote add origin  https://

git pull origin main

git checkout -b main
