test('sleep for 392 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 392));
});