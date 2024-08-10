test('sleep for 208 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 208));
});