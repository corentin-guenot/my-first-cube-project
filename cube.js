const queueOptions = {
    continueWaitTimeout: 300,
  };
  
  module.exports = {
    logger: (msg, params) => {
      console.log(`${msg}: ${JSON.stringify(params)}`);
    },
    orchestratorOptions: {
      continueWaitTimeout: 300,
  
      queryCacheOptions: {
        refreshKeyRenewalThreshold: 30,
        backgroundRenew: true,
        queueOptions,
      },
      preAggregationsOptions: { queueOptions },
    },
  };