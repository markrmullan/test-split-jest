test('sleep for 709 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 709));
});