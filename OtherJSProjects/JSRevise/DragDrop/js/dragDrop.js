const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

//Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//Loop through the empties blocks & call drag events
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);

}

//Drag functions
function dragStart() {
    console.log('start');
    //Need an invisible class or double effect created
    this.className += ' hold';
    setTimeout((() => this.className = 'invisible'), 0);
}

function dragEnd() {
    console.log('end');
    //Make sure it doesn't disapear when you let go
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
    console.log('over');
}

function dragEnter(e) {
    e.preventDefault();
    //Give dashed border & background
    this.className += ' hovered';
    console.log('enter');
}

function dragLeave() {
    this.className += 'empty';
    console.log('leave');
}

function dragDrop() {
    this.className = 'empty';
    this.append(fill);
    console.log('drop');
}