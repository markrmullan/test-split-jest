test('sleep for 685 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 685));
});