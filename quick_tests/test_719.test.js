test('sleep for 725 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 725));
});