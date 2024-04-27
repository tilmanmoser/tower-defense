export type LevelData = {
  map: string;
  tiles: {
    cols: number;
    rows: number;
    width: number;
    height: number;
  };
  restrictedTiles: number[][];
  waypoints: { x: number; y: number }[][];
  intruders: {
    image: string;
    width: number;
    height: number;
    frames: number;
    duration: number;
    speed: number;
    waypointsIndex: number;
    health: number;
    revenue: number;
    air: boolean;
    shadow?: number;
  }[];
  waves: number[][];
  turrets: {
    image: string;
    icon: string;
    cost: number;
    width: number;
    height: number;
    radius: number;
    projectiles: {
      speed: number;
      offset: number;
      damage: number;
      reloading: number;
      air: boolean;
      slow: number;
    };
    audio: {
      launch: [number, number];
      hit: [number, number];
    };
  }[];
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
      [
        { x: 0, y: -256 },
        { x: 0, y: 2816 },
      ],
    ],
    intruders: [
      {
        image: "/soldier0.png",
        width: 128,
        height: 128,
        frames: 4,
        duration: 6,
        speed: 2,
        waypointsIndex: 0,
        health: 100,
        revenue: 25,
        air: false,
      },
      {
        image: "/tank0.png",
        width: 128,
        height: 128,
        frames: 8,
        duration: 24,
        speed: 1,
        waypointsIndex: 0,
        health: 300,
        revenue: 50,
        air: false,
      },
      {
        image: "/soldier1.png",
        width: 128,
        height: 128,
        frames: 4,
        duration: 8,
        speed: 4,
        waypointsIndex: 0,
        health: 150,
        revenue: 50,
        air: false,
      },

      {
        image: "/plane1.png",
        width: 128,
        height: 128,
        frames: 1,
        duration: 0,
        speed: 1,
        waypointsIndex: 1,
        health: 100,
        revenue: 50,
        shadow: 1,
        air: true,
      },
      {
        image: "/plane0.png",
        width: 128,
        height: 128,
        frames: 1,
        duration: 0,
        speed: 1,
        waypointsIndex: 1,
        health: 200,
        revenue: 100,
        shadow: 1,
        air: true,
      },
    ],
    waves: [
      [0],
      [0, 0],
      [0, 0, 0, 0],
      [0, 0, 1],
      [0, 0, 0, 0, 1, 1],
      [2, 2],
      [3, 3],
      [0, 0, 1, 1, 3, 3],
      [1, 1, 0, 0, 0, 0, 1, 1, 2, 2],
      [4, 4],
      [1, 1, 1, 1, 3, 3, 4, 4],
      [2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [4, 4, 4, 4, 3, 3, 3, 3],
      [2, 2, 2, 2, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 4, 4],
      [
        2, 2, 2, 2, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 4, 4, 2, 2,
        3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 4, 4,
      ],
    ],
    turrets: [
      {
        image: "/turret0.png",
        icon: "/turret0-icon.png",
        cost: 25,
        width: 128,
        height: 128,
        radius: 3 * 128,
        projectiles: {
          speed: 4,
          offset: 46,
          damage: 5,
          reloading: 4,
          air: false,
          slow: 0,
        },
        audio: {
          launch: [0, 200],
          hit: [200, 400],
        },
      },
      {
        image: "/turret1.png",
        icon: "/turret1-icon.png",
        cost: 100,
        width: 128,
        height: 128,
        radius: 5 * 128,
        projectiles: {
          speed: 12,
          offset: 30,
          damage: 15,
          reloading: 60,
          air: false,
          slow: 0,
        },

        audio: {
          launch: [600, 650],
          hit: [1300, 750],
        },
      },
      {
        image: "/turret4.png",
        icon: "/turret4-icon.png",
        cost: 100,
        width: 128,
        height: 128,
        radius: 2 * 128,
        projectiles: {
          speed: 8,
          offset: 30,
          damage: 0,
          reloading: 60,
          air: false,
          slow: -0.5,
        },
        audio: {
          launch: [2100, 700],
          hit: [2800, 500],
        },
      },
      {
        image: "/turret3.png",
        icon: "/turret3-icon.png",
        cost: 25,
        width: 128,
        height: 128,
        radius: 5 * 128,
        projectiles: {
          speed: 8,
          offset: 30,
          damage: 5,
          reloading: 8,
          air: true,
          slow: 0,
        },
        audio: {
          launch: [3300, 600],
          hit: [3900, 500],
        },
      },
      {
        image: "/turret2.png",
        icon: "/turret2-icon.png",
        cost: 100,
        width: 128,
        height: 128,
        radius: 5 * 128,
        projectiles: {
          speed: 12,
          offset: 30,
          damage: 15,
          reloading: 60,
          air: true,
          slow: 0,
        },
        audio: {
          launch: [4400, 500],
          hit: [4900, 470],
        },
      },
    ],
  },
];
