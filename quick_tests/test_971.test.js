test('sleep for 372 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 372));
});