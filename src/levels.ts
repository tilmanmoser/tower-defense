export type LevelData = {
  map: string;
  tiles: {
    cols: number;
    rows: number;
    width: number;
    height: number;
  };
  paths: [{ x: number; y: number }[]];
  intruders: [
    {
      image: string;
      width: number;
      height: number;
      frames: number;
      speed: number;
      pathIndex: number;
    }
  ];
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
    paths: [
      [
        { x: 384, y: -256 },
        { x: 384, y: 384 },
        { x: 1152, y: 384 },
        { x: 1152, y: 896 },
        { x: 1664, y: 896 },
        { x: 1664, y: 384 },
        { x: 2176, y: 384 },
        { x: 2176, y: 1920 },
        { x: 896, y: 1920 },
        { x: 896, y: 1536 },
        { x: 384, y: 1536 },
        { x: 384, y: 2816 },
      ],
    ],
    intruders: [
      {
        image: "/soldier.png",
        width: 128,
        height: 128,
        frames: 4,
        speed: 2,
        pathIndex: 0,
      },
    ],
  },
];
