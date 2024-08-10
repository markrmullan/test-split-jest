test('sleep for 699 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 699));
});