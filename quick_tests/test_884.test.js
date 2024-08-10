test('sleep for 407 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 407));
});