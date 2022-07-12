const draggableListItems = document.querySelectorAll('.draggable-list div');
const endMessage = document.getElementById('endMessage');
const clear = document.getElementById('results');

// current phrase being dragged
let selectedId;

//target phrase
let dropTargetId;

//counter for correct phrases
let matchingCounter = 0;

addEventListener();

function dragStart() {
  selectedId = this.id;
}

function dragEnter() {
  this.classList.add('over');
}

function dragLeave() {
  this.classList.remove('over');
}

function dragOver(ev) {
  ev.preventDefault();
}

function dragDrop() {
  dropTargetId = this.id;

  if (checkForMatch(selectedId, dropTargetId)) {
    document.getElementById(selectedId).style.display = 'none';
    document.getElementById(dropTargetId).style.display = 'none';
    clear.style.display = 'none';
    matchingCounter++;
    alert("Acertou XD");
  } else {
    alert("Falta pouco !");
  }

  if (matchingCounter === 1 ) {
    endMessage.style.display = 'block';
  }

  this.classList.remove('over');
}

function checkForMatch(selected, dropTarget) {
  switch (selected) {
    case 'e1':
      return dropTarget === 's1' ? true : false;

    case 'e2':
      return dropTarget === 's2' ? true : false;

    case 'e3':
      return dropTarget === 's3' ? true : false;

    case 'e4':
      return dropTarget === 's4' ? true : false;

    case 'e5':
      return dropTarget === 's5' ? true : false;

    default:
      return false;
  }
}

function playAgain() {
  matchingCounter = 0;
  endMessage.style.display = 'none';
  clear.style.display = 'flex';
  draggableListItems.forEach(item => {
    document.getElementById(item.id).style.display = 'block';
  })
}



function addEventListener(){
  draggableListItems.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragleave', dragLeave);
  })
}
