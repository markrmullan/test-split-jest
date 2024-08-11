test('sleep for 802 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 802));
});