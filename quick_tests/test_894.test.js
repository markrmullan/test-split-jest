test('sleep for 943 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 943));
});