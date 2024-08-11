test('sleep for 303 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 303));
});