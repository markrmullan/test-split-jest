test('sleep for 19777 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 19777));
});