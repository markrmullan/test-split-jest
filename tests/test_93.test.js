test('sleep for 515 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 515));
});