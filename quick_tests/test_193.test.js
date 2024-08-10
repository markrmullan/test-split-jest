test('sleep for 625 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 625));
});