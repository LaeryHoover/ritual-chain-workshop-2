const responses = [
  {
    symbol: "ETHUSD",
    price: 4200,
  },
  {
    symbol: "ETHUSD",
    price: 4300,
  },
  {
    symbol: "ETHUSD",
    price: 4100,
  },
];

function printResponse(
  response: { symbol: string; price: number },
) {
  console.log(
    `${response.symbol}: ${response.price}`,
  );
}

for (const response of responses) {
  printResponse(response);
}

const average =
  responses.reduce(
    (total, response) =>
      total + response.price,
    0,
  ) / responses.length;

console.log("average:", average);
