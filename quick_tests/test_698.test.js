test('sleep for 491 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 491));
});