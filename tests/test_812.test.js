test('sleep for 587 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 587));
});