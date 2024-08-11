test('sleep for 357 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 357));
});