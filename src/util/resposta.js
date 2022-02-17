var respInicial = "embed";

var b1r = 'CONEXÕES DE REDE\n\n- Você testou seu aplicativo em diferentes conexões?\n- Você testou seu aplicativo sem uma conexão de rede?\n' +
	'- Você testou seu aplicativo quando há perda de sinal?\n- Você testou seu aplicativo quando o sinal é recuperado logo após a perda?\n' +
	'- Você testou seu aplicativo quando há atrasos na rede?\n- Você testou seu aplicativo no modo avião?\n' +
	'- Você testou seu aplicativo migrando de Wifi para conexão de dados móveis?'

var b2g = 'TESTES GERAIS\n\n- Você testou seu aplicativo quando ele foi interrompido por um evento de interrupção?\nVocê testou seu aplicativo em diferentes tamanhos de tela, ou seja, em polegadas diferentes?\n' +
	'- Você testou seu aplicativo ao receber uma notificação?\n- Você testou seu aplicativo quando ele entrou em um estado ocioso?\n' +
	'- Você testou seu aplicativo clicando nos botões físicos do seu dispositivo?\n- Você testou seu aplicativo em outro dispositivo com configurações diferentes?\n' +
	'- Teste entradas com valores numéricos limite, como 0 ou valores muito altos.\n- Teste entradas com valores negativos.\n- Teste entradas de valores numéricos com números decimais.\n' +
	'- Teste entradas com caracteres especiais.\n- Se os valores esperados são numéricos tente entrar letras.\n- Teste entradas com strings longas.\n' +
	'- Em campos que necessitam validação como CPF, CNPJ entre outros, de entradas de valores fora do padrão ou inexistentes.\n' +
	'- Em casos em que o software espera uma sequência de valores como são casos de vetores e matrizes, procure dar entradas com valores únicos.\n' +
	'- Ainda nos casos em que se espera sequências de valores, busque derivar testes de modo que o primeiro elemento, o elemento do meio e o último elemento da sequência, sejam acessados.\n' +
	'- Escolha entradas que forcem o sistema a gerar todas as mensagens de erro.\n- Repita a mesma entrada ou uma série de entradas inúmeras vezes.\n' +
	'- Force a geração de saídas inválidas.\n- Faça com que os resultados dos cálculos gerem valores muito altos ou negativos.';	 

var b3gps =  'GEOLOCALIZAÇÃO - GPS\n\n-Você testou seu aplicativo em movimento?\n- Você testou seu aplicativo quando o GPS perde o sinal?\n' +
	'- Você testou seu aplicativo quando o GPS se recuperou de uma perda de sinal?';

var b4b =  'BLUETOOTH\n\n- Você testou seu aplicativo quando o Bluetooth está desativado?\n- Você testou seu aplicativo quando ele perdeu o sinal com o dispositivo emparelhado?\n' +
	'- Você testou seu aplicativo variando a distância entre dispositivos emparelhados?\n- Você testou seu aplicativo emparelhando-se com diferentes tipos de dispositivos?'	
	
var b5s = 'SCROLL\n\n- A precisão do movimento está de acordo com o esperado?\n- Você testou o movimento segurando o celular em posições diferentes?\n' +
	'- Sua app reage adequadamente ao movimento de scroll?'  

var b6c = 'CAMERA E FOTO\n\n- Você testou seu aplicativo quando saiu da câmera?\n- Você testou seu aplicativo ao tirar uma foto?\n' +
	'- Você testou seu aplicativo abrindo a câmera e clicando em Voltar?\n- Você testou as opções da câmera (se houver) no seu aplicativo?'

var b7 =  '**Exploratory Smoke Testing**\n'+
'O tester checa de maneira aleatória se os recursos do sistema estão funcionando sem seguir um padrão ou regras.\n' +
'**Exemplo**: Apenas explora a tela inicial do aplicativo como um usuário faria, utilizando alguns elementos para verificar se funcionam corretamente.'

var b8 = '**Garbage Collectors Tour**\n'+ 
'O tester seleciona um objetivo, busca a maneira mais rápida para executá-lo, realiza testes e passa para o próximo objetivo.\n'+ 
'**Exemplo**: Verificar todos os menus. Verificar todos os campos textuais.'
	
