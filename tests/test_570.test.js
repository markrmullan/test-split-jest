test('sleep for 984 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 984));
});