
// base:
// mal e mau
// mas e mais
// porque, por que, porquê...

if (input === undefined){
    var input = document.querySelectorAll('[contenteditable]')[1]
    var explains = [

        { id: 1, keys: 'mas,mais', content: '"Mas" é uma conjunção adversativa e equivale a "porém", "contudo", "entretanto", "no entanto". \n Por exemplo: Fez muita força para abrir a porta, mas não conseguiu. \n\n "Mais" pode atuar como pronome ou advérbio de intensidade, opondo - se geralmente a "menos". \n Por exemplo: Ela fez mais trabalhos durante o ano. A Alemanha é um dos países mais ricos do mundo. \n\n fonte: https://www.soportugues.com.br/secoes/FAQresposta.php?id=56' },
        
        { id: 2, keys: 'porque', content: 'uso do porque tal tal tal' }, //falta

        { id: 3, keys: 'mau,mal', content: 'Mau é sempre adjetivo, e significa "ruim", "imperfeito", que causa prejuízos. É antônimo de bom, faz o plural com maus e o feminino é má. \nEx: Aquele artista sempre fazia o papel de homem mau. \n\n Mal, pode ser classificada como advérbio de modo, quando significa "incorretamente", "erradamente".Nesse caso, é invariável e seu antônimo é o advérbio bem.Como advérbio, refere - se sempre a um verbo. \nEx: Ela comia muito mal. \n\n fonte: https://guiadoestudante.abril.com.br/blog/duvidas-portugues/8220-mal-8221-ou-8220-mau-8221/' }
    ]

    var rules = [
        {  key: 'mas', explainId: 1 },
        {  key: 'mais', explainId: 1 },

        {  key: 'porque', explainId: 2 }, // falta

        {  key: 'mal', explainId: 3 },
        {  key: 'mau', explainId: 3 },
    ]
}

document.querySelectorAll('[contenteditable]')[1].removeEventListener('DOMSubtreeModified', listener)

input.addEventListener('DOMSubtreeModified', e => listener(e, rules, input.textContent))

function listener(e, rules, text) {

    if(text.trim().length === 0) return 

    rules.forEach(rule => {
        if (rule.key === text){
            let explain = explains.find(ex => ex.id === rule.explainId)
            console.log('[DICA: ]', explain.content)
        }
    })
}