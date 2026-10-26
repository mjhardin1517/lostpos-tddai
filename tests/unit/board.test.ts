import {describe, it, expect} from 'vitest';
import {parseBoard} from '@/lib/board';

/**
 * Clean up the white space in the string that represents a board map
 * @param str Visually nice string template map
 */
function map(str: string): string {
    return str.trim().split('\n').map((line) => line.trim()).join('\n');
}

describe('parseBoard', () => {
    it('reads width and height from an ASCII map', () => {
        const board = parseBoard(map(`
            ...
            ...
            ...
        `));

        expect(board.width).toBe(3);
        expect(board.height).toBe(3);
    });

    it('treats floor character . as traversable and transparent', () => {
        const board = parseBoard(map(`
            ...
            ...
            ...
        `));

        expect(board.isTraversable(0, 0)).toBe(true);
        expect(board.isTransparent(0, 0)).toBe(true);
    });

    it('treats wall characters - and | as not traversable and not transparent', () => {
        const board = parseBoard(map(`
            ---
            |.|
            ---
        `));

        // Horizontal wall
        expect(board.isTraversable(0, 0)).toBe(false);
        expect(board.isTransparent(0, 0)).toBe(false);
        // Vertical wall
        expect(board.isTraversable(0, 1)).toBe(false);
        expect(board.isTransparent(0, 1)).toBe(false);
    });

    it('treats closed door character + as not traversable and not transparent', () => {
       const board = parseBoard(map(`
            ---
            |.+
            ---
        `))

        expect(board.isTraversable(2, 1)).toBe(false);
        expect(board.isTransparent(2, 1)).toBe(false);
    });

    it('treats open door character \' as traversable and transparent', () => {
        const board = parseBoard(map(`
            ---
            |.'
            ---
        `))

        expect(board.isTraversable(2, 1)).toBe(true);
        expect(board.isTransparent(2, 1)).toBe(true);
    });
});