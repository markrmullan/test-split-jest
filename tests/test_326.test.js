test('sleep for 971 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 971));
});