test('sleep for 314 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 314));
});