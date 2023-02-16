//make an experiment starter template
//actually already got one, just need to update it to include this library, I'll add to kentico so you can just import it

window.onload = (event) => {
    (function run() {
        let b = document.body

        b.appendChild(createContentSection())
    })();

    function createContentSection() {
        
        
        let r = createRow('myrow', [
            {classes: ['col-12', 'col-md-6']},
            {classes: ['col-12', 'col-md-6']}
        ])
        let content = createSection('content', r)
        
        return content
    }
}