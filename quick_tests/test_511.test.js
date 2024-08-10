test('sleep for 775 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 775));
});