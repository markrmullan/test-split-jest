test('sleep for 929 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 929));
});