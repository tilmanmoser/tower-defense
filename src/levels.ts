export type LevelData = {
  map: string;
  tiles: {
    cols: number;
    rows: number;
    width: number;
    height: number;
  };
};

export const levels: LevelData[] = [
  {
    map: "/map.png",
    tiles: {
      cols: 20,
      rows: 20,
      width: 128,
      height: 128,
    },
  },
];
