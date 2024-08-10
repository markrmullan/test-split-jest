test('sleep for 877 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 877));
});