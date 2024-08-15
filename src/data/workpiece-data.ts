const workpieceData = [
  {
    id: 321545,
    time: "15:22",
    price: 300560,
    status: "workpiece",
    payment: "cart",
    orderType: "inside",
    comments: ["1", "2", "3"],
    freshnessState: true,
    products: [
      {
        title: "Гамбургер",
        count: 1,
        additionally: ["С сыром", "Без лука"],
      },
    ],
  },
  {
    id: 321545,
    time: "15:22",
    price: 300560,
    status: "workpiece",
    payment: "cart",
    comments: null,
    orderType: "inside",
    freshnessState: false,
    products: [
      {
        title: "Big Гамбургер",
        count: 1,
        additionally: ["С сыром", "Без лука"],
      },
      {
        title: "Пепси 0,5",
        count: 4,
        additionally: null,
      },
      {
        title: "Лаваш мясной Standart острый",
        count: 2,
        additionally: null,
      },
    ],
  },
  {
    id: 321545,
    time: "15:22",
    price: 300560,
    status: "workpiece",
    payment: "cart",
    comments: null,
    orderType: "pickup",
    freshnessState: false,
    products: [
      {
        title: "Гамбургер",
        count: 1,
        additionally: ["С сыром", "Без лука"],
      },
    ],
  },
];

export default workpieceData;
