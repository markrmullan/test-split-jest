test('sleep for 951 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 951));
});