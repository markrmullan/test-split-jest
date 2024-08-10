test('sleep for 763 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 763));
});