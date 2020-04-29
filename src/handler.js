
// base:
// mal e mau
// porque, por que, porquê...

if (input === undefined){
    var input = document.querySelectorAll('[contenteditable]')[1]
    var explains = [
        { content: 'uso do mas tal tal tal', id: 1 },
        { content: 'uso do porque tal tal tal', id: 2 }
    ]
    var rules = [
        {  key: 'mas', explainId: 1 },
        {  key: 'porque', explainId: 2 },
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