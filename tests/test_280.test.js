test('sleep for 550 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 550));
});