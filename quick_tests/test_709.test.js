test('sleep for 522 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 522));
});