test('sleep for 177 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 177));
});