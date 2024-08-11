test('sleep for 282 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 282));
});