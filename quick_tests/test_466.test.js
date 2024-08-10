test('sleep for 772 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 772));
});