test('sleep for 780 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 780));
});