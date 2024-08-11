test('sleep for 22434 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 22434));
});