var b9 = '**User Interface Exploration**\n'+  
'O tester aprende sobre o sistema explorando a interface de usuário, entendendo as funcionalidades de diferentes partes da interface e testando os comportamentos.\n' +
'**Exemplo**: Enquanto explora a interface de um site, o tester encontra um erro no botão de login.'			  

var b10 = '**Back Alley Tour**\n'+ 
'O tester foca em explorar os recursos que são menos usados no sistema.\n' +
'**Exemplo**: A aba ferramentas na pesquisa Google permite alterar os resultados da busca.'			  

var b11 = '**Bad Neighbourhood Tour**\n'+ 
'O tester verifica os recursos “vizinhos” de onde o bug foi encontrado, com o objetivo de encontrar outros problemas.\n'+ 
'**Exemplo**: Se um bug foi encontrado na página “Carrinho de compras” é interessante verificar a página de pagamento ou de finalização de compra com o objetivo de encontrar mais problemas.'			  

var b12 = '**Tour Bus Strategy**\n'+  
'O tester faz um tour pelo sistema, parando em alguma feature quando desejado por um período curto de tempo antes de retornar pra rota principal.\n '+
'**Exemplo**: Realizar uma compra, podendo parar em features como explorar produtos, adicionar produtos ao carrinho, preencher dados incorretamente, mas no final voltando ao objetivo de realizar compras.'

var b13 = '**Crime Spree Tour**\n'+ 
'O tester foca numa feature ou vizinhança com o objetivo de quebrá-la.\n' +
'**Exemplo**: Colocar valores incorretos num campo numérico.'			  

var b14 = '**Particionamento de Classe de Equivalência**\n'+ 
'O tester cria classes de equivalência para validar as entradas sem a necessidade de repetições de diferentes valores da mesma classe.\n'+
'**Exemplo**: Apenas pessoas acima de 18 anos e abaixo de 70 podem se cadastrar no sistema. Nesse caso, as classes de equivalência podem ser classificadas como Abaixo de 18, Entre 18 e 70 e Acima de 70.'+
'Caso um valor faça parte da primeira ou da terceira classe, espera-se um erro, diferentemente da segunda, onde seria esperado uma resposta positiva.'			  

var b15 = '**Análise de Valor Limite**\n'+ 
'O tester utiliza valores que estão nas extremidades entre as classes de equivalência.\n'+
'**Exemplo**: Considerando as classes de equivalência podem ser classificadas como Abaixo de 18, Entre 18 e 70 e Acima de 70. O tester coloca valores como 17, 18, 19, 69, 70, 71'


var cr1 = 'Teste o aplicativo em diferentes conexões dados móveis ou wifi.';
var cr2 = 'Teste o aplicativo sem conexão de rede.';
var cr3 = 'Teste o aplicativo quando houver perda de sinal da rede.';
var cr4 = 'Teste o aplicativo migrando da rede wifi para dados móveis.';
var cr5 = 'Teste o aplicativo quando houver atrasos na rede ou conexão instável.';
var cr6 = 'Teste o aplicativo quando o sinal for recuperado logo após uma perda.';
var cr7 = 'Teste o aplicativo em modo avião.';

var qg1 = 'Teste o aplicativo após ele ser interrompido por um evento inesperado';
var qg2 = 'Teste o aplicativo em diferentes tamanhos de tela.';
var qg3 = 'Teste o aplicativo ao receber uma notificação.';
var qg4 = 'Teste o aplicativo quando ele entrar em um estado ocioso.';
var qg5 = 'Teste o aplicativo clicando nos botões físicos do dispositivo.';
var qg6 = 'Teste o aplicativo em outro dispositivo com configurações diferentes.';
var qg7 = 'Teste entradas com valores numéricos limite, como 0 ou valores muito altos.';
var qg8 = 'Teste entradas com valores negativos.';
var qg9 = 'Teste entradas de valores numéricos com números decimais.';
var qg10 = 'Teste entradas com caracteres especiais.';
var qg11 = 'Se os valores esperados são numéricos tente entrar letras.';
var qg12 = 'Teste entradas com strings longas.';
var qg13 = 'Em campos que necessitam validação como CPF, CNPJ entre outros, de entradas de valores fora do padrão ou inexistentes.';
var qg14 = 'Em casos em que o software espera uma sequência de valores como são casos de vetores e matrizes, procure dar entradas com valores únicos';
var qg15 = 'Ainda nos casos em que se espera sequências de valores, busque derivar testes de modo que o primeiro elemento, o elemento do meio e o último elemento da sequência, sejam acessados.';
var qg16 = 'Escolha entradas que forcem o sistema a gerar todas as mensagens de erro.';
var qg17 = 'Repita a mesma entrada ou uma série de entradas inúmeras vezes.';
var qg18 = 'Force a geração de saídas inválidas.';
var qg19 = 'Faça com que os resultados dos cálculos gerem valores muito altos ou negativos.';

