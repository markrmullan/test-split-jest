test('sleep for 867 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 867));
});