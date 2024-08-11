test('sleep for 800 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 800));
});