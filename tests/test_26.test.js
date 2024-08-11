test('sleep for 905 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 905));
});