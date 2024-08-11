test('sleep for 536 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 536));
});