test('sleep for 985 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 985));
});