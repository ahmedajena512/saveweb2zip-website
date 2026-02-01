const PIECE_CHARACTERS = {
    w: {
        p: 'o',
        n: 'm',
        b: 'v',
        r: 't',
        q: 'w',
        k: 'l'
    },
    b: {
        p: 'o',
        n: 'm',
        b: 'v',
        r: 't',
        q: 'w',
        k: 'l'
    }
};

const INITIAL_BOARD = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
];

class ChessGame {
    constructor() {
        this.board = JSON.parse(JSON.stringify(INITIAL_BOARD));
        this.turn = 'w';
        this.selectedSquare = null;
        this.validMoves = [];
        this.gameOver = false;
        this.boardEl = document.getElementById('board');
        this.statusEl = document.getElementById('status-display');
        this.isAnimating = false;

        this.initBoard();
        this.updateStatus("Your Turn (White)");
        this.boardEl.addEventListener('click', this.handleSquareClick.bind(this));
    }

    initBoard() {
        this.boardEl.innerHTML = '';
        const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];
        const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                const square = document.createElement('div');
                square.className = `square ${(r + c) % 2 === 0 ? 'white' : 'black'}`;
                square.dataset.r = r;
                square.dataset.c = c;
                square.id = `square-${r}-${c}`;

                if (c === 0) {
                    const rankEl = document.createElement('span');
                    rankEl.className = 'coord coord-rank';
                    rankEl.textContent = ranks[r];
                    square.appendChild(rankEl);
                }
                if (r === 7) {
                    const fileEl = document.createElement('span');
                    fileEl.className = 'coord coord-file';
                    fileEl.textContent = files[c];
                    square.appendChild(fileEl);
                }

