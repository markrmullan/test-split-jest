test('sleep for 290 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 290));
});