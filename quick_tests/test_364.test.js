test('sleep for 606 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 606));
});