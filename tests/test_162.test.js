test('sleep for 254 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 254));
});