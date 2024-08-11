test('sleep for 848 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 848));
});