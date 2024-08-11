test('sleep for 157 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 157));
});