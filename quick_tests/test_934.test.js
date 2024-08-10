test('sleep for 370 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 370));
});