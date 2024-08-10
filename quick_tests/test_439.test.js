test('sleep for 608 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 608));
});