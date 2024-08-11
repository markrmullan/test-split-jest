test('sleep for 387 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 387));
});