var sd1 = 'Teste o aplicativo em execução, removento o cartão SD.';
var sd2 = 'Teste o aplicativo sem o cartão SD.';
var sd3 = 'Teste o aplicativo sem o cartão SD e depois coloque.';

var bt1 = 'Teste o aplicativo com o bluetooth desativado.';
var bt2 = 'Teste o aplicativo quando ele perdeu o sinal do dispositivo pareado.';
var bt3 = 'Teste o aplicativo variando distância entre dispositivos emparelhados.';
var bt4 = 'Teste o aplicativo emparelhando-se com diferentes tipos de dispositivos.';

var sw1 = 'Observe se a precisão do movimento está de acordo com o esperado, quando a orientação da tela for mudada.';
var sw2 = 'Teste segurando o celular em posições diferentes.';
var sw3 = 'Veja se a aplicação reage adequadamente ao movimento de Swipe.';
var sw4 = "Ao trocar a orientação da tela de retrato para paisagem, a interface permanece a mesma?"

var gps1 = 'Teste o aplicativo em movimento.';
var gps2 = 'Teste o aplicativo quando o GPS perdeu o sinal.';
var gps3 = 'Teste o aplicativo com o GPS desativado.';
var gps4 = 'Teste o aplicativo sem conexão a internet com o GPS ativado.';

var cam1 = 'Você testou seu aplicativo ao tirar uma foto?';
var cam2 = 'Você testou seu aplicativo abrindo a câmera e clicando em Voltar?';
var cam3 = 'Você testou as opções da câmera (se houver) no seu aplicativo?';
var cam4 = 'Você testou seu aplicativo quando saiu da câmera?';
var cam5 = 'Você testou seu aplicativo com a câmera de self?';


var man = '**COMO PROCEDER NO TESTE EXPLORATÓRIO?**\n\n'+
'Após saber qual app será testada, siga os passos abaixo:\n'+
'**1. Entenda a aplicação:** o que ela faz, sobre o que ela '+
'é, entenda suas opções, seus domínios, etc.\n'+
'**2. Entenda o charter:** digite **?charter** e veja qual é o seu objetivo no charter, o que ele '+
'deseja que você explore na sessão? Onde colocar sua atenção?\n'+
'**3. Aplique o Teste Exploratório baseando-se no charter:** não fuja do seu objetivo, não '+
'fuja do charter, é necessário que você passe a maior parte do tempo testando o '+
'que o charter sugere.\n'+
'**4. Iniciar sessão de teste:** digite **?iniciar** para começar a sessão. Será solicitado também que você digite o '+
'tempo da sessão, que deve ser configurado em *minutos* nesse caso não é necessário digitar o prefixo **?** somente o número; exemplo 15 - para 15 minutos. '+ 
'Após o tempo configurado pressione enter que o bot '+
'iniciará a sessão e fará o controle do tempo lhe avisando quando a sessão terminar. Você pode interromper a contagem do tempo '+
'digitando **?parar** (Lembre-se caso pare a sessão será perdida).\n'+
'**5. Obedeça o tempo determinado por sessão:** coloque todos os esforços para '+
'explorar as funcionalidades que abrangem o charter.\n'+
'**6. Auxílio do bot:** Toda vez que você precisar de ajuda, ' +
'é possível conseguir auxílio usando as palavras chave e opções que podem ser vistas digitando a tag **?ajuda**. '+
'(**Importante:** qualquer informação '+ 
'pode ser consultada novamente no decorrer da sessão, **?charter, ?manual, ?ajuda.**)\n'+
'**7. Relate adequadamente o ocorrido no Charter:** a cada bug ou issue encontrada '+
'realize um breve relato digitando "?relatar"."\n'+
'**8. Registrar os Bugs:** Ao encontrar bus e issues tirar um ScreenShot das telas e anexar no discord.\n'

