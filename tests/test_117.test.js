test('sleep for 843 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 843));
});