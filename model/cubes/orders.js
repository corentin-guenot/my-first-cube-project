cube(`orders`, {
  sql_table: `public.orders`,
  data_source: `default`,
  joins: {},
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    status: {
      sql: `status`,
      type: `string`
    },
    created_at: {
      sql: `created_at`,
      type: `time`
    },
    completed_at: {
      sql: `completed_at`,
      type: `time`
    }
  },
  measures: {
    count: {
      type: `count`
    },
    number: {
      sql: `number`,
      type: `sum`
    }
  },
  pre_aggregations: {// Pre-aggregation definitions go here.
    main: {
      measures: [orders.count],
      dimensions: [orders.status],
      timeDimension: orders.created_at,
      granularity: `day`
    },
    test: {
      measures: [orders.count],
      dimensions: [orders.status],
      timeDimension: orders.created_at,
      granularity: `day`
    },
    test2: {
      measures: [orders.count],
      dimensions: [orders.status]
    }
 
  },
  

});