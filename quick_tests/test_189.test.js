test('sleep for 226 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 226));
});