// '**5.** Grave todos os testes: todos os charter devem ser gravados inteiramente, sem'+
// 'cortes e também devem ser narrados. Narrando as suas interações, o que está'+
// 'sendo testado/explorado. E caso haja bugs você também deve narrar isso.\n'+

/* var ch = '**---------------BOOK CATALOGUE---------------**\n'+
'**CHARTER 1**\n'+
'- Explorar "Adicionar - Livro Manualmente"\n'+
'- Funcionalidades: explorar as abas "details e notas"\n'+
'**CHARTER 2**\n'+
'- Explorar "My Books"\n'+
'- Funcionalidades: Funcionalidades: explorar “ a>z”; explorar as opções (três'+
' pontinhos (Menu)) sendo: opção Search Books, e Gerenciar estante \n\n' +
'**---------------REMINDERS---------------**\n'+
'**CHARTER 1**\n'+
'- Explorar "Lembretes"\n'+
'- Funcionalidades: informações, compartilhamento, editar, listar"\n'+
'**CHARTER 2**\n'+
'- Explorar "Lista de Compras" e "Lixo"\n'+
'- Funcionalidades: informações, compartilhamento, editar, listar e testar tudo no lixo.'  */

var ch = '**---------------REMINDERS---------------**\n'+
'**CHARTER 1**\n'+
'- Explorar "Lembretes"\n'+
'- Funcionalidades: informações, compartilhamento, editar, listar"\n'+
'**CHARTER 2**\n'+
'- Explorar "Lista de Compras" e "Lixo"\n'+
'- Funcionalidades: informações, compartilhamento, editar, listar e testar tudo no lixo.\n\n' +
'**--CONFIRA AS IMAGENS DAS TELAS ABAIXO--**'

var aj = "**Para sugestões** é só digitar, **?Bluetooth, ?Conexão de rede, ?Swipe, ?Geral, ?Camera, ?Sdcard, ?Gps**.\n" +
"Caso prefira várias sugestões sobre algum dos temas acima use as tags:" +
"\n **?1** - Para Conexão de redes;"+ 
"\n **?2** - Para Testes em geral;"+
"\n **?3** - Para Geolocalização - GPS;"+
"\n **?4** - Para Bluetooth;"+
"\n **?5** - Para Scroll;"+
"\n **?6** - Para Câmera;"+
"\n\n **Para conhecer estratégias e critérios de teste de software escolha:**" +
"\n    **- Estratégias** "+
"\n **?7** - Exploratory Smoke Testing"+
"\n **?8** - Garbage Collectors Tour "+
"\n **?9** - User Interface Exploration"+
"\n **?10** - Back Alley Tour"+
"\n **?11** - Bad Neighbourhood Tour" +
"\n **?12** - Tour Bus Strategy"+
"\n **?13** - Crime Spree Tour "+
"\n    **- Critérios** "+
"\n **?14** - Particionamento de Classe de Equivalência"+
"\n **?15** - Análise de Valor Limite"

var com = "\n ** COMANDOS DO CHATBOT ** \n" +
"\n **?Olá** - Comando de inicialização da interação. Chatbot irá te guiar;"+ 
"\n **?Manual** - Trará os procedimentos para aplicação do teste exploratório com o chatbot;"+
"\n **?Ajuda** - Será mostrado as palavras chave para que o Chatbot de sugestões de teste;"+
"\n **?Charter** - Apresentará os seus objetivos no Teste;"+
"\n **?Iniciar** - Inicia o relógia que controla o tempo da sessão;"+
"\n **?Parar** - Interrompe e descarta a sessão;"+
"\n **?Relatar** - O comando ?Relatar será utilizado dentro de uma sessão ativa para reportar Bugs e Issues."


