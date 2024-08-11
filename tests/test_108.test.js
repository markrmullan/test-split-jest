test('sleep for 277 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 277));
});