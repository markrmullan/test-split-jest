test('sleep for 343 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 343));
});