var pergunta = [
	["olá", "ola", "boa noite", "bom dia", "boa tarde", "oi", "oi tudo bem", "ei", 
	"iniciar teste", "testar", "teste", "começar", "como começo", "oba", "inicio", "início",
	"opa", "blz", "beleza", "fala", "bot", "chatbot", "robo", "menu"], 	
	["bluetooth", "blue"],
	["swipe", "swype", "giro", "orientação de tela", "orientação", "orientacao", "tela" ],
	["geral", "gerais",  "<geral>"],
	["rede", "conexão de rede", "conexão", "conexao", "conexao de rede"],
	["cartão de memória","cartão", "cartao de memoria","cartao","sdcard"],
	["gps", "localização", "geo", "<gps>" ],
	["fotografia", "foto", "cam", "camera","imagem", "câmera" ],
	["manual"],	
	["charter", "charters"],
	["ajuda","help"],
	["comando","comandos"],	
];

var resposta = [
	[respInicial],
	[bt1,bt2,bt3,bt4],
	[sw1,sw2,sw3,sw4],
	[qg1,qg2,qg3,qg4,qg5,qg6,qg7,qg8,qg9,qg10,qg11,qg12,qg13,qg14,qg15,qg16,qg17,qg18, qg19],
	[cr1, cr2, cr3,cr4,cr5,cr6,cr7],	
	[sd1,sd2,sd3],
	[gps1,gps2,gps3,gps4],	
	[cam1,cam2,cam3,cam4,cam5],
	[man],
	[ch],
	[aj],
	[com],

];


var naoSei = ["Não tenho conhecimento sobre esse conteúdo. \nEscreva por exemplo ?GPS ou ?teste", 
"Tente novamente, não entendi o que pediu, tente um ?olá. Posso te dar dicas de como testar o bluetooth, é só escrever ?bluetooth ou ?início.", 
"Não consegui encontrar nada sobre isso. Digite ?Manual? que opções sobre assuntos que tenho em meu banco de dados serão mostradas.",
"Gostaria de tentar algo diferente? Meus conhecimentos são de temas específicos mas se quiser posso falar sobre testes gerais. \nDigite ?geral",
"Ops não entendi. \nDigite ?tela que lhe darei sugestões sobre esse tema."];



var botResponse = "";

  

function Resposta(entrada){
	try{		
		var numero = eval(entrada.replace('?',''));
		if(numero == 1){
			botResponse = b1r;
		}else if(numero == 2){
			botResponse = b2g;
		}else if(numero == 3){	
			botResponse = b3gps;
		}else if(numero == 4){
			botResponse = b4b;
		}else if(numero == 5){
			botResponse = b5s;
		}else if(numero == 6){
			botResponse = b6c;
		}else if(numero == 7){
			botResponse = b7;
		}else if(numero == 8){
			botResponse = b8;
		}else if(numero == 9){
			botResponse = b9;
		}else if(numero == 10){
			botResponse = b10;
		}else if(numero == 11){			
			botResponse = b11;
		}else if(numero == 12){			
			botResponse = b12;
		}else if(numero == 13){
			botResponse = b13;
		}else if(numero == 14){
            botResponse = b14;
		}else if(numero == 15){
			botResponse = b15;
		}else{
			botResponse = 'Escolha uma opção válida consulte o menu.'
		}
        //console.log(botResponse)
        this.retorno = `${botResponse}`
	} catch(e){
		var texto = (entrada.toLowerCase().replace('?','')); //remove all chars except words, space and 
		if(randonRespostaRobo(pergunta, resposta, texto)){           
			botResponse =  randonRespostaRobo(pergunta, resposta, texto);
		} else {
			botResponse = naoSei[Math.floor(Math.random()*naoSei.length)];				            	
		}
		//console.log(e);
        this.retorno = `${botResponse}`
		
	}  
}


function randonRespostaRobo(vetorPergunta, vetorResposta, string){
	var item;
	
	//pega a quantidade de linhas da matriz pergunta
	for(var z =0; z<vetorPergunta.length;z++){
		//pega a quantidade de colunas da linha trazida em z
		for(var x=0; x<vetorPergunta[z].length; x++){
			if(vetorPergunta[z][x] == string){
				//Matriz resposta deve ter a mesma quantidade de linhas da matriz pergunta
				items = vetorResposta[z];
				item =  items[Math.floor(Math.random()*items.length)];				
			}			
		}
    }   
	
	return item;
}




module.exports = {
    Resposta: Resposta	
}