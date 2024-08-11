test('sleep for 579 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 579));
});