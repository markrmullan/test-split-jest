test('sleep for 91 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 91));
});