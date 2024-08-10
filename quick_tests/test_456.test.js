test('sleep for 487 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 487));
});