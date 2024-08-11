test('sleep for 310 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 310));
});