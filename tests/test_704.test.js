test('sleep for 266 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 266));
});