test('sleep for 962 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 962));
});