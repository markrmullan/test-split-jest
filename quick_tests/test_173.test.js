test('sleep for 445 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 445));
});