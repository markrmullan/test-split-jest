test('sleep for 196 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 196));
});