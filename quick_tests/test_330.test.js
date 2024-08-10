test('sleep for 482 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 482));
});