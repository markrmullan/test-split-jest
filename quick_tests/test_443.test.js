test('sleep for 652 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 652));
});