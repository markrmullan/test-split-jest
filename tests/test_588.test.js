test('sleep for 700 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 700));
});