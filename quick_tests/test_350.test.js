test('sleep for 569 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 569));
});