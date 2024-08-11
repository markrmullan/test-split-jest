test('sleep for 471 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 471));
});