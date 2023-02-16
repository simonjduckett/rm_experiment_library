//create container
function createContainer() {
    let c = document.createElement('div')
    c.classList.add('container')
    return c
}

//create a section with a container
function createSection(id, append) {
    let s = document.createElement('section')
    s.id = id;
    c = createContainer();
    s.appendChild(c)

    if(append) c.appendChild(append)

    return s
}

//create a row with cols using bootstrap classes
function createRow(id, cols = [{append: '', classes: ['col-12', 'col-md-6'] }]) {
    let row = document.createElement('div')
    row.classList.add('row')
    row.id = id

    cols.forEach(col => {
        let column = document.createElement('div')
        column.classList.add(...col.classes)
        if(col.append) column.appendChild(col.append)
        row.appendChild(column)
    })

    return row
}