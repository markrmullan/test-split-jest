test('sleep for 508 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 508));
});