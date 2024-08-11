test('sleep for 415 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 415));
});