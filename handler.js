"use strict";

module.exports.hello = async (event) => {
  let a = +event.queryStringParameters.a;
  let b = +event.queryStringParameters.b;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        resultado: a + b,
      },
      null,
      2
    ),
  };
};
