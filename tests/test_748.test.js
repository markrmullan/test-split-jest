test('sleep for 976 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 976));
});