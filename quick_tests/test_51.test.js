test('sleep for 782 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 782));
});