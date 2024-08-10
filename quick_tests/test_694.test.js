test('sleep for 585 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 585));
});