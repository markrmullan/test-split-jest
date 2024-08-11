test('sleep for 575 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 575));
});