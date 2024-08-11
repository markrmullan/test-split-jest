test('sleep for 807 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 807));
});