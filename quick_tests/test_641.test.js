test('sleep for 695 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 695));
});