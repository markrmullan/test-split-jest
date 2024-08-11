test('sleep for 534 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 534));
});