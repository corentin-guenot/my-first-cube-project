import cubejs from '@cubejs-client/core';

const cubejsApi = cubejs({
  // Remplacez l'URL par celle de votre serveur Cube.js
  apiUrl: 'http://localhost:4000/cubejs-api/v1',
});

cube(`orders`, {
    measures: {
      totalAmount: {
        type: `count`,
      },
    },
  
    dimensions: {
      category: {
        type: `string`,
      },
    },
  });
  
cube(`all_orders`, {
    extends: `orders`,
    dimensions: {
      category: {
        sql: `${CUBE}.\`category\``,
      },
    },
  });
  

const result = await cubejsApi.load({
  measures: ['all_orders.totalAmount'],
  dimensions: ['all_orders.category'],
});

console.log(result);