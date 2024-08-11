test('sleep for 547 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 547));
});