                this.boardEl.appendChild(square);
            }
        }
        this.updatePieces();
    }

    updatePieces() {
        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                const piece = this.board[r][c];
                const square = document.getElementById(`square-${r}-${c}`);
                const currentPieceEl = square.querySelector('.chess-piece');

                if (piece === ' ') {
                    if (currentPieceEl) currentPieceEl.remove();
                    continue;
                }

                const color = piece === piece.toUpperCase() ? 'w' : 'b';
                const type = piece.toLowerCase();
                const char = PIECE_CHARACTERS[color][type];

                if (!currentPieceEl) {
                    this.createPiece(r, c, piece);
                } else {
                    // Update piece if it changed (e.g. capture or promotion)
                    if (currentPieceEl.textContent !== char) {
                        currentPieceEl.textContent = char;
                    }
                    // Always re-apply formatting in case of state change weirdness, though mostly static for same piece
                    this.stylePiece(currentPieceEl, color);
                    currentPieceEl.dataset.r = r;
                    currentPieceEl.dataset.c = c;
                }
            }
        }
    }

    stylePiece(el, color) {
        if (color === 'w') {
            el.style.color = '#ffffff';
            // Stronger black outline (stroke effect) + visual depth
            el.style.textShadow =
                '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 3px 4px rgba(0,0,0,0.4)';
        } else {
            el.style.color = '#1a1a1a';
            // White outline for contrast + visual depth
            el.style.textShadow =
                '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 3px 4px rgba(0,0,0,0.4)';
        }
    }

    createPiece(r, c, piece) {
        const color = piece === piece.toUpperCase() ? 'w' : 'b';
        const type = piece.toLowerCase();
        const square = document.getElementById(`square-${r}-${c}`);

        const pieceEl = document.createElement('div');
        pieceEl.textContent = PIECE_CHARACTERS[color][type];
        pieceEl.className = 'chess-piece';

        this.stylePiece(pieceEl, color);

        pieceEl.dataset.r = r;
        pieceEl.dataset.c = c;
        pieceEl.id = `piece-${r}-${c}-${Date.now()}`;

        square.appendChild(pieceEl);
        return pieceEl;
    }

    handleSquareClick(e) {
        if (this.gameOver || this.turn !== 'w' || this.isAnimating) return;

        const square = e.target.closest('.square');
        if (!square) return;

        const r = parseInt(square.dataset.r);
        const c = parseInt(square.dataset.c);
        const piece = this.board[r][c];
        const isWhitePiece = piece !== ' ' && piece === piece.toUpperCase();

        if (isWhitePiece) {
            this.clearHighlights();
            this.selectedSquare = { r, c };
            square.classList.add('selected');
            this.validMoves = this.getLegalMoves(r, c, this.board);
            this.validMoves.forEach(m => {
                document.getElementById(`square-${m.r}-${m.c}`).classList.add('valid-move');
            });
            return;
        }

        if (this.selectedSquare) {
            const move = this.validMoves.find(m => m.r === r && m.c === c);
            if (move) {
                this.executeMove(this.selectedSquare, { r, c });
                this.selectedSquare = null;
                this.validMoves = [];
            } else {
                this.clearHighlights();
                this.selectedSquare = null;
                this.validMoves = [];
            }
        }
    }

    clearHighlights() {
        document.querySelectorAll('.square').forEach(s => {
            s.classList.remove('selected', 'valid-move');
        });
    }

    async executeMove(from, to) {
        this.isAnimating = true;
        this.clearHighlights();

        const fromSq = document.getElementById(`square-${from.r}-${from.c}`);
        const toSq = document.getElementById(`square-${to.r}-${to.c}`);
        const pieceEl = fromSq.querySelector('.chess-piece');

        if (!pieceEl) {
            this.makeMove(from, to);
            this.updatePieces();
            this.onMoveComplete();
            this.isAnimating = false;
            return;
        }

        const fromRect = fromSq.getBoundingClientRect();
        const toRect = toSq.getBoundingClientRect();

        const deltaX = toRect.left - fromRect.left;
        const deltaY = toRect.top - fromRect.top;

        // Visual Capture Check
        const capturedPieceEl = toSq.querySelector('.chess-piece');
        if (capturedPieceEl) {
            capturedPieceEl.style.transition = 'opacity 0.2s, transform 0.2s';
            capturedPieceEl.style.opacity = '0';
            capturedPieceEl.style.transform = 'scale(0.5)';
        }

        // Pro Lift Animation
        pieceEl.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        pieceEl.style.zIndex = '100';
        pieceEl.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.1)`;

        await new Promise(resolve => setTimeout(resolve, 400));

        // Sync logical state
        this.makeMove(from, to);

        // Instant DOM rearrange to finalize position without flicker
        if (capturedPieceEl) capturedPieceEl.remove();
        toSq.appendChild(pieceEl);
        pieceEl.style.transition = 'none';
        pieceEl.style.transform = 'none';
        pieceEl.style.zIndex = '10';

        this.updatePieces(); // Catch any other changes (promotion etc)
        this.isAnimating = false;

        if (this.checkWinCondition()) return;
        this.onMoveComplete();
    }

    onMoveComplete() {
        if (this.turn === 'w') {
            this.turn = 'b';
            this.updateStatus("Computer Thinking...");
            setTimeout(() => this.computerMove(), 300);
        } else {
            this.turn = 'w';
            this.updateStatus("Your Turn (White)");
        }
    }

    makeMove(from, to) {
        this.board[to.r][to.c] = this.board[from.r][from.c];
        this.board[from.r][from.c] = ' ';
    }

    computerMove() {
        const moves = this.getAllAllMoves('b');
        if (moves.length === 0) {
            this.gameOver = true;
            this.updateStatus("Checkmate! You Win!");
            return;
        }

        moves.sort(() => Math.random() - 0.5);

        let bestMove = null;
        let bestScore = -Infinity;

        for (const move of moves) {
            const savedPiece = this.board[move.to.r][move.to.c];
            this.board[move.to.r][move.to.c] = this.board[move.from.r][move.from.c];
            this.board[move.from.r][move.from.c] = ' ';

            const score = this.evaluateBoard();

            this.board[move.from.r][move.from.c] = this.board[move.to.r][move.to.c];
            this.board[move.to.r][move.to.c] = savedPiece;

            if (score > bestScore) {
                bestScore = score;
                bestMove = move;
            }
        }

        if (bestMove) {
            this.executeMove(bestMove.from, bestMove.to);
        }
    }

    getAllAllMoves(color) {
        let moves = [];
        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                const piece = this.board[r][c];
                if (piece === ' ') continue;
                const isCorrectColor = (color === 'w') ? (piece === piece.toUpperCase()) : (piece === piece.toLowerCase());
                if (isCorrectColor) {
                    const pieceMoves = this.getPieceMoves(r, c, piece, this.board);
                    pieceMoves.forEach(to => moves.push({ from: { r, c }, to }));
                }
            }
        }
        return moves;
    }

    getLegalMoves(r, c, board) {
        return this.getPieceMoves(r, c, board[r][c], board);
    }

    getPieceMoves(r, c, piece, board) {
        let moves = [];
        const type = piece.toLowerCase();
        const isWhite = piece === piece.toUpperCase();

        const isValid = (nr, nc) => nr >= 0 && nr < 8 && nc >= 0 && nc < 8;
        const isEmpty = (nr, nc) => board[nr][nc] === ' ';
        const isEnemy = (nr, nc) => {
            const p = board[nr][nc];
            if (p === ' ') return false;
            return isWhite ? (p === p.toLowerCase()) : (p === p.toUpperCase());
        };

        const dirs = {
            'r': [[0, 1], [0, -1], [1, 0], [-1, 0]],
            'b': [[1, 1], [1, -1], [-1, 1], [-1, -1]],
            'n': [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]],
            'q': [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]],
            'k': [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]
        };

        if (type === 'p') {
            const f = isWhite ? -1 : 1;
            const start = isWhite ? 6 : 1;
            if (isValid(r + f, c) && isEmpty(r + f, c)) {
                moves.push({ r: r + f, c });
                if (r === start && isEmpty(r + f * 2, c)) moves.push({ r: r + f * 2, c });
            }
            [[f, -1], [f, 1]].forEach(([dr, dc]) => {
                if (isValid(r + dr, c + dc) && isEnemy(r + dr, c + dc)) moves.push({ r: r + dr, c: c + dc });
            });
        } else if (['r', 'b', 'q'].includes(type)) {
            dirs[type].forEach(([dr, dc]) => {
                let nr = r + dr, nc = c + dc;
                while (isValid(nr, nc)) {
                    if (isEmpty(nr, nc)) moves.push({ r: nr, c: nc });
                    else {
                        if (isEnemy(nr, nc)) moves.push({ r: nr, c: nc });
                        break;
                    }
                    nr += dr; nc += dc;
                }
            });
        } else if (['n', 'k'].includes(type)) {
            dirs[type].forEach(([dr, dc]) => {
                if (isValid(r + dr, c + dc) && (isEmpty(r + dr, c + dc) || isEnemy(r + dr, c + dc))) moves.push({ r: r + dr, c: c + dc });
            });
        }
        return moves;
    }

    evaluateBoard() {
        const vals = { p: 10, n: 30, b: 30, r: 50, q: 90, k: 900 };
        let s = 0;
        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                const p = this.board[r][c];
                if (p === ' ') continue;
                const v = vals[p.toLowerCase()];
                s += (p === p.toLowerCase() ? v : -v);
            }
        }
        return s;
    }

    checkWinCondition() {
        let wk = false, bk = false;
        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                if (this.board[r][c] === 'K') wk = true;
                if (this.board[r][c] === 'k') bk = true;
            }
        }
        if (!wk) { this.gameOver = true; this.updateStatus("Checkmate! Computer Wins!"); return true; }
        if (!bk) { this.gameOver = true; this.updateStatus("Checkmate! You Win!"); return true; }
        return false;
    }

    updateStatus(msg) { this.statusEl.textContent = msg; }

    reset() {
        this.board = JSON.parse(JSON.stringify(INITIAL_BOARD));
        this.turn = 'w';
        this.gameOver = false;
        this.selectedSquare = null;
        this.validMoves = [];
        this.isAnimating = false;
        this.initBoard();
        this.updateStatus("Your Turn (White)");
    }
}

const game = new ChessGame();
