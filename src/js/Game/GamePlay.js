export default class GamePlay {
  constructor(container, size) {
    this.container = document.querySelector(container);
    this.boardSize = size;
    this.board = null;
    this.cells = [];
    this.goblin = null;
    this.currentPosition = null;

    this.drawUi();
  }

  init() {
    this.createGoblin();
    this.placeGoblin();
  }

  start() {
    this.init();
    setInterval(() => {
      this.placeGoblin();
    }, 500);
  }

  drawUi() {
    this.container.innerHTML = `
      <div class="board-container">
        <div class="board"></div>
      </div>
    `;

    this.board = this.container.querySelector('.board');

    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.board.appendChild(cell);
    }

    this.cells = Array.from(this.board.children);
  }

  getPosition() {
    let position;
    do {
      position = Math.floor(Math.random() * this.cells.length);
    } while (position === this.currentPosition);
    this.currentPosition = position;
    return position;
  }

  createGoblin() {
    const goblinEl = document.createElement('div');
    goblinEl.classList.add('goblin');
    this.goblin = goblinEl;
  }

  placeGoblin() {
    this.cells[this.getPosition()].appendChild(this.goblin);
  }
}
