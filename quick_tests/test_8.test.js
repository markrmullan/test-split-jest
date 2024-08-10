test('sleep for 743 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 743));
});