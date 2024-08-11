test('sleep for 923 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 923));
});