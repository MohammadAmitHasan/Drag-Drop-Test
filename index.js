const colorCells = document.getElementsByTagName('p');
const columns = document.getElementsByClassName('choice');
let dragItem = null;

for (const color of colorCells) {
    color.addEventListener('dragstart', dragStart);
    color.addEventListener('dragend', dragEnd);
    color.style.background = color.id;
}

function dragStart() {
    dragItem = this;
    setTimeout(() => this.style.display = "none", 0);
}

function dragEnd(ev) {
    setTimeout(() => this.style.display = "block", 0);
    dragItem = null;
}

for (const column of columns) {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
    column.addEventListener('drop', Drop);
}

function Drop() {
    if (this.querySelector('#' + dragItem.id)) {
        return;
    }
    this.append(dragItem)
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
}

function dragLeave() { }
