type TileProperties = {
  traversable: boolean;
  transparent: boolean;
};

const TILES: Record<string, TileProperties> = {
  ".": { traversable: true, transparent: true },
  "-": { traversable: false, transparent: false },
  "|": { traversable: false, transparent: false },
  "+": { traversable: false, transparent: false },
  "'": { traversable: true, transparent: true },
};

const NOTHING: TileProperties = { traversable: false, transparent: false };

export type Board = {
  width: number;
  height: number;
  isTraversable(x: number, y: number): boolean;
  isTransparent(x: number, y: number): boolean;
};

export function parseBoard(map: string): Board {
  const rows = map.split("\n");
  const height = rows.length;
  const width = Math.max(0, ...rows.map((row) => row.length));

  const tileAt = (x: number, y: number): TileProperties =>
    TILES[rows[y]?.[x] ?? ""] ?? NOTHING;

  return {
    width,
    height,
    isTraversable: (x, y) => tileAt(x, y).traversable,
    isTransparent: (x, y) => tileAt(x, y).transparent,
  };
}
