export type LevelData = {
  map: string;
  tiles: {
    cols: number;
    rows: number;
    width: number;
    height: number;
  };
  restrictedTiles: number[][];
  waypoints: [{ x: number; y: number }[]];
  intruders: [
    {
      image: string;
      width: number;
      height: number;
      frames: number;
      speed: number;
      waypointsIndex: number;
      health: number;
      revenue: number;
    }
  ];
  waves: number[][];
  turrets: [
    {
      image: string;
      cost: number;
      width: number;
      height: number;
      radius: number;
      projectiles: {
        speed: number;
        offset: number;
        damage: number;
        reloading: number;
      };
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
    restrictedTiles: [
      // path tiles
      [
        0, 0, 542, 540, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        542, 540, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 542,
        563, 564, 564, 564, 564, 564, 521, 0, 0, 520, 564, 564, 564, 564, 521,
        0, 0, 0, 0, 543, 518, 518, 518, 518, 518, 519, 540, 0, 0, 542, 517, 518,
        518, 519, 540, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 542, 540, 0, 0, 542, 540,
        0, 0, 542, 540, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 542, 540, 0, 0, 542, 540,
        0, 0, 542, 540, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 542, 563, 564, 564, 565,
        540, 0, 0, 542, 540, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 543, 518, 518, 518,
        518, 544, 0, 0, 542, 540, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 542, 540, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        542, 540, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 542,
        540, 0, 0, 0, 0, 520, 564, 564, 564, 564, 521, 0, 0, 0, 0, 0, 0, 0, 0,
        542, 540, 0, 0, 0, 0, 542, 517, 518, 518, 519, 540, 0, 0, 0, 0, 0, 0, 0,
        0, 542, 540, 0, 0, 0, 0, 542, 540, 0, 0, 542, 540, 0, 0, 0, 0, 0, 0, 0,
        0, 542, 540, 0, 0, 0, 0, 542, 540, 0, 0, 542, 563, 564, 564, 564, 564,
        564, 564, 564, 564, 565, 540, 0, 0, 0, 0, 542, 540, 0, 0, 543, 518, 518,
        518, 518, 518, 518, 518, 518, 518, 518, 544, 0, 0, 0, 0, 542, 540, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 542, 540, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 542, 540, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 542, 540, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
      ],
      // obstacle tiles
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 434, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 432, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 434, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 434, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 436, 0,
        437, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 431, 435, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 432, 0, 0, 0, 0, 0, 0, 0, 0, 0, 434, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
    ],
    waypoints: [
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
        image: "/intruder0.png",
        width: 128,
        height: 128,
        frames: 4,
        speed: 2,
        waypointsIndex: 0,
        health: 100,
        revenue: 25,
      },
    ],
    waves: [[0], [0, 0], [0, 0, 0, 0]],
    turrets: [
      {
        image: "/turret0.png",
        cost: 25,
        width: 128,
        height: 128,
        radius: 3 * 128,
        projectiles: {
          speed: 4,
          offset: 46,
          damage: 5,
          reloading: 4,
        },
      },
    ],
  },
];
