test('sleep for 952 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 952));
});