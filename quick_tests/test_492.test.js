test('sleep for 689 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 689));
});