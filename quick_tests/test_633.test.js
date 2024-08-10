test('sleep for 399 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 399));
});