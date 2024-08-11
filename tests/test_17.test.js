test('sleep for 653 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 653));
});