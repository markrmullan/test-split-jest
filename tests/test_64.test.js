test('sleep for 423 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 423));
});