test('sleep for 949 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 949));
});