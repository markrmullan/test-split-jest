test('sleep for 999 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 999));
});