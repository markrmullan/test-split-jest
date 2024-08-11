test('sleep for 317 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 317));
});