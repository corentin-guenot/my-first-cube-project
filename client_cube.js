import cubejs from '@cubejs-client/core';

const cubejsApi = cubejs({
  apiUrl: 'http://localhost:4000/cubejs-api/v1',
});

cubejsApi.defineSchema((Schema) => {
  Schema.createCube({
    name: 'orders',
    measures: {
      totalAmount: {
        type: 'count',
      },
    },
    dimensions: {
      category: {
        type: 'string',
      },
    },
  });

  Schema.createCube({
    name: 'all_orders',
    extends: 'orders',
    dimensions: {
      category: {
        sql: `${CUBE}.\`category\``,
      },
    },
  });
});

const result = await cubejsApi.load({
  measures: ['all_orders.totalAmount'],
  dimensions: ['all_orders.category'],
});

console.log(result);
