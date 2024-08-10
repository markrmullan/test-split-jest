test('sleep for 897 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 897));
});