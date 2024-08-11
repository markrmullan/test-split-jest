test('sleep for 65 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 65));
});