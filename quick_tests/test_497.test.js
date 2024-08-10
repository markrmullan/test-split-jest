test('sleep for 609 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 609));
});