test('sleep for 918 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 918));
});