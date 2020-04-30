
// base:
// mal e mau
// mas e mais
// porque, por que, porquê...

if (input === undefined){
    var input = document.querySelectorAll('[contenteditable]')[1]
    var explains = [

        { id: 1, keys: 'mas,mais', content: '"Mas" é uma conjunção adversativa e equivale a "porém", "contudo", "entretanto", "no entanto". \n Por exemplo: Fez muita força para abrir a porta, mas não conseguiu. \n\n "Mais" pode atuar como pronome ou advérbio de intensidade, opondo - se geralmente a "menos". \n Por exemplo: Ela fez mais trabalhos durante o ano. A Alemanha é um dos países mais ricos do mundo. \n\n fonte: https://www.soportugues.com.br/secoes/FAQresposta.php?id=56' },
        
        { id: 3, keys: 'mau,mal', content: 'Mau é sempre adjetivo, e significa "ruim", "imperfeito", que causa prejuízos. É antônimo de bom, faz o plural com maus e o feminino é má. \nEx: Aquele artista sempre fazia o papel de homem mau. \n\n Mal, pode ser classificada como advérbio de modo, quando significa "incorretamente", "erradamente".Nesse caso, é invariável e seu antônimo é o advérbio bem.Como advérbio, refere - se sempre a um verbo. \nEx: Ela comia muito mal. \n\n fonte: https://guiadoestudante.abril.com.br/blog/duvidas-portugues/8220-mal-8221-ou-8220-mau-8221/' },

        { id: 2, keys: 'porque', content: 'Porque É conjunção e pode ser usado para indicar uma causa ou explicação de algo. Pode ter valor aproximado de "pois", "uma vez que" etc.\n Exemplos: \n Não fui ao cinema porque tenho que estudar para a prova. (pois)\n Não vá fazer intrigas porque prejudicará você mesmo. (uma vez que)\n Fonte: https://brasilescola.uol.com.br/gramatica/por-que.htm' }, 

        { id: 4, keys: 'por que', content: 'Por que O por que tem dois empregos diferenciados:\n Quando for a junção da preposição por + pronome interrogativo que, possuirá o significado de "por qual razão" ou "por qual motivo":\n Exemplos: Por que você não vai ao cinema? (por qual razão)\n Não sei por que não quero ir. (por qual motivo)\n Quando for a junção da preposição por + pronome relativo que, possuirá o significado de "pelo qual" e poderá ter as flexões: pela qual, pelos quais, pelas quais. Exemplo: \n Os lugares por que passamos eram encantadores. (pelos quais)\n Fonte: https://brasilescola.uol.com.br/gramatica/por-que.htm' },

        { id: 5, keys: 'por quê', content: 'Por quê Quando vier antes de um ponto (final, interrogativo, exclamação), o por quê deverá vir acentuado e continuará com o significado de "por qual motivo", "por qual razão". \n\n Vocês não comeram tudo? Por quê?\n Andar cinco quilômetros, por quê? Vamos de carro.\n Fonte: https://brasilescola.uol.com.br/gramatica/por-que.htm' },

        { id: 6, keys: 'porquê', content: 'Porquê É substantivo e tem significado de "motivo", "razão". Vem acompanhado de determinante, como um artigo, pronome, adjetivo ou numeral.\n Exemplos:\n O porquê de não estar conversando é porque quero estar concentrada. (motivo)\n Diga-me um porquê para não fazer o que devo. (uma razão)\n Fonte: https://brasilescola.uol.com.br/gramatica/por-que.htm' },
    ]

    var rules = [
        {  key: 'mas', explainId: 1 },
        {  key: 'mais', explainId: 1 },

        {  key: 'mal', explainId: 3 },
        {  key: 'mau', explainId: 3 },

        { key: 'porque', explainId: 2 },
        {  key: 'por que', explainId: 4 },
        {  key: 'por quê', explainId: 5 },
        {  key: 'porquê', explainId: 6 },
    ]
}

document.querySelectorAll('[contenteditable]')[1].removeEventListener('DOMSubtreeModified', listener)
input.addEventListener('DOMSubtreeModified', e => listener(e, rules, input.textContent))

if (container === undefined) {
    var container = document.createElement('div')
    var body = document.querySelector('body')
    var style = document.createElement('style')

    style.type = 'text/css';
    style.innerHTML = `
        .container__portdi__float {
            display: block;
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 999;
            background: #c5c5c5;
            width: 330px;
            height: 330px;
            padding: 10px;
            box-sizing: border-box;
            border-radius: 10px;
            color: #333;
        }

        .text__portdi__content {
            word-wrap: break-word;
        }
    `

    document.getElementsByTagName('head')[0].appendChild(style)
}

container.className = `container__portdi__float`

dragElement(container)

function listener(e, rules, text) {

    if(text.trim().length === 0) return 

    rules.forEach(rule => {
        if (rule.key.toLowerCase() === text.toLowerCase()){
            let explain = explains.find(ex => ex.id === rule.explainId)
            
            console.log('[DICA: ]', explain.content)

            container.innerHTML = `
                <h3>DICA</h3><br/>
                <p class="text__portdi__content">
                    ${explain.content}
                </p>
            `
            body.appendChild(container)
            
        }
    })
}


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}