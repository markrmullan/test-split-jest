test('sleep for 434 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 434));
});