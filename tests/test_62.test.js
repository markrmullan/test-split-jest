test('sleep for 366 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 366));
});