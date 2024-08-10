test('sleep for 563 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 563));
});