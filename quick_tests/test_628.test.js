test('sleep for 591 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 591));
});