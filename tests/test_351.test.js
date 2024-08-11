test('sleep for 444 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 444));
});