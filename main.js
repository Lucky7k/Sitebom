let loginCerto ="skrrr";
let passwordCerto ="skrrr";

function logar() {
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;
    
    if (login == loginCerto){
        if (password == passwordCerto){
            location.href = "index.html";
            return 0;
        }
    }
    document.getElementById("deuRuim").hidden = false;
    
}

function mudarPersonagem(personagem) {
    let dict ={
        1: ["img/Sombra-portrait.jpg", "Sombra (Olivia Colomar)", "Hacker","Uma das hackers mais famosas do mundo, Sombra usa informações para manipular aqueles que estão no poder.","QUALQUER COISA PODE SER HACKEADA… E QUALQUER UM."],

        2: ["img/Dva-portrait.jpg", "D.va (Hana Song)", "Função da D.va....Tankar e não morrer","D.Va é uma ex-gamer profissional que sabe como usar suas habilidades para pilotar um mecha de última geração na defesa de sua cidade natal.","EU JOGO PARA GANHAR"],

        3: ["img/Tracer-portrait.jpg", "Tracer (Lena Oxton)", "Dps da desgraça","A ex-agente da Overwatch conhecida como Tracer é uma aventureira que salta no tempo e é uma força incontrolável para o bem.","NÃO SE PREOCUPEM QUERIDOS! A CAVALARIA CHEGOU!"],
        
        4: ["img/Widowmaker-portrait.jpg", "Widowmaker (Amélie)", "Dps/Assassina","Widowmaker é a assassina perfeita: uma matadora paciente e impiedosamente eficiente que não mostra emoção nem remorso.","UM TIRO, UMA MORTE."],

        5: ["img/Mercy-ow2-portrait.jpg", "Mercy (Angela Ziegler)", "Suporte [Passaro extremamente focado]","Um anjo da guarda para aqueles em seus cuidados, Dra. Angela Ziegler é uma curandeira sem igual, uma cientista brilhante e uma defensora convicta da paz","HERÓIS NUNCA MORREM."],

        6: ["img/Brigitte_Concept.jpg", "Brigitte", "Suporte","Agora em ação nas linhas de frente, Brigitte Lindholm pegou em armas para defender os indefesos.Filha mais nova do criador de armas Torbjörn Lindholm, Brigitte foi a primeira dos filhos dele a demonstrar interesse em engenharia mecânica. Brigitte passou muito do tempo livre dela na oficina do pai, aprendendo o ofício e melhorando suas habilidades. A aptidão de Brigitte para a engenharia igualava-se a do pai, mas o interesse primário dela estava na fabricação de armadura e sistemas defensivos, ao contrário de Torbjörn, que era conhecido (e infame) no mundo todo pelas armas que criou.","VOU PROVAR O MEU VALOR!"],
        
        7: ["img/Ana.jpg","Ana","Healer","Uma das fundadoras de Overwatch, Ana usa suas habilidades e seu conhecimento para defender seu lar e as pessoas que ela ama.","TODOS DEVEM ENCONTRAR SUA CAUSA."],

        8: ["img/Ashe-portrait.jpg","Ashe","Dano/Dps","Ashe, a líder ambiciosa e calculista da gangue Deadlock, é uma figura respeitada no submundo do crime.","MEU NEGÓCIO, MINHAS REGRAS."],

        9: ["img/Junkrat-Portrait.jpg","Junkrat","Dps","Junkrat é um lunático obcecado por explosivos que vive para causar destruição e caos.(Jinx2.0)","O DIA ESTÁ ÓTIMO PARA UM POUCO DE CAOS!"],

        10: ["img/Moira.jpg","Moira","Healer","Tão brilhante quanto controversa, a cientista Moira O’Deorain pesquisa o que há de mais avançado na engenharia genética, buscando uma forma de reescrever os fundamentos que constroem a vida.","A CIÊNCIA REVELARÁ A VERDADE."],

        11: ["img/Reaper-Portrait.jpg","Reaper","Dps/Dano","Há quem fale sobre um terrorista em um manto preto, conhecido apenas como Reaper. Sua identidade e motivações são um mistério. O que se sabe é que onde ele aparece, a morte o segue.","A MORTE ANDA ENTRE VOCÊS."],

    }
    document.getElementById("personagem").src = dict [personagem] [0]
    document.getElementById("nome").innerText = dict [personagem] [1]
    document.getElementById("descricao").innerText = dict [personagem] [2]
    document.getElementById("historia").innerText = dict [personagem] [3]
    document.getElementById("lema").innerText = dict [personagem] [4]
}
