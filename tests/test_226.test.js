test('sleep for 805 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 805));
});