test('sleep for 18980 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 18980));
});