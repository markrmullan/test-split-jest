test('sleep for 51 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 51));
});