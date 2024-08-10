test('sleep for 656 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 656));
});