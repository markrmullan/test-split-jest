test('sleep for 351 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 351));
});