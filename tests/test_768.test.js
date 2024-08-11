test('sleep for 583 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 583));
});