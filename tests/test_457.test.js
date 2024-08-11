test('sleep for 305 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 305));
});