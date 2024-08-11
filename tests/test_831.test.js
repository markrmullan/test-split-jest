test('sleep for 385 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 385));
});