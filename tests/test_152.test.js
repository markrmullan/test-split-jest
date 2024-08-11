test('sleep for 729 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 729));
});