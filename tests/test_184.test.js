test('sleep for 669 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 669));
});