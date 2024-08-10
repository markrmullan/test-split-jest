test('sleep for 980 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 980));
});