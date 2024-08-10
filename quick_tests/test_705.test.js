test('sleep for 395 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 395));
});