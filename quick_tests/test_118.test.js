test('sleep for 505 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 505));
});